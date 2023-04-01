const blessed = require("neo-blessed");
const Terminal = require("./terminalBox");

class Controls extends Terminal {
  constructor(config) {
    this.box = blessed.box(config);
  }
}
