import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class BasicLit extends LitElement {
  render() {
    return html`
      <div class="flex flex-row">
        <h4>Lit Component: 1</h4>
        <p>
          In Lit, a component is a custom HTML element that encapsulates a piece
          of functionality or UI in your application. A component is defined
          using the LitElement base class, which provides a set of APIs and
          lifecycle methods for working with the component. To define a basic
          Lit component, you would typically extend the LitElement class and
          define a render() method that returns an HTML template.
        </p>
        <p>
          In this example, we've defined a BasicLit class that extends
          LitElement and overrides the render() method to return an HTML
          template using the html template tag from Lit.
        </p>
      </div>
      <script src="https://gist.github.com/mistertandon/16a514cce3b8f7b85a0bec1529218ae2.js"></script>
    `;
  }
}

customElements.define("basic-lit", BasicLit);
