export function clean($$props, extra_keys) {
  let keys = ["children", "$$scope", "$$slots"].concat(extra_keys)
  const rest = {};
  for (const key of Object.keys($$props)) {
    if (!(keys.includes(key))) {
      rest[key] = $$props[key];
    }
  }
  return rest;
}
