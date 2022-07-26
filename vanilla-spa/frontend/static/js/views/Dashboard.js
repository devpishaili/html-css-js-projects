import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>
       Welcome back, User!
    </h1>

    <p>lorem ipsum is actually a lanuage in the language that you understand not.
        <a href="/posts" data-link>View recent posts</a>
    </p>
    `;
  }
}
