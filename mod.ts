import "./types.ts";

export type AttrValue = string | number | boolean | null | undefined;

export type PropValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ((...args: unknown[]) => unknown);

/**
 * Attributes represent the attributes of intrinsic elements of HTML, such as div, span, img, etc.
 */
export type Attributes = Record<string, AttrValue>;
export type Props = Record<string, PropValue>;
export type Template = (props: Props) => string;
export type PropsWithChildren<T> = T & { children?: string };
export type IElement = keyof JSX.IntrinsicElements;

export function h(
  kind: IElement,
  attrs: Attributes | null,
  children: string
): string;
export function h(
  kind: Template,
  props: Props | null,
  children: string
): string;
export function h(
  kind: IElement | Template,
  props: Props | Attributes | null,
  children: string
): string {
  if (typeof kind === "string") {
    const attrs =
      props !== null ? ` ${serializeAttrs(props as Attributes)}` : "";

    return VoidElementTags.has(kind)
      ? renderVoidElement(kind, attrs)
      : renderClosingElement(kind, attrs, children);
  } else {
    return renderTemplate(kind, props as Props, children);
  }
}

function renderVoidElement(kind: string, attrs: string): string {
  return `<${kind}${attrs}>`;
}

function renderClosingElement(
  kind: string,
  attrs: string,
  children: string
): string {
  return `<${kind}${attrs}>${children !== undefined ? children : ""}</${kind}>`;
}

function renderTemplate(
  kind: Template,
  props: Props,
  children: string
): string {
  const allProps: Props = {
    ...props,
    children,
  };
  return kind(allProps);
}

function serializeAttrs(attrs: Attributes): string {
  const items = Object.entries(attrs)
    .map(([key, val]) => {
      if (val === null || val === undefined || val === false) {
        return false;
      }
      if (val === true) {
        return key;
      }
      if (typeof val === "string" || typeof val === "number") {
        return `${key}="${val.toString()}"`;
      }
    })
    .filter((item) => item !== false) as string[];
  return items.join(" ");
}

/**
 * Void elements are elements that have no closing tag, such as `<img>`
 */
const VoidElementTags = new Set<IElement>([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
