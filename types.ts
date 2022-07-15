declare global {

  /**
   * This module contains all the types for various HTML elements and their attributes.
   *
   * I started by grabbing nearly all of the types from React 17's type definitions listed below.
   * Because this is meant to never runs in the browser, we don't have actual event handler types,
   * like React and others. Instead, all event handlers are optional strings, so you can create
   * a global function like `window.handleThing = () => { ... }` and then bind it to an
   * element with `<button onclick="handleThing">Click</button>`.
   *
   * Next, attribute names were converted back into their canonical form, so for example,
   * `accessKey` was changed to `accesskey` to match the HTML attribute, not the DOM property.
   *
   * Links:
   * * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts
   * * https://developer.mozilla.org/en-US/docs/Web/HTML/Element
   */
  namespace JSX {
    type Booleanish = boolean | "true" | "false";
    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
      | "alert"
      | "alertdialog"
      | "application"
      | "article"
      | "banner"
      | "button"
      | "cell"
      | "checkbox"
      | "columnheader"
      | "combobox"
      | "complementary"
      | "contentinfo"
      | "definition"
      | "dialog"
      | "directory"
      | "document"
      | "feed"
      | "figure"
      | "form"
      | "grid"
      | "gridcell"
      | "group"
      | "heading"
      | "img"
      | "link"
      | "list"
      | "listbox"
      | "listitem"
      | "log"
      | "main"
      | "marquee"
      | "math"
      | "menu"
      | "menubar"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "navigation"
      | "none"
      | "note"
      | "option"
      | "presentation"
      | "progressbar"
      | "radio"
      | "radiogroup"
      | "region"
      | "row"
      | "rowgroup"
      | "rowheader"
      | "scrollbar"
      | "search"
      | "searchbox"
      | "separator"
      | "slider"
      | "spinbutton"
      | "status"
      | "switch"
      | "tab"
      | "table"
      | "tablist"
      | "tabpanel"
      | "term"
      | "textbox"
      | "timer"
      | "toolbar"
      | "tooltip"
      | "tree"
      | "treegrid"
      | "treeitem"
      | (string & EmptyObject);

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    export interface AriaAttributes {
      /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
      "aria-activedescendant"?: string | undefined;
      /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
      "aria-atomic"?: Booleanish | undefined;
      /**
       * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
       * presented if they are made.
       */
      "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
      /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
      "aria-busy"?: Booleanish | undefined;
      /**
       * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
       * @see aria-pressed @see aria-selected.
       */
      "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
      /**
       * Defines the total number of columns in a table, grid, or treegrid.
       * @see aria-colindex.
       */
      "aria-colcount"?: number | undefined;
      /**
       * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
       * @see aria-colcount @see aria-colspan.
       */
      "aria-colindex"?: number | undefined;
      /**
       * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
       * @see aria-colindex @see aria-rowspan.
       */
      "aria-colspan"?: number | undefined;
      /**
       * Identifies the element (or elements) whose contents or presence are controlled by the current element.
       * @see aria-owns.
       */
      "aria-controls"?: string | undefined;
      /** Indicates the element that represents the current item within a container or set of related elements. */
      "aria-current"?:
        | boolean
        | "false"
        | "true"
        | "page"
        | "step"
        | "location"
        | "date"
        | "time"
        | undefined;
      /**
       * Identifies the element (or elements) that describes the object.
       * @see aria-labelledby
       */
      "aria-describedby"?: string | undefined;
      /**
       * Identifies the element that provides a detailed, extended description for the object.
       * @see aria-describedby.
       */
      "aria-details"?: string | undefined;
      /**
       * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
       * @see aria-hidden @see aria-readonly.
       */
      "aria-disabled"?: Booleanish | undefined;
      /**
       * Indicates what functions can be performed when a dragged object is released on the drop target.
       * @deprecated in ARIA 1.1
       */
      "aria-dropeffect"?:
        | "none"
        | "copy"
        | "execute"
        | "link"
        | "move"
        | "popup"
        | undefined;
      /**
       * Identifies the element that provides an error message for the object.
       * @see aria-invalid @see aria-describedby.
       */
      "aria-errormessage"?: string | undefined;
      /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
      "aria-expanded"?: Booleanish | undefined;
      /**
       * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
       * allows assistive technology to override the general default of reading in document source order.
       */
      "aria-flowto"?: string | undefined;
      /**
       * Indicates an element's "grabbed" state in a drag-and-drop operation.
       * @deprecated in ARIA 1.1
       */
      "aria-grabbed"?: Booleanish | undefined;
      /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
      "aria-haspopup"?:
        | boolean
        | "false"
        | "true"
        | "menu"
        | "listbox"
        | "tree"
        | "grid"
        | "dialog"
        | undefined;
      /**
       * Indicates whether the element is exposed to an accessibility API.
       * @see aria-disabled.
       */
      "aria-hidden"?: Booleanish | undefined;
      /**
       * Indicates the entered value does not conform to the format expected by the application.
       * @see aria-errormessage.
       */
      "aria-invalid"?:
        | boolean
        | "false"
        | "true"
        | "grammar"
        | "spelling"
        | undefined;
      /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
      "aria-keyshortcuts"?: string | undefined;
      /**
       * Defines a string value that labels the current element.
       * @see aria-labelledby.
       */
      "aria-label"?: string | undefined;
      /**
       * Identifies the element (or elements) that labels the current element.
       * @see aria-describedby.
       */
      "aria-labelledby"?: string | undefined;
      /** Defines the hierarchical level of an element within a structure. */
      "aria-level"?: number | undefined;
      /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      /** Indicates whether an element is modal when displayed. */
      "aria-modal"?: Booleanish | undefined;
      /** Indicates whether a text box accepts multiple lines of input or only a single line. */
      "aria-multiline"?: Booleanish | undefined;
      /** Indicates that the user may select more than one item from the current selectable descendants. */
      "aria-multiselectable"?: Booleanish | undefined;
      /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      /**
       * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
       * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
       * @see aria-controls.
       */
      "aria-owns"?: string | undefined;
      /**
       * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
       * A hint could be a sample value or a brief description of the expected format.
       */
      "aria-placeholder"?: string | undefined;
      /**
       * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
       * @see aria-setsize.
       */
      "aria-posinset"?: number | undefined;
      /**
       * Indicates the current "pressed" state of toggle buttons.
       * @see aria-checked @see aria-selected.
       */
      "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
      /**
       * Indicates that the element is not editable, but is otherwise operable.
       * @see aria-disabled.
       */
      "aria-readonly"?: Booleanish | undefined;
      /**
       * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
       * @see aria-atomic.
       */
      "aria-relevant"?:
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text"
        | "text additions"
        | "text removals"
        | undefined;
      /** Indicates that user input is required on the element before a form may be submitted. */
      "aria-required"?: Booleanish | undefined;
      /** Defines a human-readable, author-localized description for the role of an element. */
      "aria-roledescription"?: string | undefined;
      /**
       * Defines the total number of rows in a table, grid, or treegrid.
       * @see aria-rowindex.
       */
      "aria-rowcount"?: number | undefined;
      /**
       * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
       * @see aria-rowcount @see aria-rowspan.
       */
      "aria-rowindex"?: number | undefined;
      /**
       * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
       * @see aria-rowindex @see aria-colspan.
       */
      "aria-rowspan"?: number | undefined;
      /**
       * Indicates the current "selected" state of various widgets.
       * @see aria-checked @see aria-pressed.
       */
      "aria-selected"?: Booleanish | undefined;
      /**
       * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
       * @see aria-posinset.
       */
      "aria-setsize"?: number | undefined;
      /** Indicates if items in a table or grid are sorted in ascending or descending order. */
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      /** Defines the maximum allowed value for a range widget. */
      "aria-valuemax"?: number | undefined;
      /** Defines the minimum allowed value for a range widget. */
      "aria-valuemin"?: number | undefined;
      /**
       * Defines the current value for a range widget.
       * @see aria-valuetext.
       */
      "aria-valuenow"?: number | undefined;
      /** Defines the human readable text alternative of aria-valuenow for a range widget. */
      "aria-valuetext"?: string | undefined;
    }
    export interface DOMAttributes {
      onCopy?: string | undefined;
      onCopyCapture?: string | undefined;
      onCut?: string | undefined;
      onCutCapture?: string | undefined;
      onPaste?: string | undefined;
      onPasteCapture?: string | undefined;
      onCompositionEnd?: string | undefined;
      onCompositionEndCapture?: string | undefined;
      onCompositionStart?: string | undefined;
      onCompositionStartCapture?: string | undefined;
      onCompositionUpdate?: string | undefined;
      onCompositionUpdateCapture?: string | undefined;
      onFocus?: string | undefined;
      onFocusCapture?: string | undefined;
      onBlur?: string | undefined;
      onBlurCapture?: string | undefined;
      onChange?: string | undefined;
      onChangeCapture?: string | undefined;
      onBeforeInput?: string | undefined;
      onBeforeInputCapture?: string | undefined;
      onInput?: string | undefined;
      onInputCapture?: string | undefined;
      onReset?: string | undefined;
      onResetCapture?: string | undefined;
      onSubmit?: string | undefined;
      onSubmitCapture?: string | undefined;
      onInvalid?: string | undefined;
      onInvalidCapture?: string | undefined;
      onLoad?: string | undefined;
      onLoadCapture?: string | undefined;
      onError?: string | undefined;
      onErrorCapture?: string | undefined;
      onKeyDown?: string | undefined;
      onKeyDownCapture?: string | undefined;
      /** @deprecated */
      onKeyPress?: string | undefined;
      /** @deprecated */
      onKeyPressCapture?: string | undefined;
      onKeyUp?: string | undefined;
      onKeyUpCapture?: string | undefined;
      onAbort?: string | undefined;
      onAbortCapture?: string | undefined;
      onCanPlay?: string | undefined;
      onCanPlayCapture?: string | undefined;
      onCanPlayThrough?: string | undefined;
      onCanPlayThroughCapture?: string | undefined;
      onDurationChange?: string | undefined;
      onDurationChangeCapture?: string | undefined;
      onEmptied?: string | undefined;
      onEmptiedCapture?: string | undefined;
      onEncrypted?: string | undefined;
      onEncryptedCapture?: string | undefined;
      onEnded?: string | undefined;
      onEndedCapture?: string | undefined;
      onLoadedData?: string | undefined;
      onLoadedDataCapture?: string | undefined;
      onLoadedMetadata?: string | undefined;
      onLoadedMetadataCapture?: string | undefined;
      onLoadStart?: string | undefined;
      onLoadStartCapture?: string | undefined;
      onPause?: string | undefined;
      onPauseCapture?: string | undefined;
      onPlay?: string | undefined;
      onPlayCapture?: string | undefined;
      onPlaying?: string | undefined;
      onPlayingCapture?: string | undefined;
      onProgress?: string | undefined;
      onProgressCapture?: string | undefined;
      onRateChange?: string | undefined;
      onRateChangeCapture?: string | undefined;
      onSeeked?: string | undefined;
      onSeekedCapture?: string | undefined;
      onSeeking?: string | undefined;
      onSeekingCapture?: string | undefined;
      onStalled?: string | undefined;
      onStalledCapture?: string | undefined;
      onSuspend?: string | undefined;
      onSuspendCapture?: string | undefined;
      onTimeUpdate?: string | undefined;
      onTimeUpdateCapture?: string | undefined;
      onVolumeChange?: string | undefined;
      onVolumeChangeCapture?: string | undefined;
      onWaiting?: string | undefined;
      onWaitingCapture?: string | undefined;
      onAuxClick?: string | undefined;
      onAuxClickCapture?: string | undefined;
      onClick?: string | undefined;
      onClickCapture?: string | undefined;
      onContextMenu?: string | undefined;
      onContextMenuCapture?: string | undefined;
      onDoubleClick?: string | undefined;
      onDoubleClickCapture?: string | undefined;
      onDrag?: string | undefined;
      onDragCapture?: string | undefined;
      onDragEnd?: string | undefined;
      onDragEndCapture?: string | undefined;
      onDragEnter?: string | undefined;
      onDragEnterCapture?: string | undefined;
      onDragExit?: string | undefined;
      onDragExitCapture?: string | undefined;
      onDragLeave?: string | undefined;
      onDragLeaveCapture?: string | undefined;
      onDragOver?: string | undefined;
      onDragOverCapture?: string | undefined;
      onDragStart?: string | undefined;
      onDragStartCapture?: string | undefined;
      onDrop?: string | undefined;
      onDropCapture?: string | undefined;
      onMouseDown?: string | undefined;
      onMouseDownCapture?: string | undefined;
      onMouseEnter?: string | undefined;
      onMouseLeave?: string | undefined;
      onMouseMove?: string | undefined;
      onMouseMoveCapture?: string | undefined;
      onMouseOut?: string | undefined;
      onMouseOutCapture?: string | undefined;
      onMouseOver?: string | undefined;
      onMouseOverCapture?: string | undefined;
      onMouseUp?: string | undefined;
      onMouseUpCapture?: string | undefined;
      onSelect?: string | undefined;
      onSelectCapture?: string | undefined;
      onTouchCancel?: string | undefined;
      onTouchCancelCapture?: string | undefined;
      onTouchEnd?: string | undefined;
      onTouchEndCapture?: string | undefined;
      onTouchMove?: string | undefined;
      onTouchMoveCapture?: string | undefined;
      onTouchStart?: string | undefined;
      onTouchStartCapture?: string | undefined;
      onPointerDown?: string | undefined;
      onPointerDownCapture?: string | undefined;
      onPointerMove?: string | undefined;
      onPointerMoveCapture?: string | undefined;
      onPointerUp?: string | undefined;
      onPointerUpCapture?: string | undefined;
      onPointerCancel?: string | undefined;
      onPointerCancelCapture?: string | undefined;
      onPointerEnter?: string | undefined;
      onPointerEnterCapture?: string | undefined;
      onPointerLeave?: string | undefined;
      onPointerLeaveCapture?: string | undefined;
      onPointerOver?: string | undefined;
      onPointerOverCapture?: string | undefined;
      onPointerOut?: string | undefined;
      onPointerOutCapture?: string | undefined;
      onGotPointerCapture?: string | undefined;
      onGotPointerCaptureCapture?: string | undefined;
      onLostPointerCapture?: string | undefined;
      onLostPointerCaptureCapture?: string | undefined;
      onScroll?: string | undefined;
      onScrollCapture?: string | undefined;
      onWheel?: string | undefined;
      onWheelCapture?: string | undefined;
      onAnimationStart?: string | undefined;
      onAnimationStartCapture?: string | undefined;
      onAnimationEnd?: string | undefined;
      onAnimationEndCapture?: string | undefined;
      onAnimationIteration?: string | undefined;
      onAnimationIterationCapture?: string | undefined;
      onTransitionEnd?: string | undefined;
      onTransitionEndCapture?: string | undefined;
    }

    export interface HTMLAttributes extends AriaAttributes, DOMAttributes {
      // Standard HTML Attributes
      accesskey?: string | undefined;
      class?: string | undefined;
      contenteditable?: Booleanish | "inherit" | undefined;
      contextmenu?: string | undefined;
      dir?: string | undefined;
      draggable?: Booleanish | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      inert?: boolean | undefined;
      lang?: string | undefined;
      slot?: string | undefined;
      spellcheck?: Booleanish | undefined;
      // Make this typesafe using a CSSProperties type
      style?: string | undefined;
      tabindex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;

      // Unknown
      radioGroup?: string | undefined;

      // WAI-ARIA
      role?: AriaRole | undefined;

      // RDFa Attributes
      about?: string | undefined;
      datatype?: string | undefined;
      inlist?: unknown;
      prefix?: string | undefined;
      property?: string | undefined;
      resource?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;

      // Non-standard Attributes
      "auto-capitalize"?: string | undefined;
      "auto-correct"?: string | undefined;
      "auto-save"?: string | undefined;
      color?: string | undefined;
      itemprop?: string | undefined;
      itemscope?: boolean | undefined;
      itemtype?: string | undefined;
      itemid?: string | undefined;
      itemref?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;

      // Living Standard
      /**
       * Hints at the type of data that might be entered by the user while editing the element or its contents
       * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
       */
      inputmode?:
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
        | undefined;

      /**
       * Specify that a standard HTML element should behave like a defined custom built-in element
       * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
       */
      is?: string | undefined;
      // Standard HTML Attributes
      accept?: string | undefined;
      "accept-charset"?: string | undefined;
      action?: string | undefined;
      allowfullscreen?: boolean | undefined;
      allowtransparency?: boolean | undefined;
      alt?: string | undefined;
      as?: string | undefined;
      async?: boolean | undefined;
      autocomplete?: string | undefined;
      autofocus?: boolean | undefined;
      autoplay?: boolean | undefined;
      capture?: boolean | "user" | "environment" | undefined;
      cellpadding?: number | string | undefined;
      cellspacing?: number | string | undefined;
      charset?: string | undefined;
      challenge?: string | undefined;
      checked?: boolean | undefined;
      cite?: string | undefined;
      classid?: string | undefined;
      cols?: number | undefined;
      colspan?: number | undefined;
      content?: string | undefined;
      controls?: boolean | undefined;
      coords?: string | undefined;
      crossorigin?: string | undefined;
      data?: string | undefined;
      datetime?: string | undefined;
      default?: boolean | undefined;
      defer?: boolean | undefined;
      disabled?: boolean | undefined;
      download?: unknown;
      enctype?: string | undefined;
      form?: string | undefined;
      formaction?: string | undefined;
      formenctype?: string | undefined;
      formmethod?: string | undefined;
      formnovalidate?: boolean | undefined;
      formtarget?: string | undefined;
      frameborder?: number | string | undefined;
      headers?: string | undefined;
      height?: number | string | undefined;
      high?: number | undefined;
      href?: string | undefined;
      hreflang?: string | undefined;
      for?: string | undefined;
      "http-equiv"?: string | undefined;
      integrity?: string | undefined;
      keyparams?: string | undefined;
      keytype?: string | undefined;
      kind?: string | undefined;
      label?: string | undefined;
      list?: string | undefined;
      loop?: boolean | undefined;
      low?: number | undefined;
      manifest?: string | undefined;
      marginheight?: number | undefined;
      marginwidth?: number | undefined;
      max?: number | string | undefined;
      maxlength?: number | undefined;
      media?: string | undefined;
      mediagroup?: string | undefined;
      method?: string | undefined;
      min?: number | string | undefined;
      minlength?: number | undefined;
      multiple?: boolean | undefined;
      muted?: boolean | undefined;
      name?: string | undefined;
      nonce?: string | undefined;
      novalidate?: boolean | undefined;
      open?: boolean | undefined;
      optimum?: number | undefined;
      pattern?: string | undefined;
      placeholder?: string | undefined;
      playsinline?: boolean | undefined;
      poster?: string | undefined;
      preload?: string | undefined;
      readonly?: boolean | undefined;
      rel?: string | undefined;
      required?: boolean | undefined;
      reversed?: boolean | undefined;
      rows?: number | undefined;
      rowspan?: number | undefined;
      sandbox?: string | undefined;
      scope?: string | undefined;
      scoped?: boolean | undefined;
      scrolling?: string | undefined;
      seamless?: boolean | undefined;
      selected?: boolean | undefined;
      shape?: string | undefined;
      size?: number | undefined;
      sizes?: string | undefined;
      span?: number | undefined;
      src?: string | undefined;
      srcdoc?: string | undefined;
      srclang?: string | undefined;
      srcset?: string | undefined;
      start?: number | undefined;
      step?: number | string | undefined;
      summary?: string | undefined;
      target?: string | undefined;
      type?: string | undefined;
      usemap?: string | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
      width?: number | string | undefined;
      wmode?: string | undefined;
      wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
      | ""
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";

    type HTMLAttributeAnchorTarget =
      | "_self"
      | "_blank"
      | "_parent"
      | "_top";

    interface AnchorHTMLAttributes extends HTMLAttributes {
      download?: unknown;
      href?: string | undefined;
      hrefLang?: string | undefined;
      media?: string | undefined;
      ping?: string | undefined;
      rel?: string | undefined;
      target?: HTMLAttributeAnchorTarget | undefined;
      type?: string | undefined;
      referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    // deno-lint-ignore no-empty-interface
    interface AudioHTMLAttributes extends MediaHTMLAttributes {}

    interface AreaHTMLAttributes extends HTMLAttributes {
      alt?: string | undefined;
      coords?: string | undefined;
      download?: unknown;
      href?: string | undefined;
      hrefLang?: string | undefined;
      media?: string | undefined;
      referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
      rel?: string | undefined;
      shape?: string | undefined;
      target?: string | undefined;
    }

    interface BaseHTMLAttributes extends HTMLAttributes {
      href?: string | undefined;
      target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes extends HTMLAttributes {
      cite?: string | undefined;
    }

    interface ButtonHTMLAttributes extends HTMLAttributes {
      autoFocus?: boolean | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      formAction?: string | undefined;
      formEncType?: string | undefined;
      formMethod?: string | undefined;
      formNoValidate?: boolean | undefined;
      formTarget?: string | undefined;
      name?: string | undefined;
      type?: "submit" | "reset" | "button" | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface CanvasHTMLAttributes extends HTMLAttributes {
      height?: number | string | undefined;
      width?: number | string | undefined;
    }

    interface ColHTMLAttributes extends HTMLAttributes {
      span?: number | undefined;
      width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes extends HTMLAttributes {
      span?: number | undefined;
    }

    interface DataHTMLAttributes extends HTMLAttributes {
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface DetailsHTMLAttributes extends HTMLAttributes {
      open?: boolean | undefined;
      onToggle?: string | undefined;
    }

    interface DelHTMLAttributes extends HTMLAttributes {
      cite?: string | undefined;
      dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes extends HTMLAttributes {
      onCancel?: string | undefined;
      onClose?: string | undefined;
      open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes extends HTMLAttributes {
      height?: number | string | undefined;
      src?: string | undefined;
      type?: string | undefined;
      width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes extends HTMLAttributes {
      disabled?: boolean | undefined;
      form?: string | undefined;
      name?: string | undefined;
    }

    interface FormHTMLAttributes extends HTMLAttributes {
      acceptCharset?: string | undefined;
      action?: string | undefined;
      autoComplete?: string | undefined;
      encType?: string | undefined;
      method?: string | undefined;
      name?: string | undefined;
      noValidate?: boolean | undefined;
      target?: string | undefined;
    }

    interface HtmlHTMLAttributes extends HTMLAttributes {
      manifest?: string | undefined;
    }

    interface IframeHTMLAttributes extends HTMLAttributes {
      allow?: string | undefined;
      allowFullScreen?: boolean | undefined;
      allowTransparency?: boolean | undefined;
      /** @deprecated */
      frameBorder?: number | string | undefined;
      height?: number | string | undefined;
      loading?: "eager" | "lazy" | undefined;
      /** @deprecated */
      marginHeight?: number | undefined;
      /** @deprecated */
      marginWidth?: number | undefined;
      name?: string | undefined;
      referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
      sandbox?: string | undefined;
      /** @deprecated */
      scrolling?: string | undefined;
      seamless?: boolean | undefined;
      src?: string | undefined;
      srcDoc?: string | undefined;
      width?: number | string | undefined;
    }

    interface ImgHTMLAttributes extends HTMLAttributes {
      alt?: string | undefined;
      crossorigin?: "anonymous" | "use-credentials" | "" | undefined;
      decoding?: "async" | "auto" | "sync" | undefined;
      height?: number | string | undefined;
      loading?: "eager" | "lazy" | undefined;
      referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
      sizes?: string | undefined;
      src?: string | undefined;
      srcset?: string | undefined;
      usemap?: string | undefined;
      width?: number | string | undefined;
    }

    interface InsHTMLAttributes extends HTMLAttributes {
      cite?: string | undefined;
      dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "password"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "submit"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week"
      | (string & EmptyObject);

    interface InputHTMLAttributes extends HTMLAttributes {
      accept?: string | undefined;
      alt?: string | undefined;
      autoComplete?: string | undefined;
      autoFocus?: boolean | undefined;
      capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
      checked?: boolean | undefined;
      crossOrigin?: string | undefined;
      disabled?: boolean | undefined;
      enterKeyHint?:
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "search"
        | "send"
        | undefined;
      form?: string | undefined;
      formAction?: string | undefined;
      formEncType?: string | undefined;
      formMethod?: string | undefined;
      formNoValidate?: boolean | undefined;
      formTarget?: string | undefined;
      height?: number | string | undefined;
      list?: string | undefined;
      max?: number | string | undefined;
      maxLength?: number | undefined;
      min?: number | string | undefined;
      minLength?: number | undefined;
      multiple?: boolean | undefined;
      name?: string | undefined;
      pattern?: string | undefined;
      placeholder?: string | undefined;
      readOnly?: boolean | undefined;
      required?: boolean | undefined;
      size?: number | undefined;
      src?: string | undefined;
      step?: number | string | undefined;
      type?: HTMLInputTypeAttribute | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
      width?: number | string | undefined;
      onChange?: string | undefined;
    }

    interface KeygenHTMLAttributes extends HTMLAttributes {
      autoFocus?: boolean | undefined;
      challenge?: string | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      keyType?: string | undefined;
      keyParams?: string | undefined;
      name?: string | undefined;
    }

    interface LabelHTMLAttributes extends HTMLAttributes {
      form?: string | undefined;
      htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes extends HTMLAttributes {
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface LinkHTMLAttributes extends HTMLAttributes {
      as?: string | undefined;
      crossOrigin?: string | undefined;
      href?: string | undefined;
      hrefLang?: string | undefined;
      integrity?: string | undefined;
      media?: string | undefined;
      imageSrcSet?: string | undefined;
      referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
      rel?: string | undefined;
      sizes?: string | undefined;
      type?: string | undefined;
      charSet?: string | undefined;
    }

    interface MapHTMLAttributes extends HTMLAttributes {
      name?: string | undefined;
    }

    interface MenuHTMLAttributes extends HTMLAttributes {
      type?: string | undefined;
    }

    interface MediaHTMLAttributes extends HTMLAttributes {
      autoPlay?: boolean | undefined;
      controls?: boolean | undefined;
      controlsList?: string | undefined;
      crossOrigin?: string | undefined;
      loop?: boolean | undefined;
      mediaGroup?: string | undefined;
      muted?: boolean | undefined;
      playsInline?: boolean | undefined;
      preload?: string | undefined;
      src?: string | undefined;
    }

    interface MetaHTMLAttributes extends HTMLAttributes {
      charSet?: string | undefined;
      content?: string | undefined;
      httpEquiv?: string | undefined;
      name?: string | undefined;
      media?: string | undefined;
    }

    interface MeterHTMLAttributes extends HTMLAttributes {
      form?: string | undefined;
      high?: number | undefined;
      low?: number | undefined;
      max?: number | string | undefined;
      min?: number | string | undefined;
      optimum?: number | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface QuoteHTMLAttributes extends HTMLAttributes {
      cite?: string | undefined;
    }

    interface ObjectHTMLAttributes extends HTMLAttributes {
      classID?: string | undefined;
      data?: string | undefined;
      form?: string | undefined;
      height?: number | string | undefined;
      name?: string | undefined;
      type?: string | undefined;
      useMap?: string | undefined;
      width?: number | string | undefined;
      wmode?: string | undefined;
    }

    interface OlHTMLAttributes extends HTMLAttributes {
      reversed?: boolean | undefined;
      start?: number | undefined;
      type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes extends HTMLAttributes {
      disabled?: boolean | undefined;
      label?: string | undefined;
    }

    interface OptionHTMLAttributes extends HTMLAttributes {
      disabled?: boolean | undefined;
      label?: string | undefined;
      selected?: boolean | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface OutputHTMLAttributes extends HTMLAttributes {
      form?: string | undefined;
      htmlFor?: string | undefined;
      name?: string | undefined;
    }

    interface ParamHTMLAttributes extends HTMLAttributes {
      name?: string | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ProgressHTMLAttributes extends HTMLAttributes {
      max?: number | string | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface SlotHTMLAttributes extends HTMLAttributes {
      name?: string | undefined;
    }

    interface ScriptHTMLAttributes extends HTMLAttributes {
      async?: boolean | undefined;
      /** @deprecated */
      charSet?: string | undefined;
      crossOrigin?: string | undefined;
      defer?: boolean | undefined;
      integrity?: string | undefined;
      noModule?: boolean | undefined;
      nonce?: string | undefined;
      referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
      src?: string | undefined;
      type?: string | undefined;
    }

    interface SelectHTMLAttributes extends HTMLAttributes {
      autoComplete?: string | undefined;
      autoFocus?: boolean | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      multiple?: boolean | undefined;
      name?: string | undefined;
      required?: boolean | undefined;
      size?: number | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
      onChange?: string | undefined;
    }

    interface SourceHTMLAttributes extends HTMLAttributes {
      height?: number | string | undefined;
      media?: string | undefined;
      sizes?: string | undefined;
      src?: string | undefined;
      srcSet?: string | undefined;
      type?: string | undefined;
      width?: number | string | undefined;
    }

    interface StyleHTMLAttributes extends HTMLAttributes {
      media?: string | undefined;
      nonce?: string | undefined;
      scoped?: boolean | undefined;
      type?: string | undefined;
    }

    interface TableHTMLAttributes extends HTMLAttributes {
      cellPadding?: number | string | undefined;
      cellSpacing?: number | string | undefined;
      summary?: string | undefined;
      width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes extends HTMLAttributes {
      autoComplete?: string | undefined;
      autoFocus?: boolean | undefined;
      cols?: number | undefined;
      dirName?: string | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      maxLength?: number | undefined;
      minLength?: number | undefined;
      name?: string | undefined;
      placeholder?: string | undefined;
      readOnly?: boolean | undefined;
      required?: boolean | undefined;
      rows?: number | undefined;
      value?: string | ReadonlyArray<string> | number | undefined;
      wrap?: string | undefined;

      onChange?: string | undefined;
    }

    interface TdHTMLAttributes extends HTMLAttributes {
      align?: "left" | "center" | "right" | "justify" | "char" | undefined;
      colSpan?: number | undefined;
      headers?: string | undefined;
      rowSpan?: number | undefined;
      scope?: string | undefined;
      abbr?: string | undefined;
      height?: number | string | undefined;
      width?: number | string | undefined;
      valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes extends HTMLAttributes {
      align?: "left" | "center" | "right" | "justify" | "char" | undefined;
      colSpan?: number | undefined;
      headers?: string | undefined;
      rowSpan?: number | undefined;
      scope?: string | undefined;
      abbr?: string | undefined;
    }

    interface TimeHTMLAttributes extends HTMLAttributes {
      dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes extends HTMLAttributes {
      default?: boolean | undefined;
      kind?: string | undefined;
      label?: string | undefined;
      src?: string | undefined;
      srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes extends MediaHTMLAttributes {
      height?: number | string | undefined;
      playsInline?: boolean | undefined;
      poster?: string | undefined;
      width?: number | string | undefined;
      disablePictureInPicture?: boolean | undefined;
      disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes extends AriaAttributes, DOMAttributes {
      // Attributes which also defined in HTMLAttributes
      // See comment in SVGDOMPropertyConfig.js
      className?: string | undefined;
      color?: string | undefined;
      height?: number | string | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      max?: number | string | undefined;
      media?: string | undefined;
      method?: string | undefined;
      min?: number | string | undefined;
      name?: string | undefined;
      style?: string | undefined;
      target?: string | undefined;
      type?: string | undefined;
      width?: number | string | undefined;

      // Other HTML properties supported by SVG elements in browsers
      role?: AriaRole | undefined;
      tabIndex?: number | undefined;
      crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;

      // SVG Specific attributes
      accentHeight?: number | string | undefined;
      accumulate?: "none" | "sum" | undefined;
      additive?: "replace" | "sum" | undefined;
      alignmentBaseline?:
        | "auto"
        | "baseline"
        | "before-edge"
        | "text-before-edge"
        | "middle"
        | "central"
        | "after-edge"
        | "text-after-edge"
        | "ideographic"
        | "alphabetic"
        | "hanging"
        | "mathematical"
        | "inherit"
        | undefined;
      allowReorder?: "no" | "yes" | undefined;
      alphabetic?: number | string | undefined;
      amplitude?: number | string | undefined;
      arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
      ascent?: number | string | undefined;
      attributeName?: string | undefined;
      attributeType?: string | undefined;
      autoReverse?: Booleanish | undefined;
      azimuth?: number | string | undefined;
      baseFrequency?: number | string | undefined;
      baselineShift?: number | string | undefined;
      baseProfile?: number | string | undefined;
      bbox?: number | string | undefined;
      begin?: number | string | undefined;
      bias?: number | string | undefined;
      by?: number | string | undefined;
      calcMode?: number | string | undefined;
      capHeight?: number | string | undefined;
      clip?: number | string | undefined;
      clipPath?: string | undefined;
      clipPathUnits?: number | string | undefined;
      clipRule?: number | string | undefined;
      colorInterpolation?: number | string | undefined;
      colorInterpolationFilters?:
        | "auto"
        | "sRGB"
        | "linearRGB"
        | "inherit"
        | undefined;
      colorProfile?: number | string | undefined;
      colorRendering?: number | string | undefined;
      contentScriptType?: number | string | undefined;
      contentStyleType?: number | string | undefined;
      cursor?: number | string | undefined;
      cx?: number | string | undefined;
      cy?: number | string | undefined;
      d?: string | undefined;
      decelerate?: number | string | undefined;
      descent?: number | string | undefined;
      diffuseConstant?: number | string | undefined;
      direction?: number | string | undefined;
      display?: number | string | undefined;
      divisor?: number | string | undefined;
      dominantBaseline?: number | string | undefined;
      dur?: number | string | undefined;
      dx?: number | string | undefined;
      dy?: number | string | undefined;
      edgeMode?: number | string | undefined;
      elevation?: number | string | undefined;
      enableBackground?: number | string | undefined;
      end?: number | string | undefined;
      exponent?: number | string | undefined;
      externalResourcesRequired?: Booleanish | undefined;
      fill?: string | undefined;
      fillOpacity?: number | string | undefined;
      fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
      filter?: string | undefined;
      filterRes?: number | string | undefined;
      filterUnits?: number | string | undefined;
      floodColor?: number | string | undefined;
      floodOpacity?: number | string | undefined;
      focusable?: Booleanish | "auto" | undefined;
      fontFamily?: string | undefined;
      fontSize?: number | string | undefined;
      fontSizeAdjust?: number | string | undefined;
      fontStretch?: number | string | undefined;
      fontStyle?: number | string | undefined;
      fontVariant?: number | string | undefined;
      fontWeight?: number | string | undefined;
      format?: number | string | undefined;
      fr?: number | string | undefined;
      from?: number | string | undefined;
      fx?: number | string | undefined;
      fy?: number | string | undefined;
      g1?: number | string | undefined;
      g2?: number | string | undefined;
      glyphName?: number | string | undefined;
      glyphOrientationHorizontal?: number | string | undefined;
      glyphOrientationVertical?: number | string | undefined;
      glyphRef?: number | string | undefined;
      gradientTransform?: string | undefined;
      gradientUnits?: string | undefined;
      hanging?: number | string | undefined;
      horizAdvX?: number | string | undefined;
      horizOriginX?: number | string | undefined;
      href?: string | undefined;
      ideographic?: number | string | undefined;
      imageRendering?: number | string | undefined;
      in2?: number | string | undefined;
      in?: string | undefined;
      intercept?: number | string | undefined;
      k1?: number | string | undefined;
      k2?: number | string | undefined;
      k3?: number | string | undefined;
      k4?: number | string | undefined;
      k?: number | string | undefined;
      kernelMatrix?: number | string | undefined;
      kernelUnitLength?: number | string | undefined;
      kerning?: number | string | undefined;
      keyPoints?: number | string | undefined;
      keySplines?: number | string | undefined;
      keyTimes?: number | string | undefined;
      lengthAdjust?: number | string | undefined;
      letterSpacing?: number | string | undefined;
      lightingColor?: number | string | undefined;
      limitingConeAngle?: number | string | undefined;
      local?: number | string | undefined;
      markerEnd?: string | undefined;
      markerHeight?: number | string | undefined;
      markerMid?: string | undefined;
      markerStart?: string | undefined;
      markerUnits?: number | string | undefined;
      markerWidth?: number | string | undefined;
      mask?: string | undefined;
      maskContentUnits?: number | string | undefined;
      maskUnits?: number | string | undefined;
      mathematical?: number | string | undefined;
      mode?: number | string | undefined;
      numOctaves?: number | string | undefined;
      offset?: number | string | undefined;
      opacity?: number | string | undefined;
      operator?: number | string | undefined;
      order?: number | string | undefined;
      orient?: number | string | undefined;
      orientation?: number | string | undefined;
      origin?: number | string | undefined;
      overflow?: number | string | undefined;
      overlinePosition?: number | string | undefined;
      overlineThickness?: number | string | undefined;
      paintOrder?: number | string | undefined;
      panose1?: number | string | undefined;
      path?: string | undefined;
      pathLength?: number | string | undefined;
      patternContentUnits?: string | undefined;
      patternTransform?: number | string | undefined;
      patternUnits?: string | undefined;
      pointerEvents?: number | string | undefined;
      points?: string | undefined;
      pointsAtX?: number | string | undefined;
      pointsAtY?: number | string | undefined;
      pointsAtZ?: number | string | undefined;
      preserveAlpha?: Booleanish | undefined;
      preserveAspectRatio?: string | undefined;
      primitiveUnits?: number | string | undefined;
      r?: number | string | undefined;
      radius?: number | string | undefined;
      refX?: number | string | undefined;
      refY?: number | string | undefined;
      renderingIntent?: number | string | undefined;
      repeatCount?: number | string | undefined;
      repeatDur?: number | string | undefined;
      requiredExtensions?: number | string | undefined;
      requiredFeatures?: number | string | undefined;
      restart?: number | string | undefined;
      result?: string | undefined;
      rotate?: number | string | undefined;
      rx?: number | string | undefined;
      ry?: number | string | undefined;
      scale?: number | string | undefined;
      seed?: number | string | undefined;
      shapeRendering?: number | string | undefined;
      slope?: number | string | undefined;
      spacing?: number | string | undefined;
      specularConstant?: number | string | undefined;
      specularExponent?: number | string | undefined;
      speed?: number | string | undefined;
      spreadMethod?: string | undefined;
      startOffset?: number | string | undefined;
      stdDeviation?: number | string | undefined;
      stemh?: number | string | undefined;
      stemv?: number | string | undefined;
      stitchTiles?: number | string | undefined;
      stopColor?: string | undefined;
      stopOpacity?: number | string | undefined;
      strikethroughPosition?: number | string | undefined;
      strikethroughThickness?: number | string | undefined;
      string?: number | string | undefined;
      stroke?: string | undefined;
      strokeDasharray?: string | number | undefined;
      strokeDashoffset?: string | number | undefined;
      strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
      strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
      strokeMiterlimit?: number | string | undefined;
      strokeOpacity?: number | string | undefined;
      strokeWidth?: number | string | undefined;
      surfaceScale?: number | string | undefined;
      systemLanguage?: number | string | undefined;
      tableValues?: number | string | undefined;
      targetX?: number | string | undefined;
      targetY?: number | string | undefined;
      textAnchor?: string | undefined;
      textDecoration?: number | string | undefined;
      textLength?: number | string | undefined;
      textRendering?: number | string | undefined;
      to?: number | string | undefined;
      transform?: string | undefined;
      u1?: number | string | undefined;
      u2?: number | string | undefined;
      underlinePosition?: number | string | undefined;
      underlineThickness?: number | string | undefined;
      unicode?: number | string | undefined;
      unicodeBidi?: number | string | undefined;
      unicodeRange?: number | string | undefined;
      unitsPerEm?: number | string | undefined;
      vAlphabetic?: number | string | undefined;
      values?: string | undefined;
      vectorEffect?: number | string | undefined;
      version?: string | undefined;
      vertAdvY?: number | string | undefined;
      vertOriginX?: number | string | undefined;
      vertOriginY?: number | string | undefined;
      vHanging?: number | string | undefined;
      vIdeographic?: number | string | undefined;
      viewBox?: string | undefined;
      viewTarget?: number | string | undefined;
      visibility?: number | string | undefined;
      vMathematical?: number | string | undefined;
      widths?: number | string | undefined;
      wordSpacing?: number | string | undefined;
      writingMode?: number | string | undefined;
      x1?: number | string | undefined;
      x2?: number | string | undefined;
      x?: number | string | undefined;
      xChannelSelector?: string | undefined;
      xHeight?: number | string | undefined;
      xlinkActuate?: string | undefined;
      xlinkArcrole?: string | undefined;
      xlinkHref?: string | undefined;
      xlinkRole?: string | undefined;
      xlinkShow?: string | undefined;
      xlinkTitle?: string | undefined;
      xlinkType?: string | undefined;
      xmlBase?: string | undefined;
      xmlLang?: string | undefined;
      xmlns?: string | undefined;
      xmlnsXlink?: string | undefined;
      xmlSpace?: string | undefined;
      y1?: number | string | undefined;
      y2?: number | string | undefined;
      y?: number | string | undefined;
      yChannelSelector?: string | undefined;
      z?: number | string | undefined;
      zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes extends HTMLAttributes {
      allowfullscreen?: boolean | undefined;
      allowpopups?: boolean | undefined;
      autofocus?: boolean | undefined;
      autosize?: boolean | undefined;
      blinkfeatures?: string | undefined;
      disableblinkfeatures?: string | undefined;
      disableguestresize?: boolean | undefined;
      disablewebsecurity?: boolean | undefined;
      guestinstance?: string | undefined;
      httpreferrer?: string | undefined;
      nodeintegration?: boolean | undefined;
      partition?: string | undefined;
      plugins?: boolean | undefined;
      preload?: string | undefined;
      src?: string | undefined;
      useragent?: string | undefined;
      webpreferences?: string | undefined;
    }

    export interface IntrinsicElements {
      a: AnchorHTMLAttributes;
      abbr: HTMLAttributes;
      address: HTMLAttributes;
      area: AreaHTMLAttributes;
      article: HTMLAttributes;
      aside: HTMLAttributes;
      audio: AudioHTMLAttributes;
      b: HTMLAttributes;
      base: BaseHTMLAttributes;
      bdi: HTMLAttributes;
      bdo: HTMLAttributes;
      big: HTMLAttributes;
      blockquote: BlockquoteHTMLAttributes;
      body: HTMLAttributes;
      br: HTMLAttributes;
      button: ButtonHTMLAttributes;
      canvas: CanvasHTMLAttributes;
      caption: HTMLAttributes;
      cite: HTMLAttributes;
      code: HTMLAttributes;
      col: ColHTMLAttributes;
      colgroup: ColgroupHTMLAttributes;
      data: DataHTMLAttributes;
      datalist: HTMLAttributes;
      dd: HTMLAttributes;
      del: DelHTMLAttributes;
      details: DetailsHTMLAttributes;
      dfn: HTMLAttributes;
      dialog: DialogHTMLAttributes;
      div: HTMLAttributes;
      dl: HTMLAttributes;
      dt: HTMLAttributes;
      em: HTMLAttributes;
      embed: EmbedHTMLAttributes;
      fieldset: FieldsetHTMLAttributes;
      figcaption: HTMLAttributes;
      figure: HTMLAttributes;
      footer: HTMLAttributes;
      form: FormHTMLAttributes;
      h1: HTMLAttributes;
      h2: HTMLAttributes;
      h3: HTMLAttributes;
      h4: HTMLAttributes;
      h5: HTMLAttributes;
      h6: HTMLAttributes;
      head: HTMLAttributes;
      header: HTMLAttributes;
      hgroup: HTMLAttributes;
      hr: HTMLAttributes;
      html: HtmlHTMLAttributes;
      i: HTMLAttributes;
      iframe: IframeHTMLAttributes;
      img: ImgHTMLAttributes;
      input: InputHTMLAttributes;
      ins: InsHTMLAttributes;
      kbd: HTMLAttributes;
      keygen: KeygenHTMLAttributes;
      label: LabelHTMLAttributes;
      legend: HTMLAttributes;
      li: LiHTMLAttributes;
      link: LinkHTMLAttributes;
      main: HTMLAttributes;
      map: MapHTMLAttributes;
      mark: HTMLAttributes;
      menu: MenuHTMLAttributes;
      menuitem: HTMLAttributes;
      meta: MetaHTMLAttributes;
      meter: MeterHTMLAttributes;
      nav: HTMLAttributes;
      noindex: HTMLAttributes;
      noscript: HTMLAttributes;
      object: ObjectHTMLAttributes;
      ol: OlHTMLAttributes;
      optgroup: OptgroupHTMLAttributes;
      option: OptionHTMLAttributes;
      output: OutputHTMLAttributes;
      p: HTMLAttributes;
      param: ParamHTMLAttributes;
      picture: HTMLAttributes;
      pre: HTMLAttributes;
      progress: ProgressHTMLAttributes;
      q: QuoteHTMLAttributes;
      rp: HTMLAttributes;
      rt: HTMLAttributes;
      ruby: HTMLAttributes;
      s: HTMLAttributes;
      samp: HTMLAttributes;
      slot: SlotHTMLAttributes;
      script: ScriptHTMLAttributes;
      section: HTMLAttributes;
      select: SelectHTMLAttributes;
      small: HTMLAttributes;
      source: SourceHTMLAttributes;
      span: HTMLAttributes;
      strong: HTMLAttributes;
      style: StyleHTMLAttributes;
      sub: HTMLAttributes;
      summary: HTMLAttributes;
      sup: HTMLAttributes;
      table: TableHTMLAttributes;
      template: HTMLAttributes;
      tbody: HTMLAttributes;
      td: TdHTMLAttributes;
      textarea: TextareaHTMLAttributes;
      tfoot: HTMLAttributes;
      th: ThHTMLAttributes;
      thead: HTMLAttributes;
      time: TimeHTMLAttributes;
      title: HTMLAttributes;
      tr: HTMLAttributes;
      track: TrackHTMLAttributes;
      u: HTMLAttributes;
      ul: HTMLAttributes;
      var: HTMLAttributes;
      video: VideoHTMLAttributes;
      wbr: HTMLAttributes;
      webview: WebViewHTMLAttributes;

      // SVG
      svg: SVGAttributes;
      animate: SVGAttributes;
      animateMotion: SVGAttributes;
      animateTransform: SVGAttributes;
      circle: SVGAttributes;
      clipPath: SVGAttributes;
      defs: SVGAttributes;
      desc: SVGAttributes;
      ellipse: SVGAttributes;
      feBlend: SVGAttributes;
      feColorMatrix: SVGAttributes;
      feComponentTransfer: SVGAttributes;
      feComposite: SVGAttributes;
      feConvolveMatrix: SVGAttributes;
      feDiffuseLighting: SVGAttributes;
      feDisplacementMap: SVGAttributes;
      feDistantLight: SVGAttributes;
      feDropShadow: SVGAttributes;
      feFlood: SVGAttributes;
      feFuncA: SVGAttributes;
      feFuncB: SVGAttributes;
      feFuncG: SVGAttributes;
      feFuncR: SVGAttributes;
      feGaussianBlur: SVGAttributes;
      feImage: SVGAttributes;
      feMerge: SVGAttributes;
      feMergeNode: SVGAttributes;
      feMorphology: SVGAttributes;
      feOffset: SVGAttributes;
      fePointLight: SVGAttributes;
      feSpecularLighting: SVGAttributes;
      feSpotLight: SVGAttributes;
      feTile: SVGAttributes;
      feTurbulence: SVGAttributes;
      filter: SVGAttributes;
      foreignObject: SVGAttributes;
      g: SVGAttributes;
      image: SVGAttributes;
      line: SVGAttributes;
      linearGradient: SVGAttributes;
      marker: SVGAttributes;
      mask: SVGAttributes;
      metadata: SVGAttributes;
      mpath: SVGAttributes;
      path: SVGAttributes;
      pattern: SVGAttributes;
      polygon: SVGAttributes;
      polyline: SVGAttributes;
      radialGradient: SVGAttributes;
      rect: SVGAttributes;
      stop: SVGAttributes;
      switch: SVGAttributes;
      symbol: SVGAttributes;
      text: SVGAttributes;
      textPath: SVGAttributes;
      tspan: SVGAttributes;
      use: SVGAttributes;
      view: SVGAttributes;
    }
  }
}

type EmptyObject = Record<never, never>;
