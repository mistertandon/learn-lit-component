import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

import { directive } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js?module";

const ifVisible = directive((flag, content) => (part) => {
console.log(flag, content, part);
  if (flag) {
    part.setValue(content);
  } else {
    part.setValue("");
  }
});

class CdIfVisiblePartLit extends LitElement {
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
console.log('this.visibility', this.visibility);
  }

  render() {
    return html` <section class="custom-directive-lit--conatiner">
      <h4>Custom Directive</h4>
      <button @click=${this.toggleVisibility}>Click</button>
      <div>${ifVisible(this.visibility, html`<p>I am visible</p>`)(this)}</div>
    </section>`;
  }
}

customElements.define("cd-if-visible-part-lit", CdIfVisiblePartLit);