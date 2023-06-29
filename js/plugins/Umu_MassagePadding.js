/*:
 * @target MZ
 * @plugindesc MassagePadding
 * @author U-mu
 *
 * @help
 * messageウィンドウのパティングを調整する
 */

(() => {
  "use strict";

  //ウィンドウ縦幅の設定（デフォルトの暗くするだと下に余白ができるので余白を埋めるため加算）
  Window_Message.prototype.windowWidth = function () {
    return Graphics.boxHeight + 300;
  };

  //const marginで左右の余白を設定
  Window_Message.prototype.newLineX = function (textState) {
    const faceExists = $gameMessage.faceName() !== "";
    const faceWidth = ImageManager.faceWidth;
    const spacing = 20;
    const margin = faceExists ? faceWidth + spacing : 300;
    return textState.rtl ? this.innerWidth - margin : margin;
  };

  //暗くするの色を変更

  "use strict";
  ColorManager.dimColor1 =
    function () {
      return "rgba(30, 37, 110, 0.8)";
    };

})();