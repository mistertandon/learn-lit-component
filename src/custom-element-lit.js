// import {
//   LitElement,
//   html
// } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import {
  LitElement,
  html
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";
import { customElement } from "https://unpkg.com/@lit/decorators?module";
// import { customElement } from '@lit/decorators';

@customElement("custom-element-lit")
export class CustomElementLit extends LitElement {
  render() {
    return html`
      <div class="custom-element-lit--conatiner">
        <h4>Part 6: How customElement decorator works in Lit Component</h4>
      </div>
    `;
  }
}
customElements.define('custom-element-lit',CustomElementLit);
// custom-element-lit
