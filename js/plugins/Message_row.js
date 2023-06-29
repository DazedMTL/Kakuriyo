(() => {
  'use strict';
  Scene_Message.prototype.messageWindowRect = function () {
    return new Rectangle(0, 0, Graphics.boxWidth, this.calcWindowHeight(4, false));
  };
})();