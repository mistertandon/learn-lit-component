import {
  LitElement,
  html,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class ReactiveLit extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  render() {
    return html`
      <section class="flex flex-row">
        <h4>Rective lit: 2</h4>
        <div>
          <button @click=${this.increment}>Counter</button>
          <p>${this.count}</p>
        </div>
        <div>
          <p>
            In this example, we've defined a ReactiveLit class that includes a
            reactive property called count. To define a reactive property in
            Lit, we use the static properties getter method to return an object
            that defines the name and type of each property.
          </p>
          <p>In the constructor, we initialize the count property to 0.</p>
          <p>
            In the render() method, we use template literals to include the
            value of the count property in the rendered HTML, and we also
            include a button element that triggers the increment() method when
            clicked.
          </p>
          <p>
            The increment() method simply increments the value of the count
            property.
          </p>
          <p>
            When the count property is updated, Lit will automatically re-render
            the component and update the rendered HTML to reflect the new value
            of the property.
          </p>
          <p>
            So, in this example, every time the user clicks the "Increment"
            button, the count property will be incremented and the updated value
            will be displayed in the rendered HTML.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("reactive-lit", ReactiveLit);
