/* @jsx h */
import { h, PropsWithChildren } from "../mod.ts";
import { expect } from "chai";
import { describe, it } from "bdd";

describe("h() factory", () => {
  it("can render an intrinsic JSX element", () => {
    const jsx = <div class="foo">Hello world</div>;
    expect(jsx).to.equal('<div class="foo">Hello world</div>');
  });

  it("can render an intrinsic JSX element with children", () => {
    const jsx = (
      <div class="foo">
        <span>Hello world</span>
      </div>
    );
    expect(jsx).to.equal('<div class="foo"><span>Hello world</span></div>');
  });

  it("can render a custom JSX element and remove falsy attrs", () => {
    interface ButtonProps {
      primary: boolean;
    }
    function Button(props: PropsWithChildren<ButtonProps>): string {
      const cls = props.primary ? "primary" : "secondary";
      return <button class={cls}>{props.children}</button>;
    }
    const jsx = <Button primary={false}>Click me!</Button>;
    expect(jsx).to.equal('<button class="secondary">Click me!</button>');
  });

  it("can render a custom JSX element without children", () => {
    interface ButtonProps {
      primary: boolean;
    }
    function Button(props: PropsWithChildren<ButtonProps>): string {
      const cls = props.primary ? "primary" : "secondary";
      return <button class={cls} />;
    }
    const jsx = <Button primary={false}>Click me!</Button>;
    expect(jsx).to.equal('<button class="secondary"></button>');
  });

  it("can render a void element with boolean property", () => {
    const jsx = <input type="checkbox" checked />;
    expect(jsx).to.equal('<input type="checkbox" checked>');
  });
});
