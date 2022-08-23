/* @jsx h */
import { h } from "../mod.ts";
import { expect } from "chai";

/*
 * These tests verify that the types are sensible, and work correctly. Most of these are examples taken from MDN documentation website
 */

Deno.test("h() can render a <svg> element", () => {
  const svg = (
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      stroke="red"
      fill="grey"
    >
      <circle cx="50" cy="50" r="40" />
    </svg>
  );
  expect(svg).to.equal(
    '<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey"><circle cx="50" cy="50" r="40"/></svg>',
  );
});
Deno.test("h() can render an <animate> element", () => {
  const svg = (
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite"
    />
  );
  expect(svg).to.equal(
    '<animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite"/>',
  );
});
Deno.test("h() can render an <animateMotion> element", () => {
  const svg = (
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
    />
  );
  expect(svg).to.equal(
    '<animateMotion dur="10s" repeatCount="indefinite" path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"/>',
  );
});
Deno.test("h() can render an <animateTransform> element", () => {
  const svg = (
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite"
    />
  );
  expect(svg).to.equal(
    '<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 60 70" to="360 60 70" dur="10s" repeatCount="indefinite"/>',
  );
});
Deno.test("h() can render a <circle> element", () => {
  const svg = <circle cx="50" cy="50" r="50" fill="#000" />;
  expect(svg).to.equal('<circle cx="50" cy="50" r="50" fill="#000"/>');
});
Deno.test("h() can render a <clipPath> element", () => {
  const svg = (
    <clipPath id="myClip">
      <circle cx="40" cy="35" r="35" />
    </clipPath>
  );
  expect(svg).to.equal(
    '<clipPath id="myClip"><circle cx="40" cy="35" r="35"/></clipPath>',
  );
});
Deno.test("h() can render a <defs> element", () => {
  const svg = (
    <defs>
      <circle id="mycircle" cx="0" cy="0" r="5" />
    </defs>
  );
  expect(svg).to.equal(
    '<defs><circle id="mycircle" cx="0" cy="0" r="5"/></defs>',
  );
});
Deno.test("h() can render a <desc> element", () => {
  const svg = <desc>Lorem ipsum</desc>;
  expect(svg).to.equal("<desc>Lorem ipsum</desc>");
});
Deno.test("h() can render a <ellipse> element", () => {
  const svg = <ellipse cx="100" cy="50" rx="100" ry="50" />;
  expect(svg).to.equal('<ellipse cx="100" cy="50" rx="100" ry="50"/>');
});
Deno.test("h() can render a <feBlend> element", () => {
  const svg = <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />;
  expect(svg).to.equal(
    '<feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>',
  );
});
Deno.test("h() can render a <feColorMatrix> element", () => {
  const svg = (
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
    />
  );
  expect(svg).to.equal(
    '<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>',
  );
});
Deno.test("h() can render a <feComponentTransfer> element with identity functions", () => {
  const svg = (
    <feComponentTransfer>
      <feFuncR type="identity"></feFuncR>
      <feFuncG type="identity"></feFuncG>
      <feFuncB type="identity"></feFuncB>
      <feFuncA type="identity"></feFuncA>
    </feComponentTransfer>
  );
  expect(svg).to.equal(
    '<feComponentTransfer><feFuncR type="identity"/><feFuncG type="identity"/><feFuncB type="identity"/><feFuncA type="identity"/></feComponentTransfer>',
  );
});
Deno.test("h() can render a <feComponentTransfer> element with table functions", () => {
  const svg = (
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
      <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
      <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
    </feComponentTransfer>
  );
  expect(svg).to.equal(
    '<feComponentTransfer><feFuncR type="table" tableValues="0 0 1 1"/><feFuncG type="table" tableValues="1 1 0 0"/><feFuncB type="table" tableValues="0 1 1 0"/></feComponentTransfer>',
  );
});
Deno.test("h() can render a <feComponentTransfer> element with gamma functions", () => {
  const svg = (
    <feComponentTransfer>
      <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
      <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
      <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
    </feComponentTransfer>
  );
  expect(svg).to.equal(
    '<feComponentTransfer><feFuncR type="gamma" amplitude="4" exponent="7" offset="0"/><feFuncG type="gamma" amplitude="4" exponent="4" offset="0"/><feFuncB type="gamma" amplitude="4" exponent="1" offset="0"/></feComponentTransfer>',
  );
});
Deno.test("h() can render a <feComposite> element", () => {
  const svg = <feComposite in2="SourceGraphic" operator="over" />;
  expect(svg).to.equal('<feComposite in2="SourceGraphic" operator="over"/>');
});
Deno.test("h() can render a <feConvolveMatrix> element", () => {
  const svg = <feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -3" />;
  expect(svg).to.equal(
    '<feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -3"/>',
  );
});
Deno.test("h() can render a <feGaussianBlur> element", () => {
  const svg = <feGaussianBlur stdDeviation="5" edgeMode="duplicate" />;
  expect(svg).to.equal(
    '<feGaussianBlur stdDeviation="5" edgeMode="duplicate"/>',
  );
});
Deno.test("h() can render a <feTile> element", () => {
  const svg = (
    <feTile in="SourceGraphic" x="50" y="50" width="100" height="100" />
  );
  expect(svg).to.equal(
    '<feTile in="SourceGraphic" x="50" y="50" width="100" height="100"/>',
  );
});
Deno.test("h() can render a <feTurbulence> element", () => {
  const svg = (
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence"
    />
  );
  expect(svg).to.equal(
    '<feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>',
  );
});
Deno.test("h() can render a <filter> element", () => {
  const svg = (
    <filter id="blurMe">
      <feGaussianBlur stdDeviation="5" />
    </filter>
  );
  expect(svg).to.equal(
    '<filter id="blurMe"><feGaussianBlur stdDeviation="5"/></filter>',
  );
});
Deno.test("h() can render a <foreignObject> element", () => {
  const svg = (
    <foreignObject x="20" y="20" width="160" height="160">
      <div>Lorem ipsum</div>
    </foreignObject>
  );
  expect(svg).to.equal(
    '<foreignObject x="20" y="20" width="160" height="160"><div>Lorem ipsum</div></foreignObject>',
  );
});
Deno.test("h() can render a <g> element", () => {
  const svg = (
    <g>
      <path d="M 10 10 Z" />
    </g>
  );
  expect(svg).to.equal('<g><path d="M 10 10 Z"/></g>');
});
Deno.test("h() can render a <image> element", () => {
  const svg = <image href="mdn_logo_only_color.png" height="200" width="200" />;
  expect(svg).to.equal(
    '<image href="mdn_logo_only_color.png" height="200" width="200"/>',
  );
});
Deno.test("h() can render a <line> element", () => {
  const svg = <line x1="0" y1="80" x2="100" y2="20" stroke="black" />;
  expect(svg).to.equal(
    '<line x1="0" y1="80" x2="100" y2="20" stroke="black"/>',
  );
});
Deno.test("h() can render a <linearGradient> element", () => {
  const svg = (
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  );
  expect(svg).to.equal(
    '<linearGradient id="myGradient" gradientTransform="rotate(90)"><stop offset="5%" stop-color="gold"/><stop offset="95%" stop-color="red"/></linearGradient>',
  );
});
Deno.test("h() can render a <marker> element", () => {
  const svg = (
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  );
  expect(svg).to.equal(
    '<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"/></marker>',
  );
});
Deno.test("h() can render a <mask> element", () => {
  const svg = (
    <mask id="myMask">
      <rect x="0" y="0" width="100" height="100" fill="white" />
    </mask>
  );
  expect(svg).to.equal(
    '<mask id="myMask"><rect x="0" y="0" width="100" height="100" fill="white"/></mask>',
  );
});
Deno.test("h() can render a <mpath> element", () => {
  const svg = <mpath xlinkHref="#path1" />;
  expect(svg).to.equal('<mpath xlink:href="#path1"/>');
});
Deno.test("h() can render a <path> element", () => {
  const svg = (
    <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  );
  expect(svg).to.equal(
    '<path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"/>',
  );
});
Deno.test("h() can render a <pattern> element", () => {
  const svg = (
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  );
  expect(svg).to.equal(
    '<pattern id="star" viewBox="0,0,10,10" width="10%" height="10%"><polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/></pattern>',
  );
});
Deno.test("h() can render a <polygon> element", () => {
  const svg = (
    <polygon
      points="100,100 150,25 150,75 200,0"
      fill="none"
      stroke="black"
    />
  );
  expect(svg).to.equal(
    '<polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black"/>',
  );
});
Deno.test("h() can render a <polyline> element", () => {
  const svg = <polyline points="0,100 50,25 50,75 100,0" />;
  expect(svg).to.equal('<polyline points="0,100 50,25 50,75 100,0"/>');
});
Deno.test("h() can render a <radialGradient> element", () => {
  const svg = (
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  );
  expect(svg).to.equal(
    '<radialGradient id="myGradient"><stop offset="10%" stop-color="gold"/><stop offset="95%" stop-color="red"/></radialGradient>',
  );
});
Deno.test("h() can render a <rect> element", () => {
  const svg = <rect x="1200" rx="15" width="100" height="100" />;
  expect(svg).to.equal('<rect x="1200" rx="15" width="100" height="100"/>');
});
Deno.test("h() can render a <stop> element", () => {
  const svg = <stop offset="95%" stop-color="red" />;
  expect(svg).to.equal('<stop offset="95%" stop-color="red"/>');
});
Deno.test("h() can render a <switch> element", () => {
  const svg = (
    <switch>
      <text systemLanguage="ja">こんにちは</text>
    </switch>
  );
  expect(svg).to.equal(
    '<switch><text systemLanguage="ja">こんにちは</text></switch>',
  );
});
Deno.test("h() can render a <symbol> element", () => {
  const svg = (
    <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
      <circle cx="1" cy="1" r="1" />
    </symbol>
  );
  expect(svg).to.equal(
    '<symbol id="myDot" width="10" height="10" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1"/></symbol>',
  );
});
Deno.test("h() can render a <text> element", () => {
  const svg = <text>My name is Alexandros</text>;
  expect(svg).to.equal("<text>My name is Alexandros</text>");
});
Deno.test("h() can render a <textPath> element", () => {
  const svg = (
    <textPath href="#MyPath">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  );
  expect(svg).to.equal(
    '<textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>',
  );
});
Deno.test("h() can render a <tspan> element", () => {
  const svg = <tspan>hello</tspan>;
  expect(svg).to.equal("<tspan>hello</tspan>");
});
Deno.test("h() can render a <use> element", () => {
  const svg = <use href="#myCircle" x="20" fill="white" stroke="red" />;
  expect(svg).to.equal(
    '<use href="#myCircle" x="20" fill="white" stroke="red"/>',
  );
});
Deno.test("h() can render a <view> element", () => {
  const svg = <view id="one" viewBox="0 0 100 100" />;
  expect(svg).to.equal('<view id="one" viewBox="0 0 100 100"/>');
});
