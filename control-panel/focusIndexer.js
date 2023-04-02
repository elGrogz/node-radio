// this class is used to tell the parent class which item (child box) is currently selected
class _FocusIndexer {
  constructor({ getIndexLimit }) {
    this._index = 1;
    this._getIndexLimit = getIndexLimit;
  }

  get() {
    return this._index;
  }

  increment() {
    if (this._index < this._getIndexLimit) {
      this._index++;
    }
  }

  decrement() {
    if (this._index > 1) {
      this._index--;
    }
  }
}

module.exports = _FocusIndexer;
