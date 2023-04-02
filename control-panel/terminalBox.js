// parent class (will be abstract and never initialised by itself) to give each component it's own box
const blessed = require("neo-blessed");

class TerminalBox {
  constructor(config) {
    this.box = blessed.box(config);
  }
}

module.exports = TerminalBox;
