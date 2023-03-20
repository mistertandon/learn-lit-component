import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class LoopLit extends LitElement {
  static get properties() {
    return {
      colors: { type: Array },
    };
  }
  constructor() {
    super();
    this.colors = ["red", "green", "blue"];
  }

  render() {
    const colorTemplate = [];
    for (let i = 0; i < this.colors.length; i++) {
      colorTemplate.push(html`<li>${this.colors[i]}</li>`);
    }

    return html`
      <section class="map-lit--container">
        <h4>Array rendering</h4>
        <div>${this.colors}</div>
        <ul>
          ${colorTemplate}
        </ul>
      </section>
    `;
  }
}

customElements.define("loop-lit", LoopLit);
