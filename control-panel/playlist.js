const TerminalItemBox = require("./terminalItemBox");
const { keys } = require("./keys");

class Playlist extends TerminalItemBox {
  _circleChildrenUp() {
    const temp = this.box.children[this.box.children.length - 1].content;
    this.box.children.reduceRight((lowerChild, upperChild) => {
      lowerChild.content = upperChild.content;
      return upperChild;
    });

    this.box.children[1].content = temp;
  }

  _circleChildrenDown() {
    const temp = this.box.children[1].content;
    this.box.children.reduce((upperChild, lowerChild, index) => {
      if (index > 1) {
        upperChild.content = lowerChild.content;
      }
      return upperChild;
    });

    this.box.children[this.box.children.length - 1].content = temp;
  }

  _circleList(key) {
    if (this._focusIndexer.get() === 1 && key === keys.SCROLL_UP) {
      this._circleChildrenUp();
    } else if (
      this._focusIndexer.get() === this._getHeight() &&
      key === keys.SCROLL_DOWN
    ) {
      this._circleChildrenDown;
    }
  }
}

module.exports = Playlist;
