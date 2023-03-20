import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

const HelloMixin = (base) =>
  class extends base {
    sayHello() {
      console.log("HelloMixin ->sayHello()");
    }
  };

class HelloLitMixin extends HelloMixin(LitElement) {
  render() {
    return html`
      <section class="hello-lit--container">
        <h4>Mixin</h4>
        <button @click=${this.sayHello}>Click</button>
      </section>
    `;
  }
}
customElements.define("hello-lit-mixin", HelloLitMixin);
