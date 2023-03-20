import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class MapLit extends LitElement {
  static get properties() {
    return {
      colors: {},
    };
  }
  constructor() {
    super();
    this.colors = ["red", "green", "blue"];
  }
  render() {
    return html`
      <section class="map-lit--container">
        <h4>Array rendering</h4>
        <div>${this.colors}</div>
        <ul>
          ${this.colors.map((color) => html`<li>${color}</li>`)}
        </ul>
      </section>
    `;
  }
}

customElements.define("map-lit", MapLit);
