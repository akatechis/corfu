/* @jsx h */
import { h } from "../mod.ts";
import { expect } from "chai";
import { describe, it } from "bdd";

/*
 * These tests verify that the types are sensible, and work correctly. Most of these are examples taken from MDN documentation website
 */
describe("SVG Elements", () => {
  it("it can render a <svg> element", () => {});
  it("it can render an <animate> element", () => {});
  it("it can render an <animateMotion> element", () => {});
  it("it can render an <animateTransform> element", () => {});
  it("it can render a <circle> element", () => {});
  it("it can render a <clipPath> element", () => {});
  it("it can render a <defs> element", () => {});
  it("it can render a <desc> element", () => {});
  it("it can render a <ellipse> element", () => {});
  it("it can render a <feBlend> element", () => {});
  it("it can render a <feColorMatrix> element", () => {});
  it("it can render a <feComponentTransfer> element", () => {});
  it("it can render a <feComposite> element", () => {});
  it("it can render a <feConvolveMatrix> element", () => {});
  it("it can render a <feDiffuseLighting> element", () => {});
  it("it can render a <feDisplacementMap> element", () => {});
  it("it can render a <feDistantLight> element", () => {});
  it("it can render a <feDropShadow> element", () => {});
  it("it can render a <feFlood> element", () => {});
  it("it can render a <feFuncA> element", () => {});
  it("it can render a <feFuncB> element", () => {});
  it("it can render a <feFuncG> element", () => {});
  it("it can render a <feFuncR> element", () => {});
  it("it can render a <feGaussianBlur> element", () => {});
  it("it can render a <feImage> element", () => {});
  it("it can render a <feMerge> element", () => {});
  it("it can render a <feMergeNode> element", () => {});
  it("it can render a <feMorphology> element", () => {});
  it("it can render a <feOffset> element", () => {});
  it("it can render a <fePointLight> element", () => {});
  it("it can render a <feSpecularLighting> element", () => {});
  it("it can render a <feSpotLight> element", () => {});
  it("it can render a <feTile> element", () => {});
  it("it can render a <feTurbulence> element", () => {});
  it("it can render a <filter> element", () => {});
  it("it can render a <foreignObject> element", () => {});
  it("it can render a <g> element", () => {
    const svg = (
      <g>
        <path d="M 10 10 Z" />
      </g>
    );
    expect(svg).to.equal('<g><path d="M 10 10 Z"/></g>');
  });
  it("it can render a <image> element", () => {
    const svg = (
      <image href="mdn_logo_only_color.png" height="200" width="200" />
    );
    expect(svg).to.equal(
      '<image href="mdn_logo_only_color.png" height="200" width="200"/>',
    );
  });
  it("it can render a <line> element", () => {
    const svg = <line x1="0" y1="80" x2="100" y2="20" stroke="black" />;
    expect(svg).to.equal(
      '<line x1="0" y1="80" x2="100" y2="20" stroke="black"/>',
    );
  });
  it("it can render a <linearGradient> element", () => {
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
  it("it can render a <marker> element", () => {
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
  it("it can render a <mask> element", () => {
    const svg = (
      <mask id="myMask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
      </mask>
    );
    expect(svg).to.equal(
      '<mask id="myMask"><rect x="0" y="0" width="100" height="100" fill="white"/></mask>',
    );
  });
  it("it can render a <metadata> element", () => {
    // TODO: if we add rdf element support, we should make this test a little bit better
    const svg = <metadata></metadata>;
    expect(svg).to.equal("<metadata></metadata>");
  });
  it("it can render a <mpath> element", () => {
    const svg = <mpath xlinkHref="#path1" />;
    expect(svg).to.equal('<mpath xlink:href="#path1"/>');
  });
  it("it can render a <path> element", () => {
    const svg = (
      <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
    );
    expect(svg).to.equal(
      '<path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"/>',
    );
  });
  it("it can render a <pattern> element", () => {
    const svg = (
      <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
        <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
      </pattern>
    );
    expect(svg).to.equal(
      '<pattern id="star" viewBox="0,0,10,10" width="10%" height="10%"><polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/></pattern>',
    );
  });
  it("it can render a <polygon> element", () => {
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
  it("it can render a <polyline> element", () => {
    const svg = <polyline points="0,100 50,25 50,75 100,0" />;
    expect(svg).to.equal('<polyline points="0,100 50,25 50,75 100,0"/>');
  });
  it("it can render a <radialGradient> element", () => {
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
  it("it can render a <rect> element", () => {
    const svg = <rect x="1200" rx="15" width="100" height="100" />;
    expect(svg).to.equal('<rect x="1200" rx="15" width="100" height="100"/>');
  });
  it("it can render a <stop> element", () => {
    const svg = <stop offset="95%" stop-color="red" />;
    expect(svg).to.equal('<stop offset="95%" stop-color="red"/>');
  });
  it("it can render a <switch> element", () => {
    const svg = (
      <switch>
        <text systemLanguage="ja">こんにちは</text>
      </switch>
    );
    expect(svg).to.equal(
      '<switch><text systemLanguage="ja">こんにちは</text></switch>',
    );
  });
  it("it can render a <symbol> element", () => {
    const svg = (
      <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </symbol>
    );
    expect(svg).to.equal(
      '<symbol id="myDot" width="10" height="10" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1"/></symbol>',
    );
  });
  it("it can render a <text> element", () => {
    const svg = <text>My name is Alexandros</text>;
    expect(svg).to.equal("<text>My name is Alexandros</text>");
  });
  it("it can render a <textPath> element", () => {
    const svg = (
      <textPath href="#MyPath">
        Quick brown fox jumps over the lazy dog.
      </textPath>
    );
    expect(svg).to.equal(
      '<textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>',
    );
  });
  it("it can render a <tspan> element", () => {
    const svg = <tspan>hello</tspan>;
    expect(svg).to.equal("<tspan>hello</tspan>");
  });
  it("it can render a <use> element", () => {
    const svg = <use href="#myCircle" x="20" fill="white" stroke="red" />;
    expect(svg).to.equal(
      '<use href="#myCircle" x="20" fill="white" stroke="red"/>',
    );
  });
  it("it can render a <view> element", () => {
    const svg = <view id="one" viewBox="0 0 100 100" />;
    expect(svg).to.equal('<view id="one" viewBox="0 0 100 100"/>');
  });
});
