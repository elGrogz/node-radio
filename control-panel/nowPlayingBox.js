const blessed = require("neo-blessed");
const TerminalItemBox = require("./terminalItemBox");

class NowPlaying extends TerminalItemBox {
  _createBoxChild(content) {
    return blessed.box({
      ...this._childConfig,
      top: 0,
      content: `>>> ${content}`,
    });
  }
}

module.exports = NowPlaying;
