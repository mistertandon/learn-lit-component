import { LitElement, html } from "https://jspm.dev/lit-element@2.4.0";

import { repeat } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js?module";

class RepeatParentLit extends LitElement {
  render() {
    return html`
      <section>
        <h4>Repeat container</h4>
        <repeat-lit
          .employees=${[
            { id: 1, familyName: "Doe", givenName: "John" },
            { id: 2, familyName: "Smith", givenName: "Jane" },
            { id: 3, familyName: "Johnson", givenName: "Bob" },
          ]}
        ></repeat-lit>
      </section>
    `;
  }
}

customElements.define("repeat-parent-lit", RepeatParentLit);

class RepeatLit extends LitElement {
  static get properties() {
    return {
      employees: { type: Array },
    };
  }

  constructor() {
    super();
    this.employees = [];
  }

  render() {
    console.log("this.employee", this.employees);
    return html`
      <section>
        <h4>Repeat directive</h4>
        <ul>
            ${repeat(
              this.employees,
              (employee) => employee.id,
              (employee) => html`<li>${employee.id}</li> `
            )}
        </ul>
      </section>
    `;
  }
}

customElements.define("repeat-lit", RepeatLit);
