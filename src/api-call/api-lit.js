import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class ApiLit extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      isLoading: { type: Boolean },
      errorFlag: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.data = null;
    this.isLoading = false;
    this.fetchData = this.fetchData.bind(this);
    this.errorFlag = false;
  }

  async fetchData() {
    try {
      this.isLoading = true;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("response", response);

      const jsonData = await response.json();
      this.data = jsonData;
      this.isLoading = false;
      console.log("jsonData", jsonData);
    } catch (error) {
      this.isLoading = false;
      this.errorFlag = true;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("API Lit connected to the DOM");
    this.fetchData();
  }

  render() {
    if (this.errorFlag) {
      return html` <div>Error occured</div> `;
    } else if (this.isLoading) {
      return html` <div>Content Loading</div> `;
    } else if (this.data) {
      return html` <div>Title: ${this.data.title}</div> `;
    } else {
      return html` <div>No data found</div> `;
    }
  }
}

customElements.define("api-lit", ApiLit);
