//=============================================================================
// TouchInputDispatcherMZ.js
//=============================================================================
// [History]
// <Touch Input Dispatcher (for MV)>
// 2016.Dec.17 Ver1.0.0 First Release
// <Touch Input Dispatcher MZ>
// 2021.May.06 Ver1.0.0 First Release

/*:
 * @target MZ
 * @plugindesc Get Cursor Position, or set Common Event of Touch Input
 * @author Sasuke KANNAZUKI
 *
 * @command callCommon
 * @text Common Event To Invoke
 * @desc Common Event ID invoked when condition met
 *
 * @arg occasion
 * @desc When invoke common event
 * @option trigger
 * @option longpress
 * @option release
 * @option every time cursor is moving
 * @value move
 * @option every time cursor on the screen
 * @value hover
 * @type select
 * @default trigger
 * 
 * @arg commonId
 * @text ID Setting Method
 * @desc Number? Variable ID?
 * @option number
 * @option variable ID
 * @value variable
 * @type select
 * @default number
 * 
 * @arg idNumber
 * @parent commonId
 * @text ID Number
 * @desc When you select variable, this setting is ignored
 * @type common_event
 * @default 1
 * 
 * @arg idVariable
 * @parent commonId
 * @text Variable ID
 * @desc When you select number, this setting is ignored
 * @type variable
 * @default 1
 * 
 * @arg interval
 * @desc process interval frame number. It ignores if occasion is trigger or release
 * @type number
 * @min 1
 * @default 1
 *
 * @command getCoord
 * @text Get Coordinate
 * @desc Let specified variables set current coord if condition is met.
 *
 * @arg occasion
 * @desc When store current coord to specified variables
 * @option trigger
 * @option longpress
 * @option release
 * @option every time cursor is moving
 * @value move
 * @option every time cursor on the screen
 * @value hover
 * @type select
 * @default trigger
 * 
 * @arg coordType
 * @text Type of Coord to Get
 * @desc Screen pixel or tile
 * @option Screen coord
 * @value pixel
 * @option Tile coord
 * @value grid
 * @type select
 * @default pixel
 *
 * @arg varForX
 * @text Variable for X
 * @desc
 * @type variable
 * @default 1
 *
 * @arg varForY
 * @text Variable for Y
 * @desc
 * @type variable
 * @default 2
 *
 * @arg interval
 * @desc process interval frame number. It ignores if occasion is trigger or release
 * @type number
 * @min 1
 * @default 1
 *
 * @command reset
 * @desc Stop the Function.
 *
 * @arg occasion
 * @desc When invoke common event
 * @option trigger
 * @option longpress
 * @option release
 * @option every time cursor is moving
 * @value move
 * @option every time cursor on the screen
 * @value hover
 * @type select
 * @default trigger
 * 
 * @command interlockSwith
 * @text Set interlock switch
 * @desc Make switch when and only when touch panel is pushed
 *
 * @arg setOrReset
 * @desc start or end this function
 * @option set
 * @option reset
 * @type select
 * @default set
 *
 * @arg isVariable
 * @parent setOrReset
 * @text Switch ID Type
 * @desc How to set number or variable id.
 * @option number
 * @option variable id
 * @value variable
 * @type select
 * @default number
 *
 * @arg idNumber
 * @parent isVariable
 * @text Switch ID
 * @desc if variable is selected, it ignores this setting.
 * @type switch
 * @default 1
 * 
 * @arg idVariable
 * @parent isVariable
 * @text Variable ID
 * @desc if number is selected, it ignores this setting.
 * @type variable
 * @default 1
 * 
 * @help
 * This plugin runs under RPG Maker MZ.
 *
 * [Summary]
 * This plugin enables to touch panel or mouse cursor:
 * - Get current cursor position
 * - Invoke common event when condition is met.
 *
 * [Plugin Commands]
 * All settings require to call plugin commands.
 * You can get the current coord or invoke common event by following occasion.
 * - On Tap (or click)
 * - On Long press
 * - On Release
 * - During Cursol Moving
 * - During Cursol in the Screen
 *
 * You can set interval frame to reduce the load.
 * (Except On Tap and On Release)
 *
 * You can also set the switch if and only if it's tapped(or clicked) is ON.
 *
 * [Note]
 * - this plugin is applied only on map scene, not on battle scene.
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @target MZ
 * @plugindesc タッチ入力と連動してコモンイベントを起動できます。
 * @author 神無月サスケ
 * 
 * @command callCommon
 * @text コモンイベント起動
 * @desc 条件が満たされたときに起動するコモンイベントのIDです。
 *
 * @arg occasion
 * @text タイミング
 * @desc コモンイベント起動条件
 * @option タップ時
 * @value trigger
 * @option 長押し時
 * @value longpress
 * @option 離した時
 * @value release
 * @option カーソル移動中ずっと
 * @value move
 * @option カーソル画面内の間ずっと
 * @value hover
 * @type select
 * @default trigger
 * 
 * @arg commonId
 * @text コモンイベントIDタイプ
 * @desc 数値？　変数ID？
 * @option 数値
 * @value number
 * @option 変数ID
 * @value variable
 * @type select
 * @default number
 * 
 * @arg idNumber
 * @parent commonId
 * @text ID番号(数値)
 * @desc 変数IDを選択した場合、無視されます。
 * @type common_event
 * @default 1
 * 
 * @arg idVariable
 * @parent commonId
 * @text ID格納変数
 * @desc 数値を選択した場合、無視されます。
 * @type variable
 * @default 1
 * 
 * @arg interval
 * @text インターバル
 * @desc 何フレーム毎に処理を行うか。タップ時と離した時の場合無視されます。
 * @type number
 * @min 1
 * @default 1
 *
 * @command getCoord
 * @text 座標取得
 * @desc 条件が満たされた時に変数に現在の座標を代入します。
 *
 * @arg occasion
 * @text タイミング
 * @desc 座標取得のタイミング
 * @option タップ時
 * @value trigger
 * @option 長押し時
 * @value longpress
 * @option 離した時
 * @value release
 * @option カーソル移動中ずっと
 * @value move
 * @option カーソル画面内の間ずっと
 * @value hover
 * @type select
 * @default trigger
 * 
 * @arg coordType
 * @text 座標タイプ
 * @desc 取得する座標のタイプ
 * @option スクリーン座標
 * @value pixel
 * @option タイル座標
 * @value grid
 * @type select
 * @default pixel
 *
 * @arg varForX
 * @text X座標格納変数
 * @desc
 * @type variable
 * @default 1
 *
 * @arg varForY
 * @text Y座標格納変数
 * @desc
 * @type variable
 * @default 2
 *
 * @arg interval
 * @text インターバル
 * @desc 何フレーム毎に処理を行うか。タップ時と離した時の場合無視されます。
 * @type number
 * @min 1
 * @default 1
 *
 * @command reset
 * @text リセット
 * @desc 座標取得を中止します
 *
 * @arg occasion
 * @text タイミング
 * @desc コモンイベント起動条件
 * @option タップ時
 * @value trigger
 * @option 長押し時
 * @value longpress
 * @option 離した時
 * @value release
 * @option カーソル移動中ずっと
 * @value move
 * @option カーソル画面内の間ずっと
 * @value hover
 * @type select
 * @default trigger
 * 
 * @command interlockSwith
 * @text 連動スイッチ設定
 * @desc クリック時はON、それ以外はOFFになるスイッチを設定します。
 *
 * @arg setOrReset
 * @text 設定？解除？
 * @desc
 * @option 設定
 * @value set
 * @option 解除
 * @value reset
 * @type select
 * @default set
 *
 * @arg isVariable
 * @parent setOrReset
 * @text スイッチIDタイプ
 * @desc 数値？　スイッチID？　解除の時は無視されます。
 * @option 数値
 * @value number
 * @option 変数ID
 * @value variable
 * @type select
 * @default number
 *
 * @arg idNumber
 * @parent isVariable
 * @text ID番号(数値)
 * @desc 変数IDを選択した場合、無視されます。
 * @type switch
 * @default 1
 * 
 * @arg idVariable
 * @parent isVariable
 * @text ID格納変数
 * @desc 数値を選択した場合、無視されます。
 * @type variable
 * @default 1
 * 
 * @help
 * このプラグインは、RPGツクールMZに対応しています。
 * このプラグインはタッチデバイスのトリガに応じて次のことが出来ます。
 * ・ポインタの座標を知る
 * ・トリガに応じてコモンイベントを起動可能
 * 
 * ■プラグインコマンド
 * 設定はプラグインコマンドを呼び出すことで行います。
 * 以下のいずれかのタイミングで座標取得やコモンイベント呼び出しが可能です。
 * - クリック(タップ)時
 * - 長押し(ロングタップ)時
 * - 離された(リリース)時
 * - カーソル移動時(移動中ずっと更新)
 * - カーソルが画面内の間(ずっと更新)
 *
 * 長押し時およびカーソル移動時および画面内では、何フレーム毎に呼び出すか
 * インターバルの設定が可能です。
 * 
 * また、タップ時(クリック時)のみONになるスイッチIDの設定も可能です。
 *
 * ■注意
 * このプラグインはマップ専用です。戦闘中は無効です。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(() => {

  const pluginName = 'TouchInputDispatcherMZ';

  //
  // define magic number
  // NOTE:This number doesn't mean anything. If the ID conflicts with
  // another plugin, feel free to change the unused number.
  //
  const DISPATCH_COMMON_ID = 9999;

  //
  // process plugin commands
  //
  const getVariableId = (isVar, number, varId) => {
    return isVar === 'variable' ? $gameVariables.value(varId) : number;
  };

  const getInterval = (occasion, interval) => {
    if (['trigger', 'release'].includes(occasion)) {
      return null;
    }
    return interval;
  };

  PluginManager.registerCommand(pluginName, 'callCommon', args => {
    const commonId = +getVariableId(args.isVariable, +args.idNumber,
      +args.idVariable
    );
    const interval = getInterval(args.occasion, +args.interval);
    $gameSystem.setCommon(args.occasion, commonId, interval);
  });

  PluginManager.registerCommand(pluginName, 'getCoord', args => {
    const interval = getInterval(args.occasion, +args.interval);
    $gameSystem.setCoord(args.occasion, args.coordType,
      +args.varForX, +args.varForY, interval
    );
  });

  PluginManager.registerCommand(pluginName, 'reset', args => {
    $gameSystem.resetTouchEvent(args.occasion);
  });

  PluginManager.registerCommand(pluginName, 'interlockSwith', args => {
    if (args.setOrReset === 'set') {
      const varId = +getVariableId(args.isVariable, +args.idNumber,
        +args.idVariable
      );
      $gameSystem.interLockSwitchId = varId;
    } else {
      $gameSystem.interLockSwitchId = null;
    }
  });

  //
  // find position
  //
  const getX = method => {
    switch (method) {
      case 'pixel':
        return TouchInput.x;
      case 'grid':
        return $gameMap.canvasToMapX(TouchInput.x);
      default: // something is wrong
        return TouchInput.x;
    }
  };

  const getY = method => {
    switch (method) {
      case 'pixel':
        return TouchInput.y;
      case 'grid':
        return $gameMap.canvasToMapY(TouchInput.y);
      default: // something is wrong
        return TouchInput.y;
    }
  };

  //
  // general setters
  //
  const setCoordVariable = (obj, x, y) => {
    if (x != null && y != null) {
      $gameVariables.setValue(x, getX(obj));
      $gameVariables.setValue(y, getY(obj));
    }
  };

  const setCommonEvent = function (CommonId) {
    if ($dataCommonEvents[CommonId]) {
      const list = $dataCommonEvents[CommonId].list;
      if (!$gameMap.isEventRunning()) {
        $gameMap._interpreter.setup(list, DISPATCH_COMMON_ID);
      } else if (!$gameMap._interpreter._childInterpreter) {
        if ($gameMap._interpreter.eventId() !== DISPATCH_COMMON_ID) {
          $gameMap._interpreter.setupChild(list, DISPATCH_COMMON_ID);
        }
      }
    }
  };

  //
  // construct touch input trigger table
  //
  const _Game_System_initialze = Game_System.prototype.initialze;
  Game_System.prototype.initialze = function () {
    _Game_System_initialze.call(this);
    this.touchInputTable = null;
    this.interLockSwitchId = null;
  };

  Game_System.prototype.setCoord = function (trig, obj, xId, yId, interval) {
    var s = this.touchInputTable = this.touchInputTable || {};
    var t = s[trig] = s[trig] || {};
    t.method = obj;
    t.xVarId = xId;
    t.yVarId = yId;
    if (interval != null) {
      t.interval = Number(interval);
      t.count = t.interval;
    }
  };

  Game_System.prototype.setCommon = function (trig, commonId, interval) {
    var s = this.touchInputTable = this.touchInputTable || {};
    var t = s[trig] = s[trig] || {};
    t.commonId = commonId;
    if (interval != null) {
      t.interval = Number(interval);
      t.count = t.interval;
    }
  };

  Game_System.prototype.resetTouchEvent = function (trig) {
    var s = $gameSystem.touchInputTable;
    if (!s || !s[trig]) {
      return;
    }
    delete s[trig];
  };

  //
  // modify dispatcher table
  //
  const conditionMet = trig => {
    if (SceneManager._scene.constructor !== Scene_Map) {
      return false;
    } else if (trig.interval == null) {
      return true;
    }
    trig.count = (trig.count + 1) % (trig.interval + 1);
    return trig.count === 0;
  };

  const isDispatcherSet = trig => {
    let s, t;
    if ((s = $gameSystem) && (t = s.touchInputTable)) {
      return !!t[trig];
    }
    return false;
  };

  const dispatchTrigger = trig => {
    var s, t, t2;
    if ((s = $gameSystem) && (t = s.touchInputTable)) {
      if ((t2 = t[trig]) && conditionMet(t2)) {
        if (t2.method) {
          setCoordVariable(t2.method, t2.xVarId, t2.yVarId);
        }
        if (t2.commonId) {
          setCommonEvent(t2.commonId);
        }
      }
    }
  };

  const dispatchInterlockSwitch = () => {
    if ($gameSystem && $gameSystem.interLockSwitchId) {
      const id = $gameSystem.interLockSwitchId;
      $gameSwitches.setValue(id, TouchInput.isPressed());
    }
  };

  //
  // dispatcher caller
  //
  const _TouchInput_update = TouchInput.update;
  TouchInput.update = function () {
    _TouchInput_update.call(this);
    dispatchInterlockSwitch();
    if (this.isLongPressed()) {
      dispatchTrigger('longpress');
    }
    if (Graphics.isInsideCanvas(this.x, this.y)) {
      dispatchTrigger('hover');
    }
  };

  const _TouchInput_onTrigger = TouchInput._onTrigger;
  TouchInput._onTrigger = function (x, y) {
    _TouchInput_onTrigger.call(this, x, y);
    dispatchTrigger('trigger');
  };

  const _TouchInput_onRelease = TouchInput._onRelease;
  TouchInput._onRelease = function (x, y) {
    _TouchInput_onRelease.call(this, x, y);
    dispatchTrigger('release');
  };

  const _TouchInput_onMove = TouchInput._onMove;
  TouchInput._onMove = function (x, y) {
    _TouchInput_onMove.call(this, x, y);
    dispatchTrigger('move');
  };

  //
  // change specification
  //
  const _TouchInput_onMouseMove = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function (event) {
    _TouchInput_onMouseMove.call(this, event);
    if (!this._mousePressed &&
      (isDispatcherSet('move') || isDispatcherSet('hover'))) {
      const x = Graphics.pageToCanvasX(event.pageX);
      const y = Graphics.pageToCanvasY(event.pageY);
      this._onMove(x, y);
    }
  };

  const isDispatcherRunning = () => {
    const interpreter = $gameMap._interpreter;
    return interpreter.isRunning() &&
      interpreter.eventId() === DISPATCH_COMMON_ID;
  };

  const _Scene_Map_isMapTouchOk = Scene_Map.prototype.isMapTouchOk
  Scene_Map.prototype.isMapTouchOk = function () {
    return (this.isActive() && isDispatcherRunning()) ||
      _Scene_Map_isMapTouchOk.call(this);
  };

  const _Game_Temp_clearDestination = Game_Temp.prototype.clearDestination;
  Game_Temp.prototype.clearDestination = function () {
    if (isDispatcherRunning()) {
      return;
    }
    _Game_Temp_clearDestination.call(this);
  };

})();
