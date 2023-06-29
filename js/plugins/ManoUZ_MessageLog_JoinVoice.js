/*:
 * @plugindesc ManoUZ_MessgiLogの補助用パッチです
 * @author しぐれん
 * @base ManoUZ_MessageLog
 * @orderAfter ManoUZ_MessageLog
 * 
 * @base SimpleVoice
 * @orderAfter  SimpleVoice
 * 
 * @target MZ
 * @help
 * トリアコンタンさんのSimpleVoiceと連携するためのプラグインです。
 * 再生した音声をログに記録します。
*/
(function () {
    'use stirct';
    if (!ManoUZ_MessageLog) {
        return;
    }
    function readExParam(exParam) {
        if (exParam) {
            return {
                /**
                 * @type {Boolean}
                 */
                loop: exParam.loop || false,
                /**
                 * @type {Number}
                 */
                chanel: exParam.chanel || 0,
            }

        }
        return {
            loop: false,
            chanel: 0,
        }
    }
    if (ManoUZ_MessageLog.setCannelVolumeFunction) {
        ManoUZ_MessageLog.setCannelVolumeFunction((se, exParam) => {

            const ex = readExParam(exParam);
            AudioManager.playVoice(se, ex.loop, ex.chanel);

        });
    }
    const AudioManager_playVoice = AudioManager.playVoice;
    if (AudioManager_playVoice) {
        AudioManager.playVoice = function (audio, loop, chanel) {
            if (audio) {
                const exParam = {
                    loop: loop,
                    chanel: chanel,
                }
                ManoUZ_MessageLog.setLastVoiceParam(audio, exParam);
            }
            AudioManager_playVoice.call(this, audio, loop, chanel)
        };
    }


}())

