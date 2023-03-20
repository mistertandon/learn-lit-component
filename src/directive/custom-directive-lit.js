import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

const ifVisible = (flag, content) => (flag ? content : "");

class CustomDirectiveLit extends LitElement {

  static get properties() {
    return {
      visibility: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.visibility = true;
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.visibility = !this.visibility;
    this.requestUpdate("visibility");
  }

  render() {
    return html` <section class="custom-directive-lit--conatiner">
      <h4>Custom Directive</h4>
      <button @click=${this.toggleVisibility}>Click</button>
      <div>${ifVisible(this.visibility, html`<p>I am visible</p>`)}</div>
    </section>`;
  }
}

customElements.define("custom-directive-lit", CustomDirectiveLit);
