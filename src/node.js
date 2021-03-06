(function(exports) {
  /*globals Base */
  "use strict";
  var Node = Base.extend({
    constructor: function(config) {
      // let config override instance properties
      this.base(config);
    },
    start: function() {},
    end: function() {},
    run: function() { console.log("Warning: run of " + this.title + " not implemented!"); this.fail(); },
    setControl: function(control) {
      this._control = control;
    },
    running: function() {
      this._control.running(this);
    },
    success: function() {
      this._control.success();
    },
    fail: function() {
      this._control.fail();
    }
  });

  exports.Node = Node;
}(BehaviorTree));
