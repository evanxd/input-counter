(function(exports) {
  function InputCounter () {
    this._registerKeyboardEvent();
    this._registerMouseEvent();
  }

  InputCounter.prototype = {
    _keyboardInputTimes: 0,
    _mouseInputTimes: 0,

    // Overwrite this function to listen the input events and get the input times number.
    oninput: function() {},

    _registerKeyboardEvent: function() {
      var that = this;
      window.onkeydown = function (e) {
        that._keyboardInputTimes++;
        that.oninput({
          inputTimes: that._keyboardInputTimes + that._mouseInputTimes,
          keyboardInputTimes: that._keyboardInputTimes,
          mouseInputTimes: that._mouseInputTimes
        });
      };
    },

    _registerMouseEvent: function() {
      var that = this;
      window.onmousedown = function (e) {
        that._mouseInputTimes++;
        that.oninput({
          inputTimes: that._keyboardInputTimes + that._mouseInputTimes,
          keyboardInputTimes: that._keyboardInputTimes,
          mouseInputTimes: that._mouseInputTimes
        });
      };
    }
  };

  exports.InputCounter = InputCounter;
})(window);
