import {LitElement, html} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
class MyComponent extends LitElement {

render (){
  return html`
    <h1>Hello from lit component</h1>
  `
}
}
console.log('atleast-in');
customElements.define('my-component', MyComponent);