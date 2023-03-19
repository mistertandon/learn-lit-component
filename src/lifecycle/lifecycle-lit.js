import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class LifecycleLit extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
      data: { attribute: true, type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.data = 0;
    this.countClickHandler = this.countClickHandler.bind(this);
    console.log("LifecycleLit -> constructor");
  }

  // static get observedAttributes() {
  //   console.log("LifecycleLit -> observedAttributes");
  //   return ["data"];
  // }

  connectedCallback() {
    super.connectedCallback();
    console.log("LifecycleLit -> connectedCallback");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("LifecycleLit -> disconnectedCallback");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    console.log("attributeChangedCallback");
    if (name === "data") {
      this.count = parseInt(this.count);
      this.requestUpdate();
    }
  }
  countClickHandler() {
    this.count++;
    this.setAttribute("data", this.count.toString());
  }

  render() {
    return html`
      <section class="lifecycle-lit--container">
        <h4>Lit component Lifycycle</h4>
        <div class="count-btn--container">
          <button @click=${this.countClickHandler}>Click</button>
          <div>Counter: ${this.count}</div>
        </div>
      </section>
    `;
  }
}
customElements.define("lifecycle-lit", LifecycleLit);
