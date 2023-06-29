//=============================================================================
// VisuStella MZ - Message Visibility
// VisuMZ_4_MessageVisibility.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MessageVisibility = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageVisibility = VisuMZ.MessageVisibility || {};
VisuMZ.MessageVisibility.version = 1.02;

//=============================================================================
/*:
* @target MZ
* @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [MessageVisibility]
* @author VisuStella
* @url http://www.yanfly.moe/wiki/Message_Visibility_VisuStella_MZ
* @orderAfter VisuMZ_0_CoreEngine
* @orderAfter VisuMZ_1_MessageCore
* @orderAfter VisuMZ_2_ExtMessageFunc
*
* @help
* ============================================================================
* Introduction
* ============================================================================
*
* This plugin adds in the functionality to toggle the visibility of the
* Message Window on the map scene so that the player can observe the full view
* of the screen, to better visualize any pictures, parallaxes, and/or
* backgrounds before them. This can be done via a shortcut key or, if you're
* using the Extended Message Functionality plugin, by button. These options
* are only available to the Message Window on the map scene and do not work
* in battle.
*
* Features include all (but not limited to) the following:
* 
* * Use a shortcut key to show or hide the Message Window.
* * Shortcut key also works while the Choice Window, Gold Window, Number Input
*   Window, or Event Item Windows are active.
* * Those using the Extended Message Functionality plugin can also bind this
*   effect to the Button Console.
* * Those using the Message Core can bind Common Events that run whenever the
*   Message Window is hidden or becomes visible. This can be used to hide or
*   show the windows that aren't covered automatically by the plugin.
*
* ============================================================================
* Requirements
* ============================================================================
*
* This plugin is made for RPG Maker MZ. This will not work in other iterations
* of RPG Maker.
*
* ------ Tier 4 ------
*
* This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
* value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
* that your plugins will have the best compatibility with the rest of the
* VisuStella MZ library.
*
* ============================================================================
* Extra Features
* ============================================================================
*
* There are some extra features found if other VisuStella MZ plugins are found
* present in the Plugin Manager list.
*
* ---
*
* VisuMZ_1_MessageCore
*
* Those using the Message Core can bind Common Events that run whenever the
* Message Window is hidden or becomes visible. This can be used to hide or
* show the windows that aren't covered automatically by the plugin.
*
* ---
*
* VisuMZ_2_ExtMessageFunc
* 
* The Message Visibility plugin enables the "Hide" button found in the
* Extended Message Functionality plugin's Button Console to make the Message
* Window visible or invisible.
*
* ---
*
* ============================================================================
* Plugin Parameters: General Settings
* ============================================================================
*
* These are the Plugin Parameters available for the Message Visibility plugin.
* Some of these features require certain plugins to be installed in order to
* have an effect.
*
* ---
*
* General
* 
*   Toggle Key:
*   - This is the key used for toggling message visibility.
*   - Does not work in battle!
*
* ---
*
* Compatibility > VisuMZ_1_MessageCore
* - These require VisuMZ_1_MessageCore to be installed!
* 
*   Common Event on Show:
*   - Select a Common Event to run whenever the Message Window becomes
*     visible.
*   - Use 0 for none.
*   - Best used for making certain UI elements that aren't controlled by this
*     plugin to be manually made visible.
* 
*   Common Event on Hide:
*   - Select a Common Event to run whenever the Message Window becomes
*     hidden.
*   - Use 0 for none.
*   - Best used for making certain UI elements that aren't controlled by this
*     plugin to be manually made hidden.
*
* ---
*
* Compatibility > VisuMZ_2_ExtMessageFunc
* - These require VisuMZ_2_ExtMessageFunc to be installed!
* 
*   Button Name:
*   - How is this option's text displayed in-game?
*   - Requires VisuMZ_2_ExtMessageFunc!
*
* ---
*
* ============================================================================
* Terms of Use
* ============================================================================
*
* 1. These plugins may be used in free or commercial games provided that they
* have been acquired through legitimate means at VisuStella.com and/or any
* other official approved VisuStella sources. Exceptions and special
* circumstances that may prohibit usage will be listed on VisuStella.com.
* 
* 2. All of the listed coders found in the Credits section of this plugin must
* be given credit in your games or credited as a collective under the name:
* "VisuStella".
* 
* 3. You may edit the source code to suit your needs, so long as you do not
* claim the source code belongs to you. VisuStella also does not take
* responsibility for the plugin if any changes have been made to the plugin's
* code, nor does VisuStella take responsibility for user-provided custom code
* used for custom control effects including advanced JavaScript notetags
* and/or plugin parameters that allow custom JavaScript code.
* 
* 4. You may NOT redistribute these plugins nor take code from this plugin to
* use as your own. These plugins and their code are only to be downloaded from
* VisuStella.com and other official/approved VisuStella sources. A list of
* official/approved sources can also be found on VisuStella.com.
*
* 5. VisuStella is not responsible for problems found in your game due to
* unintended usage, incompatibility problems with plugins outside of the
* VisuStella MZ library, plugin versions that aren't up to date, nor
* responsible for the proper working of compatibility patches made by any
* third parties. VisuStella is not responsible for errors caused by any
* user-provided custom code used for custom control effects including advanced
* JavaScript notetags and/or plugin parameters that allow JavaScript code.
*
* 6. If a compatibility patch needs to be made through a third party that is
* unaffiliated with VisuStella that involves using code from the VisuStella MZ
* library, contact must be made with a member from VisuStella and have it
* approved. The patch would be placed on VisuStella.com as a free download
* to the public. Such patches cannot be sold for monetary gain, including
* commissions, crowdfunding, and/or donations.
* 
* 7. If this VisuStella MZ plugin is a paid product, all project team members
* must purchase their own individual copies of the paid product if they are to
* use it. Usage includes working on related game mechanics, managing related
* code, and/or using related Plugin Commands and features. Redistribution of
* the plugin and/or its code to other members of the team is NOT allowed
* unless they own the plugin itself as that conflicts with Article 4.
* 
* 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
* found on VisuStella.com and must be followed.
*
* ============================================================================
* Credits
* ============================================================================
* 
* If you are using this plugin, credit the following people in your game:
* 
* Team VisuStella
* * Irina
* * Arisu
* * Olivia
* * Yanfly
*
* ============================================================================
* Changelog
* ============================================================================
* 
* Version 1.02: August 6, 2021
* * Documentation Update!
* ** Plugin URL now updated to most recent one.
* 
* Version 1.01: July 30, 2021
* * Bug Fixes!
* ** Stops an unusual crash from happening. Fix made by Irina.
* 
* Version 1.00 Official Release Date: August 6, 2021
* * Finished Plugin!
*
* ============================================================================
* End of Helpfile
* ============================================================================
*
* @ ==========================================================================
* @ Plugin Parameters
* @ ==========================================================================
*
* @param BreakHead
* @text --------------------------
* @default ----------------------------------
*
* @param MessageVisibility
* @default Plugin Parameters
*
* @param ATTENTION
* @default READ THE HELP FILE
*
* @param BreakSettings
* @text --------------------------
* @default ----------------------------------
* 
* @param General
*
* @param ToggleKey:str
* @text Toggle Key
* @parent General
* @type combo
* @option none
* @option tab
* @option shift
* @option control
* @option pageup
* @option pagedown
* @desc This is the key used for toggling message visibility.
* Does not work in battle!
* @default tab
* 
* @param Compatibility
* 
* @param VisuMZ_1_MessageCore
* @parent Compatibility
*
* @param CommonEventShow:num
* @text Common Event on Show
* @parent VisuMZ_1_MessageCore
* @type common_event
* @desc Select a Common Event to run whenever the
* Message Window becomes visible. Use 0 for none.
* @default 0
*
* @param CommonEventHide:num
* @text Common Event on Hide
* @parent VisuMZ_1_MessageCore
* @type common_event
* @desc Select a Common Event to run whenever the
* Message Window becomes hidden. Use 0 for none.
* @default 0
* 
* @param VisuMZ_2_ExtMessageFunc
* @parent Compatibility
*
* @param ButtonName:str
* @text Button Name
* @parent VisuMZ_2_ExtMessageFunc
* @desc How is this option's text displayed in-game?
* Requires VisuMZ_2_ExtMessageFunc!
* @default HIDE
*
* @param BreakEnd1
* @text --------------------------
* @default ----------------------------------
*
* @param End Of
* @default Plugin Parameters
*
* @param BreakEnd2
* @text --------------------------
* @default ----------------------------------
*
*/
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Category
 * @text Stuff
 *
 */
