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
  if (typeof kind === "string") {
    const attrs = props !== null
      ? ` ${serializeAttrs(props as Attributes)}`
      : "";

    return VoidElementTags.has(kind)
      ? renderVoidElement(kind, attrs)
      : VoidSVGElementTags.has(kind) || children.length === 0
      ? renderVoidSVGElement(kind, attrs)
      : renderFullElement(kind, attrs, combineChildren(children));
  } else {
    return renderTemplate(kind, props as Props, combineChildren(children));
  }
}

function combineChildren(children: TChildren): string {
  let result = "";
  for (let n = 0; n < children.length; n += 1) {
    const child = children[n];
    result += child;

    // if:
    //   this child is not an HTML element and the next one IS an element
    //   -- OR --
    //   this child is an HTML element and the next one IS NOT an element
    //     insert a space between the children
    const hasNext = n < children.length - 1;
    const thisIsElem = child.startsWith("<");
    const nextIsElem = hasNext && children[n + 1].startsWith("<");
    if (hasNext && thisIsElem !== nextIsElem) {
      result += " ";
    }
  }
  return result;
}

function renderVoidElement(kind: string, attrs: string): string {
  return `<${kind}${attrs}>`;
}

function renderVoidSVGElement(kind: string, attrs: string): string {
  return `<${kind}${attrs}/>`;
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

const VoidSVGElementTags = new Set<IElement>([
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "ellipse",
  "feConvolveMatrix",
  "feTurbulence",
  "feTile",
  "feGaussianBlur",
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
