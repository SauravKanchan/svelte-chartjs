(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.SvelteChartsjs = {}));
}(this, (function (exports) { 'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value') {
                node.value = node[key] = attributes[key];
            }
            else if (descriptors[key] && descriptors[key].set) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function afterUpdate(fn) {
        get_current_component().$$.after_update.push(fn);
    }
    function onDestroy(fn) {
        get_current_component().$$.on_destroy.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function clean($$props, extra_keys) {
      let keys = ["children", "$$scope", "$$slots"].concat(extra_keys);
      const rest = {};
      for (const key of Object.keys($$props)) {
        if (!(keys.includes(key))) {
          rest[key] = $$props[key];
        }
      }
      return rest;
    }

    /* src/Base.svelte generated by Svelte v3.22.3 */

    function create_fragment(ctx) {
    	let canvas;
    	let canvas_levels = [/*props*/ ctx[1]];
    	let canvas_data = {};

    	for (let i = 0; i < canvas_levels.length; i += 1) {
    		canvas_data = assign(canvas_data, canvas_levels[i]);
    	}

    	return {
    		c() {
    			canvas = element("canvas");
    			set_attributes(canvas, canvas_data);
    		},
    		m(target, anchor) {
    			insert(target, canvas, anchor);
    			/*canvas_binding*/ ctx[8](canvas);
    		},
    		p(ctx, [dirty]) {
    			set_attributes(canvas, get_spread_update(canvas_levels, [dirty & /*props*/ 2 && /*props*/ ctx[1]]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(canvas);
    			/*canvas_binding*/ ctx[8](null);
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	const Chart = require("chart.js");

    	let { data = {
    		labels: [],
    		datasets: [{ values: [] }],
    		yMarkers: {},
    		yRegions: []
    	} } = $$props;

    	let { type = "line" } = $$props;
    	let { options = {} } = $$props;
    	let chart = null;
    	let chartRef;
    	let props = clean($$props, ["data", "type", "options"]);

    	onMount(() => {
    		chart = new Chart(chartRef, { type, data, options });
    	});

    	afterUpdate(() => chart.update(data));

    	onDestroy(() => {
    		chart = null;
    	});

    	function canvas_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(0, chartRef = $$value);
    		});
    	}

    	$$self.$set = $$new_props => {
    		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("data" in $$new_props) $$invalidate(2, data = $$new_props.data);
    		if ("type" in $$new_props) $$invalidate(3, type = $$new_props.type);
    		if ("options" in $$new_props) $$invalidate(4, options = $$new_props.options);
    	};

    	$$props = exclude_internal_props($$props);
    	return [chartRef, props, data, type, options, chart, Chart, $$props, canvas_binding];
    }

    class Base extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance, create_fragment, safe_not_equal, { data: 2, type: 3, options: 4 });
    	}
    }

    /* src/Line.svelte generated by Svelte v3.22.3 */

    function create_fragment$1(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "line" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Line extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    	}
    }

    /* src/Radar.svelte generated by Svelte v3.22.3 */

    function create_fragment$2(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "radar" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$2($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Radar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    	}
    }

    /* src/Doughnut.svelte generated by Svelte v3.22.3 */

    function create_fragment$3(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "doughnut" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$3($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Doughnut extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    	}
    }

    /* src/Pie.svelte generated by Svelte v3.22.3 */

    function create_fragment$4(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "pie" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$4($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Pie extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    	}
    }

    /* src/Bar.svelte generated by Svelte v3.22.3 */

    function create_fragment$5(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "bar" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$5($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Bar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    	}
    }

    /* src/HorizontalBar.svelte generated by Svelte v3.22.3 */

    function create_fragment$6(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "horizontalBar" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$6($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class HorizontalBar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    	}
    }

    /* src/Polar.svelte generated by Svelte v3.22.3 */

    function create_fragment$7(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "polarArea" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$7($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Polar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
    	}
    }

    /* src/Bubble.svelte generated by Svelte v3.22.3 */

    function create_fragment$8(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "bubble" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$8($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Bubble extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
    	}
    }

    /* src/Scatter.svelte generated by Svelte v3.22.3 */

    function create_fragment$9(ctx) {
    	let current;
    	const base_spread_levels = [/*$$props*/ ctx[0], { type: "scatter" }];
    	let base_props = {};

    	for (let i = 0; i < base_spread_levels.length; i += 1) {
    		base_props = assign(base_props, base_spread_levels[i]);
    	}

    	const base = new Base({ props: base_props });

    	return {
    		c() {
    			create_component(base.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(base, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const base_changes = (dirty & /*$$props*/ 1)
    			? get_spread_update(base_spread_levels, [get_spread_object(/*$$props*/ ctx[0]), base_spread_levels[1]])
    			: {};

    			base.$set(base_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(base.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(base.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(base, detaching);
    		}
    	};
    }

    function instance$9($$self, $$props, $$invalidate) {
    	$$self.$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Scatter extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
    	}
    }

    exports.Bar = Bar;
    exports.Bubble = Bubble;
    exports.Doughnut = Doughnut;
    exports.HorizontalBar = HorizontalBar;
    exports.Line = Line;
    exports.Pie = Pie;
    exports.Polar = Polar;
    exports.Radar = Radar;
    exports.Scatter = Scatter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
