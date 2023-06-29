// ReplaceTargetEvent.js Ver.3.0.2
// MIT License (C) 2020 あわやまたな
// http://opensource.org/licenses/mit-license.php

/*:
* @target MV MZ
* @orderAfter PluginCommonBase
* @plugindesc イベントコマンドの対象イベントを上書き可能になります。
* フォロワーや乗り物にも移動ルートの設定を行えたりｱﾆﾒｰｼｮﾝを表示出来たりします。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/
* @help 
* 【プラグインコマンド】
* [対象イベント上書き]
* replaceEvent イベントID
* このイベント:0  主人公:-1  フォロワー:～-2  乗り物:～-1000
* ここで指定したイベントが対象になります。
* （例）イベントID:002のセルフスイッチを操作したい場合
* ◆プラグインコマンド：replaceEvent 2
* ◆セルフスイッチの操作：A = ON
*
* ※「条件分岐」で使用する場合は「キャラクター」を選択する必要があります。
* （例）フォロワー３の向きが下かを確認したい場合
* ◆プラグインコマンド：replaceEvent -４
* ◆条件分岐：プレイヤーが下を向いている
* 　◆
* ：分岐終了
*
* ※「イベントの位置設定」で複数指定したい項目がある場合はコンマで区切ると2つ目も
* 指定できます（MZのプラグインコマンドも同様）。
* ただし、「他のイベントと交換」を選択する必要があります。
* （例）フォロワー２と主人公の位置を交換したい場合
* ◆プラグインコマンド：replaceEvent -2,-1
* ◆イベントの位置設定：このイベント, このイベントと交換
*
* _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
* 【仕様】
* 目的のイベントコマンドより上にプラグインコマンドを配置する事で対象イベントを
* 上書きできます。
* PluginCommonBaseなど、プラグインコマンドに変数が利用可能になるプラグインと
* 併用すると変数も使用できるので便利です。
* イベントコマンドの以下の9つが上書き対象です。
*
* ・条件分岐
* ・セルフスイッチの操作
* ・イベントの位置設定
* ・移動ルートの設定
* ・透明状態の変更
* ・アニメーションの表示
* ・フキダシアイコンの表示
* ・イベントの一時消去（イベントのみ）
* ・コモンイベント（イベントのみ）
*
* 隊列歩行解除スイッチをONにするとフォロワーがプレイヤーに追従しなくなります。
* 隊列歩行解除スイッチをOFFにすると元に戻ります。
* 隊列歩行解除スイッチOFF時にもフォロワーの移動ルートの設定は可能ですが、
* 以下の状態がプレイヤーと同期する制約があります。
*
* ・移動速度
* ・不透明度
* ・合成方法
* ・歩行アニメON/OFF
* ・足踏みアニメON/OFF
* ・向き固定ON/OFF
* ・透明状態
* 
* ※[隊列メンバーの集合]を実行すると隊列歩行解除ｽｲｯﾁが強制的にOFFになります。
* 
* キャラクターをスクリプトで操作する際、
* フォロワーは
* フォロワー1：this.character(-2)
* フォロワー2：this.character(-3)
* フォロワー3：this.character(-4)
* で取得できます。
*
* 乗り物は
* 小型船:this.character(-1000)
* 大型船:this.character(-1001)
* 飛行船:this.character(-1002)
* で取得できます。
*
* 【このプラグインの活用例】
* このイベント以外のイベントを消去する
* イベントでフォロワーにアクションさせる。
* コモンイベントと組み合わせて、オリジナルのフォロワーの集合方法を作る。
*
* [更新履歴]
* 2020/11/27：Ver.0.9.0β　β版リリース。
* 2020/12/01：Ver.1.0.0　余計な機能を削除。リファクタリング。
* 2021/07/06：Ver.1.1.0　バグ修正。コモンイベントを追加。イベントの位置の交換に対応。MVとMZのイベントコマンドの関数を統合。
* 2021/07/09：Ver.1.1.1　乗り物を操作できる機能を追加。
* 2021/09/17：Ver.2.0.0　機能を簡素化。
* 2022/02/07：Ver.3.0.0　機能を最適化。ハッシュ値を使用。
* 2022/02/14：Ver.3.0.1　主人公のイベントの位置設定使用時にループ遠景がズレる問題を修正。
* 2022/02/15：Ver.3.0.2　修正による不具合を修正。
*
* @command replaceEvent
* @text 対象イベント上書き
* @desc ここで指定したイベントが対象になります。
*
* @arg eventId
* @text イベントID
* @desc ここで指定したIDのイベントが対象になります。
* このイベント:0  主人公:-1  フォロワー:～-2  乗り物:～-1000
* @default 0
* @type string
*
* @param scatterSwitch
* @text 隊列歩行解除スイッチ
* @desc 隊列歩行の可否を設定するスイッチ。
* OFFだと隊列歩行有効。ONだと隊列歩行無効。
* @default 1
* @type switch
*
* @param autoScatter
* @text 自動隊列解除
* @desc フォロワーを対象に[移動ルートの設定]をした時、
* 必ず隊列を解除させる。
* @default true
* @type boolean
*/

