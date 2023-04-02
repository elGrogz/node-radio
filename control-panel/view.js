// main component for the terminal tool.
// It sets its screen, gives it a title, adds an escape key to stop the process
const blessed = require("neo-blessed");

class View {
  constructor() {
    const screen = blessed.screen({ smartCSR: true });
    screen.title = "Node Radio";
    screen.key(["escape", "C-c"], () => process.exit(0));
    this._screen = screen;
  }

  // run in the index to add all the boxes to this main view component
  appendBoxes(boxes) {
    console.log("appending boxes");
    for (const box of boxes) {
      this._screen.append(box);
      console.log("box length: ", this._screen.children.length);
    }
  }

  // the neoblessed method to render the screen in the terminal
  render() {
    this._screen.render();
  }
}

module.exports = View;
