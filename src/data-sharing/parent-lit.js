import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class SonLit extends LitElement {
  constructor() {
    super();
    this.sendDataClickHandler = this.sendDataClickHandler.bind(this);
  }

  sendDataClickHandler() {
    let data = { message: "Hi Sister" };
    this.dispatchEvent(new CustomEvent("send-data", { detail: data }));
  }

  render() {
    return html`
      <div class="son--container">
        <h4>Son Lit component</h4>
        <button @click=${this.sendDataClickHandler}>Send Data</button>
      </div>
    `;
  }
}
customElements.define("son-lit", SonLit);

class DaughterLit extends LitElement {
  constructor() {
    super();
    this.sonEventHandler = this.sonEventHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("son-event", this.sonEventHandler);
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("son-event", this.sonEventHandler);
console.log('disconnectedCallback');
  }

  sonEventHandler(event) {
    const data = event.detail;
    console.log("sonData", data);
  }

  render() {
    return html`
      <div class="daughter--container">
        <h4>Daughter Lit component</h4>
      </div>
    `;
  }
}

customElements.define("daughter-lit", DaughterLit);

class ParentLit extends LitElement {
  constructor() {
    super();
    this.recieveDataEventHandler = this.recieveDataEventHandler.bind(this);
  }

  recieveDataEventHandler(eventData) {
    const { detail: data } = eventData;
    console.log("parent", data);

    this.dispatchEvent(new CustomEvent("son-event", { detail: data }));
  }

  render() {
    return html`
      <div class="parent--container">
        <h4>Parent Lit component</h4>
        <son-lit @send-data=${this.recieveDataEventHandler}></son-lit>
        <div id="daughter-lit--parent-container">
          <daughter-lit></daughter-lit>
        </div>
      </div>
    `;
  }
}

customElements.define("parent-lit", ParentLit);