//=============================================================================

const _0x5d5e = ['Window_Message_isTriggered', 'hide', 'isTriggered', '_scene', 'prototype', 'LOxTk', '1090038woNLKh', 'includes', 'EsUvJ', '941052XFmhBd', 'toggleMessageWindowVisibility', 'version', 'isOpenAndActive', 'map', 'JGXYA', 'toggleVisibility', 'isRepeated', '_messageWindow', 'akZTo', 'ButtonName', '_nameBoxWindow', 'parse', 'processTouch', 'description', 'processCursorMove', 'OwXrI', 'match', 'runVisibilityCommonEvent', 'VISIBILITY_TOGGLE_KEY', 'ConvertParams', '3123807mEkEOF', 'constructor', 'return\x200', 'clear', 'isSceneMap', 'isHandled', 'Settings', 'left', 'name', '535381ZFDzpm', '1rXmMvf', 'PKsHb', 'max', 'Window_ChoiceList', '484423PVzFBv', 'setWindowVisibility', '3TwrNHt', 'right', 'pagedown', 'RimCg', 'format', 'nPMhD', 'lehbT', 'btJgm', 'ARRAYSTRUCT', 'Window_Selectable_processTouch', 'VISIBILITY_COMMON_EVENT_SHOW', 'ARRAYEVAL', 'Window_EventItem', 'FUNC', 'parameters', 'STRUCT', 'setVisibility', 'lrTjG', 'Window_Selectable_processCursorMove', 'hPrtj', 'toUpperCase', 'CommonEventShow', '%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.', '%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.', 'EVAL', 'playCancel', '_cannotToggleVisibility', 'TextManager_msgButtonConsole', 'scale', 'VISIBILITY_COMMON_EVENT_HIDE', 'call', 'status', '276626DXaODH', 'JSON', 'STR', '_eventItemWindow', 'czQov', 'msgButtonConsole', 'showMessageWindowVisibility', 'trim', '578044vLktTu', 'MessageVisibility', 'canToggleVisibility', 'ZEKfc', 'exit', 'dmEPe', 'VisuMZ_1_MessageCore', 'isCursorMovable', '2xCZgpe', '_pictureChoicesHidden', 'xyoVP', '_numberInputWindow', 'isCancelled', 'ARRAYJSON', 'launchMessageCommonEvent']; const _0x5ac044 = _0x3a0e; (function (_0x53cc00, _0x2fc266) { const _0x43699b = _0x3a0e; while (!![]) { try { const _0x26574c = -parseInt(_0x43699b(0x159)) + parseInt(_0x43699b(0x17a)) * -parseInt(_0x43699b(0x14c)) + -parseInt(_0x43699b(0x1a1)) * parseInt(_0x43699b(0x17b)) + parseInt(_0x43699b(0x15c)) + parseInt(_0x43699b(0x1a9)) + parseInt(_0x43699b(0x17f)) * -parseInt(_0x43699b(0x181)) + parseInt(_0x43699b(0x171)); if (_0x26574c === _0x2fc266) break; else _0x53cc00['push'](_0x53cc00['shift']()); } catch (_0x381522) { _0x53cc00['push'](_0x53cc00['shift']()); } } }(_0x5d5e, 0xb7a50)); var label = _0x5ac044(0x145), tier = tier || 0x0, dependencies = [], pluginData = $plugins['filter'](function (_0x57a65e) { const _0x3b1b87 = _0x5ac044; return _0x57a65e[_0x3b1b87(0x1a0)] && _0x57a65e[_0x3b1b87(0x16a)][_0x3b1b87(0x15a)]('[' + label + ']'); })[0x0]; VisuMZ[label][_0x5ac044(0x177)] = VisuMZ[label]['Settings'] || {}, VisuMZ[_0x5ac044(0x170)] = function (_0x4eb58c, _0x197f59) { const _0x2fc26d = _0x5ac044; for (const _0xeed94a in _0x197f59) { if (_0x2fc26d(0x147) === 'aITcX') return this[_0x2fc26d(0x156)] && this[_0x2fc26d(0x156)][_0x2fc26d(0x172)] === _0x4f1b5e; else { if (_0xeed94a[_0x2fc26d(0x16d)](/(.*):(.*)/i)) { if (_0x2fc26d(0x165) === _0x2fc26d(0x165)) { const _0x453f41 = String(RegExp['$1']), _0x316398 = String(RegExp['$2'])[_0x2fc26d(0x195)]()[_0x2fc26d(0x1a8)](); let _0x28f903, _0x53a490, _0x2957b2; switch (_0x316398) { case 'NUM': _0x28f903 = _0x197f59[_0xeed94a] !== '' ? Number(_0x197f59[_0xeed94a]) : 0x0; break; case 'ARRAYNUM': _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0x1f3f48 => Number(_0x1f3f48)); break; case _0x2fc26d(0x199): _0x28f903 = _0x197f59[_0xeed94a] !== '' ? eval(_0x197f59[_0xeed94a]) : null; break; case _0x2fc26d(0x18c): _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0xa7d5f9 => eval(_0xa7d5f9)); break; case _0x2fc26d(0x1a2): _0x28f903 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : ''; break; case _0x2fc26d(0x151): _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0xdb2c65 => JSON[_0x2fc26d(0x168)](_0xdb2c65)); break; case _0x2fc26d(0x18e): _0x28f903 = _0x197f59[_0xeed94a] !== '' ? new Function(JSON['parse'](_0x197f59[_0xeed94a])) : new Function(_0x2fc26d(0x173)); break; case 'ARRAYFUNC': _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0x18fe0d => new Function(JSON[_0x2fc26d(0x168)](_0x18fe0d))); break; case _0x2fc26d(0x1a3): _0x28f903 = _0x197f59[_0xeed94a] !== '' ? String(_0x197f59[_0xeed94a]) : ''; break; case 'ARRAYSTR': _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0x8ab2dd => String(_0x8ab2dd)); break; case _0x2fc26d(0x190): _0x2957b2 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : {}, _0x28f903 = VisuMZ[_0x2fc26d(0x170)]({}, _0x2957b2); break; case _0x2fc26d(0x189): _0x53a490 = _0x197f59[_0xeed94a] !== '' ? JSON[_0x2fc26d(0x168)](_0x197f59[_0xeed94a]) : [], _0x28f903 = _0x53a490[_0x2fc26d(0x160)](_0x159a33 => VisuMZ[_0x2fc26d(0x170)]({}, JSON[_0x2fc26d(0x168)](_0x159a33))); break; default: continue; }_0x4eb58c[_0x453f41] = _0x28f903; } else _0x598bef('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x2fc26d(0x185)](_0x14a52b, _0x567308, _0x40275e)), _0x27f372['exit'](); } } } return _0x4eb58c; }, (_0x125b95 => { const _0x5aa857 = _0x5ac044, _0x271b01 = _0x125b95[_0x5aa857(0x179)]; for (const _0x2e3d91 of dependencies) { if (!Imported[_0x2e3d91]) { if (_0x5aa857(0x16c) === 'FwvGo') { const _0x272755 = _0x47406b[_0x5aa857(0x156)][_0x5aa857(0x164)]; _0x272755 && _0x272755[_0x5aa857(0x191)](!![]); } else { alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x5aa857(0x185)](_0x271b01, _0x2e3d91)), SceneManager[_0x5aa857(0x148)](); break; } } } const _0x3550a0 = _0x125b95[_0x5aa857(0x16a)]; if (_0x3550a0[_0x5aa857(0x16d)](/\[Version[ ](.*?)\]/i)) { const _0x3c24e6 = Number(RegExp['$1']); _0x3c24e6 !== VisuMZ[label][_0x5aa857(0x15e)] && (alert(_0x5aa857(0x198)[_0x5aa857(0x185)](_0x271b01, _0x3c24e6)), SceneManager[_0x5aa857(0x148)]()); } if (_0x3550a0[_0x5aa857(0x16d)](/\[Tier[ ](\d+)\]/i)) { const _0x3e596b = Number(RegExp['$1']); if (_0x3e596b < tier) _0x5aa857(0x194) !== _0x5aa857(0x192) ? (alert(_0x5aa857(0x197)[_0x5aa857(0x185)](_0x271b01, _0x3e596b, tier)), SceneManager['exit']()) : _0x83598d[_0x5aa857(0x162)](); else { if (_0x5aa857(0x149) === _0x5aa857(0x187)) { if (this['isOpenAndActive']()) { if (this[_0x5aa857(0x19d)]['x'] <= 0x0 && this[_0x5aa857(0x146)]()) { if (_0x4603f3[_0x5aa857(0x155)]() || _0x1d412e['isCancelled']()) return _0x3671e4[_0x5aa857(0x1a7)](); } } _0xc5331a[_0x5aa857(0x145)][_0x5aa857(0x18a)][_0x5aa857(0x19f)](this); } else tier = Math[_0x5aa857(0x17d)](_0x3e596b, tier); } } VisuMZ['ConvertParams'](VisuMZ[label][_0x5aa857(0x177)], _0x125b95[_0x5aa857(0x18f)]); })(pluginData); function _0x3a0e(_0x1b612b, _0x5841bb) { return _0x3a0e = function (_0x5d5eb3, _0x3a0eef) { _0x5d5eb3 = _0x5d5eb3 - 0x145; let _0x28a0b7 = _0x5d5e[_0x5d5eb3]; return _0x28a0b7; }, _0x3a0e(_0x1b612b, _0x5841bb); } TextManager[_0x5ac044(0x1a6)] && (VisuMZ[_0x5ac044(0x145)]['TextManager_msgButtonConsole'] = TextManager['msgButtonConsole'], TextManager[_0x5ac044(0x1a6)] = function (_0x4deb07) { const _0x33b32c = _0x5ac044; if (_0x4deb07 === _0x33b32c(0x154)) return VisuMZ[_0x33b32c(0x145)][_0x33b32c(0x177)][_0x33b32c(0x166)]; return VisuMZ[_0x33b32c(0x145)][_0x33b32c(0x19c)][_0x33b32c(0x19f)](this, _0x4deb07); });; SceneManager[_0x5ac044(0x175)] = function () { const _0x4537f3 = _0x5ac044; return this[_0x4537f3(0x156)] && this['_scene'][_0x4537f3(0x172)] === Scene_Map; }, Game_Temp['prototype'][_0x5ac044(0x15d)] = function () { const _0x5641c5 = _0x5ac044, _0x4665f1 = SceneManager[_0x5641c5(0x156)][_0x5641c5(0x164)]; _0x4665f1 && (_0x5641c5(0x14e) !== _0x5641c5(0x17c) ? _0x4665f1[_0x5641c5(0x162)]() : (_0x20ba2f(_0x5641c5(0x198)[_0x5641c5(0x185)](_0x4fbf46, _0x17d868)), _0x1508e5['exit']())); }, Game_Temp[_0x5ac044(0x157)][_0x5ac044(0x1a7)] = function () { const _0x1187da = _0x5ac044, _0x5d6e58 = SceneManager[_0x1187da(0x156)][_0x1187da(0x164)]; _0x5d6e58 && _0x5d6e58[_0x1187da(0x191)](!![]); }, Window_Selectable[_0x5ac044(0x157)][_0x5ac044(0x146)] = function () { const _0x35c352 = _0x5ac044; if (!SceneManager[_0x35c352(0x175)]()) return ![]; if (this[_0x35c352(0x14d)]) return ![]; const _0x1e51f4 = ['Window_Message', _0x35c352(0x17e), 'Window_NumberInput', _0x35c352(0x18d)]; return _0x1e51f4[_0x35c352(0x15a)](this[_0x35c352(0x172)][_0x35c352(0x179)]); }, VisuMZ[_0x5ac044(0x145)][_0x5ac044(0x193)] = Window_Selectable['prototype'][_0x5ac044(0x16b)], Window_Selectable[_0x5ac044(0x157)][_0x5ac044(0x16b)] = function () { const _0x2ceabe = _0x5ac044; if (this[_0x2ceabe(0x14b)]()) { if (Input[_0x2ceabe(0x155)](Window_Message[_0x2ceabe(0x16f)])) { if (this['canToggleVisibility']()) return $gameTemp['toggleMessageWindowVisibility'](); } else { if (this[_0x2ceabe(0x19d)]['x'] <= 0x0 && this['canToggleVisibility']()) { if (_0x2ceabe(0x188) !== 'btJgm') { const _0x146b38 = _0x51b6a7[_0x2ceabe(0x145)][_0x2ceabe(0x153)][_0x2ceabe(0x19f)](this); if (this[_0x2ceabe(0x19d)]['x'] <= 0x0 && _0x146b38) return this[_0x2ceabe(0x191)](!![]), ![]; else return _0x566a9d['isTriggered'](_0x4c302b['VISIBILITY_TOGGLE_KEY']) ? (this[_0x2ceabe(0x162)](), ![]) : _0x146b38; } else { if (Input[_0x2ceabe(0x163)]('down')) return $gameTemp[_0x2ceabe(0x1a7)](); if (Input['isRepeated']('up')) return $gameTemp[_0x2ceabe(0x1a7)](); if (Input[_0x2ceabe(0x163)](_0x2ceabe(0x182))) return $gameTemp[_0x2ceabe(0x1a7)](); if (Input[_0x2ceabe(0x163)](_0x2ceabe(0x178))) return $gameTemp[_0x2ceabe(0x1a7)](); if (!this['isHandled'](_0x2ceabe(0x183)) && Input['isTriggered'](_0x2ceabe(0x183))) return _0x2ceabe(0x15b) === _0x2ceabe(0x186) ? _0x3cc01f[_0x2ceabe(0x145)]['Settings'][_0x2ceabe(0x166)] : $gameTemp[_0x2ceabe(0x1a7)](); if (!this[_0x2ceabe(0x176)]('pageup') && Input[_0x2ceabe(0x155)]('pageup')) { if (_0x2ceabe(0x161) !== _0x2ceabe(0x161)) { if (!_0x2157d1['VisuMZ_1_MessageCore']) return; const _0x14e737 = _0x2ecb91 ? _0x24815b[_0x2ceabe(0x18b)] : _0x15e9e2[_0x2ceabe(0x19e)]; _0x2fdc49[_0x14e737] && this[_0x2ceabe(0x152)](_0x14e737); } else return $gameTemp[_0x2ceabe(0x1a7)](); } return; } } } } VisuMZ[_0x2ceabe(0x145)][_0x2ceabe(0x193)]['call'](this); }, VisuMZ[_0x5ac044(0x145)]['Window_Selectable_processTouch'] = Window_Selectable[_0x5ac044(0x157)][_0x5ac044(0x169)], Window_Selectable['prototype'][_0x5ac044(0x169)] = function () { const _0x29e658 = _0x5ac044; if (this[_0x29e658(0x15f)]()) { if (this[_0x29e658(0x19d)]['x'] <= 0x0 && this[_0x29e658(0x146)]()) { if (TouchInput[_0x29e658(0x155)]() || TouchInput[_0x29e658(0x150)]()) { if (_0x29e658(0x1a5) !== _0x29e658(0x184)) return $gameTemp[_0x29e658(0x1a7)](); else { if (!_0xebe2cc['isSceneMap']()) return; _0x29fc04[_0x29e658(0x19a)](), this['setWindowVisibility'](_0x287571), this[_0x29e658(0x16e)](_0x2d4e0a), _0x328e3e[_0x29e658(0x174)](), _0x5d8e60[_0x29e658(0x174)](); } } } } VisuMZ[_0x29e658(0x145)][_0x29e658(0x18a)][_0x29e658(0x19f)](this); }, Window_Message[_0x5ac044(0x16f)] = VisuMZ['MessageVisibility'][_0x5ac044(0x177)]['ToggleKey'], Window_Message[_0x5ac044(0x18b)] = VisuMZ['MessageVisibility'][_0x5ac044(0x177)][_0x5ac044(0x196)], Window_Message[_0x5ac044(0x19e)] = VisuMZ[_0x5ac044(0x145)][_0x5ac044(0x177)]['CommonEventHide'], VisuMZ['MessageVisibility']['Window_Message_isTriggered'] = Window_Message[_0x5ac044(0x157)][_0x5ac044(0x155)], Window_Message[_0x5ac044(0x157)][_0x5ac044(0x155)] = function () { const _0x20d494 = _0x5ac044, _0x20ed9d = VisuMZ[_0x20d494(0x145)][_0x20d494(0x153)][_0x20d494(0x19f)](this); if (this[_0x20d494(0x19d)]['x'] <= 0x0 && _0x20ed9d) return this[_0x20d494(0x191)](!![]), ![]; else return Input[_0x20d494(0x155)](Window_Message[_0x20d494(0x16f)]) ? (this[_0x20d494(0x162)](), ![]) : _0x20d494(0x158) !== _0x20d494(0x158) ? _0x1be5e8[_0x20d494(0x1a0)] && _0x103d7e[_0x20d494(0x16a)][_0x20d494(0x15a)]('[' + _0x118e79 + ']') : _0x20ed9d; }, Window_Message['prototype'][_0x5ac044(0x162)] = function () { const _0x233dfa = _0x5ac044, _0x5043a6 = !(this[_0x233dfa(0x19d)]['x'] > 0x0); this[_0x233dfa(0x191)](_0x5043a6); }, Window_Message[_0x5ac044(0x157)]['setVisibility'] = function (_0x5d3ef8) { const _0x3ce95c = _0x5ac044; if (!SceneManager[_0x3ce95c(0x175)]()) return; SoundManager[_0x3ce95c(0x19a)](), this[_0x3ce95c(0x180)](_0x5d3ef8), this[_0x3ce95c(0x16e)](_0x5d3ef8), Input[_0x3ce95c(0x174)](), TouchInput[_0x3ce95c(0x174)](); }, Window_Message[_0x5ac044(0x157)]['enableToggleVisibility'] = function () { const _0x2d1fba = _0x5ac044; this[_0x2d1fba(0x19b)] = ![]; }, Window_Message[_0x5ac044(0x157)][_0x5ac044(0x180)] = function (_0x138786) { const _0x35e5b3 = _0x5ac044, _0x832e8d = [this, this['_goldWindow'], this[_0x35e5b3(0x167)], this['_choiceListWindow'], this[_0x35e5b3(0x14f)], this[_0x35e5b3(0x1a4)]], _0x38c581 = _0x138786 ? 0x1 : 0x0; for (const _0x21fd4f of _0x832e8d) { if (!_0x21fd4f) continue; _0x21fd4f[_0x35e5b3(0x19d)]['x'] = _0x38c581, _0x21fd4f['scale']['y'] = _0x38c581; } }, Window_Message[_0x5ac044(0x157)][_0x5ac044(0x16e)] = function (_0x5e71b4) { const _0x52516e = _0x5ac044; if (!Imported[_0x52516e(0x14a)]) return; const _0x1a1f74 = _0x5e71b4 ? Window_Message[_0x52516e(0x18b)] : Window_Message[_0x52516e(0x19e)]; $dataCommonEvents[_0x1a1f74] && this[_0x52516e(0x152)](_0x1a1f74); };