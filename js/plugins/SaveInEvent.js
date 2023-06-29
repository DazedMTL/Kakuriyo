//===================================================================
//SaveInEvent.js
//イベント実行中もセーブを可能にするプラグイン
//===================================================================
//Copyright (c) 2018 蔦森くいな
//Released under the MIT license.
//http://opensource.org/licenses/mit-license.php
//-------------------------------------------------------------------
//blog   : http://paradre.com/
//Twitter: https://twitter.com/Kuina_T
//===================================================================
//＜更新情報＞
//  ver1.0.0 2018/02/10 初版
//===================================================================

/*:
 * @plugindesc イベント実行中にメニューを開いたりセーブできるようにするプラグインです
 * @author 蔦森くいな
 *
 * @help このプラグインをＯＮにすると、イベント実行中に
 * メニューを開いたりセーブをした場合のエラーを防ぎます。
 * 
 * また、セーブデータをロードした時も、
 * セーブした時点で表示されていた文章や選択肢から再開します。
 * 
 * 以下、簡単な制作例を紹介します
 * 
 * ■イベント実行中にメニュー画面やセーブ画面を開く方法
 * 並列処理イベントに
 * 「条件分岐：ボタン[シフト]が押されている」を設定し、
 * その中に「メニュー画面を開く」や「セーブ画面を開く」を設定します。
 * これでShiftキーを押すとイベント中でもセーブできます
 * 
 * ■注意点
 * このプラグインはマップ上で実行中のイベントや
 * コモンイベントにのみ対応しています。
 * バトル画面で実行されるイベントには対応していません。
 * また、並列処理で実行中のイベントにも対応していません。
 * 
 *
 * 利用規約：
 * このプラグインは商用・非商用を問わず無料でご利用いただけます。
 * 使用報告やクレジット表記も必要ありません。
 * どのようなゲームに使っても、どのように加工していただいても構いません。
 * MIT Licenseにつき著作権表示とライセンスURLは残しておいて下さい。
 */

function PD_SIE_PLUGIN() {
    throw new Error('This is a static class');
}

PD_SIE_PLUGIN.returnBaseIndex = function (interpreter) {
    var baseIndex = interpreter._index;
    var commandList = interpreter._list;
    if (commandList) {
        if (commandList[baseIndex - 1]) {
            switch (commandList[baseIndex - 1].code) {
                case 401:
                    baseIndex -= 1;
                    while (commandList[baseIndex].code !== 101) {
                        baseIndex -= 1;
                    }
                    break;
                case 102:
                    baseIndex -= 1;
                    if (commandList[baseIndex - 1] && commandList[baseIndex - 1].code === 401) {
                        baseIndex -= 1;
                        while (commandList[baseIndex].code !== 101) {
                            baseIndex -= 1;
                        }
                    }
                    break;
                case 103:
                    baseIndex -= 1;
                    if (commandList[baseIndex - 1] && commandList[baseIndex - 1].code === 401) {
                        baseIndex -= 1;
                        while (commandList[baseIndex].code !== 101) {
                            baseIndex -= 1;
                        }
                    }
                    break;
                case 104:
                    baseIndex -= 1;
                    if (commandList[baseIndex - 1] && commandList[baseIndex - 1].code === 401) {
                        baseIndex -= 1;
                        while (commandList[baseIndex].code !== 101) {
                            baseIndex -= 1;
                        }
                    }
                    break;
                case 405:
                    baseIndex -= 1;
                    while (commandList[baseIndex].code !== 105) {
                        baseIndex -= 1;
                    }
                    break;
            }
        }
    }
    return baseIndex;
};

(function () {
    'use strict';

    var pd_SIE_DataManager_saveGameWithoutRescue = DataManager.saveGameWithoutRescue;
    DataManager.saveGameWithoutRescue = function (savefileId) {
        var holdIndex = $gameMap._interpreter._index;
        $gameMap._interpreter._index = PD_SIE_PLUGIN.returnBaseIndex($gameMap._interpreter);
        var childInterpreter = $gameMap._interpreter._childInterpreter;
        var holdChildIndex = [];
        while (childInterpreter !== null) {
            holdChildIndex.push(childInterpreter._index);
            childInterpreter._index = PD_SIE_PLUGIN.returnBaseIndex(childInterpreter);
            childInterpreter = childInterpreter._childInterpreter;
        }
        var result = pd_SIE_DataManager_saveGameWithoutRescue.apply(this, arguments);
        $gameMap._interpreter._index = holdIndex;
        childInterpreter = $gameMap._interpreter._childInterpreter;
        while (childInterpreter !== null) {
            childInterpreter._index = holdChildIndex.shift();
            childInterpreter = childInterpreter._childInterpreter;
        }

        return result;
    };

    var pd_SIE_Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        this._pd_SIE_EventFrag = null;
        pd_SIE_Game_Temp_initialize.apply(this, arguments);
    };

    var pd_SIE_Scene_Map_create = Scene_Map.prototype.create;
    Scene_Map.prototype.create = function () {
        if (!SceneManager.isPreviousScene(Scene_Map) && $gameTemp._pd_SIE_EventFrag === false) {
            var commandList = $gameMap._interpreter._list;
            if (commandList) {
                var baseIndex = PD_SIE_PLUGIN.returnBaseIndex($gameMap._interpreter);
                var command = commandList[baseIndex];
                if (command) {
                    var childInterpreter = $gameMap._interpreter._childInterpreter;
                    if (childInterpreter === null) {
                        if (command.code === 101 ||
                            command.code === 102) {
                            $gameMap._interpreter._index = baseIndex;
                            $gameMessage.clear();
                            $gameTemp._pd_SIE_EventFrag = true;
                        }
                    } else {
                        var childBaseIndex;
                        var childCommand;
                        while (childInterpreter !== null) {
                            childBaseIndex = PD_SIE_PLUGIN.returnBaseIndex(childInterpreter);
                            childCommand = childInterpreter._list[childBaseIndex];
                            if (childCommand) {
                                if (childCommand.code === 101 ||
                                    childCommand.code === 102) {
                                    childInterpreter._index = childBaseIndex;
                                    $gameMessage.clear();
                                }
                            }
                            childInterpreter = childInterpreter._childInterpreter;
                        }
                    }
                }
            }
        }
        pd_SIE_Scene_Map_create.apply(this, arguments);
    };

    var pd_SIE_Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        pd_SIE_Scene_Map_start.apply(this, arguments);
        if ($gameTemp._pd_SIE_EventFrag === true) {
            $gameMap._interpreter.executeCommand();
        }
        $gameTemp._pd_SIE_EventFrag = false;
    };

})();
