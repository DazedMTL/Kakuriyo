//=============================================================================
// VisuStella MZ - Extended Message Functionality
// VisuMZ_2_ExtMessageFunc.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ExtMessageFunc = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtMessageFunc = VisuMZ.ExtMessageFunc || {};
VisuMZ.ExtMessageFunc.version = 1.07;

//=============================================================================
/*:
* @target MZ
* @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.07] [ExtMessageFunc]
* @author VisuStella
* @url http://www.yanfly.moe/wiki/Extended_Message_Functionality_VisuStella_MZ
* @base VisuMZ_1_MessageCore
* @orderAfter VisuMZ_1_MessageCore
*
* @help
* ============================================================================
* Introduction
* ============================================================================
*
* The Extended Message Function plugin adds onto RPG Maker MZ's Message Window
* and adds in various features you would normally see found in modern RPG's.
* Things like automatically moving the text forward after a set amount of time
* or fast forward are available. Saving and loading during a message is also
* possible as well as going to the Options menu or returning back to the title
* screen. These options are only available to the Message Window on the map
* scene and do not work in battle.
*
* Features include all (but not limited to) the following:
* 
* * The Button Console appears on the Message Window let the player activate
*   various commands via touch/click.
* * Extended Fast Forward Mode is an expanded feature upon the Message Core's
*   Fast Forward function to fast forward all events and not just messages.
*   This can be optionally disabled.
* * A Message Cursor will appear where the text has ended for those who want
*   that kind of aesthetic in their game.
* * Auto-Forward will automatically move messages onward after a certain
*   amount of time has passed. Time required will be determined based on the
*   length of the message in question.
* * Saving and Loading can be done from the Message Window akin to how many
*   visual novels work. Requires the Save Core, but you're already using that,
*   right? Right?
* * Also be able to jump straight into the Options scene from the Message
*   Window to change any settings on the fly. Requires the Options Core, but
*   you're using that, too, correct?
* * And for those who want to jump back to the title screen, they can do so
*   by selecting a Game End option, too.
*
* ============================================================================
* Requirements
* ============================================================================
*
* This plugin is made for RPG Maker MZ. This will not work in other iterations
* of RPG Maker.
*
* ------ Required Plugin List ------
*
* * VisuMZ_1_MessageCore
*
* This plugin requires the above listed plugins to be installed inside your
* game's Plugin Manager list in order to work. You cannot start your game with
* this plugin enabled without the listed plugins.
*
* ------ Tier 2 ------
*
* This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
* VisuMZ_1_OptionsCore
*
* The Options Core is a required plugin in order to make use of the "Options"
* (aka "Config") button found in the Button Console.
*
* ---
*
* VisuMZ_1_SaveCore
*
* The Options Core is a required plugin in order to make use of the "Save" and
* "Load" buttons found in the Button Console.
*
* ---
* 
* VisuMZ_3_MessageLog
* 
* The Message Log plugin enables the "Log" button found in the Button Console
* to let the player go and review the text that has been displayed in the map
* scene. This does not include the text found in battle to avoid conflicting
* logged messages across different situations.
* 
* ---
* 
* VisuMZ_4_MessageVisibility
* 
* The Message Visibility plugin enables the "Hide" button found in the
* Button Console to make the Message Window visible or invisible.
* 
* ---
*
* ============================================================================
* Available Text Codes
* ============================================================================
*
* The following are text codes that you may use with this plugin. 
*
* === Button Console-Related Text Codes ===
* 
* ---
*
* --------------------   -----------------------------------------------------
* Text Code              Effect (Message Window Only)
* --------------------   -----------------------------------------------------
* 
* <Hide Buttons>         Hides the Button Console from this current Message
*                        Window's text assuming that nothing else is hiding
*                        the Button Console from view.
* 
* ---
*
* ============================================================================
* Plugin Commands
* ============================================================================
*
* The following are Plugin Commands that come with this plugin. They can be
* accessed through the Plugin Command event command.
*
* ---
* 
* === Fast Forward Plugin Commands ===
* 
* ---
*
* Fast Forward: Allow/Disallow
* - Change whether or not Fast Forward is allowed/disallowed.
* - Must be enabled by the Plugin Parameters.
*
*   Allow?:
*   - Allow or disallow the Extended Fast Forward feature?
*   - Must be enabled by the Plugin Parameters.
*
* ---
* 
* === Message Button Console Plugin Commands ===
* 
* ---
*
* Message Button Console: Show/Hide
* - Determine if the Message Button Console is visible or hidden.
* - Only appears on the map. 
* - Does not appear in battle.
*
*   Visible?:
*   - Show or hide the Message Button Console feature?
*   - Only appears on the map.
*   - Does not appear in battle.
*
* ---
* 
* === Message Cursor Plugin Commands ===
* 
* ---
*
* Message Cursor: Change Settings
* - Change the Message Cursor settings used.
*
*   Change Settings:
*   - Change the Message Cursor settings.
*   - Settings are the same as the ones found in the Plugin Parameters.
*
* ---
*
* ============================================================================
* Plugin Parameters: Auto-Forward Settings
* ============================================================================
*
* Auto-Forward settings used for this game. Auto-Forward is a feature that
* once enabled, the game will automatically move the "Show Text" event
* commands forward after a certain amount of time. The amount of time will be
* determined by how many characters are displayed on the screen. There is a
* lower boundary, where if the wait time does not meet the amount, the timer
* will be set to the minimum wait value instead.
*
* ---
*
* Settings
* 
*   Wait per Character:
*   - How many frames should the game wait per character?
*   - Average: 60 frames per second.
* 
*   Minimum Wait:
*   - What is the minimum amount of frames to wait?
*   - Average: 60 frames per second.
*
* ---
*
* ============================================================================
* Plugin Parameters: Fast Forward (Extended) Settings
* ============================================================================
*
* Extended Fast Forward settings used for this game. If enabled, this will
* replace the Message Core's Fast Forward functionality. The Extended Fast
* Forward feature will not only fast forward through messages but any running
* events that are not found in a parallel event.
* 
* It can also be activated the Message Core's Fast Forward shortcut key.
*
* ---
*
* Settings
* 
*   Enable?:
*   - Enable or disable the Extended Fast Forward feature?
* 
*   Speed:
*   - What is the speed at which Extended Fast Forward works at?
*   - Higher numbers are faster.
*
* ---
*
* ============================================================================
* Plugin Parameters: Message Button Console Settings
* ============================================================================
*
* Message Button Console settings used for this game.
* 
* It will only appear in the Message Window on the map scene. It will NOT
* appear in battle. The reason it won't appear in battle is because many of
* the functions there will clash with how the battle scene behaves.
* 
* The Button Console will add extra padding to the Message Window and appear
* at either the top of bottom of the Message Window (your choice). A row of
* buttons will appear each with a different functionality.
* 
* These Plugin Parameters also allow you to customize the appearance of how
* the buttons look in-game. Adjust them accordingly.
*
* ---
*
* General
* 
*   Show by Default?:
*   - Show or hide the Message Button Console by default?
* 
*   Position:
*   - Where do you wish to display the Message Button Console?
*     - Top of Message Window
*     - Bottom of Message Window
* 
*   Auto-Size Hide?:
*   - Hide the button console when using auto-size text codes?
*
* ---
*
* Appearance
* 
*   Window Skin:
*   - What is the window skin used for the buttons?
*   - Ignore if using Background Images.
* 
*   Font Name:
*   - What font do you wish to use for the Message Button Console?
* 
*     Font Size:
*     - What font size do you wish to use for the Message Button Console?
* 
*   Text Colors:
* 
*     Normal Color:
*     - Use #rrggbb for custom colors or regular numbers for text colors from
*       the Window Skin.
* 
*     Toggled Color:
*     - Use #rrggbb for custom colors or regular numbers for text colors from
*       the Window Skin.
* 
*     Disabled Color:
*     - Use #rrggbb for custom colors or regular numbers for text colors from
*       the Window Skin.
* 
*   Visuals:
* 
*     Width:
*     - What is the width of each button?
* 
*     Height:
*     - What is the height of each button?
* 
*     Buffer:
*     - What is the buffer between each button?
* 
*   Background Images:
* 
*     Disabled Image:
*     Enabled Image:
*     Toggled Image:
*     - Filename of the background image when the button is disabled,
*       enabled, or toggled.
*     - This will hide the window skin for this button.
* 
*     Offset X:
*     - Offsets the X position of this image.
*     - Negative: left; Positive: right
* 
*     Offset Y:
*     - Offsets the Y position of this image.
*     - Negative: up; Positive: down
*
* ---
*
* ============================================================================
* Plugin Parameters: Button Settings
* ============================================================================
*
* Settings for which buttons appear and how they appear. These settings will
* determine which buttons appear (provided that their required plugins are
* available), what shortcut keys are applied to them, and what kind of text
* will be displayed to represent them.
* 
* In case you are wondering where the Fast Forward shortcut key is, that
* setting is found in the Message Core.
*
* ---
*
* General
* 
*   List:
*   - Which buttons appear and in what order?
*   - Some commands require certain plugins installed.
*
* ---
*
* Shortcut Keys
* 
*   Auto-Forward Key:
*   - This is the key used for auto-forwarding messages.
* 
*   Save Key:
*   - This is the key used for quick saving.
*   - Requires VisuMZ_1_SaveCore!
* 
*   Load Key:
*   - This is the key used for quick load.
*   - Requires VisuMZ_1_SaveCore!
* 
*   Options Key:
*   - This is the key used for opening options.
*   - Requires VisuMZ_1_OptionsCore!
* 
*   Game End Key:
*   - This is the key used for ending the game.
*
* ---
*
* Vocabulary
* 
*   Auto-Forward:
*   - How is this option's text displayed in-game?
* 
*   Fast Forward:
*   - How is this option's text displayed in-game?
* 
*   Save Game:
*   - How is this option's text displayed in-game?
*   - Requires VisuMZ_1_SaveCore!
* 
*   Load Game:
*   - How is this option's text displayed in-game?
*   - Requires VisuMZ_1_SaveCore!
* 
*   Options:
*   - How is this option's text displayed in-game?
*   - Requires VisuMZ_1_OptionsCore!
* 
*   Game End:
*   - How is this option's text displayed in-game?
*
* ---
*
* ============================================================================
* Plugin Parameters: Message Cursor Settings
* ============================================================================
*
* Message Cursor settings used for this game. The cursor, if enabled, will
* appear where the text is currently displayed at and adds a new type of
* aesthetic to the game.
*
* ---
*
* General
* 
*   Enable?:
*   - Enable or disable the message cursor?
* 
*   Graphic Type:
*   - What is the cursor's graphic type?
*     - Icon - From img/system/IconSet.png
*     - Image - An animated image from img/system/
*
* ---
*
* Icon
* 
*   Icon Index:
*   - This is icon used for the Message Cursor.
* 
*   Flip Speed Multiplier:
*   - What is the flip speed multiplier for the Message Cursor?
*   - Use 0 for no flipping.
*
* ---
*
* Image
* 
*   Filename:
*   - Filename of the image found inside the img/system/ folder.
* 
*   Image Rows:
*   - How many rows are there for the image?
* 
*   Image Columns:
*   - How many columns are there for the image?
* 
*   Frame Delay:
*   - How many frames delayed are there per animated cell?
*
* ---
*
* Appearance
* 
*   Anchor X:
*   Anchor Y:
*   - Determine the Message Cursor's X/Y position.
*   - Use a number between 0 and 1 for best results.
* 
*   Offset X:
*   Offset Y:
*   - Offset the Message Cursor's X/Y position by how many pixels?
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
* Version 1.07: March 3, 2022
* * Compatibility Update
* ** Added better compatibility functionality with other plugins.
* * Documentation Update!
* ** Help file updated for new features.
* * New Features!
* ** New Plugin Parameter added by Irina and sponsored by AndyL:
* *** Plugin Parameters > Message Button Console > Auto-Size Hide?
* **** Hide the button console when using auto-size text codes?
* 
* Version 1.06: November 18, 2021
* * Compatibility Update
* ** Added compatibility functionality for future plugins.
* 
* Version 1.05: November 4, 2021
* * Documentation Update!
* ** Help file updated for new features.
* * New Features!
* ** New Plugin Parameters added by Irina and sponsored by Archeia:
* *** Plugin Parameters > Message Button Console > Background Images
* **** Adds a background image to this button instead of using a window skin.
* **** This will disable the window skin.
* **** Various images can be used for "Disabled", "Enabled", and "Toggled".
* **** Offset X and Y positions.
* 
* Version 1.04: October 14, 2021
* * Feature Update!
* ** Added an alert requirement for those who are using very old versions of
*    the Message Core that cannot sustain the requirements of this plugin.
*    Added by Irina.
* 
* Version 1.03: September 3, 2021
* * Bug Fixes!
* ** Pause sprite, for the Message Window, will no longer show multiple copies
*    if the message cursor sprite is disabled. Fix made by Irina.
* 
* Version 1.02: August 6, 2021
* * Documentation Update!
* ** Plugin URL now updated to most recent one.
* 
* Version 1.01: July 30, 2021
* * Feature Update!
* ** Added graphic pre-loading for save/load menu preparation. Added by Irina.
* 
* Version 1.00 Official Release Date: August 2, 2021
* * Finished Plugin!
*
* ============================================================================
* End of Helpfile
* ============================================================================
*
* @ --------------------------------------------------------------------------
*
* @command ExtFastFwdDisallow
* @text Fast Forward: Allow/Disallow
* @desc Change whether or not Fast Forward is allowed/disallowed.
* Must be enabled by the Plugin Parameters.
*
* @arg Allow:eval
* @text Allow?
* @parent General
* @type boolean
* @on Allow
* @off Disallow
* @desc Allow or disallow the Extended Fast Forward feature?
* Must be enabled by the Plugin Parameters.
* @default true
*
* @ --------------------------------------------------------------------------
*
* @command MsgButtonConsole
* @text Message Button Console: Show/Hide
* @desc Determine if the Message Button Console is visible or hidden.
* Only appears on the map. Does not appear in battle.
*
* @arg Visible:eval
* @text Visible?
* @parent General
* @type boolean
* @on Visible
* @off Hidden
* @desc Show or hide the Message Button Console feature?
* Only appears on the map. Does not appear in battle.
* @default true
*
* @ --------------------------------------------------------------------------
*
* @command MessageCursorSettings
* @text Message Cursor: Change Settings
* @desc Change the Message Cursor settings used.
*
* @arg MsgCursor:struct
* @text Change Settings
* @type struct<MsgCursor>
* @desc Change the Message Cursor settings.
* @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
*
* @ --------------------------------------------------------------------------
*
* @ ==========================================================================
* @ Plugin Parameters
* @ ==========================================================================
*
* @param BreakHead
* @text --------------------------
* @default ----------------------------------
*
* @param ExtMessageFunc
* @default Plugin Parameters
*
* @param ATTENTION
* @default READ THE HELP FILE
*
* @param BreakSettings
* @text --------------------------
* @default ----------------------------------
*
* @param Auto:struct
* @text Auto-Forward Settings
* @type struct<Auto>
* @desc Auto-Forward settings used for this game.
* @default {"WaitPerChar:num":"6","MinimumWait:num":"300"}
*
* @param FastFwd:struct
* @text Fast Forward (Extended)
* @type struct<FastFwd>
* @desc Extended Fast Forward settings used for this game.
* @default {"Enable:eval":"true","Speed:num":"8"}
*
* @param MsgButtonConsole:struct
* @text Message Button Console
* @type struct<MsgButtonConsole>
* @desc Message Button Console settings used for this game.
* @default {"General":"","ShowDefault:eval":"true","Position:str":"bottom","Appearance":"","WindowSkin:str":"Window","FontFace:str":"Arial","FontSize:num":"18","TextColors":"","NormalColor:str":"0","ToggledColor:str":"24","DisabledColor:str":"7","Visuals":"","ButtonWidth:num":"86","ButtonHeight:num":"36","ButtonBuffer:num":"6"}
*
* @param Buttons:struct
* @text Button Settings
* @parent MsgButtonConsole:struct
* @type struct<Buttons>
* @desc Settings for which buttons appear and how they appear.
* @default {"General":"","List:arraystr":"[\"auto\",\"fastFwd\",\"log\",\"hide\",\"save\",\"load\",\"options\",\"gameEnd\"]","AutoKey:str":"none","Shortcuts":"","SaveKey:str":"none","LoadKey:str":"none","OptionsKey:str":"none","GameEndKey:str":"none","Vocab":"","Auto:str":"AUTO","FastFwd:str":"FAST","Save:str":"SAVE","Load:str":"LOAD","Options:str":"CONFIG","GameEnd:str":"TITLE"}
*
* @param MsgCursor:struct
* @text Message Cursor Settings
* @type struct<MsgCursor>
* @desc Message Cursor settings used for this game.
* @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
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
 * Auto-Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param WaitPerChar:num
 * @text Wait per Character
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames should the game wait per character?
 * Average: 60 frames per second.
 * @default 6
 *
 * @param MinimumWait:num
 * @text Minimum Wait
 * @parent General
 * @type number
 * @min 1
 * @desc What is the minimum amount of frames to wait?
 * Average: 60 frames per second.
 * @default 300
 *
 */
