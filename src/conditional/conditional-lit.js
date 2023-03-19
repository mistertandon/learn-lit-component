import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
class ConditionalLit extends LitElement {
  static get properties() {
    return {
      isVisible: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.isVisible = false;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.requestUpdate("visibility");
  }

  render() {
    return html`
      <section class="conditional-lit--container">
        <h4>Conditional in Lit</h4>
        <button @click=${this.toggleVisibility}>Toggle</button>
        <div>
          ${this.isVisible ? html` <p>Visible</p> ` : html` <p>Hidden</p> `}
        </div>
      </section>
    `;
  }
}

customElements.define("conditional-lit", ConditionalLit);
