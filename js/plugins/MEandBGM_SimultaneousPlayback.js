//=============================================================================
// RPG Maker MZ - MEandBGM_SimultaneousPlayback
//=============================================================================

/*:
 * @target MZ
 * @plugindesc ME and BGM Simultaneous Playback.
 * @author Neo-Nue
 *
 * @help MEandBGM_SimultaneousPlayback.js
 *
 * すまないが日本語オンリーだ、自作だし……
 *
 */

/*:ja
 * @target MZ
 * @plugindesc MEとBGMを同時再生した際、BGMの音量を下げないプラグインよ。
 * @author Neo-Nue
 *
 * @help MEandBGM_SimultaneousPlayback.js
 *
 * 自分用。MEとBGMを同時再生した際、BGMの音量を下げないプラグインよ。
 *
 */

(() => {

    AudioManager.playMe = function (me) {
        this.stopMe();
        if (me.name) {
            //        if (this._bgmBuffer && this._currentBgm) {
            //            this._currentBgm.pos = this._bgmBuffer.seek();
            //            this._bgmBuffer.stop();
            //        }
            this._meBuffer = this.createBuffer("me/", me.name);
            this.updateMeParameters(me);
            this._meBuffer.play(false);
            this._meBuffer.addStopListener(this.stopMe.bind(this));
        }
    };

})();
