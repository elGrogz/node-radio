const TerminalBox = require("./terminalBox");
const _FocusIndexer = require("./focusIndexer");
const { keys } = require("./keys");

// the main components in the view will have child items, so this class will take care of them
class TerminalItemBox extends TerminalBox {
  constructor({ config, childConfig, bgBlur, bgFocus }) {
    super(config);
    this._childConfig = childConfig;
    this._bgBlur = bgBlur;
    this._bgFocus = bgFocus;
    this._focusIndexer = new _FocusIndexer({
      getIndexLimit: this._getNavigationLimit.bind(this),
    });
  }

  _getHeight() {
    // neoblessed boxes have two invisible items prepended so we need this
    return this.box.height - 2;
  }

  _getNavigationLimit() {
    // this returns whatever is smaller - the box's height minus 2, or the amount of child boxes in the main box
    // this is useful for setting the maximum scroll position of the box so users cannot scroll past the content
    return Math.min(this.box.children.length - 1, this._getHeight());
  }

  _setActiveChildColor(color) {
    // set the active child by getting the current index from the focus indexer and set the active array element of the child boxes to that index
    const activeChild = this.box.children[this._focusIndexer.get()];

    // if the active child has been set, set its style.bg to the colour passed in
    if (activeChild) {
      activeChild.style.bg = color;
    }
  }

  focus() {
    // when focussing a child box, set the styling to the focus style that's set when creating the terminal item box class
    this._setActiveChildColor(this._bgFocus);
    this.box.focus();
  }

  blur() {
    // when blurring a child box, set the styling to the blur style that's set when creating the terminal item box class
    this._setActiveChildColor(this._bgBlur);
  }

  scroll(scrollKey) {
    // prevent user from scrolling if there is only one child box
    if (this.box.children.length === 1) {
      return;
    }

    const unfocusedIndex = this._focusIndexer.get();
    const unfocusedChild = this.box.children[unfocusedIndex];
    unfocusedChild.style.bg = this._bgBlur;

    if (scrollKey === keys.SCROLL_UP) {
      this._focusIndexer.decrement();
    } else if (scrollKey === keys.SCROLL_DOWN) {
      this._focusIndexer.increment();
    }

    const focusedIndex = this._focusIndexer.get();
    const focusedChild = this.box.children[focusedIndex];
    focusedChild.bg.style = this._bgFocus;
  }

  _createBoxChild() {
    throw new Error("method not implemented");
  }

  createBoxChildAndAppend(content) {
    const boxChild = this._createBoxChild(content);
    this.box.append(boxChild);
  }
}

module.exports = TerminalItemBox;
