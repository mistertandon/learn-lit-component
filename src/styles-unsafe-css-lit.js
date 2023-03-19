import {
  LitElement,
  html,
  css,
  unsafeCSS,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

const styles = `@import url('https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css')`;

class StylesUnsafeCssLit extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    return html` <div>
      <h4>Part 4: Style Unsafe CSS Lit Component</h4>
      <div class="style-lit--container">
        <p>
          To add an external CSS reference to a Lit component, you can use the
          unsafeCSS directive provided by Lit. The unsafeCSS directive allows
          you to add CSS styles to a Lit component as a string literal, which
          can include references to external stylesheets.
        </p>
        <p>
          In this example, we define the styles constant as a string that
          includes the CSS styles we want to apply to the component, including
          an @import rule that references an external stylesheet. We then pass
          the styles constant to the unsafeCSS directive, which returns a
          CSSResult object that can be used as a value for the styles static
          getter of the component. Finally, we use the html template tag to
          define the component's HTML, which can include the styles defined in
          the styles constant.
        </p>
        <p>
          Note that using unsafeCSS can potentially introduce security
          vulnerabilities if the CSS styles are not sanitized properly, so be
          sure to validate any user input or untrusted content before using it
          in your CSS.
        </p>
      </div>
    </div>`;
  }
}

customElements.define("styles-unsafe-css-lit", StylesUnsafeCssLit);
