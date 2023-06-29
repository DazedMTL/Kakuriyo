/*:
 * @target MZ
 * @plugindesc 一覧に表示される概要
 * @author 作者名
 *
 * @help
 * 動作内容をメモ
 */

(() => {
  "use strict";

  Window_StatusBase.prototype.drawActorSimpleStatus = function (actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 180;
    this.drawActorName(actor, x, y);
    //this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    //this.drawActorClass(actor, x2, y);
    //this.placeBasicGauges(actor, x2, y + lineHeight);
  };


})();