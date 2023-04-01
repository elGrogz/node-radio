const blessed = require("neo-blessed");

class View {
  constructor() {
    const screen = blessed.screen({ smartCSR: true });
    screen.title = "Node Radio";
    screen.key(["escape", "C-c"], () => process.exit(0));
    this._screen = screen;
  }

  appendBoxes(boxes) {
    for (const box of boxes) {
      this._screen.append(box);
    }
  }

  render() {
    this._screen.render();
  }
}
