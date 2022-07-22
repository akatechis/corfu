/* @jsx h */
import { h } from "../mod.ts";
import { expect } from "chai";

/*
 * These tests verify that the types are sensible, and work correctly. Most of these are examples taken from MDN documentation website
 */

Deno.test("h() can render an <a> element", () => {
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
Deno.test("h() can render an <abbr> element", () => {
  const html = <abbr class="text" title="JavaScript XML">JSX</abbr>;
  expect(html).to.equal(
    '<abbr class="text" title="JavaScript XML">JSX</abbr>',
  );
});
Deno.test("h() can render an <address> element", () => {
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
Deno.test("h() can render an <area> element with rect shape", () => {
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
Deno.test("h() can render an <area> element with circle shape", () => {
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
Deno.test("h() can render an <area> element with poly shape", () => {
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
Deno.test("h() can render an <article> element", () => {
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
Deno.test("h() can render an <aside> element", () => {
  const html = (
    <aside>
      <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
    </aside>
  );
  expect(html).to.equal(
    "<aside><p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p></aside>",
  );
});
Deno.test("h() can render an <audio> element", () => {
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
Deno.test("h() can render a <b> element", () => {
  const html = <b class="definition">chemistry</b>;
  expect(html).to.equal('<b class="definition">chemistry</b>');
});
Deno.test("h() can render a <base> element", () => {
  const html = <base href="https://www.example.com/" target="_blank" />;
  expect(html).to.equal(
    '<base href="https://www.example.com/" target="_blank">',
  );
});
Deno.test("h() can render a <bdi> element", () => {
  const html = <bdi class="name">الرجل القوي إيان</bdi>;
  expect(html).to.equal('<bdi class="name">الرجل القوي إيان</bdi>');
});
Deno.test("h() can render a <bdo> element", () => {
  const html = <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>;
  expect(html).to.equal(
    '<bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>',
  );
});
Deno.test("h() can render a <big> element", () => {
  const html = <big>HELLO!</big>;
  expect(html).to.equal("<big>HELLO!</big>");
});
Deno.test("h() can render a <blockquote> element", () => {
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
Deno.test("h() can render a <body> element", () => {
  const html = (
    <body>
      <p>hello</p>world!
    </body>
  );
  expect(html).to.equal("<body><p>hello</p> world!</body>");
});
Deno.test("h() can render a <br> element", () => {
  const html = <br />;
  expect(html).to.equal("<br>");
});
Deno.test("h() can render a <button> element", () => {
  const html = <button disabled type="button">Click!</button>;
  expect(html).to.equal('<button disabled type="button">Click!</button>');
});
Deno.test("h() can render a <canvas> element", () => {
  const html = (
    <canvas width="300" height="300">
      Canvas not supported!
    </canvas>
  );
  expect(html).to.equal(
    '<canvas width="300" height="300">Canvas not supported!</canvas>',
  );
});
Deno.test("h() can render a <caption> element", () => {
  const html = <caption>He-Man and Skeletor facts</caption>;
  expect(html).to.equal("<caption>He-Man and Skeletor facts</caption>");
});
Deno.test("h() can render a <cite> element", () => {
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
Deno.test("h() can render a <code> element", () => {
  const html = <code>function hello() {"{}"}</code>;
  expect(html).to.equal("<code>function hello() {}</code>");
});
Deno.test("h() can render a <col> element", () => {
  const html = <col span={2} />;
  expect(html).to.equal('<col span="2">');
});
Deno.test("h() can render a <colgroup> element", () => {
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
Deno.test("h() can render a <data> element", () => {
  const html = <data value="420">hello</data>;
  expect(html).to.equal('<data value="420">hello</data>');
});
Deno.test("h() can render a <datalist> element", () => {
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
Deno.test("h() can render a <dd> element", () => {
  const html = <dd>A sea serpent.</dd>;
  expect(html).to.equal("<dd>A sea serpent.</dd>");
});
Deno.test("h() can render a <del> element", () => {
  const html = <del>strikeout</del>;
  expect(html).to.equal("<del>strikeout</del>");
});
Deno.test("h() can render a <details> element", () => {
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
Deno.test("h() can render a <dfn> element", () => {
  const html = <dfn id="def-validator">validator</dfn>;
  expect(html).to.equal('<dfn id="def-validator">validator</dfn>');
});
Deno.test("h() can render a <dialog> element", () => {
  const html = (
    <dialog open>
      <p>Greetings, one and all!</p>
    </dialog>
  );
  expect(html).to.equal(
    "<dialog open><p>Greetings, one and all!</p></dialog>",
  );
});
Deno.test("h() can render a <div> element", () => {
  const html = <div id="foo">hello world</div>;
  expect(html).to.equal('<div id="foo">hello world</div>');
});
Deno.test("h() can render a <dl> element", () => {
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
Deno.test("h() can render a <dt> element", () => {
  const html = <dt>Beast of Bodmin</dt>;
  expect(html).to.equal("<dt>Beast of Bodmin</dt>");
});
Deno.test("h() can render an <em> element", () => {
  const html = <em>go!</em>;
  expect(html).to.equal("<em>go!</em>");
});
Deno.test("h() can render an <embed> element", () => {
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
Deno.test("h() can render a <fieldset> element", () => {
  const html = (
    <fieldset>
      <legend>Choose your favorite monster</legend>
      <input type="radio" id="kraken" name="monster" />
    </fieldset>
  );
  expect(html).to.equal(
    '<fieldset><legend>Choose your favorite monster</legend><input type="radio" id="kraken" name="monster"></fieldset>',
  );
});
Deno.test("h() can render a <figcaption> element", () => {
  const html = <figcaption>An elephant at sunset</figcaption>;
  expect(html).to.equal("<figcaption>An elephant at sunset</figcaption>");
});
Deno.test("h() can render a <figure> element", () => {
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
Deno.test("h() can render a <footer> element", () => {
  const html = (
    <footer>
      <p>&copy; 2018 Gandalf</p>
    </footer>
  );
  expect(html).to.equal("<footer><p>© 2018 Gandalf</p></footer>");
});
Deno.test("h() can render a <form> element", () => {
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
Deno.test("h() can render an <h1> element", () => {
  const html = <h1>Title 1</h1>;
  expect(html).to.equal("<h1>Title 1</h1>");
});
Deno.test("h() can render an <h2> element", () => {
  const html = <h2>Title 2</h2>;
  expect(html).to.equal("<h2>Title 2</h2>");
});
Deno.test("h() can render an <h3> element", () => {
  const html = <h3>Title 3</h3>;
  expect(html).to.equal("<h3>Title 3</h3>");
});
Deno.test("h() can render an <h4> element", () => {
  const html = <h4>Title 4</h4>;
  expect(html).to.equal("<h4>Title 4</h4>");
});
Deno.test("h() can render an <h5> element", () => {
  const html = <h5>Title 5</h5>;
  expect(html).to.equal("<h5>Title 5</h5>");
});
Deno.test("h() can render an <h6> element", () => {
  const html = <h6>Title 6</h6>;
  expect(html).to.equal("<h6>Title 6</h6>");
});
Deno.test("h() can render a <head> element", () => {});
Deno.test("h() can render a <header> element", () => {});
Deno.test("h() can render an <hgroup> element", () => {});
Deno.test("h() can render an <hr> element", () => {});
Deno.test("h() can render an <html> element", () => {});
Deno.test("h() can render an <i> element", () => {});
Deno.test("h() can render an <iframe> element", () => {});
Deno.test("h() can render an <img> element", () => {});
Deno.test("h() can render an <input> element", () => {});
Deno.test("h() can render an <ins> element", () => {});
Deno.test("h() can render a <kbd> element", () => {});
Deno.test("h() can render a <keygen> element", () => {});
Deno.test("h() can render a <label> element", () => {});
Deno.test("h() can render a <legend> element", () => {});
Deno.test("h() can render a <li> element", () => {});
Deno.test("h() can render a <link> element", () => {});
Deno.test("h() can render a <main> element", () => {});
Deno.test("h() can render a <map> element", () => {});
Deno.test("h() can render a <mark> element", () => {});
Deno.test("h() can render a <menu> element", () => {});
Deno.test("h() can render a <menuitem> element", () => {});
Deno.test("h() can render a <meta> element", () => {});
Deno.test("h() can render a <meter> element", () => {});
Deno.test("h() can render a <nav> element", () => {});
Deno.test("h() can render a <noindex> element", () => {});
Deno.test("h() can render a <noscript> element", () => {});
Deno.test("h() can render an <object> element", () => {});
Deno.test("h() can render an <ol> element", () => {});
Deno.test("h() can render an <optgroup> element", () => {});
Deno.test("h() can render an <option> element", () => {});
Deno.test("h() can render an <output> element", () => {});
Deno.test("h() can render a <p> element", () => {});
Deno.test("h() can render a <param> element", () => {});
Deno.test("h() can render a <picture> element", () => {});
Deno.test("h() can render a <pre> element", () => {});
Deno.test("h() can render a <progress> element", () => {});
Deno.test("h() can render a <q> element", () => {});
Deno.test("h() can render a <rp> element", () => {});
Deno.test("h() can render a <rt> element", () => {});
Deno.test("h() can render a <ruby> element", () => {});
Deno.test("h() can render a <s> element", () => {});
Deno.test("h() can render a <samp> element", () => {});
Deno.test("h() can render a <slot> element", () => {});
Deno.test("h() can render a <script> element", () => {});
Deno.test("h() can render a <section> element", () => {});
Deno.test("h() can render a <select> element", () => {});
Deno.test("h() can render a <small> element", () => {});
Deno.test("h() can render a <source> element", () => {});
Deno.test("h() can render a <span> element", () => {});
Deno.test("h() can render a <strong> element", () => {});
Deno.test("h() can render a <style> element", () => {});
Deno.test("h() can render a <sub> element", () => {});
Deno.test("h() can render a <summary> element", () => {});
Deno.test("h() can render a <sup> element", () => {});
Deno.test("h() can render a <table> element", () => {});
Deno.test("h() can render a <template> element", () => {});
Deno.test("h() can render a <tbody> element", () => {});
Deno.test("h() can render a <td> element", () => {});
Deno.test("h() can render a <textarea> element", () => {});
Deno.test("h() can render a <tfoot> element", () => {});
Deno.test("h() can render a <th> element", () => {});
Deno.test("h() can render a <thead> element", () => {});
Deno.test("h() can render a <time> element", () => {});
Deno.test("h() can render a <title> element", () => {});
Deno.test("h() can render a <tr> element", () => {});
Deno.test("h() can render a <track> element", () => {});
Deno.test("h() can render a <u> element", () => {});
Deno.test("h() can render a <ul> element", () => {});
Deno.test("h() can render a <var> element", () => {});
Deno.test("h() can render a <video> element", () => {});
Deno.test("h() can render a <wbr> element", () => {});
Deno.test("h() can render a <webview> element", () => {});
