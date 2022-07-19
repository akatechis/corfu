/* @jsx h */
import { h } from "../mod.ts";
import { expect } from "chai";
import { describe, it } from "bdd";

/*
 * These tests verify that the types are sensible, and work correctly. Most of these are examples taken from MDN documentation website
 */
describe("elements", () => {
  it("can render an <a> element", () => {
    const html = (
      <a
        href="https://google.com/hello.html"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        Try google
      </a>
    );
    expect(html).to.equal(
      '<a href="https://google.com/hello.html" target="_blank" referrerpolicy="no-referrer">Try google</a>',
    );
  });
  it("it can render an <abbr> element", () => {
    const html = <abbr class="text" title="JavaScript XML">JSX</abbr>;
    expect(html).to.equal(
      '<abbr class="text" title="JavaScript XML">JSX</abbr>',
    );
  });
  it("it can render an <address> element", () => {
    const html = (
      <address>
        <a href="mailto:jim@rock.com">jim@rock.com</a>
        <br />
        <a href="tel:+13115552368">(311) 555-2368</a>
      </address>
    );
    expect(html).to.equal(
      '<address><a href="mailto:jim@rock.com">jim@rock.com</a><br><a href="tel:+13115552368">(311) 555-2368</a></address>',
    );
  });
  it("it can render an <area> element with rect shape", () => {
    const html = (
      <area
        shape="rect"
        coords="184,6,253,27"
        href="https://mozilla.org"
        target="_blank"
        alt="Mozilla"
      />
    );
    expect(html).to.equal(
      '<area shape="rect" coords="184,6,253,27" href="https://mozilla.org" target="_blank" alt="Mozilla">',
    );
  });
  it("it can render an <area> element with circle shape", () => {
    const html = (
      <area
        shape="circle"
        coords="130,136,60"
        href="https://developer.mozilla.org/"
        target="_blank"
        alt="MDN"
      />
    );
    expect(html).to.equal(
      '<area shape="circle" coords="130,136,60" href="https://developer.mozilla.org/" target="_blank" alt="MDN">',
    );
  });
  it("it can render an <area> element with poly shape", () => {
    const html = (
      <area
        shape="poly"
        coords="130,6,253,96,223,106,130,39"
        href="https://developer.mozilla.org/docs/Web/Guide/Graphics"
        target="_blank"
        alt="Graphics"
      />
    );
    expect(html).to.equal(
      '<area shape="poly" coords="130,6,253,96,223,106,130,39" href="https://developer.mozilla.org/docs/Web/Guide/Graphics" target="_blank" alt="Graphics">',
    );
  });
  it("it can render an <article> element", () => {
    const html = (
      <article class="day-forecast">
        <h2>04 March 2018</h2>
        <p>Periods of rain.</p>
      </article>
    );
    expect(html).to.equal(
      '<article class="day-forecast"><h2>04 March 2018</h2><p>Periods of rain.</p></article>',
    );
  });
  it("it can render an <aside> element", () => {
    const html = (
      <aside>
        <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
      </aside>
    );
    expect(html).to.equal(
      "<aside><p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p></aside>",
    );
  });
  it("it can render an <audio> element", () => {
    const html = (
      <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3"
      >
        Your browser does not support the
        <code>audio</code>
        element.
      </audio>
    );
    expect(html).to.equal(
      '<audio controls src="/media/cc0-audio/t-rex-roar.mp3">Your browser does not support the <code>audio</code> element.</audio>',
    );
  });
  it("it can render a <b> element", () => {
    const html = <b class="definition">chemistry</b>;
    expect(html).to.equal('<b class="definition">chemistry</b>');
  });
  it("it can render a <base> element", () => {
    const html = <base href="https://www.example.com/" target="_blank" />;
    expect(html).to.equal(
      '<base href="https://www.example.com/" target="_blank">',
    );
  });
  it("it can render a <bdi> element", () => {
    const html = <bdi class="name">الرجل القوي إيان</bdi>;
    expect(html).to.equal('<bdi class="name">الرجل القوي إيان</bdi>');
  });
  it("it can render a <bdo> element", () => {
    const html = <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>;
    expect(html).to.equal(
      '<bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>',
    );
  });
  it("it can render a <big> element", () => {
    const html = <big>HELLO!</big>;
    expect(html).to.equal("<big>HELLO!</big>");
  });
  it("it can render a <blockquote> element", () => {
    const html = (
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>
          Words can be like X-rays, if you use them properly—they&apos;ll go
          through anything. You read and you&apos;re pierced.
        </p>
      </blockquote>
    );
    expect(html).to.equal(
      "<blockquote cite=\"https://www.huxley.net/bnw/four.html\"><p>Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.</p></blockquote>",
    );
  });
  it("it can render a <body> element", () => {
    const html = (
      <body>
        <p>hello</p>world!
      </body>
    );
    expect(html).to.equal("<body><p>hello</p> world!</body>");
  });
  it("it can render a <br> element", () => {
    const html = <br />;
    expect(html).to.equal("<br>");
  });
  it("it can render a <button> element", () => {
    const html = <button disabled type="button">Click!</button>;
    expect(html).to.equal('<button disabled type="button">Click!</button>');
  });
  it("it can render a <canvas> element", () => {
    const html = (
      <canvas width="300" height="300">
        Canvas not supported!
      </canvas>
    );
    expect(html).to.equal(
      '<canvas width="300" height="300">Canvas not supported!</canvas>',
    );
  });
  it("it can render a <caption> element", () => {
    const html = <caption>He-Man and Skeletor facts</caption>;
    expect(html).to.equal("<caption>He-Man and Skeletor facts</caption>");
  });
  it("it can render a <cite> element", () => {
    const html = (
      <cite>
        <a href="http://www.george-orwell.org/1984/0.html">
          Nineteen Eighty-Four
        </a>
      </cite>
    );
    expect(html).to.equal(
      '<cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite>',
    );
  });
  it("it can render a <code> element", () => {
    const html = <code>function hello() {"{}"}</code>;
    expect(html).to.equal("<code>function hello() {}</code>");
  });
  it("it can render a <col> element", () => {
    const html = <col span={2} />;
    expect(html).to.equal('<col span="2">');
  });
  it("it can render a <colgroup> element", () => {
    const html = (
      <colgroup>
        <col />
        <col span={2} />
        <col span={2} />
      </colgroup>
    );
    expect(html).to.equal(
      '<colgroup><col><col span="2"><col span="2"></colgroup>',
    );
  });
  it("it can render a <data> element", () => {
    const html = <data value="420">hello</data>;
    expect(html).to.equal('<data value="420">hello</data>');
  });
  it("it can render a <datalist> element", () => {
    const html = (
      <datalist id="ice-cream-flavors">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
    );
    expect(html).to.equal(
      '<datalist id="ice-cream-flavors"><option value="Chocolate"></option><option value="Coconut"></option><option value="Mint"></option><option value="Strawberry"></option><option value="Vanilla"></option></datalist>',
    );
  });
  it("it can render a <dd> element", () => {
    const html = <dd>A sea serpent.</dd>;
    expect(html).to.equal("<dd>A sea serpent.</dd>");
  });
  it("it can render a <del> element", () => {
    const html = <del>strikeout</del>;
    expect(html).to.equal("<del>strikeout</del>");
  });
  it("it can render a <details> element", () => {
    const html = (
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
    );
    expect(html).to.equal(
      "<details><summary>Details</summary> Something small enough to escape casual notice.</details>",
    );
  });
  it("it can render a <dfn> element", () => {
    const html = <dfn id="def-validator">validator</dfn>;
    expect(html).to.equal('<dfn id="def-validator">validator</dfn>');
  });
  it("it can render a <dialog> element", () => {
    const html = (
      <dialog open>
        <p>Greetings, one and all!</p>
      </dialog>
    );
    expect(html).to.equal(
      "<dialog open><p>Greetings, one and all!</p></dialog>",
    );
  });
  it("it can render a <div> element", () => {
    const html = <div id="foo">hello world</div>;
    expect(html).to.equal('<div id="foo">hello world</div>');
  });
  it("it can render a <dl> element", () => {
    const html = (
      <dl>
        <dt>Beast of Bodmin</dt>
        <dd>A large feline inhabiting Bodmin Moor.</dd>
      </dl>
    );
    expect(html).to.equal(
      "<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>",
    );
  });
  it("it can render a <dt> element", () => {
    const html = <dt>Beast of Bodmin</dt>;
    expect(html).to.equal("<dt>Beast of Bodmin</dt>");
  });
  it("it can render an <em> element", () => {
    const html = <em>go!</em>;
    expect(html).to.equal("<em>go!</em>");
  });
  it("it can render an <embed> element", () => {
    const html = (
      <embed
        type="video/webm"
        src="/media/cc0-videos/flower.mp4"
        width="250"
        height="200"
      />
    );
    expect(html).to.equal(
      '<embed type="video/webm" src="/media/cc0-videos/flower.mp4" width="250" height="200">',
    );
  });
  it("it can render a <fieldset> element", () => {
    const html = (
      <fieldset>
        <legend>Choose your favorite monster</legend>
        <input type="radio" id="kraken" name="monster" />
      </fieldset>
    );
    expect(html).to.equal('<fieldset><legend>Choose your favorite monster</legend><input type="radio" id="kraken" name="monster"></fieldset>');
  });
  it("it can render a <figcaption> element", () => {
    const html = <figcaption>An elephant at sunset</figcaption>;
    expect(html).to.equal("<figcaption>An elephant at sunset</figcaption>");
  });
  it("it can render a <figure> element", () => {
    const html = (
      <figure>
        <img
          src="/media/cc0-images/elephant-660-480.jpg"
          alt="Elephant at sunset"
        />
        <figcaption>An elephant at sunset</figcaption>
      </figure>
    );
    expect(html).to.equal(
      '<figure><img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset"><figcaption>An elephant at sunset</figcaption></figure>',
    );
  });
  it("it can render a <footer> element", () => {
    const html = (
      <footer>
        <p>&copy; 2018 Gandalf</p>
      </footer>
    );
    expect(html).to.equal("<footer><p>© 2018 Gandalf</p></footer>");
  });
  it("it can render a <form> element", () => {
    const html = (
      <form action="server/invite" method="get">
        <input type="text" name="name" />
        <input type="submit" value="Send invitation" />
      </form>
    );
    expect(html).to.equal(
      '<form action="server/invite" method="get"><input type="text" name="name"><input type="submit" value="Send invitation"></form>',
    );
  });
  it("it can render an <h1> element", () => {
    const html = <h1>Title 1</h1>;
    expect(html).to.equal("<h1>Title 1</h1>");
  });
  it("it can render an <h2> element", () => {
    const html = <h2>Title 2</h2>;
    expect(html).to.equal("<h2>Title 2</h2>");
  });
  it("it can render an <h3> element", () => {
    const html = <h3>Title 3</h3>;
    expect(html).to.equal("<h3>Title 3</h3>");
  });
  it("it can render an <h4> element", () => {
    const html = <h4>Title 4</h4>;
    expect(html).to.equal("<h4>Title 4</h4>");
  });
  it("it can render an <h5> element", () => {
    const html = <h5>Title 5</h5>;
    expect(html).to.equal("<h5>Title 5</h5>");
  });
  it("it can render an <h6> element", () => {
    const html = <h6>Title 6</h6>;
    expect(html).to.equal("<h6>Title 6</h6>");
  });
  it("it can render a <head> element", () => {});
  it("it can render a <header> element", () => {});
  it("it can render an <hgroup> element", () => {});
  it("it can render an <hr> element", () => {});
  it("it can render an <html> element", () => {});
  it("it can render an <i> element", () => {});
  it("it can render an <iframe> element", () => {});
  it("it can render an <img> element", () => {});
  it("it can render an <input> element", () => {});
  it("it can render an <ins> element", () => {});
  it("it can render a <kbd> element", () => {});
  it("it can render a <keygen> element", () => {});
  it("it can render a <label> element", () => {});
  it("it can render a <legend> element", () => {});
  it("it can render a <li> element", () => {});
  it("it can render a <link> element", () => {});
  it("it can render a <main> element", () => {});
  it("it can render a <map> element", () => {});
  it("it can render a <mark> element", () => {});
  it("it can render a <menu> element", () => {});
  it("it can render a <menuitem> element", () => {});
  it("it can render a <meta> element", () => {});
  it("it can render a <meter> element", () => {});
  it("it can render a <nav> element", () => {});
  it("it can render a <noindex> element", () => {});
  it("it can render a <noscript> element", () => {});
  it("it can render an <object> element", () => {});
  it("it can render an <ol> element", () => {});
  it("it can render an <optgroup> element", () => {});
  it("it can render an <option> element", () => {});
  it("it can render an <output> element", () => {});
  it("it can render a <p> element", () => {});
  it("it can render a <param> element", () => {});
  it("it can render a <picture> element", () => {});
  it("it can render a <pre> element", () => {});
  it("it can render a <progress> element", () => {});
  it("it can render a <q> element", () => {});
  it("it can render a <rp> element", () => {});
  it("it can render a <rt> element", () => {});
  it("it can render a <ruby> element", () => {});
  it("it can render a <s> element", () => {});
  it("it can render a <samp> element", () => {});
  it("it can render a <slot> element", () => {});
  it("it can render a <script> element", () => {});
  it("it can render a <section> element", () => {});
  it("it can render a <select> element", () => {});
  it("it can render a <small> element", () => {});
  it("it can render a <source> element", () => {});
  it("it can render a <span> element", () => {});
  it("it can render a <strong> element", () => {});
  it("it can render a <style> element", () => {});
  it("it can render a <sub> element", () => {});
  it("it can render a <summary> element", () => {});
  it("it can render a <sup> element", () => {});
  it("it can render a <table> element", () => {});
  it("it can render a <template> element", () => {});
  it("it can render a <tbody> element", () => {});
  it("it can render a <td> element", () => {});
  it("it can render a <textarea> element", () => {});
  it("it can render a <tfoot> element", () => {});
  it("it can render a <th> element", () => {});
  it("it can render a <thead> element", () => {});
  it("it can render a <time> element", () => {});
  it("it can render a <title> element", () => {});
  it("it can render a <tr> element", () => {});
  it("it can render a <track> element", () => {});
  it("it can render a <u> element", () => {});
  it("it can render a <ul> element", () => {});
  it("it can render a <var> element", () => {});
  it("it can render a <video> element", () => {});
  it("it can render a <wbr> element", () => {});
  it("it can render a <webview> element", () => {});
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
  it("it can render a <g> element", () => {});
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