/* ----------------------------------------------------------------------------
 * Extended Fast Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FastFwd:
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the Extended Fast Forward feature?
 * @default true
 *
 * @param Speed:num
 * @text Speed
 * @parent General
 * @type number
 * @min 2
 * @desc What is the speed at which Extended Fast Forward works at?
 * Higher numbers are faster.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Message Button Console Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgButtonConsole:
 *
 * @param General
 *
 * @param ShowDefault:eval
 * @text Show by Default?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the Message Button Console by default?
 * @default true
 *
 * @param Position:str
 * @text Position
 * @parent General
 * @type select
 * @option Top of Message Window
 * @value top
 * @option Bottom of Message Window
 * @value bottom
 * @desc Where do you wish to display the Message Button Console?
 * @default bottom
 *
 * @param AutoSizeHide:eval
 * @text Auto-Size Hide?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Hide the button console when using auto-size text codes?
 * @default false
 *
 * @param Appearance
 *
 * @param WindowSkin:str
 * @text Window Skin
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @require 1
 * @desc What is the window skin used for the buttons?
 * Ignore if using Background Images.
 * @default Window
 *
 * @param FontFace:str
 * @text Font Name
 * @parent Appearance
 * @desc What font do you wish to use for the Message Button Console?
 * @default Arial
 *
 * @param FontSize:num
 * @text Font Size
 * @parent FontFace:str
 * @type number
 * @min 1
 * @desc What font size do you wish to use for the Message Button Console?
 * @default 18
 * 
 * @param TextColors
 * @text Text Colors
 * @parent Appearance
 *
 * @param NormalColor:str
 * @text Normal Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ToggledColor:str
 * @text Toggled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param DisabledColor:str
 * @text Disabled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param Visuals
 * @text Button Visuals
 * @parent Appearance
 *
 * @param ButtonWidth:num
 * @text Width
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the width of each button?
 * @default 86
 *
 * @param ButtonHeight:num
 * @text Height
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the height of each button?
 * @default 36
 *
 * @param ButtonBuffer:num
 * @text Buffer
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the buffer between each button?
 * @default 6
 *
 * @param Images
 * @text Background Images
 * @parent Appearance
 *
 * @param ImgDisabled:str
 * @text Disabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is disabled.
 * @default 
 *
 * @param ImgDisabledOffsetX:num
 * @text Offset X
 * @parent ImgDisabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgDisabledOffsetY:num
 * @text Offset Y
 * @parent ImgDisabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgEnabled:str
 * @text Enabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is enabled.
 * @default 
 *
 * @param ImgEnabledOffsetX:num
 * @text Offset X
 * @parent ImgEnabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgEnabledOffsetY:num
 * @text Offset Y
 * @parent ImgEnabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgToggled:str
 * @text Toggled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is toggled.
 * @default 
 *
 * @param ImgToggledOffsetX:num
 * @text Offset X
 * @parent ImgToggled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgToggledOffsetY:num
 * @text Offset Y
 * @parent ImgToggled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buttons:
 *
 * @param General
 *
 * @param List:arraystr
 * @text List
 * @parent General
 * @type combo[]
 * @option auto
 * @option log
 * @option fastFwd
 * @option gameEnd
 * @option hide
 * @option load
 * @option options
 * @option save
 * @desc Which buttons appear and in what order?
 * Some commands require certain plugins installed.
 * @default ["auto","fastFwd","log","hide","save","load","options","gameEnd"]
 * 
 * @param Shortcuts
 * @text Shortcut Keys
 *
 * @param AutoKey:str
 * @text Auto-Forward Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for auto-forwarding messages.
 * @default none
 * 
 * @param SaveKey:str
 * @text Save Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick saving.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param LoadKey:str
 * @text Load Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick load.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param OptionsKey:str
 * @text Options Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening options.
 * Requires VisuMZ_1_OptionsCore!
 * @default none
 * 
 * @param GameEndKey:str
 * @text Game End Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for ending the game.
 * @default none
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Auto:str
 * @text Auto-Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default AUTO
 *
 * @param FastFwd:str
 * @text Fast Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default FAST
 *
 * @param Save:str
 * @text Save Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default SAVE
 *
 * @param Load:str
 * @text Load Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default LOAD
 *
 * @param Options:str
 * @text Options
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_OptionsCore!
 * @default CONFIG
 *
 * @param GameEnd:str
 * @text Game End
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default TITLE
 *
 */
/* ----------------------------------------------------------------------------
 * Message Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgCursor:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the message cursor?
 * @default true
 *
 * @param GraphicType:str
 * @text Graphic Type
 * @parent General
 * @type select
 * @option Icon - From img/system/IconSet.png
 * @value icon
 * @option Image - An animated image from img/system/
 * @value image
 * @desc What is the cursor's graphic type?
 * @default icon
 * 
 * @param Icon
 *
 * @param IconIndex:str
 * @text Icon Index
 * @parent Icon
 * @desc This is icon used for the Message Cursor.
 * @default 188
 *
 * @param FlipMultiplier:str
 * @text Flip Speed Multiplier
 * @parent Icon
 * @desc What is the flip speed multiplier for the Message Cursor?
 * Use 0 for no flipping.
 * @default 1
 * 
 * @param Image
 *
 * @param Filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the image found inside the img/system/ folder.
 * @default 
 *
 * @param Rows:num
 * @text Image Rows
 * @parent Image
 * @type number
 * @min 1
 * @desc How many rows are there for the image?
 * @default 1
 *
 * @param Cols:num
 * @text Image Columns
 * @parent Image
 * @type number
 * @min 1
 * @desc How many columns are there for the image?
 * @default 1
 *
 * @param FrameDelay:num
 * @text Frame Delay
 * @parent Image
 * @type number
 * @min 1
 * @desc How many frames delayed are there per animated cell?
 * @default 4
 * 
 * @param Appearance
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Appearance
 * @desc Determine the Message Cursor's X position.
 * Use a number between 0 and 1 for best results.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Appearance
 * @desc Determine the Message Cursor's Y position.
 * Use a number between 0 and 1 for best results.
 * @default 1
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Appearance
 * @desc Offset the Message Cursor's X position by how many pixels?
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Appearance
 * @desc Offset the Message Cursor's Y position by how many pixels?
 * @default -8
 *
 */
//=============================================================================

