// Box to show which controls are required depending on the other components displayed
const TerminalBox = require("./terminalBox");
const { keys } = require("./keys");

class Controls extends TerminalBox {
  constructor(config) {
    super(config);
    this.setPlaylistTips();
  }

  setPlaylistTips() {
    this.box.content =
      `${keys.FOCUS_QUEUE} - focus queue | ${keys.SCROLL_UP} - go up\n` +
      `${keys.QUEUE_ADD} - enqueue song | ${keys.SCROLL_DOWN} - go down\n`;
  }

  setQueueTips() {
    this.box.content =
      `${keys.MOVE_UP} - move song up | ${keys.SCROLL_UP}-go up\n` +
      `${keys.MOVE_DOWN} - move song down | ${keys.SCROLL_DOWN}-go down\n` +
      `${keys.FOCUS_PLAYLIST} - focus playlist | ${keys.QUEUE_REMOVE} - dequeue song`;
  }
}

module.exports = Controls;
