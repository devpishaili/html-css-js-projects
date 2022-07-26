import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
    <h1>
      Posts
    </h1>

    <p>All available posts should show here </p>
    `;
  }
}