function _0x4667(_0x5b5eee, _0x1a8d89) { const _0xd48cf6 = _0xd48c(); return _0x4667 = function (_0x466707, _0xc5244c) { _0x466707 = _0x466707 - 0xf8; let _0x5598c5 = _0xd48cf6[_0x466707]; return _0x5598c5; }, _0x4667(_0x5b5eee, _0x1a8d89); } const _0x4a9484 = _0x4667; (function (_0x1fc089, _0x3b8bdd) { const _0x42b5df = _0x4667, _0x119ca5 = _0x1fc089(); while (!![]) { try { const _0x45c8fc = -parseInt(_0x42b5df(0x217)) / 0x1 * (-parseInt(_0x42b5df(0x1bb)) / 0x2) + parseInt(_0x42b5df(0x110)) / 0x3 * (-parseInt(_0x42b5df(0x1a0)) / 0x4) + -parseInt(_0x42b5df(0x11c)) / 0x5 * (-parseInt(_0x42b5df(0x159)) / 0x6) + parseInt(_0x42b5df(0x182)) / 0x7 + parseInt(_0x42b5df(0x1ef)) / 0x8 + parseInt(_0x42b5df(0x1cf)) / 0x9 + parseInt(_0x42b5df(0x12f)) / 0xa * (-parseInt(_0x42b5df(0x168)) / 0xb); if (_0x45c8fc === _0x3b8bdd) break; else _0x119ca5['push'](_0x119ca5['shift']()); } catch (_0x36115f) { _0x119ca5['push'](_0x119ca5['shift']()); } } }(_0xd48c, 0xd789e)); var label = _0x4a9484(0xfb), tier = tier || 0x0, dependencies = [_0x4a9484(0x1ad)], pluginData = $plugins[_0x4a9484(0x195)](function (_0x512f92) { const _0x57c37a = _0x4a9484; return _0x512f92[_0x57c37a(0x256)] && _0x512f92[_0x57c37a(0x22e)][_0x57c37a(0x224)]('[' + label + ']'); })[0x0]; function _0xd48c() { const _0x2b4a04 = ['AnchorY', 'Load', 'drawFace', 'vLlUs', 'MessageCursorSettings', 'setMessageCursorSettings', 'DisabledColor', 'resetFontSettings', 'HLAfy', 'FastFwd', '_lastExtMsgFuncIndex', 'playBuzzerSound', 'AUTO_FORWARD_DELAY_PER_CHAR', 'parse', 'makeDeepCopy', 'isActivatedExtendedFastForwardMode', 'isCancelled', '_autoSizeRegexp', 'visible', 'iIUtr', 'Window_Message', 'windowskin', 'NYsQt', '_eventItemWindow', 'USE_BACK_IMAGE_SPRITES', 'toggleAutoForward', 'floor', '3683736YTincq', 'xTAaK', 'cXWWX', 'VDPRg', 'isAnySavefileExists', 'getColor', 'isFurnitureSystemMode', 'isExtendedFastForwardMode', 'anchor', 'meetExtMsgFuncResetRequirements', 'hideButtonConsoleAutoSize', 'trim', 'cos', 'Scene_Map_updateMainMultiply', 'VisuMZ_4_MessageVisibility', '2368377nRWANw', '_heldDownFastFwd', 'qBWIM', '_pauseSignAnimationCount', 'contents', 'FlipMultiplier', 'kTwGD', 'alignButtonConsoleButtons', 'FrameDelay', 'elPGo', 'updateBackOpacity', '_type', 'ImgDisabled', 'updateCustomMessageCursorPauseSignSprites', 'ARRAYEVAL', 'updatePauseSignHeightextMsgFunction', 'registerCommand', 'loadWindowskin', 'Auto', 'Game_Interpreter_command101', 'clamp', 'FontFace', 'SKIN', 'JSON', 'exit', 'characterName', '7108087RdhZkj', 'create', 'ButtonHeight', 'ButtonBuffer', 'save', 'yklse', 'IMnVC', 'fhWYj', 'command101', 'active', '_buttonConsoleSprites', '_createPauseSignSprites', 'isSaveEnabled', 'opacity', 'The\x20latest\x20version\x20is\x20required\x20to\x20use\x0a', 'showButtonConsole', 'BUTTON_WIDTH', 'prototype', 'show', 'filter', 'VOCAB', 'Visible', 'MsgButtonConsole', 'Cols', 'replace', 'isMessageButtonConsoleVisible', 'updateExtendedFastForwardCancel', '_hideButtonConsole', 'isSceneBattle', 'iconHeight', '484852kgRljo', '_msgCursorSettings', 'njrxi', 'top', 'loadSystem', 'playCancel', 'BUTTON_HEIGHT', 'isPressed', 'faceName', '_autoForwardCount', 'setMessageButtonConsoleVisible', 'OffsetX', 'POSITION', 'VisuMZ_1_MessageCore', 'TEXT_COLOR_NORMAL', 'BUTTON_BUFFER', 'changeTextColor', '_cachedIndex', 'KPXat', 'EXT_FAST_FORWARD_ENABLED', 'loadSystemImagesForExtMessageFunc', 'parameters', 'newPage', 'ImgEnabled', 'FONT_SIZE', 'Options', 'Window_Message_initMembers', '71978xqKSxo', 'XSSWu', 'ExtFastFwdDisallow', 'onTouchScrollStart', 'moveCustomMessageCursorPauseSign', 'NBoXl', 'AvfaR', 'Yidlf', 'NormalColor', 'faceIndex', 'length', 'updateDimensions', 'VisuMZ_1_OptionsCore', 'Window_Message_isTriggered', 'AUTO_FORWARD_MIN_DELAY', 'loadPartyGraphics', 'zQKzG', 'cxOcY', 'ffgYj', 'TEXT_COLOR_TOGGLED', '8823933GgzlWM', 'Game_Temp_requestAnimation', 'TEXT_COLOR_DISABLED', 'updateEffekseer', 'drawText', 'hide', 'call', 'initMessageCursorSettings', '_pauseSignSprite', 'VisuMZ_2_FurnitureSystem', 'fastfwd', 'MAJOz', 'QGSGF', 'Window_Message_startWait', 'format', 'OptionsKey', 'createButtonConsole', 'Scene_Boot_loadSystemImages', 'VisuMZ_1_MessageCore\x20is\x20out\x20of\x20date.\x0a', 'FontSize', 'pause', 'isClosing', 'refresh', 'MsgCursor', 'ARRAYSTRUCT', 'Filename', 'IconIndex', 'startWait', 'AdXUe', 'Wzbpd', 'createBackImageSprites', '_extFastForwardLooping', '10448128JVxgNu', 'options', 'updateImageMessageCursorPauseSignSprites', 'Settings', 'Window_Message_startPause', 'refreshButtonConsole', 'cBSbh', '_buttonConsoleButtons', 'faceWidth', 'ButtonWidth', 'setExtendedFastForwardMode', 'updateFade', 'createCustomMessageCursorPauseSignSprites', 'setExtendedFastForwardDisallowed', 'General', '_scene', 'EwfoZ', 'createContents', '_index', 'toggleMessageWindowVisibility', 'FastForwardKey', '#%1', 'text', 'VisuMZ_1_SaveCore', 'members', 'AutoSizeHide', 'innerWidth', 'playOkSound', 'loadSystemImages', 'buffer', 'updatePadding', 'isRTL', 'lNBTD', 'addChild', 'isCustomMessageCursorEnabled', 'isSceneUsingExFastForward', 'textColor', 'srJtS', 'toLowerCase', 'anyActiveMessageInputWindows', '43kDlOGO', 'updateIconMessageCursorPauseSignSprites', 'OUQam', 'drawMessageFace', 'VisuMZ_3_MessageLog', 'Enable', 'constructor', 'initialize', '_interpreter', 'Window_Message_update', 'name', 'aSlcY', 'updateColor', 'includes', 'FONT_FACE', 'ShowDefault', 'bottom', 'isOpen', 'SceneManager_push', '_childInterpreter', 'PBmSf', 'push', 'updateBackImageSpriteVisibility', 'description', 'xXulP', 'Speed', 'autoForwardTriggered', 'isTriggered', 'map', 'loadSvActor', 'Buttons', 'flushTextState', 'EXT_FAST_FORWARD_LOOPS', 'RoyBw', '_refreshPauseSign', '_parentWindow', 'addButtonConsoleObject', 'Window_Message_addedHeight', 'update', '_updatePauseSign', 'initMembers', 'Gyrft', 'fBkAa', 'TEZmg', 'updateExtendedFastForwardMode', 'fYFQj', 'IconSet', 'onSavefileOk', 'Scene_Battle_update', 'Game_System_initialize', 'width', 'CCGTJ', 'ConvertParams', '_messageAutoForwardMode', 'isTouchScrollEnabled', 'auto', 'backlog', 'List', 'Save', 'fBVsS', 'load', 'prepareHideButtonConsoleTextCode', 'OKuCs', 'status', '_messageButtonConsoleVisible', 'gSTdY', 'gameend', '%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.', 'MessageCore', 'itemPadding', 'loadCharacter', 'openness', 'BUTTON_ORDER', 'frameCount', 'log', '_disallowFastForward', 'ysNKZ', 'requestAnimation', 'drawing', 'addedHeight', 'OffsetY', 'RybLE', 'LoadKey', 'skip', 'FUNC', '_contentsSprite', 'AutoKey', 'textColorID', 'Window_Base_flushTextState', 'IJfPz', 'MinimumWait', 'ExtMessageFunc', 'max', 'padding', 'fontSize', 'updateMain', 'XAuIX', 'battlerName', 'setFrame', 'GameEndKey', '_cache_customMessageCursorFrameCount', 'Window_Message_newPage', 'pXxVy', 'qtINX', 'isMainMenuMessageLogEnabled', 'backOpacity', 'updateConsoleVisibility', 'YfaFV', '%1OffsetY', 'WaitPerChar', 'iconWidth', 'pkCpT', '6lhtexM', 'updateExtMsgFuncResetTimers', 'loadFace', 'scale', 'SHORTCUT_KEY', 'match', 'isEventRunning', 'isMessageAutoForwardMode', 'the\x20VisuMZ_2_ExtMessageFunc\x20plugin.', 'image', 'alpha', 'HJktj', '10ZvfeFU', '_numberInputWindow', 'sWFow', 'qIBHR', '_extendedFastForwardMode', 'setMessageAutoForwardMode', 'yRCmJ', 'fNJuk', 'ToggledColor', 'initMessageButtonConsole', 'processButtonShortcut', 'isExtendedFastForwardDisallowed', 'bitmap', 'DlmpY', 'msgButtonConsole', 'isSceneMap', 'addAutoForwardDelay', '%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.', 'WindowLayer_update', '230cIIeYw', 'IKHUo', 'Rows', 'innerHeight', 'STRUCT', 'qgZiH', '_choiceListWindow', 'initExtendedFastForward', 'getMessageCursorSettings', 'center', 'clear', 'checkBackImageSprites', 'ImgToggled', 'height', 'fontFace']; _0xd48c = function () { return _0x2b4a04; }; return _0xd48c(); } VisuMZ[label][_0x4a9484(0x1f2)] = VisuMZ[label][_0x4a9484(0x1f2)] || {}, VisuMZ[_0x4a9484(0x24b)] = function (_0x5d0906, _0x98eef6) { const _0x5a9c2c = _0x4a9484; for (const _0x36a9b0 in _0x98eef6) { if (_0x36a9b0[_0x5a9c2c(0x115)](/(.*):(.*)/i)) { const _0xa55503 = String(RegExp['$1']), _0x5357a0 = String(RegExp['$2'])['toUpperCase']()['trim'](); let _0x309712, _0x27a417, _0x561d81; switch (_0x5357a0) { case 'NUM': _0x309712 = _0x98eef6[_0x36a9b0] !== '' ? Number(_0x98eef6[_0x36a9b0]) : 0x0; break; case 'ARRAYNUM': _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417[_0x5a9c2c(0x233)](_0x11a77a => Number(_0x11a77a)); break; case 'EVAL': _0x309712 = _0x98eef6[_0x36a9b0] !== '' ? eval(_0x98eef6[_0x36a9b0]) : null; break; case _0x5a9c2c(0x176): _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON['parse'](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417[_0x5a9c2c(0x233)](_0x1556d3 => eval(_0x1556d3)); break; case _0x5a9c2c(0x17f): _0x309712 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : ''; break; case 'ARRAYJSON': _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417[_0x5a9c2c(0x233)](_0x210de1 => JSON['parse'](_0x210de1)); break; case _0x5a9c2c(0x26b): _0x309712 = _0x98eef6[_0x36a9b0] !== '' ? new Function(JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0])) : new Function('return\x200'); break; case 'ARRAYFUNC': _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417['map'](_0x898c64 => new Function(JSON['parse'](_0x898c64))); break; case 'STR': _0x309712 = _0x98eef6[_0x36a9b0] !== '' ? String(_0x98eef6[_0x36a9b0]) : ''; break; case 'ARRAYSTR': _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON['parse'](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417[_0x5a9c2c(0x233)](_0x54a99b => String(_0x54a99b)); break; case _0x5a9c2c(0x133): _0x561d81 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : {}, _0x309712 = VisuMZ[_0x5a9c2c(0x24b)]({}, _0x561d81); break; case _0x5a9c2c(0x1e7): _0x27a417 = _0x98eef6[_0x36a9b0] !== '' ? JSON[_0x5a9c2c(0x14b)](_0x98eef6[_0x36a9b0]) : [], _0x309712 = _0x27a417['map'](_0x397f5e => VisuMZ['ConvertParams']({}, JSON[_0x5a9c2c(0x14b)](_0x397f5e))); break; default: continue; }_0x5d0906[_0xa55503] = _0x309712; } } return _0x5d0906; }, (_0x5c7e5c => { const _0x316de8 = _0x4a9484, _0x54774d = _0x5c7e5c[_0x316de8(0x221)]; for (const _0x43bf9c of dependencies) { if (_0x316de8(0x1f5) !== 'cBSbh') return _0x4936f5['playCancel'](), _0x3dbe66[_0x316de8(0x121)](![]), !![]; else { if (!Imported[_0x43bf9c]) { alert(_0x316de8(0x25a)[_0x316de8(0x1dd)](_0x54774d, _0x43bf9c)), SceneManager[_0x316de8(0x180)](); break; } } } const _0x2cd62e = _0x5c7e5c['description']; if (_0x2cd62e[_0x316de8(0x115)](/\[Version[ ](.*?)\]/i)) { if (_0x316de8(0x214) !== _0x316de8(0x238)) { const _0xb19143 = Number(RegExp['$1']); _0xb19143 !== VisuMZ[label]['version'] && (_0x316de8(0x10b) === _0x316de8(0x10b) ? (alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x316de8(0x1dd)](_0x54774d, _0xb19143)), SceneManager[_0x316de8(0x180)]()) : (_0x5dd533[_0x316de8(0xfb)][_0x316de8(0x1ba)]['call'](this), this[_0x316de8(0x1df)]())); } else return this['_scene'] && this[_0x316de8(0x1fe)][_0x316de8(0x21d)] === _0x5b58fb; } if (_0x2cd62e[_0x316de8(0x115)](/\[Tier[ ](\d+)\]/i)) { if (_0x316de8(0x1a2) === 'njrxi') { const _0x47674d = Number(RegExp['$1']); _0x47674d < tier ? (alert(_0x316de8(0x12d)[_0x316de8(0x1dd)](_0x54774d, _0x47674d, tier)), SceneManager[_0x316de8(0x180)]()) : tier = Math['max'](_0x47674d, tier); } else _0x4f48f0[_0x316de8(0x1f9)](![]); } VisuMZ[_0x316de8(0x24b)](VisuMZ[label][_0x316de8(0x1f2)], _0x5c7e5c[_0x316de8(0x1b5)]); })(pluginData), PluginManager['registerCommand'](pluginData[_0x4a9484(0x221)], _0x4a9484(0x1bd), _0x1ebab2 => { const _0x21b768 = _0x4a9484; VisuMZ[_0x21b768(0x24b)](_0x1ebab2, _0x1ebab2); const _0x163b9c = !_0x1ebab2['Allow']; $gameSystem[_0x21b768(0x1fc)](_0x163b9c); }), PluginManager[_0x4a9484(0x178)](pluginData[_0x4a9484(0x221)], _0x4a9484(0x198), _0xf51cb8 => { const _0x1b1c37 = _0x4a9484; VisuMZ[_0x1b1c37(0x24b)](_0xf51cb8, _0xf51cb8); const _0x503f7d = _0xf51cb8[_0x1b1c37(0x197)]; $gameSystem[_0x1b1c37(0x1aa)](_0x503f7d); }), PluginManager[_0x4a9484(0x178)](pluginData['name'], _0x4a9484(0x142), _0x26dc91 => { const _0x2e46b3 = _0x4a9484; VisuMZ[_0x2e46b3(0x24b)](_0x26dc91, _0x26dc91); const _0xceafac = _0x26dc91[_0x2e46b3(0x1e6)]; $gameSystem[_0x2e46b3(0x143)](_0xceafac); const _0x5d37a8 = SceneManager[_0x2e46b3(0x1fe)]['_messageWindow']; _0x5d37a8 && (_0x5d37a8[_0x2e46b3(0x18d)](), _0x5d37a8[_0x2e46b3(0x239)]()); }), TextManager['msgButtonConsole'] = function (_0x21d1d5) { const _0x200718 = _0x4a9484; if (Window_ButtonConsole[_0x200718(0x196)][_0x21d1d5]) return Window_ButtonConsole[_0x200718(0x196)][_0x21d1d5]; return _0x21d1d5['toUpperCase']()['trim'](); }, ColorManager[_0x4a9484(0x15e)] = function (_0x2ab711) { const _0x5ee974 = _0x4a9484; _0x2ab711 = String(_0x2ab711); if (_0x2ab711[_0x5ee974(0x115)](/#(.*)/i)) return _0x5ee974(0x11e) !== _0x5ee974(0x11e) ? _0x19a706[_0x5ee974(0x1ce)] : _0x5ee974(0x204)[_0x5ee974(0x1dd)](String(RegExp['$1'])); else { if (_0x5ee974(0x146) !== 'chxbA') return this['textColor'](Number(_0x2ab711)); else this[_0x5ee974(0x149)](); } }, SceneManager[_0x4a9484(0x19e)] = function () { const _0x42b2a3 = _0x4a9484; return this['_scene'] && this[_0x42b2a3(0x1fe)][_0x42b2a3(0x21d)] === Scene_Battle; }, SceneManager['isSceneMap'] = function () { const _0x1b27f6 = _0x4a9484; return this[_0x1b27f6(0x1fe)] && this[_0x1b27f6(0x1fe)][_0x1b27f6(0x21d)] === Scene_Map; }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x229)] = SceneManager[_0x4a9484(0x22c)], SceneManager[_0x4a9484(0x22c)] = function (_0x48a9ba) { const _0x2acdd3 = _0x4a9484; VisuMZ[_0x2acdd3(0xfb)]['SceneManager_push']['call'](this, _0x48a9ba); if ([Scene_SaveButtonConsole, Scene_Save, Scene_Load][_0x2acdd3(0x224)](_0x48a9ba)) { if (_0x2acdd3(0x1ff) === _0x2acdd3(0x1ff)) this[_0x2acdd3(0x1ca)](); else { const _0xfca432 = this[_0x2acdd3(0x1d7)], _0x4ba32b = _0xfca432[_0x2acdd3(0x128)], _0x59dfb7 = _0x5e6c32['getMessageCursorSettings'](), _0x5aaa7f = _0x300d52[_0x2acdd3(0x158)](this[_0x2acdd3(0x16b)] / _0x59dfb7[_0x2acdd3(0x170)]), _0x385797 = _0x4dd0e1[_0x2acdd3(0x158)](_0x4ba32b[_0x2acdd3(0x249)] / _0x59dfb7['Cols']), _0x44582d = _0x55b61f[_0x2acdd3(0x158)](_0x4ba32b[_0x2acdd3(0x13c)] / _0x59dfb7[_0x2acdd3(0x131)]), _0x274e0f = _0x5aaa7f % _0x59dfb7[_0x2acdd3(0x199)] * _0x385797, _0x13be4e = _0x404953['floor'](_0x5aaa7f / _0x59dfb7[_0x2acdd3(0x199)]) * _0x44582d; _0xfca432['setFrame'](_0x274e0f, _0x13be4e, _0x385797, _0x44582d), _0xfca432[_0x2acdd3(0x150)] = this[_0x2acdd3(0x228)](); } } }, SceneManager[_0x4a9484(0x1ca)] = function () { const _0x1c035a = _0x4a9484; for (const _0x40d771 of $gameParty[_0x1c035a(0x207)]()) { _0x40d771[_0x1c035a(0x1a8)]() && ImageManager[_0x1c035a(0x112)](_0x40d771['faceName']()), _0x40d771[_0x1c035a(0x181)]() && ImageManager[_0x1c035a(0x25d)](_0x40d771[_0x1c035a(0x181)]()), _0x40d771[_0x1c035a(0x101)]() && (_0x1c035a(0x1c2) === _0x1c035a(0x1b2) ? this[_0x1c035a(0x19d)] = !![] : ImageManager[_0x1c035a(0x234)](_0x40d771[_0x1c035a(0x101)]())); } }, Game_Temp[_0x4a9484(0x193)][_0x4a9484(0x117)] = function () { const _0x24ceda = _0x4a9484; return this[_0x24ceda(0x24c)]; }, Game_Temp[_0x4a9484(0x193)]['setMessageAutoForwardMode'] = function (_0x22cf6e) { const _0x49d512 = _0x4a9484; this[_0x49d512(0x24c)] = _0x22cf6e, $gameMessage[_0x49d512(0x1f4)](); }, Game_Temp[_0x4a9484(0x193)]['isExtendedFastForwardMode'] = function () { const _0x27b1ab = _0x4a9484; return this[_0x27b1ab(0x120)]; }, Game_Temp[_0x4a9484(0x193)][_0x4a9484(0x1f9)] = function (_0x741ad2) { const _0x444bb7 = _0x4a9484; this[_0x444bb7(0x120)] = _0x741ad2, $gameMessage['refreshButtonConsole'](); }, VisuMZ[_0x4a9484(0xfb)]['Game_Temp_requestAnimation'] = Game_Temp['prototype'][_0x4a9484(0x264)], Game_Temp[_0x4a9484(0x193)][_0x4a9484(0x264)] = function (_0x53c270, _0x112294, _0x1d607f) { const _0x112803 = _0x4a9484; if (this[_0x112803(0x212)]()) return; VisuMZ['ExtMessageFunc'][_0x112803(0x1d0)][_0x112803(0x1d5)](this, _0x53c270, _0x112294, _0x1d607f); }, Game_Temp[_0x4a9484(0x193)]['isSceneUsingExFastForward'] = function () { const _0x3f977f = _0x4a9484, _0x223f3b = SceneManager['_scene']; return _0x223f3b && _0x223f3b['isExtendedFastForwardMode'] && _0x223f3b[_0x3f977f(0x160)](); }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x248)] = Game_System[_0x4a9484(0x193)][_0x4a9484(0x21e)], Game_System[_0x4a9484(0x193)][_0x4a9484(0x21e)] = function () { const _0x5e3eb2 = _0x4a9484; VisuMZ[_0x5e3eb2(0xfb)]['Game_System_initialize']['call'](this), this['initMessageButtonConsole'](), this[_0x5e3eb2(0x136)](), this[_0x5e3eb2(0x1d6)](); }, Game_System[_0x4a9484(0x193)][_0x4a9484(0x125)] = function () { const _0x340a92 = _0x4a9484; this[_0x340a92(0x257)] = Window_ButtonConsole['DEFAULT_SHOW']; }, Game_System['prototype'][_0x4a9484(0x19b)] = function () { const _0x568856 = _0x4a9484; return this[_0x568856(0x257)] === undefined && this[_0x568856(0x125)](), this[_0x568856(0x257)]; }, Game_System[_0x4a9484(0x193)]['setMessageButtonConsoleVisible'] = function (_0x1644c3) { const _0x45460a = _0x4a9484; this['_messageButtonConsoleVisible'] === undefined && this[_0x45460a(0x125)](), this[_0x45460a(0x257)] = _0x1644c3; }, Game_System['prototype']['initExtendedFastForward'] = function () { this['_disallowFastForward'] = ![]; }, Game_System['prototype'][_0x4a9484(0x127)] = function () { const _0x4cbf44 = _0x4a9484; return this[_0x4cbf44(0x262)] === undefined && this[_0x4cbf44(0x136)](), this['_disallowFastForward']; }, Game_System[_0x4a9484(0x193)][_0x4a9484(0x1fc)] = function (_0x54516f) { const _0x3bf976 = _0x4a9484; this[_0x3bf976(0x262)] === undefined && (_0x3bf976(0x187) !== _0x3bf976(0x187) ? (this[_0x3bf976(0x1a1)] === _0x26f5ba && this[_0x3bf976(0x1d6)](), this[_0x3bf976(0x1a1)] = _0x708cbd['makeDeepCopy'](_0x216f22)) : this[_0x3bf976(0x136)]()), this[_0x3bf976(0x262)] = _0x54516f; }, Game_System[_0x4a9484(0x193)][_0x4a9484(0x1d6)] = function () { const _0x344b3c = _0x4a9484; this['_msgCursorSettings'] = JsonEx[_0x344b3c(0x14c)](VisuMZ[_0x344b3c(0xfb)]['Settings'][_0x344b3c(0x1e6)]); }, Game_System[_0x4a9484(0x193)][_0x4a9484(0x137)] = function () { const _0x483ac7 = _0x4a9484; return this[_0x483ac7(0x1a1)] === undefined && this[_0x483ac7(0x1d6)](), this[_0x483ac7(0x1a1)]; }, Game_System[_0x4a9484(0x193)][_0x4a9484(0x143)] = function (_0x3ee8fa) { const _0x221541 = _0x4a9484; this[_0x221541(0x1a1)] === undefined && this[_0x221541(0x1d6)](), this['_msgCursorSettings'] = JsonEx[_0x221541(0x14c)](_0x3ee8fa); }, Game_Message[_0x4a9484(0x193)]['refreshButtonConsole'] = function () { const _0x28a5a4 = _0x4a9484, _0x4d48fb = SceneManager[_0x28a5a4(0x1fe)]; if (!_0x4d48fb) return; const _0x4b7421 = _0x4d48fb['_messageWindow']; if (!_0x4b7421) return; _0x4b7421['refreshButtonConsole'](); }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1e0)] = Scene_Boot[_0x4a9484(0x193)][_0x4a9484(0x20b)], Scene_Boot[_0x4a9484(0x193)][_0x4a9484(0x20b)] = function () { const _0x566c27 = _0x4a9484; VisuMZ[_0x566c27(0xfb)][_0x566c27(0x1e0)][_0x566c27(0x1d5)](this), this[_0x566c27(0x1b4)](); }, Scene_Boot[_0x4a9484(0x193)][_0x4a9484(0x1b4)] = function () { const _0x37a7e9 = _0x4a9484, _0x36c4d7 = VisuMZ['ExtMessageFunc'][_0x37a7e9(0x1f2)][_0x37a7e9(0x198)], _0x533c81 = ['ImgDisabled', 'ImgEnabled', _0x37a7e9(0x13b)]; for (const _0x48c865 of _0x533c81) { _0x36c4d7[_0x48c865] = _0x36c4d7[_0x48c865] ?? '', _0x36c4d7[_0x48c865] !== '' && ImageManager['loadSystem'](_0x36c4d7[_0x48c865]); } }, Scene_Message['EXT_FAST_FORWARD_ENABLED'] = VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)][_0x4a9484(0x147)][_0x4a9484(0x21c)], Scene_Message[_0x4a9484(0x237)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x147)][_0x4a9484(0x230)], Scene_Message[_0x4a9484(0x193)]['isExtendedFastForwardMode'] = function () { const _0x1bf646 = _0x4a9484; if (!Scene_Message[_0x1bf646(0x1b3)]) return ![]; if ($gameSystem[_0x1bf646(0x127)]()) return ![]; if (this[_0x1bf646(0x216)]()) return ![]; return this[_0x1bf646(0x14d)](); }, Scene_Message['prototype'][_0x4a9484(0x14d)] = function () { const _0x555ccf = _0x4a9484; if (Imported[_0x555ccf(0x1d8)] && $gameMap[_0x555ccf(0x15f)]()) return _0x555ccf(0x244) === _0x555ccf(0x106) ? _0x555ccf(0x204)[_0x555ccf(0x1dd)](_0x234caa(_0x18bdbe['$1'])) : ![]; if (!this[_0x555ccf(0x216)]()) { if (Input[_0x555ccf(0x1a7)](VisuMZ[_0x555ccf(0x25b)][_0x555ccf(0x1f2)][_0x555ccf(0x1fd)][_0x555ccf(0x203)])) return _0x555ccf(0x16e) === _0x555ccf(0x16e) ? !![] : (this[_0x555ccf(0x157)](), ![]); } return $gameTemp['isExtendedFastForwardMode'](); }, Scene_Message[_0x4a9484(0x193)][_0x4a9484(0x216)] = function () { const _0x23b370 = _0x4a9484; if (this[_0x23b370(0x135)] && this[_0x23b370(0x135)][_0x23b370(0x18b)]) return !![]; if (this[_0x23b370(0x11d)] && this[_0x23b370(0x11d)][_0x23b370(0x18b)]) return !![]; if (this[_0x23b370(0x155)] && this[_0x23b370(0x155)]['active']) return !![]; return ![]; }, Scene_Message[_0x4a9484(0x193)]['updateExtendedFastForwardCancel'] = function () { const _0xe7edf9 = _0x4a9484; if (Input[_0xe7edf9(0x232)]('escape') || TouchInput[_0xe7edf9(0x14e)]()) { if (_0xe7edf9(0x1c1) === _0xe7edf9(0x100)) { let _0x34de15 = _0xd19697[_0xe7edf9(0x1af)]; for (const _0x2b8bf9 of _0x2ce40f) { _0x2b8bf9['y'] = _0x34de15; } _0x34de15 = _0x2b91c0[_0xe7edf9(0x1a6)], this['_contentsSprite']['y'] = _0x34de15; } else return $gameTemp['setExtendedFastForwardMode'](![]), !![]; } else return ![]; }, VisuMZ['ExtMessageFunc']['Scene_Map_updateMainMultiply'] = Scene_Map[_0x4a9484(0x193)]['updateMainMultiply'], Scene_Map[_0x4a9484(0x193)]['updateMainMultiply'] = function () { const _0x477a31 = _0x4a9484; this['isExtendedFastForwardMode']() ? this[_0x477a31(0x243)]() : VisuMZ[_0x477a31(0xfb)][_0x477a31(0x166)][_0x477a31(0x1d5)](this); }, Scene_Map['prototype']['isExtendedFastForwardMode'] = function () { const _0x2ebffe = _0x4a9484; return Scene_Message['prototype']['isExtendedFastForwardMode']['call'](this) && $gameMap[_0x2ebffe(0x116)](); }, Scene_Map[_0x4a9484(0x193)][_0x4a9484(0x243)] = function () { const _0x685b24 = _0x4a9484; let _0xa1fd04 = Scene_Message[_0x685b24(0x237)]; while (_0xa1fd04-- && $gameMap[_0x685b24(0x116)]() && !this['anyActiveMessageInputWindows']()) { this[_0x685b24(0x1fa)](), this['updateColorFilter'](), this[_0x685b24(0xff)](), SceneManager[_0x685b24(0x1d2)](); if (this['updateExtendedFastForwardCancel']()) break; } }; function Scene_SaveButtonConsole() { const _0x219181 = _0x4a9484; this[_0x219181(0x21e)](...arguments); } Scene_SaveButtonConsole[_0x4a9484(0x193)] = Object[_0x4a9484(0x183)](Scene_Save[_0x4a9484(0x193)]), Scene_SaveButtonConsole[_0x4a9484(0x193)]['constructor'] = Scene_SaveButtonConsole, Scene_SaveButtonConsole['prototype']['onSavefileOk'] = function () { const _0x52429d = _0x4a9484; this[_0x52429d(0x1b1)] = 0x0; let _0x23730b = $gameMap[_0x52429d(0x21f)]; for (; ;) { if (_0x52429d(0x11b) !== _0x52429d(0x11b)) { const _0x5577a8 = this[_0x52429d(0x1d7)], _0x343207 = _0x22afbf[_0x52429d(0x137)](), _0x49fcee = _0x343207[_0x52429d(0x1e9)], _0x27ede3 = _0x532d11[_0x52429d(0x10e)], _0x4ebb7c = _0x5dfe69[_0x52429d(0x19f)], _0x596e8b = _0x49fcee % 0x10 * _0x27ede3, _0x181f35 = _0x1217f8['floor'](_0x49fcee / 0x10) * _0x4ebb7c; _0x5577a8[_0x52429d(0x102)](_0x596e8b, _0x181f35, _0x27ede3, _0x4ebb7c), _0x5577a8['visible'] = this['isOpen'](); if (_0x343207[_0x52429d(0x16d)] === 0x0) return; _0x5577a8[_0x52429d(0x113)]['x'] = _0x4415da[_0x52429d(0x165)](_0xa593cc[_0x52429d(0x260)] * _0x343207[_0x52429d(0x16d)]); } else { if (_0x23730b[_0x52429d(0x22a)]) _0x23730b = _0x23730b[_0x52429d(0x22a)]; else { if (_0x52429d(0x141) !== 'YWEHn') { this['_cachedIndex'] = _0x23730b[_0x52429d(0x201)], _0x23730b[_0x52429d(0x201)] = _0x23730b['_lastExtMsgFuncIndex']; break; } else this[_0x52429d(0x218)](); } } } Scene_Save['prototype'][_0x52429d(0x246)]['call'](this), _0x23730b[_0x52429d(0x201)] = this[_0x52429d(0x1b1)]; }, VisuMZ['ExtMessageFunc'][_0x4a9484(0x17b)] = Game_Interpreter[_0x4a9484(0x193)][_0x4a9484(0x18a)], Game_Interpreter[_0x4a9484(0x193)][_0x4a9484(0x18a)] = function (_0x1b354d) { const _0x2d2c8a = _0x4a9484; return this[_0x2d2c8a(0x148)] = this[_0x2d2c8a(0x201)], VisuMZ['ExtMessageFunc'][_0x2d2c8a(0x17b)]['call'](this, _0x1b354d); }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x247)] = Scene_Battle[_0x4a9484(0x193)][_0x4a9484(0x23d)], Scene_Battle[_0x4a9484(0x193)][_0x4a9484(0x23d)] = function () { const _0xa70e7e = _0x4a9484; VisuMZ['ExtMessageFunc'][_0xa70e7e(0x247)][_0xa70e7e(0x1d5)](this); if (this[_0xa70e7e(0x160)]()) this[_0xa70e7e(0x243)](); }, Scene_Battle[_0x4a9484(0x193)]['isExtendedFastForwardMode'] = function () { const _0x5eaa27 = _0x4a9484; return ![]; return Scene_Message['prototype'][_0x5eaa27(0x160)]['call'](this) && $gameTroop[_0x5eaa27(0x116)]() && !this[_0x5eaa27(0x1ee)]; }, Scene_Battle[_0x4a9484(0x193)][_0x4a9484(0x243)] = function () { const _0x213a02 = _0x4a9484; this['_extFastForwardLooping'] = !![]; let _0x4468da = Scene_Message['EXT_FAST_FORWARD_LOOPS']; while (_0x4468da-- && $gameTroop[_0x213a02(0x116)]() && !this[_0x213a02(0x216)]()) { this[_0x213a02(0x23d)](), SceneManager[_0x213a02(0x1d2)](); if (this[_0x213a02(0x19c)]()) break; } this['_extFastForwardLooping'] = ![]; }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x12e)] = WindowLayer['prototype']['update'], WindowLayer[_0x4a9484(0x193)][_0x4a9484(0x23d)] = function () { const _0x3e8bc3 = _0x4a9484; if (SceneManager['_scene'][_0x3e8bc3(0x1ee)]) return; VisuMZ[_0x3e8bc3(0xfb)][_0x3e8bc3(0x12e)][_0x3e8bc3(0x1d5)](this); }, VisuMZ['ExtMessageFunc'][_0x4a9484(0xf8)] = Window_Base['prototype']['flushTextState'], Window_Base[_0x4a9484(0x193)][_0x4a9484(0x236)] = function (_0xf45263) { const _0x32ee3e = _0x4a9484; this[_0x32ee3e(0x21d)][_0x32ee3e(0x221)] === _0x32ee3e(0x152) && this[_0x32ee3e(0x12c)](_0xf45263), VisuMZ[_0x32ee3e(0xfb)]['Window_Base_flushTextState'][_0x32ee3e(0x1d5)](this, _0xf45263), this[_0x32ee3e(0x21d)][_0x32ee3e(0x221)] === _0x32ee3e(0x152) && (_0x32ee3e(0x1eb) !== 'AdXUe' ? (this[_0x32ee3e(0x254)](_0x24aaa1), _0x30c17b[_0x32ee3e(0xfb)][_0x32ee3e(0x105)][_0x32ee3e(0x1d5)](this, _0x1d1063), this[_0x32ee3e(0x1a9)] = 0x0) : this[_0x32ee3e(0x1bf)](_0xf45263)); }, VisuMZ['ExtMessageFunc'][_0x4a9484(0x220)] = Window_Message[_0x4a9484(0x193)]['update'], Window_Message[_0x4a9484(0x193)]['update'] = function () { const _0x342d72 = _0x4a9484; VisuMZ['ExtMessageFunc'][_0x342d72(0x220)]['call'](this), this[_0x342d72(0x111)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x111)] = function () { const _0xc7b50c = _0x4a9484; if (!this['meetExtMsgFuncResetRequirements']()) return; $gameTemp[_0xc7b50c(0x117)]() && $gameTemp['setMessageAutoForwardMode'](![]), $gameTemp[_0xc7b50c(0x160)]() && $gameTemp['setExtendedFastForwardMode'](![]); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x162)] = function () { const _0x362188 = _0x4a9484; if (SceneManager[_0x362188(0x12b)]() && $gameMap && !$gameMap['isEventRunning']()) { if (_0x362188(0x107) === _0x362188(0x1ec)) { const _0x390a6a = _0x3f614a[_0x362188(0xfb)]['Settings'][_0x362188(0x198)], _0x58b58d = [_0x362188(0x174), _0x362188(0x1b7), _0x362188(0x13b)]; for (const _0x321a47 of _0x58b58d) { _0x390a6a[_0x321a47] = _0x390a6a[_0x321a47] ?? '', _0x390a6a[_0x321a47] !== '' && _0x2209dd[_0x362188(0x1a4)](_0x390a6a[_0x321a47]); } } else return !![]; } else { if (SceneManager[_0x362188(0x19e)]() && !$gameMap['isEventRunning']()) return !![]; } return ![]; }, VisuMZ['ExtMessageFunc']['Window_Message_isTriggered'] = Window_Message[_0x4a9484(0x193)][_0x4a9484(0x232)], Window_Message[_0x4a9484(0x193)]['isTriggered'] = function () { const _0xce7a56 = _0x4a9484; if (SceneManager['_scene'][_0xce7a56(0x160)]()) { if ('GdOcX' !== 'JRLTC') return !![]; else { if (_0x2762ee[_0xce7a56(0x1fe)]['_extFastForwardLooping']) return; _0x581599['ExtMessageFunc'][_0xce7a56(0x12e)][_0xce7a56(0x1d5)](this); } } else { if (Input[_0xce7a56(0x232)](Window_ButtonConsole[_0xce7a56(0x114)][_0xce7a56(0x24e)])) return this['toggleAutoForward'](), ![]; else { if (Input[_0xce7a56(0x232)](Window_ButtonConsole[_0xce7a56(0x114)][_0xce7a56(0x186)])) return this[_0xce7a56(0x126)]('save'), ![]; else { if (Input[_0xce7a56(0x232)](Window_ButtonConsole[_0xce7a56(0x114)][_0xce7a56(0x253)])) return this[_0xce7a56(0x126)](_0xce7a56(0x253)), ![]; else { if (Input[_0xce7a56(0x232)](Window_ButtonConsole[_0xce7a56(0x114)][_0xce7a56(0x1f0)])) return this['processButtonShortcut'](_0xce7a56(0x1f0)), ![]; else { if (Input[_0xce7a56(0x232)](Window_ButtonConsole[_0xce7a56(0x114)][_0xce7a56(0x259)])) return this[_0xce7a56(0x126)](_0xce7a56(0x259)), ![]; else return this[_0xce7a56(0x1e3)] && $gameTemp[_0xce7a56(0x117)]() ? _0xce7a56(0x134) !== 'qgZiH' ? this[_0xce7a56(0x1fe)] && this[_0xce7a56(0x1fe)][_0xce7a56(0x21d)] === _0x2d7548 : this[_0xce7a56(0x231)]() : VisuMZ[_0xce7a56(0xfb)]['Window_Message_isTriggered']['call'](this); } } } } } }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x21a)] = function () { const _0x1402a6 = _0x4a9484, _0x459aef = $gameMessage[_0x1402a6(0x1a8)](), _0x303a16 = $gameMessage[_0x1402a6(0x1c4)](), _0xa4f249 = $gameMessage[_0x1402a6(0x20e)](); let _0x4f2fe0 = ImageManager[_0x1402a6(0x1f7)], _0x1df990 = this['innerHeight'], _0x4938d8 = _0xa4f249 ? this[_0x1402a6(0x209)] - _0x4f2fe0 - 0x4 : 0x4, _0x44faa1 = 0x0; _0x1df990 -= this['addedHeight'](), this[_0x1402a6(0x140)](_0x459aef, _0x303a16, _0x4938d8, _0x44faa1, _0x4f2fe0, _0x1df990); }, Window_Message[_0x4a9484(0x14a)] = VisuMZ['ExtMessageFunc']['Settings'][_0x4a9484(0x17a)][_0x4a9484(0x10d)], Window_Message[_0x4a9484(0x1c9)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x17a)][_0x4a9484(0xfa)], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x12c)] = function (_0x4a1bd) { const _0x174558 = _0x4a9484; this[_0x174558(0x1a9)] = this[_0x174558(0x1a9)] || 0x0, this[_0x174558(0x1a9)] = Math['max'](this[_0x174558(0x1a9)], 0x0); const _0x4b4c40 = (_0x4a1bd[_0x174558(0x20c)] || '')[_0x174558(0x1c5)]; this['_autoForwardCount'] += _0x4b4c40 * Window_Message[_0x174558(0x14a)]; }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x105)] = Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1b6)], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1b6)] = function (_0xfcadfb) { const _0x544702 = _0x4a9484; this[_0x544702(0x254)](_0xfcadfb), VisuMZ[_0x544702(0xfb)][_0x544702(0x105)]['call'](this, _0xfcadfb), this['_autoForwardCount'] = 0x0; }, Window_Message['prototype'][_0x4a9484(0x157)] = function () { const _0x239304 = _0x4a9484; if (this[_0x239304(0x19d)]) return; if (!$gameSystem[_0x239304(0x19b)]()) return; let _0x1b644c = !$gameTemp['isMessageAutoForwardMode'](); $gameTemp[_0x239304(0x121)](_0x1b644c); if (_0x1b644c) { if (_0x239304(0x122) === _0x239304(0x268)) return this[_0x239304(0x126)](_0x239304(0x259)), ![]; else this[_0x239304(0x20a)](); } else SoundManager[_0x239304(0x1a5)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x231)] = function () { const _0x3e32e5 = _0x4a9484; this[_0x3e32e5(0x1a9)] = this[_0x3e32e5(0x1a9)] || 0x0; if (VisuMZ[_0x3e32e5(0xfb)][_0x3e32e5(0x1c8)][_0x3e32e5(0x1d5)](this)) return SoundManager[_0x3e32e5(0x1a5)](), $gameTemp['setMessageAutoForwardMode'](![]), !![]; else { if ('asxMi' === _0x3e32e5(0x1da)) this['playOkSound'](), _0x56cb0a[_0x3e32e5(0x22c)](_0x301168); else return this[_0x3e32e5(0x1a9)]-- <= 0x0; } }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f3)] = Window_Message['prototype']['startPause'], Window_Message['prototype']['startPause'] = function () { const _0x28903a = _0x4a9484; VisuMZ[_0x28903a(0xfb)]['Window_Message_startPause'][_0x28903a(0x1d5)](this), this[_0x28903a(0x1a9)] = this[_0x28903a(0x1a9)] || 0x0, this[_0x28903a(0x1a9)] = Math[_0x28903a(0xfc)](this[_0x28903a(0x1a9)], Window_Message[_0x28903a(0x1c9)]); }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1ba)] = Window_Message['prototype'][_0x4a9484(0x23f)], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x23f)] = function () { const _0x620302 = _0x4a9484; VisuMZ[_0x620302(0xfb)][_0x620302(0x1ba)][_0x620302(0x1d5)](this), this[_0x620302(0x1df)](); }, Window_Message['prototype'][_0x4a9484(0x254)] = function (_0x2e44a4) { const _0x3da30a = _0x4a9484; let _0x569b99 = _0x2e44a4[_0x3da30a(0x205)]; this[_0x3da30a(0x19d)] = ![], _0x569b99 = _0x569b99[_0x3da30a(0x19a)](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi, () => { const _0x355543 = _0x3da30a; return this[_0x355543(0x19d)] = !![], ''; }), this['hideButtonConsoleAutoSize'](_0x569b99) && (this['_hideButtonConsole'] = !![]), _0x2e44a4[_0x3da30a(0x205)] = _0x569b99; }; if (!Window_Message[_0x4a9484(0x193)]['addedHeight']) { let text = ''; text += _0x4a9484(0x1e1), text += _0x4a9484(0x190), text += _0x4a9484(0x118), alert(text), SceneManager[_0x4a9484(0x180)](); } Window_Message[_0x4a9484(0x193)][_0x4a9484(0x163)] = function (_0x1007eb) { const _0x4576b7 = _0x4a9484; if (!VisuMZ[_0x4576b7(0xfb)][_0x4576b7(0x1f2)][_0x4576b7(0x198)][_0x4576b7(0x208)]) return ![]; if (_0x1007eb[_0x4576b7(0x115)](Window_Message[_0x4576b7(0x14f)])) return !![]; if (_0x1007eb['match'](Window_Message['_autoPosRegExp'])) return !![]; return ![]; }, VisuMZ[_0x4a9484(0xfb)]['Window_Message_addedHeight'] = Window_Message['prototype'][_0x4a9484(0x266)], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x266)] = function () { const _0x34e797 = _0x4a9484; let _0x2d7f39 = VisuMZ[_0x34e797(0xfb)][_0x34e797(0x23c)][_0x34e797(0x1d5)](this); if (this['_hideButtonConsole']) return _0x2d7f39; return SceneManager['isSceneMap']() && $gameSystem[_0x34e797(0x19b)]() && ([_0x34e797(0x1a3), _0x34e797(0x227)][_0x34e797(0x224)](Window_ButtonConsole[_0x34e797(0x1ac)][_0x34e797(0x215)]()['trim']()) && (_0x34e797(0x154) === _0x34e797(0x154) ? _0x2d7f39 += Window_ButtonConsole[_0x34e797(0x1a6)] : (this[_0x34e797(0x262)] === _0x53fb0b && this[_0x34e797(0x136)](), this['_disallowFastForward'] = _0x569e81))), _0x2d7f39; }, VisuMZ['ExtMessageFunc']['Window_Message_updateDimensions'] = Window_Message[_0x4a9484(0x193)]['updateDimensions'], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1c6)] = function () { const _0x32818c = _0x4a9484; VisuMZ[_0x32818c(0xfb)]['Window_Message_updateDimensions'][_0x32818c(0x1d5)](this), this[_0x32818c(0x191)](), this[_0x32818c(0x1f4)](); }, Window_Message['prototype'][_0x4a9484(0x191)] = function () { const _0x3bde28 = _0x4a9484; if (!SceneManager['isSceneMap']()) return; for (const _0x491aca of this['_buttonConsoleButtons']) { !this[_0x3bde28(0x19d)] && $gameSystem['isMessageButtonConsoleVisible']() ? _0x3bde28(0x1cd) !== _0x3bde28(0xf9) ? _0x491aca[_0x3bde28(0x194)]() : _0xfac0ca[_0x3bde28(0x1a4)](_0x46ba40[_0x539bb5]) : _0x3bde28(0x241) === _0x3bde28(0x241) ? _0x491aca[_0x3bde28(0x1d4)]() : this[_0x3bde28(0x149)](); } this[_0x3bde28(0x16f)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1f4)] = function () { const _0x1ed9ff = _0x4a9484; for (const _0x2dc732 of this['_buttonConsoleButtons']) { _0x2dc732[_0x1ed9ff(0x1e5)](); } }, Window_Message['prototype'][_0x4a9484(0x1df)] = function () { const _0x505b4d = _0x4a9484; this[_0x505b4d(0x1f6)] = []; for (const _0x36efa3 of Window_ButtonConsole['BUTTON_ORDER']) { this[_0x505b4d(0x23b)](_0x36efa3); } this['alignButtonConsoleButtons'](); }, Window_Message[_0x4a9484(0x193)]['addButtonConsoleObject'] = function (_0x4a0203) { const _0x14a33f = _0x4a9484; _0x4a0203 = _0x4a0203[_0x14a33f(0x215)]()[_0x14a33f(0x164)](); switch (_0x4a0203) { case _0x14a33f(0x26a): if (!Scene_Message['EXT_FAST_FORWARD_ENABLED']) return; break; case 'options': if (!Imported[_0x14a33f(0x1c7)]) return; break; case _0x14a33f(0x186): case _0x14a33f(0x253): if (!Imported[_0x14a33f(0x206)]) return; break; case _0x14a33f(0x1d4): if (!Imported[_0x14a33f(0x167)]) return; break; case _0x14a33f(0x24f): case _0x14a33f(0x261): if (!Imported[_0x14a33f(0x21b)]) return; break; }const _0x5e05d7 = new Window_ButtonConsole(_0x4a0203, this); this[_0x14a33f(0x1f6)][_0x14a33f(0x22c)](_0x5e05d7), this[_0x14a33f(0x210)](_0x5e05d7); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x16f)] = function () { const _0x229f79 = _0x4a9484, _0x45d015 = Window_ButtonConsole[_0x229f79(0x1ac)][_0x229f79(0x215)]()[_0x229f79(0x164)](), _0x40b760 = this['_buttonConsoleButtons']; this[_0x229f79(0x26c)]['x'] = this[_0x229f79(0x26c)]['y'] = 0x0; if ([_0x229f79(0x1a3), _0x229f79(0x227)]['includes'](_0x45d015)) { let _0x7690e3 = _0x40b760[_0x229f79(0x1c5)] * Window_ButtonConsole[_0x229f79(0x192)]; _0x7690e3 += (_0x40b760['length'] - 0x1) * Window_ButtonConsole[_0x229f79(0x1af)]; let _0x3ce035 = Math[_0x229f79(0x158)]((this['width'] - _0x7690e3) / 0x2), _0x5c53b4 = _0x3ce035; for (const _0x45e8aa of _0x40b760) { if (_0x229f79(0x151) === _0x229f79(0x1cb)) { this['_buttonConsoleButtons'] = []; for (const _0x1fff94 of _0x3d8ed4[_0x229f79(0x25f)]) { this[_0x229f79(0x23b)](_0x1fff94); } this[_0x229f79(0x16f)](); } else _0x45e8aa['x'] = _0x5c53b4, _0x5c53b4 += Window_ButtonConsole[_0x229f79(0x192)] + Window_ButtonConsole[_0x229f79(0x1af)]; } } if (_0x45d015 === _0x229f79(0x1a3)) { if (_0x229f79(0x263) !== _0x229f79(0x263)) [_0x229f79(0x1a3), _0x229f79(0x227)][_0x229f79(0x224)](_0x2402ae[_0x229f79(0x1ac)]['toLowerCase']()[_0x229f79(0x164)]()) && (_0x5991f9 += _0x28bba8[_0x229f79(0x1a6)]); else { let _0x325d05 = Window_ButtonConsole[_0x229f79(0x1af)]; for (const _0x351754 of _0x40b760) { _0x351754['y'] = _0x325d05; } _0x325d05 = Window_ButtonConsole[_0x229f79(0x1a6)], this[_0x229f79(0x26c)]['y'] = _0x325d05; } }; if (_0x45d015 === _0x229f79(0x227)) { if (_0x229f79(0x189) !== _0x229f79(0x15c)) { let _0xffa686 = this[_0x229f79(0x13c)] - Window_ButtonConsole['BUTTON_HEIGHT']; _0xffa686 -= Window_ButtonConsole[_0x229f79(0x1af)]; for (const _0x21b882 of _0x40b760) { if ('ujgqR' !== 'hJnLn') _0x21b882['y'] = _0xffa686; else return _0x3146fb = _0x144c76(_0x2e9405), _0x14f184[_0x229f79(0x115)](/#(.*)/i) ? _0x229f79(0x204)[_0x229f79(0x1dd)](_0x148ada(_0x3a1605['$1'])) : this[_0x229f79(0x213)](_0x71c33f(_0x34857e)); } } else { const _0x14c3f1 = _0x20f55c[_0x229f79(0x137)](); return _0x14c3f1[_0x229f79(0x21c)]; } } }, Window_Message['prototype']['processButtonShortcut'] = function (_0xf1e579) { const _0x2d3a97 = _0x4a9484; if (this['_hideButtonConsole']) return; if (!$gameSystem[_0x2d3a97(0x19b)]()) return; _0xf1e579 = _0xf1e579[_0x2d3a97(0x215)]()[_0x2d3a97(0x164)](); switch (_0xf1e579) { case _0x2d3a97(0x186): $gameSystem[_0x2d3a97(0x18e)]() && SceneManager[_0x2d3a97(0x12b)]() ? 'DlmpY' !== _0x2d3a97(0x129) ? (_0x58de58(_0x2d3a97(0x12d)[_0x2d3a97(0x1dd)](_0x138e87, _0x5674a2, _0x3cca2a)), _0x2f4629[_0x2d3a97(0x180)]()) : (this[_0x2d3a97(0x20a)](), SceneManager['push'](Scene_SaveButtonConsole)) : _0x2d3a97(0x1db) === _0x2d3a97(0x1db) ? this[_0x2d3a97(0x149)]() : (_0x2754e4[_0x2d3a97(0x193)][_0x2d3a97(0x239)][_0x2d3a97(0x1d5)](this), this[_0x2d3a97(0x177)]()); break; case 'load': DataManager[_0x2d3a97(0x15d)]() && SceneManager[_0x2d3a97(0x12b)]() ? (this[_0x2d3a97(0x20a)](), SceneManager[_0x2d3a97(0x22c)](Scene_Load)) : this[_0x2d3a97(0x149)](); break; case 'options': SceneManager[_0x2d3a97(0x12b)]() ? (this['playOkSound'](), SceneManager['push'](Scene_Options)) : this[_0x2d3a97(0x149)](); break; case _0x2d3a97(0x259): SceneManager[_0x2d3a97(0x12b)]() ? (this['playOkSound'](), SceneManager[_0x2d3a97(0x22c)](Scene_GameEnd)) : _0x2d3a97(0x188) === _0x2d3a97(0x188) ? this[_0x2d3a97(0x149)]() : this[_0x2d3a97(0xfd)] = 0x0; break; } }, VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1dc)] = Window_Message[_0x4a9484(0x193)]['startWait'], Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1ea)] = function (_0x414d80) { const _0x1879be = _0x4a9484; if (SceneManager[_0x1879be(0x1fe)]['isExtendedFastForwardMode']()) return; VisuMZ[_0x1879be(0xfb)][_0x1879be(0x1dc)][_0x1879be(0x1d5)](this, _0x414d80); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x211)] = function () { const _0xe3b99a = _0x4a9484, _0x234d11 = $gameSystem[_0xe3b99a(0x137)](); return _0x234d11[_0xe3b99a(0x21c)]; }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x18d)] = function () { const _0x4c5e35 = _0x4a9484; this[_0x4c5e35(0x211)]() ? this[_0x4c5e35(0x1fb)]() : _0x4c5e35(0x240) === _0x4c5e35(0x240) ? Window_Base[_0x4c5e35(0x193)]['_createPauseSignSprites']['call'](this) : _0x2a2bf1[_0x4c5e35(0x1a5)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1fb)] = function () { const _0x3db125 = _0x4a9484, _0x282812 = $gameSystem[_0x3db125(0x137)](); this[_0x3db125(0x1d7)] = new Sprite(), this[_0x3db125(0x210)](this['_pauseSignSprite']), this[_0x3db125(0x1d7)][_0x3db125(0x161)]['x'] = _0x282812['AnchorX'], this[_0x3db125(0x1d7)][_0x3db125(0x161)]['y'] = _0x282812[_0x3db125(0x13e)], this[_0x3db125(0x16b)] = 0x0; }, Window_Message['prototype'][_0x4a9484(0x239)] = function () { const _0x1ee136 = _0x4a9484; this['isCustomMessageCursorEnabled']() ? this['refreshCustomMessageCursorPauseSign']() : (Window_Base['prototype'][_0x1ee136(0x239)][_0x1ee136(0x1d5)](this), this[_0x1ee136(0x177)]()); }, Window_Message[_0x4a9484(0x193)]['refreshCustomMessageCursorPauseSign'] = function () { const _0x100471 = _0x4a9484, _0x3fdf74 = this[_0x100471(0x1d7)]; if (!_0x3fdf74) return; const _0x536e74 = $gameSystem['getMessageCursorSettings'](), _0x4ca7e9 = _0x536e74['GraphicType'][_0x100471(0x215)]()[_0x100471(0x164)](); if (_0x4ca7e9 === _0x100471(0x119)) { if (_0x100471(0x219) === _0x100471(0x255)) return this[_0x100471(0x126)](_0x100471(0x253)), ![]; else _0x3fdf74['bitmap'] = ImageManager['loadSystem'](_0x536e74[_0x100471(0x1e8)]); } else 'IKHUo' !== _0x100471(0x130) ? (this[_0x100471(0x20a)](), _0x487ae3['push'](_0x2bda5e)) : _0x3fdf74[_0x100471(0x128)] = ImageManager[_0x100471(0x1a4)](_0x100471(0x245)); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x177)] = function () { const _0x24e3d5 = _0x4a9484, _0x29f0e5 = this[_0x24e3d5(0x1d7)]; if (!_0x29f0e5) return; if (!$gameSystem[_0x24e3d5(0x19b)]()) return; _0x29f0e5['y'] -= Window_ButtonConsole[_0x24e3d5(0x1a6)]; }, Window_Message['prototype']['_updatePauseSign'] = function () { const _0x27a91d = _0x4a9484; this[_0x27a91d(0x211)]() ? this['updateCustomMessageCursorPauseSignSprites']() : _0x27a91d(0x171) === _0x27a91d(0x20f) ? _0xba1d67[_0x27a91d(0x128)] = _0x583f41[_0x27a91d(0x1a4)](_0x249fc0['Filename']) : Window_Base[_0x27a91d(0x193)][_0x27a91d(0x23e)]['call'](this); }, Window_Message['prototype'][_0x4a9484(0x175)] = function () { const _0x473506 = _0x4a9484; if (this['_cache_customMessageCursorFrameCount'] === Graphics[_0x473506(0x260)]) return; this[_0x473506(0x104)] = Graphics['frameCount']; const _0x448399 = this[_0x473506(0x1d7)]; if (!_0x448399) return; const _0x13a611 = _0x448399[_0x473506(0x128)]; if (_0x13a611[_0x473506(0x249)] <= 0x0) return; const _0x137b17 = $gameSystem[_0x473506(0x137)](), _0x312f1c = _0x137b17['GraphicType'][_0x473506(0x215)]()[_0x473506(0x164)](), _0x2e6201 = this['isAnySubWindowActive']() || this[_0x473506(0x1e4)](); _0x448399[_0x473506(0x11a)] = _0x2e6201 ? 0x0 : 0x1; if (_0x448399[_0x473506(0x11a)] <= 0x0) return; const _0x177e9b = _0x137b17[_0x473506(0x131)] * _0x137b17['Cols']; this[_0x473506(0x16b)]++; while (this[_0x473506(0x16b)] >= _0x177e9b * _0x137b17[_0x473506(0x170)]) { this[_0x473506(0x16b)] -= _0x177e9b * _0x137b17[_0x473506(0x170)]; } _0x312f1c === 'image' ? this[_0x473506(0x1f1)]() : this[_0x473506(0x218)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1f1)] = function () { const _0x4dab20 = _0x4a9484, _0x3a4386 = this[_0x4dab20(0x1d7)], _0x151ce1 = _0x3a4386[_0x4dab20(0x128)], _0x5b7c53 = $gameSystem['getMessageCursorSettings'](), _0xc75bab = Math[_0x4dab20(0x158)](this[_0x4dab20(0x16b)] / _0x5b7c53[_0x4dab20(0x170)]), _0x18dabf = Math[_0x4dab20(0x158)](_0x151ce1[_0x4dab20(0x249)] / _0x5b7c53['Cols']), _0x359c0f = Math['floor'](_0x151ce1['height'] / _0x5b7c53[_0x4dab20(0x131)]), _0x583709 = _0xc75bab % _0x5b7c53[_0x4dab20(0x199)] * _0x18dabf, _0x3b52fd = Math['floor'](_0xc75bab / _0x5b7c53[_0x4dab20(0x199)]) * _0x359c0f; _0x3a4386[_0x4dab20(0x102)](_0x583709, _0x3b52fd, _0x18dabf, _0x359c0f), _0x3a4386[_0x4dab20(0x150)] = this[_0x4dab20(0x228)](); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x218)] = function () { const _0xa7380f = _0x4a9484, _0x2e92af = this[_0xa7380f(0x1d7)], _0x55b4b5 = $gameSystem['getMessageCursorSettings'](), _0x45f9f5 = _0x55b4b5[_0xa7380f(0x1e9)], _0x551e6e = ImageManager[_0xa7380f(0x10e)], _0x2010b1 = ImageManager['iconHeight'], _0x5ccbfc = _0x45f9f5 % 0x10 * _0x551e6e, _0x66c93d = Math[_0xa7380f(0x158)](_0x45f9f5 / 0x10) * _0x2010b1; _0x2e92af['setFrame'](_0x5ccbfc, _0x66c93d, _0x551e6e, _0x2010b1), _0x2e92af[_0xa7380f(0x150)] = this[_0xa7380f(0x228)](); if (_0x55b4b5[_0xa7380f(0x16d)] === 0x0) return; _0x2e92af[_0xa7380f(0x113)]['x'] = Math[_0xa7380f(0x165)](Graphics['frameCount'] * _0x55b4b5[_0xa7380f(0x16d)]); }, Window_Message[_0x4a9484(0x193)][_0x4a9484(0x1bf)] = function (_0x5eb8a6) { const _0x443db0 = _0x4a9484; if (!_0x5eb8a6) return; if (!_0x5eb8a6[_0x443db0(0x265)]) return; if (!this['isCustomMessageCursorEnabled']()) return; const _0x3dc109 = this[_0x443db0(0x1d7)]; if (!_0x3dc109) return; const _0x5a2ff8 = $gameSystem[_0x443db0(0x137)](); _0x3dc109['x'] = _0x5eb8a6['x'] + this[_0x443db0(0xfd)] + _0x5a2ff8[_0x443db0(0x1ab)] + _0x3dc109['width'] / 0x2, _0x3dc109['x'] += this[_0x443db0(0x26c)]['x'], _0x3dc109['y'] = _0x5eb8a6['y'] + this['padding'] + _0x5eb8a6[_0x443db0(0x13c)] + _0x5a2ff8[_0x443db0(0x267)], _0x3dc109['y'] += this[_0x443db0(0x26c)]['y'], _0x3dc109['x'] = Math['round'](_0x3dc109['x'][_0x443db0(0x17c)](this[_0x443db0(0xfd)], this[_0x443db0(0x249)])), _0x3dc109['y'] = Math['round'](_0x3dc109['y'][_0x443db0(0x17c)](this[_0x443db0(0xfd)], this[_0x443db0(0x13c)] - this[_0x443db0(0xfd)])); }; function Window_ButtonConsole() { const _0x57c77f = _0x4a9484; this[_0x57c77f(0x21e)](...arguments); } Window_ButtonConsole['prototype'] = Object['create'](Window_Scrollable[_0x4a9484(0x193)]), Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x21d)] = Window_ButtonConsole, Window_ButtonConsole['DEFAULT_SHOW'] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x226)], Window_ButtonConsole[_0x4a9484(0x1ac)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x198)]['Position'], Window_ButtonConsole[_0x4a9484(0x17e)] = VisuMZ[_0x4a9484(0xfb)]['Settings'][_0x4a9484(0x198)]['WindowSkin'], Window_ButtonConsole[_0x4a9484(0x225)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x17d)], Window_ButtonConsole[_0x4a9484(0x1b8)] = VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)]['MsgButtonConsole'][_0x4a9484(0x1e2)], Window_ButtonConsole['TEXT_COLOR_NORMAL'] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)]['MsgButtonConsole'][_0x4a9484(0x1c3)], Window_ButtonConsole[_0x4a9484(0x1ce)] = VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x124)], Window_ButtonConsole[_0x4a9484(0x1d1)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x144)], Window_ButtonConsole[_0x4a9484(0x192)] = VisuMZ[_0x4a9484(0xfb)]['Settings']['MsgButtonConsole'][_0x4a9484(0x1f8)], Window_ButtonConsole[_0x4a9484(0x1a6)] = VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x184)], Window_ButtonConsole[_0x4a9484(0x1af)] = VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)][_0x4a9484(0x198)][_0x4a9484(0x185)], Window_ButtonConsole[_0x4a9484(0x25f)] = VisuMZ[_0x4a9484(0xfb)]['Settings'][_0x4a9484(0x235)][_0x4a9484(0x250)], Window_ButtonConsole[_0x4a9484(0x196)] = { 'auto': VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)]['Buttons'][_0x4a9484(0x17a)], 'fastfwd': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x235)]['FastFwd'], 'save': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x235)][_0x4a9484(0x251)], 'load': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x235)][_0x4a9484(0x13f)], 'options': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)]['Buttons'][_0x4a9484(0x1b9)], 'gameend': VisuMZ['ExtMessageFunc'][_0x4a9484(0x1f2)]['Buttons']['GameEnd'] }, Window_ButtonConsole[_0x4a9484(0x114)] = { 'auto': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x235)][_0x4a9484(0x26d)], 'save': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)][_0x4a9484(0x235)]['SaveKey'], 'load': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)]['Buttons'][_0x4a9484(0x269)], 'options': VisuMZ[_0x4a9484(0xfb)]['Settings'][_0x4a9484(0x235)][_0x4a9484(0x1de)], 'gameend': VisuMZ[_0x4a9484(0xfb)][_0x4a9484(0x1f2)]['Buttons'][_0x4a9484(0x103)] }, Window_ButtonConsole['prototype']['initialize'] = function (_0x350d52, _0x19bc6b) { const _0xc08b31 = _0x4a9484, _0x40f83b = new Rectangle(0x0, 0x0, Window_ButtonConsole[_0xc08b31(0x192)], Window_ButtonConsole[_0xc08b31(0x1a6)]); this['_parentWindow'] = _0x19bc6b, Window_Scrollable[_0xc08b31(0x193)][_0xc08b31(0x21e)]['call'](this, _0x40f83b), this[_0xc08b31(0x1ed)](), this[_0xc08b31(0x173)] = _0x350d52[_0xc08b31(0x215)]()[_0xc08b31(0x164)](), this[_0xc08b31(0x1e5)](), this['hide'](); }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x25c)] = function () { return 0x0; }, Window_ButtonConsole['prototype'][_0x4a9484(0x179)] = function () { const _0x271754 = _0x4a9484; this[_0x271754(0x153)] = ImageManager[_0x271754(0x1a4)](Window_ButtonConsole[_0x271754(0x17e)]); }, Window_ButtonConsole['prototype'][_0x4a9484(0x20d)] = function () { const _0x18c100 = _0x4a9484; this[_0x18c100(0xfd)] = 0x0; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x172)] = function () { const _0x32ed06 = _0x4a9484; this[_0x32ed06(0x109)] = 0xff; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x1ed)] = function () { const _0x2b8df3 = _0x4a9484; Window_ButtonConsole[_0x2b8df3(0x156)] === undefined && this['checkBackImageSprites'](); if (!Window_ButtonConsole[_0x2b8df3(0x156)]) return; this[_0x2b8df3(0x18f)] = 0x0; const _0x6a474d = VisuMZ[_0x2b8df3(0xfb)][_0x2b8df3(0x1f2)][_0x2b8df3(0x198)], _0x1e4760 = [_0x2b8df3(0x174), _0x2b8df3(0x1b7), _0x2b8df3(0x13b)]; this[_0x2b8df3(0x18c)] = {}; for (const _0x256225 of _0x1e4760) { if (_0x6a474d[_0x256225] !== '') { const _0x13e106 = ImageManager['loadSystem'](_0x6a474d[_0x256225]); this['_buttonConsoleSprites'][_0x256225] = new Sprite(_0x13e106); const _0x382c8e = this[_0x2b8df3(0x18c)][_0x256225]; this['addChildToBack'](_0x382c8e), _0x382c8e['x'] = _0x6a474d['%1OffsetX'[_0x2b8df3(0x1dd)](_0x256225)] || 0x0, _0x382c8e['y'] = _0x6a474d[_0x2b8df3(0x10c)[_0x2b8df3(0x1dd)](_0x256225)] || 0x0; } } this[_0x2b8df3(0x22d)](); }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x13a)] = function () { const _0x54d784 = _0x4a9484; Window_ButtonConsole[_0x54d784(0x156)] = ![]; const _0x4b1199 = VisuMZ[_0x54d784(0xfb)][_0x54d784(0x1f2)][_0x54d784(0x198)], _0x2f2388 = [_0x54d784(0x174), _0x54d784(0x1b7), _0x54d784(0x13b)]; for (const _0x19547f of _0x2f2388) { if (_0x54d784(0x22f) === 'IaYmo') _0x59144a[_0x54d784(0x1a5)](); else { if (_0x4b1199[_0x19547f] !== '') { if (_0x54d784(0x222) !== 'aSlcY') this[_0x54d784(0x1ca)](); else { Window_ButtonConsole[_0x54d784(0x156)] = !![]; break; } } } } }, Window_ButtonConsole['prototype'][_0x4a9484(0x145)] = function () { const _0x658677 = _0x4a9484; Window_Scrollable[_0x658677(0x193)]['resetFontSettings']['call'](this), this[_0x658677(0x16c)][_0x658677(0x13d)] = Window_ButtonConsole[_0x658677(0x225)], this[_0x658677(0x16c)][_0x658677(0xfe)] = Window_ButtonConsole['FONT_SIZE']; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x1e5)] = function () { const _0x2bf42c = _0x4a9484; this[_0x2bf42c(0x200)](), this[_0x2bf42c(0x145)](); const _0x1eecc1 = TextManager[_0x2bf42c(0x12a)](this[_0x2bf42c(0x173)]), _0x2b69df = this[_0x2bf42c(0x26e)](); this[_0x2bf42c(0x1b0)](ColorManager['getColor'](_0x2b69df)), this[_0x2bf42c(0x1d3)](_0x1eecc1, 0x0, 0x0, this[_0x2bf42c(0x209)], _0x2bf42c(0x138)); }, Window_ButtonConsole['prototype'][_0x4a9484(0x26e)] = function () { const _0x1a3278 = _0x4a9484; switch (this[_0x1a3278(0x173)]) { case _0x1a3278(0x24e): if ($gameTemp[_0x1a3278(0x117)]()) return Window_ButtonConsole[_0x1a3278(0x1ce)]; break; case _0x1a3278(0x1d9): const _0xa3e53d = SceneManager['_scene']; if ($gameSystem['isExtendedFastForwardDisallowed']()) { if (_0x1a3278(0x1bc) === _0x1a3278(0x1bc)) return Window_ButtonConsole[_0x1a3278(0x1d1)]; else this[_0x1a3278(0x149)](); } else { if (_0xa3e53d && _0xa3e53d[_0x1a3278(0x14d)] && _0xa3e53d[_0x1a3278(0x14d)]()) return Window_ButtonConsole[_0x1a3278(0x1ce)]; } break; case _0x1a3278(0x186): if (!$gameSystem[_0x1a3278(0x18e)]() || !SceneManager['isSceneMap']()) return _0x1a3278(0x10f) === _0x1a3278(0x10f) ? Window_ButtonConsole[_0x1a3278(0x1d1)] : _0x3df7f1[_0x1a3278(0xfb)]['Window_Message_isTriggered'][_0x1a3278(0x1d5)](this); break; case _0x1a3278(0x253): if (!DataManager[_0x1a3278(0x15d)]() || !SceneManager['isSceneMap']()) { if (_0x1a3278(0x123) !== _0x1a3278(0x123)) { if (_0x276482['_scene']['isExtendedFastForwardMode']()) return; _0x295022['ExtMessageFunc'][_0x1a3278(0x1dc)]['call'](this, _0x51e8f2); } else return Window_ButtonConsole['TEXT_COLOR_DISABLED']; } break; case 'options': case _0x1a3278(0x259): if (!SceneManager['isSceneMap']()) { if (_0x1a3278(0x15b) !== _0x1a3278(0x15b)) this['playOkSound'](), _0x1ecccc[_0x1a3278(0x22c)](_0x40bbb8); else return Window_ButtonConsole['TEXT_COLOR_DISABLED']; } break; case 'backlog': case 'log': if (!$gameSystem['isMainMenuMessageLogEnabled']() || !SceneManager[_0x1a3278(0x12b)]()) return Window_ButtonConsole[_0x1a3278(0x1d1)]; break; }return Window_ButtonConsole['TEXT_COLOR_NORMAL']; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x24d)] = function () { return !![]; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x1be)] = function () { const _0x1eb2ec = _0x4a9484; if (this[_0x1eb2ec(0x25e)] < 0xff) return; switch (this['_type']) { case _0x1eb2ec(0x24e): let _0x82afe4 = !$gameTemp[_0x1eb2ec(0x117)](); $gameTemp['setMessageAutoForwardMode'](_0x82afe4); if (_0x82afe4) { if ('qBWIM' === _0x1eb2ec(0x16a)) this[_0x1eb2ec(0x20a)](); else { if (this[_0x1eb2ec(0x135)] && this['_choiceListWindow'][_0x1eb2ec(0x18b)]) return !![]; if (this[_0x1eb2ec(0x11d)] && this['_numberInputWindow'][_0x1eb2ec(0x18b)]) return !![]; if (this['_eventItemWindow'] && this[_0x1eb2ec(0x155)][_0x1eb2ec(0x18b)]) return !![]; return ![]; } } else SoundManager[_0x1eb2ec(0x1a5)](); break; case _0x1eb2ec(0x1d9): if (!$gameSystem[_0x1eb2ec(0x127)]()) { let _0x1565b7 = !$gameTemp[_0x1eb2ec(0x160)](); $gameTemp[_0x1eb2ec(0x1f9)](_0x1565b7); if (_0x1565b7) { if (_0x1eb2ec(0x242) !== _0x1eb2ec(0x242)) { let _0x565198 = this[_0x1eb2ec(0x13c)] - _0x498a61[_0x1eb2ec(0x1a6)]; _0x565198 -= _0x49abcd[_0x1eb2ec(0x1af)]; for (const _0x31a163 of _0x219b90) { _0x31a163['y'] = _0x565198; } } else this[_0x1eb2ec(0x20a)](); } else { if (_0x1eb2ec(0x24a) !== _0x1eb2ec(0x24a)) { this[_0x1eb2ec(0x200)](), this[_0x1eb2ec(0x145)](); const _0x23337a = _0x1ef4d0[_0x1eb2ec(0x12a)](this[_0x1eb2ec(0x173)]), _0x3cce18 = this[_0x1eb2ec(0x26e)](); this[_0x1eb2ec(0x1b0)](_0x2f402d[_0x1eb2ec(0x15e)](_0x3cce18)), this['drawText'](_0x23337a, 0x0, 0x0, this['innerWidth'], _0x1eb2ec(0x138)); } else SoundManager['playCancel'](); } this[_0x1eb2ec(0x1e5)](); } else this['playBuzzerSound'](); break; case _0x1eb2ec(0x186): $gameSystem[_0x1eb2ec(0x18e)]() && SceneManager[_0x1eb2ec(0x12b)]() ? (this[_0x1eb2ec(0x20a)](), SceneManager[_0x1eb2ec(0x22c)](Scene_SaveButtonConsole)) : this[_0x1eb2ec(0x149)](); break; case _0x1eb2ec(0x253): DataManager[_0x1eb2ec(0x15d)]() && SceneManager[_0x1eb2ec(0x12b)]() ? (this[_0x1eb2ec(0x20a)](), SceneManager[_0x1eb2ec(0x22c)](Scene_Load)) : this[_0x1eb2ec(0x149)](); break; case 'options': SceneManager['isSceneMap']() ? _0x1eb2ec(0x22b) !== _0x1eb2ec(0x22b) ? this[_0x1eb2ec(0x20a)]() : (this[_0x1eb2ec(0x20a)](), SceneManager[_0x1eb2ec(0x22c)](Scene_Options)) : this[_0x1eb2ec(0x149)](); break; case _0x1eb2ec(0x259): SceneManager['isSceneMap']() ? (this[_0x1eb2ec(0x20a)](), SceneManager[_0x1eb2ec(0x22c)](Scene_GameEnd)) : this[_0x1eb2ec(0x149)](); break; case _0x1eb2ec(0x1d4): if (Imported[_0x1eb2ec(0x167)]) { if ('gSTdY' === _0x1eb2ec(0x258)) $gameTemp[_0x1eb2ec(0x202)](); else return this[_0x1eb2ec(0x1a9)]-- <= 0x0; } break; case 'backlog': case _0x1eb2ec(0x261): if (Imported['VisuMZ_3_MessageLog']) { if ($gameSystem[_0x1eb2ec(0x108)]() && SceneManager[_0x1eb2ec(0x12b)]()) { if ('qIBHR' === _0x1eb2ec(0x11f)) this[_0x1eb2ec(0x20a)](), SceneManager[_0x1eb2ec(0x22c)](Scene_MessageLog); else { if (!_0x203ba9[_0x1eb2ec(0x156)]) return; if (this[_0x1eb2ec(0x18c)][_0x1eb2ec(0x174)]) { const _0x283441 = this[_0x1eb2ec(0x18c)]['ImgDisabled']; _0x283441[_0x1eb2ec(0x150)] = this['textColorID']() === _0x286b0d[_0x1eb2ec(0x1d1)]; } if (this[_0x1eb2ec(0x18c)]['ImgEnabled']) { const _0x2b397f = this['_buttonConsoleSprites'][_0x1eb2ec(0x1b7)]; _0x2b397f[_0x1eb2ec(0x150)] = this[_0x1eb2ec(0x26e)]() === _0x2c9954[_0x1eb2ec(0x1ae)]; } if (this[_0x1eb2ec(0x18c)][_0x1eb2ec(0x13b)]) { const _0x587f84 = this[_0x1eb2ec(0x18c)][_0x1eb2ec(0x13b)]; _0x587f84[_0x1eb2ec(0x150)] = this[_0x1eb2ec(0x26e)]() === _0x862e02[_0x1eb2ec(0x1ce)]; } } } else this[_0x1eb2ec(0x149)](); } break; }TouchInput[_0x1eb2ec(0x139)](); }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x23d)] = function () { const _0x18eb08 = _0x4a9484; Window_Scrollable[_0x18eb08(0x193)][_0x18eb08(0x23d)]['call'](this), this[_0x18eb08(0x10a)](), this[_0x18eb08(0x223)](), this[_0x18eb08(0x22d)](); }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x10a)] = function () { const _0x5890f6 = _0x4a9484; if (!this[_0x5890f6(0x23a)]) return; this['openness'] = this[_0x5890f6(0x23a)][_0x5890f6(0x25e)]; }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x223)] = function () { const _0x573bb7 = _0x4a9484; this['_type'] === _0x573bb7(0x1d9) && (this[_0x573bb7(0x169)] !== Input['isPressed'](VisuMZ[_0x573bb7(0x25b)][_0x573bb7(0x1f2)][_0x573bb7(0x1fd)]['FastForwardKey']) && (_0x573bb7(0x15a) !== _0x573bb7(0x252) ? (this[_0x573bb7(0x169)] = Input['isPressed'](VisuMZ[_0x573bb7(0x25b)][_0x573bb7(0x1f2)]['General'][_0x573bb7(0x203)]), this[_0x573bb7(0x1e5)]()) : this[_0x573bb7(0x20a)]())); }, Window_ButtonConsole[_0x4a9484(0x193)][_0x4a9484(0x22d)] = function () { const _0x2b6a1f = _0x4a9484; if (!Window_ButtonConsole['USE_BACK_IMAGE_SPRITES']) return; if (this['_buttonConsoleSprites'][_0x2b6a1f(0x174)]) { if (_0x2b6a1f(0x1c0) !== _0x2b6a1f(0x1c0)) { const _0x39defc = _0x589916[_0x2b6a1f(0x1a8)](), _0x52a287 = _0xb9d1b6[_0x2b6a1f(0x1c4)](), _0x303877 = _0x27af32[_0x2b6a1f(0x20e)](); let _0x15b72c = _0x340449[_0x2b6a1f(0x1f7)], _0x45e8d7 = this[_0x2b6a1f(0x132)], _0x4deaa0 = _0x303877 ? this[_0x2b6a1f(0x209)] - _0x15b72c - 0x4 : 0x4, _0x430ba4 = 0x0; _0x45e8d7 -= this[_0x2b6a1f(0x266)](), this[_0x2b6a1f(0x140)](_0x39defc, _0x52a287, _0x4deaa0, _0x430ba4, _0x15b72c, _0x45e8d7); } else { const _0x285553 = this[_0x2b6a1f(0x18c)][_0x2b6a1f(0x174)]; _0x285553[_0x2b6a1f(0x150)] = this[_0x2b6a1f(0x26e)]() === Window_ButtonConsole[_0x2b6a1f(0x1d1)]; } } if (this[_0x2b6a1f(0x18c)][_0x2b6a1f(0x1b7)]) { const _0x338c61 = this[_0x2b6a1f(0x18c)]['ImgEnabled']; _0x338c61[_0x2b6a1f(0x150)] = this['textColorID']() === Window_ButtonConsole[_0x2b6a1f(0x1ae)]; } if (this[_0x2b6a1f(0x18c)][_0x2b6a1f(0x13b)]) { if (_0x2b6a1f(0x1cc) === _0x2b6a1f(0x1cc)) { const _0x109faa = this[_0x2b6a1f(0x18c)][_0x2b6a1f(0x13b)]; _0x109faa[_0x2b6a1f(0x150)] = this['textColorID']() === Window_ButtonConsole[_0x2b6a1f(0x1ce)]; } else _0x284ace['x'] = _0x18ed1d, _0xd84317 += _0x453567[_0x2b6a1f(0x192)] + _0x589138[_0x2b6a1f(0x1af)]; } };