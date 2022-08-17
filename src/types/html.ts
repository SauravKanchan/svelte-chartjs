/**
 * Adapted from jsx-dom
 * @see https://github.com/proteriax/jsx-dom/blob/be06937ba16908d87bf8aa4372a3583133e02b8a/index.d.ts
 *
 * which was adapted from
 *
 * Adapted from React’s TypeScript definition from DefinitelyTyped.
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string | undefined | null;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined | null;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined | null;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: number | undefined | null;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: number | undefined | null;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: number | undefined | null;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string | undefined | null;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?:
    | boolean
    | 'false'
    | 'true'
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | undefined
    | null;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string | undefined | null;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string | undefined | null;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?:
    | 'none'
    | 'copy'
    | 'execute'
    | 'link'
    | 'move'
    | 'popup'
    | undefined
    | null;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string | undefined | null;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string | undefined | null;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: boolean | 'false' | 'true' | undefined | null;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
    | undefined
    | null;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?:
    | boolean
    | 'false'
    | 'true'
    | 'grammar'
    | 'spelling'
    | undefined
    | null;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string | undefined | null;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string | undefined | null;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string | undefined | null;
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: number | undefined | null;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite' | undefined | null;
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: boolean | 'false' | 'true' | undefined | null;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: boolean | 'false' | 'true' | undefined | null;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: boolean | 'false' | 'true' | undefined | null;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical' | undefined | null;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string | undefined | null;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string | undefined | null;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: number | undefined | null;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined | null;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?:
    | 'additions'
    | 'additions removals'
    | 'additions text'
    | 'all'
    | 'removals'
    | 'removals additions'
    | 'removals text'
    | 'text'
    | 'text additions'
    | 'text removals'
    | undefined
    | null;
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: boolean | 'false' | 'true' | undefined | null;
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string | undefined | null;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: number | undefined | null;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: number | undefined | null;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: number | undefined | null;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: boolean | 'false' | 'true' | undefined | null;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: number | undefined | null;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?:
    | 'none'
    | 'ascending'
    | 'descending'
    | 'other'
    | undefined
    | null;
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: number | undefined | null;
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: number | undefined | null;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: number | undefined | null;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string | undefined | null;
}

export interface HTMLAttributes extends AriaAttributes {
  // Standard HTML Attributes
  class?: string | undefined | null;
  dataset?: object | undefined | null; // eslint-disable-line
  accept?: string | undefined | null;
  acceptcharset?: string | undefined | null;
  accesskey?: string | undefined | null;
  action?: string | undefined | null;
  allow?: string | undefined | null;
  allowfullscreen?: boolean | undefined | null;
  allowtransparency?: boolean | undefined | null;
  allowpaymentrequest?: boolean | undefined | null;
  alt?: string | undefined | null;
  as?: string | undefined | null;
  async?: boolean | undefined | null;
  autocomplete?: string | undefined | null;
  autofocus?: boolean | undefined | null;
  autoplay?: boolean | undefined | null;
  capture?: 'environment' | 'user' | boolean | undefined | null;
  cellpadding?: number | string | undefined | null;
  cellspacing?: number | string | undefined | null;
  charset?: string | undefined | null;
  challenge?: string | undefined | null;
  checked?: boolean | undefined | null;
  cite?: string | undefined | null;
  classid?: string | undefined | null;
  cols?: number | undefined | null;
  colspan?: number | undefined | null;
  content?: string | undefined | null;
  contenteditable?: 'true' | 'false' | boolean | undefined | null;

  // Doesn't work when used as HTML attribute
  /**
   * Elements with the contenteditable attribute support innerHTML and textContent bindings.
   */
  innerHTML?: string | undefined | null;
  // Doesn't work when used as HTML attribute
  /**
   * Elements with the contenteditable attribute support innerHTML and textContent bindings.
   */

  textContent?: string | undefined | null;

  contextmenu?: string | undefined | null;
  controls?: boolean | undefined | null;
  coords?: string | undefined | null;
  crossorigin?: string | undefined | null;
  currenttime?: number | undefined | null;
  decoding?: 'async' | 'sync' | 'auto' | undefined | null;
  data?: string | undefined | null;
  datetime?: string | undefined | null;
  default?: boolean | undefined | null;
  defaultmuted?: boolean | undefined | null;
  defaultplaybackrate?: number | undefined | null;
  defer?: boolean | undefined | null;
  dir?: string | undefined | null;
  dirname?: string | undefined | null;
  disabled?: boolean | undefined | null;
  download?: any | undefined | null;
  draggable?: boolean | 'true' | 'false' | undefined | null;
  enctype?: string | undefined | null;
  enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
    | undefined
    | null;
  for?: string | undefined | null;
  form?: string | undefined | null;
  formaction?: string | undefined | null;
  formenctype?: string | undefined | null;
  formmethod?: string | undefined | null;
  formnovalidate?: boolean | undefined | null;
  formtarget?: string | undefined | null;
  frameborder?: number | string | undefined | null;
  headers?: string | undefined | null;
  height?: number | string | undefined | null;
  hidden?: boolean | undefined | null;
  high?: number | undefined | null;
  href?: string | undefined | null;
  hreflang?: string | undefined | null;
  htmlfor?: string | undefined | null;
  httpequiv?: string | undefined | null;
  id?: string | undefined | null;
  inputmode?: string | undefined | null;
  integrity?: string | undefined | null;
  is?: string | undefined | null;
  ismap?: boolean | undefined | null;
  keyparams?: string | undefined | null;
  keytype?: string | undefined | null;
  kind?: string | undefined | null;
  label?: string | undefined | null;
  lang?: string | undefined | null;
  list?: string | undefined | null;
  loading?: string | undefined | null;
  loop?: boolean | undefined | null;
  low?: number | undefined | null;
  manifest?: string | undefined | null;
  marginheight?: number | undefined | null;
  marginwidth?: number | undefined | null;
  max?: number | string | undefined | null;
  maxlength?: number | undefined | null;
  media?: string | undefined | null;
  mediagroup?: string | undefined | null;
  method?: string | undefined | null;
  min?: number | string | undefined | null;
  minlength?: number | undefined | null;
  multiple?: boolean | undefined | null;
  muted?: boolean | undefined | null;
  name?: string | undefined | null;
  nonce?: string | undefined | null;
  novalidate?: boolean | undefined | null;
  open?: boolean | undefined | null;
  optimum?: number | undefined | null;
  part?: string | undefined | null;
  pattern?: string | undefined | null;
  placeholder?: string | undefined | null;
  playsinline?: boolean | undefined | null;
  ping?: string | undefined | null;
  poster?: string | undefined | null;
  preload?: string | undefined | null;
  radiogroup?: string | undefined | null;
  readonly?: boolean | undefined | null;
  referrerpolicy?: string | undefined | null;
  rel?: string | undefined | null;
  required?: boolean | undefined | null;
  reversed?: boolean | undefined | null;
  role?: string | undefined | null;
  rows?: number | undefined | null;
  rowspan?: number | undefined | null;
  sandbox?: string | undefined | null;
  scope?: string | undefined | null;
  scoped?: boolean | undefined | null;
  scrolling?: string | undefined | null;
  seamless?: boolean | undefined | null;
  selected?: boolean | undefined | null;
  shape?: string | undefined | null;
  size?: number | undefined | null;
  sizes?: string | undefined | null;
  slot?: string | undefined | null;
  span?: number | undefined | null;
  spellcheck?: boolean | 'true' | 'false' | undefined | null;
  src?: string | undefined | null;
  srcdoc?: string | undefined | null;
  srclang?: string | undefined | null;
  srcset?: string | undefined | null;
  start?: number | undefined | null;
  step?: number | string | undefined | null;
  style?: string | undefined | null;
  summary?: string | undefined | null;
  tabindex?: number | undefined | null;
  target?: string | undefined | null;
  title?: string | undefined | null;
  translate?: 'yes' | 'no' | '' | undefined | null;
  type?: string | undefined | null;
  usemap?: string | undefined | null;
  value?: any | undefined | null;
  /**
   * a value between 0 and 1
   */
  volume?: number | undefined | null;
  width?: number | string | undefined | null;
  wmode?: string | undefined | null;
  wrap?: string | undefined | null;

  // RDFa Attributes
  about?: string | undefined | null;
  datatype?: string | undefined | null;
  inlist?: any | undefined | null;
  prefix?: string | undefined | null;
  property?: string | undefined | null;
  resource?: string | undefined | null;
  typeof?: string | undefined | null;
  vocab?: string | undefined | null;

  // Non-standard Attributes
  autocapitalize?: string | undefined | null;
  autocorrect?: string | undefined | null;
  autosave?: string | undefined | null;
  color?: string | undefined | null;
  controlslist?:
    | 'nodownload'
    | 'nofullscreen'
    | 'noplaybackrate'
    | 'noremoteplayback';
  inert?: boolean | undefined | null;
  itemprop?: string | undefined | null;
  itemscope?: boolean | undefined | null;
  itemtype?: string | undefined | null;
  itemid?: string | undefined | null;
  itemref?: string | undefined | null;
  results?: number | undefined | null;
  security?: string | undefined | null;
  unselectable?: boolean | undefined | null;
}
