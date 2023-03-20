import {
  LitElement,
  html,
ifDefined
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js?module";

class IfDefinedLit extends LitElement {
  constructor() {
    super();
    this.defineUrl = this.defineUrl.bind(this);
  }

  static get properties() {
    return {
      url: { type: String },
    };
  }
  defineUrl() {
    this.url = "https://github.com/mistertandon";
    this.requestUpdate("url");
  }
  render() {
    return html`
      <section class="is-defined-lit--container">
        <h4>isDefined implementation</h4>
        <div><a href=${ifDefined(this.url)}>Url</a></div>
        <button @click=${this.defineUrl}>Click</button>
      </section>
    `;
  }
}

customElements.define("if-defined-lit", IfDefinedLit);
