//=============================================================================
// GameInactiveNotStop.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc ゲームウィンドウが非アクティブでもゲームを止めない。
 * @author 加藤マリン
 *
 * @help プラグインをオンにすると、ゲームウィンドウが非アクティブでも
 * ゲームが裏で動き続けるようになります。
 * 
 * 万が一、ゲームの途中で非アクティブ時の停止をオンにしたい場合は
 * $gameSystem.GameInactiveStop = true;
 * をスクリプトで実行してください。
 * 
 */

(() => {

    SceneManager.isGameActive = function () {
        if ($gameSystem.GameInactiveStop != true) { return true; }
        try {
            return window.top.document.hasFocus();
        } catch (e) {

            return true;
        }
    };


})();
