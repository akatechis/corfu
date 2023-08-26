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
export type TChildren = string[];
export type PropsWithChildren<T> = T & { children?: TChildren };
export type IElement = keyof JSX.IntrinsicElements;

export function h(
  kind: IElement,
  attrs: Attributes | null,
  ...children: string[]
): string;
export function h(
  kind: Template,
  props: Props | null,
  ...children: string[]
): string;
export function h(
  kind: IElement | Template,
  props: Props | Attributes | null,
  ...children: string[]
): string {
}

function combineChildren(children: TChildren): string {
  let result = "";
  for (let n = 0; n < children.length; n += 1) {
    const child = children[n];
    if (child) {
      result += child;
    }
  }
  return result;
}

function renderVoidElement(
  kind: string,
  attrs: string,
  closingSlash = "",
): string {
  return `<${kind}${attrs}${closingSlash}>`;
}

function renderFullElement(
  kind: string,
  attrs: string,
  children: string,
): string {
  return `<${kind}${attrs}>${children !== undefined ? children : ""}</${kind}>`;
}

function renderTemplate(
  kind: Template,
  props: Props,
  children: string,
): string {
  const allProps: Props = {
    ...props,
    children,
  };
  return kind(allProps);
}

function mappedAttribute(attribute: string): string {
  return SVGNamespaceExpansions.get(attribute) || attribute;
}

function serializeAttrs(attrs: Attributes): string {
  const items = Object.entries(attrs)
    .map(([key, val]) => {
      if (val === null || val === undefined || val === false) {
        return false;
      }
      if (val === true) {
        return mappedAttribute(key);
      }
      if (typeof val === "string" || typeof val === "number") {
        return `${mappedAttribute(key)}="${val.toString()}"`;
      }
    })
    .filter((item) => item !== false) as string[];
  return items.join(" ");
}

/**
 * Void elements are elements that have no closing tag, such as `<img>`.
 * https://html.spec.whatwg.org/multipage/syntax.html#elements-2
 */
const VoidElements = new Set<IElement>([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const VoidElementsWithSlash = new Set<IElement>([
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "ellipse",
  "feBlend",
  "feConvolveMatrix",
  "feColorMatrix",
  "feComposite",
  "feTurbulence",
  "feTile",
  "feFuncR",
  "feFuncG",
  "feFuncB",
  "feFuncA",
  "feGaussianBlur",
  "hr",
  "img",
  "image",
  "line",
  "mpath",
  "path",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "use",
  "view",
]);

const SVGNamespaceExpansions = new Map([
  ["xlinkActuate", "xlink:actuate"],
  ["xlinkArcrole", "xlink:arcrole"],
  ["xlinkHref", "xlink:href"],
  ["xlinkRole", "xlink:role"],
  ["xlinkShow", "xlink:show"],
  ["xlinkTitle", "xlink:title"],
  ["xlinkType", "xlink:type"],
  ["xmlBase", "xml:base"],
  ["xmlLang", "xml:lang"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xmlSpace", "xml:space"],
]);

let wrappedData: unknown = null;

export function useData<T>(): T {
  return wrappedData as T;
}

export function withData<T>(data: T, renderer: () => string): string {
  wrappedData = data;
  const result = renderer();
  wrappedData = null;

  return result;
}
