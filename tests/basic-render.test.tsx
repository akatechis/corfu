/* @jsx h */
import { h, PropsWithChildren } from "../mod.ts";
import { expect } from "chai";

Deno.test("h() can render an intrinsic JSX element", () => {
  const html = <div class="foo">Hello world</div>;
  expect(html).to.equal('<div class="foo">Hello world</div>');
});

Deno.test("h() can render an intrinsic JSX element with children", () => {
  const html = (
    <div class="foo">
      <span>Hello world</span>
    </div>
  );
  expect(html).to.equal('<div class="foo"><span>Hello world</span></div>');
});

Deno.test("h() can render a custom JSX element and remove falsy attrs", () => {
  interface ButtonProps {
    primary?: boolean;
  }
  function Button(props: PropsWithChildren<ButtonProps>): string {
    const cls = props.primary ? "primary" : "secondary";
    return <button class={cls}>{props.children}</button>;
  }
  const html = <Button>Click me!</Button>;
  expect(html).to.equal('<button class="secondary">Click me!</button>');
});

Deno.test("h() can render a custom JSX element without children", () => {
  interface ButtonProps {
    primary: boolean;
  }
  function Button(props: PropsWithChildren<ButtonProps>): string {
    const cls = props.primary ? "primary" : "secondary";
    return <button class={cls} />;
  }
  const html = <Button primary={false}>Click me!</Button>;
  expect(html).to.equal('<button class="secondary"></button>');
});

Deno.test("h() can render a void element with boolean property", () => {
  const html = <input type="checkbox" checked />;
  expect(html).to.equal('<input type="checkbox" checked>');
});

Deno.test("h() can render an element with multiple children", () => {
  const html = (
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  );
  expect(html).to.equal(
    "<div><span>1</span><span>2</span><span>3</span></div>",
  );
});
