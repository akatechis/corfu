import "./types.ts";

export function h(
  kind: JSX.IElement,
  attrs: JSX.Props | null,
  ...children: JSX.Element[]
): JSX.Element;
export function h(
  kind: JSX.Template,
  props: JSX.Props | null,
  ...children: JSX.Element[]
): JSX.Element;
export function h(
  kind: JSX.IElement | JSX.Template,
  props: JSX.Props | null,
  ...children: JSX.Element[]
): JSX.Element {
  return {
    kind,
    props,
    children
  }
}
