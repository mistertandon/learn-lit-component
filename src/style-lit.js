import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class StyleLit extends LitElement {
  static get styles() {
    return css`

      /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
      */

      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      .style-lit--container{
          display:flex;
          flex-direction: column;
          gap: 10px;
      }
    `;
  }
  render() {
    return html` <div>
      <h4>Part 3: Style Lit Component</h4>
      <div class="style-lit--container">
        <p>
          In this example, we've defined a MyComponent class that includes a
          styles static getter method that returns a CSS template literal using
          the css function from Lit. The CSS rules defined in this template will
          be scoped to the component and will not affect other elements on the
          page.
        </p>
        <p>
          In the render() method, we've included some HTML elements (a heading
          and a button) that will be styled by the CSS rules defined in the
          styles template.
        </p>
        <p>
          When this component is rendered on the page, the heading will be
          displayed in red text, and the button will have a blue background,
          white text, and a 10px padding.
        </p>
        <p>
          Note that you can use any CSS rules and selectors in the styles
          template, just like you would in a regular CSS file. You can also use
          variables, mixins, and other advanced CSS features to create reusable
          and flexible styles for your components.
        </p>
      </div>
    </div>`;
  }
}

customElements.define("style-lit", StyleLit);
