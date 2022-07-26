import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
    <h1>
       Settings!
    </h1>

    <p>
        You can edit all your settings here!
    </p>
    `;
  }
}
