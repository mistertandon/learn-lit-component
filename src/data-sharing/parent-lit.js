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

  connectedCallBack() {
    super.connectedCallBack();
    this.addEventListener("son-event", this.sonEventHandler);
  }

  disconnectedCallBack() {
    super.disconnectedCallBack();
    this.removeEventListener("son-event", this.sonEventHandler);
  }

  sonEventHandler(data) {
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

  recieveDataEventHandler(data) {
    console.log("parent", data);
    const sonEvent = new CustomEvent("son-event", { detail: data });
    this.dispatchEvent(sonEvent);
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
