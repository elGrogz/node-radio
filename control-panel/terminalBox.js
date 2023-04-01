const blessed = require("neo-blessed");

class TerminalBox {
  constructor(config) {
    this.box = blessed.box(config);
  }
}

module.exports = TerminalBox;
