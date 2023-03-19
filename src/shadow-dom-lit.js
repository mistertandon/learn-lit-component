import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
class ShadowDomLit extends LitElement {
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  render() {
    return html`
      <style>
        .shadow-dom-lit--container {
          display: flex;
          flex-direction: column;
        }
      </style>
      <div class="shadow-dom-lit--container">
        <h4>Part 3: Shadow DOM Lit Component</h4>
        <div>
          <p>
            In this example, we've defined a ShadowDomLit class that overrides
            the createRenderRoot() method to create a Shadow DOM root for the
            component. We've set the mode option to 'open' to allow the
            component's Shadow DOM to be accessed and manipulated by other code
            on the page.
          </p>
          <p>
            In the render() method, we've included a style element with some CSS
            rules to style the component's content. This style element will be
            included in the component's Shadow DOM and will not affect other
            elements on the page.
          </p>
          <p>
            When this component is rendered on the page, the heading and button
            will be displayed with the styles defined in the style element.
            Because we've used Shadow DOM, these styles will be scoped to the
            component and will not affect other elements on the page.
          </p>
          <p>
            Note that using Shadow DOM in this way is optional in Lit. If you
            don't need the isolation and scoping provided by Shadow DOM, you can
            simply return this from the createRenderRoot() method to render the
            component's content in the main document DOM instead.
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define("shadow-dom-lit", ShadowDomLit);