'use strict';
{
	//プラグイン名取得
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	//プラグインパラメーター取得
	const parameter = PluginManager.parameters(pluginName);
	const scatterSwitch = Number(parameter['scatterSwitch']);
	const autoScatter = parameter['autoScatter'] === 'true';

	//PluginCommonBaseが適用されているか。
	const hasPluginCommonBase = typeof PluginManagerEx === "function";
	//MZかどうか。
	const useMZ = Utils.RPGMAKER_NAME === 'MZ';

	//イベントの位置設定使用時にループ遠景がズレる問題を修正。
	const _Game_Player_center = Game_Player.prototype.center;
	Game_Player.prototype.center = function (x, y) {
		if (!this.newMapId()) return;
		return _Game_Player_center.call(this, x, y);
	};

	const _Game_Player_locate = Game_Player.prototype.locate;
	Game_Player.prototype.locate = function (x, y) {
		const lx = this.scrolledX();
		const ly = this.scrolledY();
		_Game_Player_locate.call(this, x, y);
		if (!this.newMapId()) this.updateScroll(lx, ly);
	};

	//プラグインコマンドの定義（MZ）
	//replaceEvent
	if (useMZ) {
		if (hasPluginCommonBase) {
			PluginManagerEx.registerCommand(document.currentScript, "replaceEvent", function (args) {
				this.setReplaceEvents(args.eventId);
			});
		} else {
			PluginManager.registerCommand(pluginName, "replaceEvent", function (args) {
				this.setReplaceEvents(args.eventId);
			});
		}
	}
	//プラグインコマンドの定義（MZ）ここまで

	//プラグインコマンドの定義（MV）
	const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === "replaceEvent") this.setReplaceEvents(args[0]);
	};
	//プラグインコマンドの定義（MV）ここまで

	//イベントID置き換え用の変数
	const _Game_Interpreter_clear = Game_Interpreter.prototype.clear;
	Game_Interpreter.prototype.clear = function () {
		_Game_Interpreter_clear.call(this);
		this._replaceIdList = [];
	};
	//イベントIDをセット
	Game_Interpreter.prototype.setReplaceEvents = function (events) {
		this._replaceIdList = String(events).split(',').map(Number);
		this.replaceCommand();
	};
	//コマンドの置換。置換先のインデックスが登録されていないなら取得
	Game_Interpreter.prototype.replaceCommand = function () {
		const index = this.replaceCommandIndex() || this.findReplaceCommandIndex();
		this.setReplaceEventId(this._list[index]);
	};
	//コマンドインデックスの取得
	Game_Interpreter.prototype.replaceCommandIndex = function () {
		return this.currentCommand()._replaceCommandIndex;
	};
	//イベントIDの置換
	Game_Interpreter.prototype.setReplaceEventId = function (command) {
		const code = command.code;
		const params = command.parameters
		const idList = this._replaceIdList;
		switch (code) {
			case 111://条件分岐
				if (params[0] === 6) {
					params[1] = idList[0];
				}
				break;
			case 203://イベントの位置設定
				if (params[1] === 2 && idList.length > 1) {
					params[2] = idList[1];
				}
			case 205://移動ルートの設定
			case 212://アニメーションの表示
			case 213://フキダシアイコンの表示
				params[0] = idList[0];
				break;
			case 117://コモンイベント
			case 123://セルフスイッチの操作
			case 214://イベントの一時消去
				if (idList[0] < 0) break;
			case 211://透明状態の変更
				command._replaceEventId = idList[0];
				break;
			default:
				break;
		}
		idList.length = 0;
	};
	//置換するコマンドを検索。見つかったら登録、無かったらこのコマンドのインデックスを登録。
	const replaceCode = new Set([111, 117, 123, 203, 205, 211, 212, 213, 214]);
	Game_Interpreter.prototype.findReplaceCommandIndex = function () {
		const scanEnd = this._list.length - 1;
		let commandIndex = this._index;
		for (let i = this._index + 1; i <= scanEnd; i++) {
			const command = this._list[i];
			if (replaceCode.has(command.code)) {
				commandIndex = i;
				break;
			}
		}
		this.currentCommand()._replaceCommandIndex = commandIndex;
		return commandIndex;
	};
	//置換するイベントIDの取得（一部のコマンドのみ）
	Game_Interpreter.prototype.replaceEventId = function () {
		return this.currentCommand()._replaceEventId;
	}

	//this.character()でフォロワーを取得可能に。
	const _Game_Interpreter_character = Game_Interpreter.prototype.character;
	Game_Interpreter.prototype.character = function (param) {
		if (param < -1) {
			return $gameParty.inBattle() ? null : otherCharacter(-param);
		}
		return _Game_Interpreter_character.call(this, param);
	};
	//フォロワーや乗り物を取得する
	function otherCharacter(param) {
		return param < 1000 ? $gamePlayer.followers()._data[param - 2] : $gameMap.vehicle(param - 1000);
	};

	/////////////////////////////////////////////////////////////////////////////
	//イベントコマンドの変更
	/////////////////////////////////////////////////////////////////////////////
	//標準のイベントコマンドを保存
	const _Game_Interpreter_command117 = Game_Interpreter.prototype.command117;//コモンイベント
	const _Game_Interpreter_command123 = Game_Interpreter.prototype.command123;//セルフスイッチの操作
	const _Game_Interpreter_command214 = Game_Interpreter.prototype.command214;//イベントの一時消去
	const _Game_Interpreter_command217 = Game_Interpreter.prototype.command217;//隊列メンバーの集合

	//コモンイベント
	Game_Interpreter.prototype.command117 = function (params) {
		const dafaultEventId = this._eventId;
		this._eventId = this.replaceEventId() || dafaultEventId;
		const result = _Game_Interpreter_command117.call(this, params);
		this._eventId = dafaultEventId;
		return result;
	};
	//セルフスイッチの操作
	Game_Interpreter.prototype.command123 = function (params) {
		const dafaultEventId = this._eventId;
		this._eventId = this.replaceEventId() || dafaultEventId;
		const result = _Game_Interpreter_command123.call(this, params);
		this._eventId = dafaultEventId;
		return result;
	};
	//透明状態の変更
	Game_Interpreter.prototype.command211 = function (params = this._params) {
		const replaceId = this.replaceEventId();
		const eventId = replaceId === 0 ? 0 : replaceId || -1;
		this.character(eventId).setTransparent(params[0] === 0);
		return true;
	};
	//イベントの一時消去
	Game_Interpreter.prototype.command214 = function () {
		const dafaultEventId = this._eventId;
		this._eventId = this.replaceEventId() || dafaultEventId;
		const result = _Game_Interpreter_command214.call(this);
		this._eventId = dafaultEventId;
		return result;
	};
	if (scatterSwitch) {
		//隊列メンバーの集合
		Game_Interpreter.prototype.command217 = function () {
			if (!$gameParty.inBattle()) {
				$gameSwitches.setValue(scatterSwitch, false);
			}
			return _Game_Interpreter_command217.call(this);
		};
		/////////////////////////////////////////////////////////////////////////////
		//隊列歩行解除時の動作
		/////////////////////////////////////////////////////////////////////////////
		if (autoScatter) {
			//移動ルート
			const _Game_Follower_forceMoveRoute = Game_Follower.prototype.forceMoveRoute;
			Game_Follower.prototype.forceMoveRoute = function (moveRoute) {
				$gameSwitches.setValue(scatterSwitch, true);
				_Game_Follower_forceMoveRoute.call(this, moveRoute);
			};
		}
		//隊列移動無効
		const _Game_Followers_updateMove = Game_Followers.prototype.updateMove;
		Game_Followers.prototype.updateMove = function () {
			if (!$gameSwitches.value(scatterSwitch)) {
				_Game_Followers_updateMove.call(this);
			}
		};
		//ジャンプ禁止
		const _Game_Followers_jumpAll = Game_Followers.prototype.jumpAll;
		Game_Followers.prototype.jumpAll = function () {
			if (!$gameSwitches.value(scatterSwitch)) {
				_Game_Followers_jumpAll.call(this);
			}
		};
		//位置設定禁止
		const _Game_Followers_synchronize = Game_Followers.prototype.synchronize;
		Game_Followers.prototype.synchronize = function (x, y, d) {
			if (!$gameSwitches.value(scatterSwitch)) {
				_Game_Followers_synchronize.call(this, x, y, d);
			}
		};
		//同期禁止
		const _Game_Follower_update = Game_Follower.prototype.update;
		Game_Follower.prototype.update = function () {
			if ($gameSwitches.value(scatterSwitch)) {
				Game_Character.prototype.update.call(this);
			} else {
				_Game_Follower_update.call(this);
			}
		};
	}
}