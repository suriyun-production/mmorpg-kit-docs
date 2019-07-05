## 1.46

See it in [1.46 Updates](pages/055-1-46-updates.md)

## 1.45c

- Add `GetTotalWeight` function to `BaseGameplayRule`, developer may override it to increase weight by gold :P 
- Add `CurrenciesEnoughToBuyItem` to `BaseGameplayRule`, developer may override it to validate amount of custom currencies
- Add `DecreaseCurrenciesWhenBuyItem` to `BaseGameplayRule`, developer may override it to decrease amount of custom currencies 
- Add `IncreaseCurrenciesWhenSellItem` to `BaseGameplayRule`, developer may override it to increase amount of custom currencies 
- Add `CurrenciesEnoughToRefineItem` to `BaseGameplayRule`, developer may override it to validate amount of custom currencies 
- Add `DecreaseCurrenciesWhenRefineItem` to `BaseGameplayRule`, developer may override it to decrease amount of custom currencies 
- Add `CurrenciesEnoughToRepairItem` to `BaseGameplayRule`, developer may override it to validate amount of custom currencies 
- Add `DecreaseCurrenciesWhenRepairItem` to `BaseGameplayRule`, developer may override it to decrease amount of custom currencies 
- Add `CurrenciesEnoughToCraftItem` to `BaseGameplayRule`, developer may override it to validate amount of custom currencies 
- Add `DecreaseCurrenciesWhenCraftItem` to `BaseGameplayRule`, developer may override it to decrease amount of custom currencies 
- Add `CurrenciesEnoughToCreateGold` to `BaseGameplayRule`, developer may override it to validate amount of custom currencies 
- Add `DecreaseCurrenciesWhenCreateGold` to `BaseGameplayRule`, developer may override it to decrease amount of custom currencies 
- Add `MakeMonsterReward` to `BaseGameplayRule`, developer may override it to setup amount of custom rewarding currencies 
- Add `MakeQuestReward` to `BaseGameplayRule`, developer may override it to setup amount of custom rewarding currencies 
- Add `deadY` to `MapInfo`, when character fall to this position, character will dead 
- Add setting menu (press ESC in gameplay scene) with audio / language settings 



## 1.45b

- Fix armor can equip at weapon slot
- Rework on Localizations system, now all text formats are moved to `LanguageManager`
- Now 2d character model is support 8-directions sprites
- Add `AnimatorCharacterModel`, it's a new version of 3D mechanim character model which developer just have to set clips to make it work, not have to touch Animator Controller
- Add `AnimationCharacterModel`, it's a new version of 3D legacy animation character model
- Add `AnimatorCharacterModel2D`, it's 2D character model which based on animator
- Add `EquipmentModelContainerSetter` component, developers can add it to transform to use it as equipment containers instead of set `Equipment Containers` in `Character Model`, it will use game object name as `Equip Socket` and its transform as `Transform`
- Add `EffectModelContainerSetter` component, developers can add it to transform to use it as effect containers instead of set `Effect Containers` in `Character Model`, it will use game object name as `Effect Socket` and its transform as `Transform`
- Sort game data create menu



## 1.45

- Add gunfire system, can store ammo in magazine, can set dynamic crosshair, can set ability to zoom (more abilities can be added later)
- Add reload animation settings to `Character Model` component
- Add `Activate Animation Type` option to `Character Model` → skill animations, developer can use this option to set which animation will play when activate the skill, if this value is `Use Attack Animation` it will play attack animation randomly
- Add `EquipmentEntity` component, developer can attach this component to weapon model to set particle/sound effects when firing (See the demo from Weapon059, Weapon065, Weapon067). May use this for refined equipments particle/mesh effects (refined equipments are an equipment with +1/+2/+3 and so on)
- Add cancel buttons to invitation dialogs
- Fix SQLite cannot save character data
- Fix MMO server crash when summon multiple characters
- Fix character not warp immediately when respawn
- Fix hotkey reset when warp



## 1.44c

- Fix cannot assign and use skills bugs
- Fix item dialog showing up when receiving damage while enhance socket item UI is visible



## 1.44b

- Fix cannot move item to storage bugs
- Fix lost socket enhancers when the equipment dropped
- Fix increase stats/attributes/resistances/skills not showing up in UI character item for socket enhancer item
- Fix cannot use GM commands in MMO mode



## 1.44

- Add equipment socket and socket enhancer item
- Equipment can increase skills levels
- Add `useNavMeshForKeyMovement` option to `PlayerCharacterEntity` set this to TRUE if you want to move by nav mesh paths while controlling with movement keys (WASD)
- Add `collectType` to `HarvestableEntity`, so you can make it drop materials to the ground while harvesting by this setting 
- Add guild name to `UIGuildInvitation`
- Add `opponentAimTransform` to `DamageableEntity` this will be used by player character controller or monster activity component to aim to target, so if 2 characters are stand at a different height, they can fire each other
- Optimize garbage collection for `CharacterAllianceIndicator`, `NpcQuestIndicator`
- Fix invalid layer masks
- Fix invalid stats value in item UI



## 1.43b

- Fix invalid character stats calculation in `UI Character`
- Fix cannot press F to pick up items
- Fix invalid character attack/use skill animations settings in `Character Model`
- Fix cannot access player storage bug
- Add camera collision
- Move character attack/skill/buff codes to new partial class files (BaseCharacterEntity_AttackFunctions, BaseCharacterEntity_BuffFunctions, BaseCharacterEntity_SkillFunctions)
- Reduce DevExtMethods calls in BaseGameEntity and classes that extended from this class, it will be called only in Awake and OnDestroy function. For other function, developer has to implement an event delegates (You can see DevExtDemo_PlayerCharacterEntity, DevExtDemo_MonsterCharacterEntity) for example
- Add `hideCompleteQuest` to `UICharacterQuests`, Developers can use it to filter quest list
- Add casting duration/animation/effect for skills, now you can set casting duration/animation/effect before activating the skill
- Add OnCastSkill(), OnApplySkill(), OnAttack() functions to `Skill` class. Developers can extend `Skill` class and change some skill functionality by those functions

** More Info: https://suriyun-production.github.io/mmorpg-kit-docs/#/pages/045-1-43b-updates) **



## 1.43

- Update LiteNetLib to version 0.8.3
- Change all SendOption to DeliveryMethod (Follow LiteNetLib updates)
- Can switch target entity (with TAB key)
- Add `DoorEntity`, can open/close it with activate key (Press E)
- Add `StorageEntity`, can open it with activate key (Press E)
- Add `WorkbenchEntity`, can use it to craft items with activate key (Press E)
- Add `startCentralServer` config for MMO server instance, developer can set this config to true in a config file to start central server when running the server
- Add `startMapSpawnServer` config for MMO server instance, developer can set this config to true in a config file to start map-spawn server when running the server
- Add `startMapServer` config for MMO server instance, developer can set this config to true in a config file to start map server when running the server
- Add `startChatServer` config for MMO server instance, developer can set this config to true in a config file to start chat server when running the server
- Fix player characters data not saved immediately before scene changes for Singleplayer/LAN modes
- Fix building entities saved to invalid scenes for Singleplayer/LAN modes



## 1.42b

- Fix gold not save in Singleplayer / LAN Modes
- Fix duplicating storage items in Singleplayer / LAN Modes
- Fix selected skill dialog hiding while skill's buff applied
- Fix cannot use skills while attacking
- Fix invalid melee hit overlap functions



## 1.42

- Add player storage system, players can deposit/withdraw an item from storage, other characters in the same account also able to access the storage
- Add guild storage system, players can deposit/withdraw an item from storage, other characters in the same guild also able to access the storage
- Add player bank system, players can deposit/withdraw gold from the bank, other characters in the same account also able to access the bank
- Add guild bank system, players can deposit/withdraw gold from the bank, other characters in the same guild also able to access the bank
- Add player storage dialog for NPC
- Add guild storage dialog for NPC
- Can run map-server in editor, add `Start Map On Awake`, `Starting Map` configs to `MMOServerInstance`
- Can switch database with config files/command line arguments, also add `Database Options`, `Database Option Index` to `MMOServerInstance`



## 1.41

- Add warp dialog for NPC
- Add private/instance map system for MMO mode, for the demo, you can try enter it by NPC. Instance maps will be spawned as new map server instance to serve players
- Players can enter instance map alone when no party
- Players will enter instance map follow party leader if player's character stands nearby party leader (`Game Instance` → `Join Instance Map Distance`)
- Add `Enable Gm Commands` option to `Lan Rpg Network Manager`, developer can enable it to allow player to use GM Commands in Singleplayer/LAN mode
- Add warp portal type setting to `Warp Portal Entity`, `Warp Portal Database`. you can set type of portal for default warp or instance map
- `Warp Portal Entity` → `Map Scene` is deprecated use `Map Info` instead
- `Warp Portal Database` → `Map` is deprecated use `Map Info` instead
- `Npc Database` → `Map` is deprecated use `Map Info` instead
- Add show guild name above character name
- Fix monster attack other monsters
- Save camera zoom and rotation when exit game



## 1.40b

- Fix missile damage entity still move after exploded
- Add `On Exploded` event to missile damage entity, you can use this to show explod effects
- Add drag and drop UIs, now you can drag and drop item / skill to assign hotkey. Drag item to sell / set refining item / equip / unequip. Classes relates to this are: `UICharacterItemDragHandler`, `UICharacterSkillDragHandler`, `UIDealingItemDropHandler`, `UIEquipItemSlotDropHandler`, `UIRefineItemDropHandler`, `UISellItemDropHandler`, `UICharacterHotkeyDropHandler`
- Add `Move Speed Rate While Attacking` to weapon item, this will multiply with character move speed while character attacking
- Add `Move Speed Rate While Using Skill` to skill, this will multiply with character move speed while character using skill
- Fix annoying camera's target null error when warp :P



## 1.40

- Shooter controller can pick an item (Press F)
- Shooter controller can construct the building
- Shooter controller can active building (Now it can just destroy, Press E)
- The building can be attacked and destroyed
- Add damage over time to buff
- Add disallow move to buff, if this is true character will not able to move while the buff applied
- Add disallow attack to buff, if this is true character will not able to attack while the buff applied
- Add disallow use skill to buff, if this is true character will not able to use skill while the buff applied
- Add disallow use item to buff, if this is true character will not able to use item while the buff applied
- Add `destroyDelay` to `MissileDamageEntity`, use this to add some delay to play effect before it destroyed
- Move `deadHideDelay` to `BaseMonsterCharacterEntity` → `destroyDelay`, To developers, I've prepared migration codes so you don't worry about data changes
- Move `deadRespawnDelay` to `BaseMonsterCharacterEntity` → `destroyRespawnDelay`, To developers, I've prepared migration codes so you don't worry about data changes
- Add `Movement State` to `Character Entity` which sync from server instead of calculate at client side with `CharacterAnimationComponent` component so `CharacterAnimationComponent` component is not being used anymore with v1.40 or above
- Remove `ySpeed` from `Character Model`, will use just `IsGrounded` in animtor controller to detect fall state
- Remove `magnitudeToPlayMoveClip`, `ySpeedToPlayJumpClip`, `ySpeedToPlayFallClip` from `Character Model` will use `Movement State` from `Character Entity` to change legacy animation movement



## 1.39b

- Fix invalid range skill aim position
- Fix SQLite start a transaction within a transaction
- Fix invalid ground detection on non-owning clients



## 1.39

- Fix wrong character move speed when controls with Joystick / WASD bug
- Fix Cannot equip armor with same armor type bug
- Not unequip equipped weapon on off-hand when equip another item on off-hand bug
- Add shooter controller (try 00Init_Shooter demo)
- Animator controller for characters now requires IsGrounded(bool), SideMoveSpeed(float) 
- Add more movement types for Animator / Legacy animation



## 1.38b

- Add more functionality for dev extensions
- Fix character model → legacy animation bugs, it didn't playing well and dead animation play looply
- Reduce EditorUtility.SetDirty() function calls in OnValidate() function to avoid Unity 2018.3 bug (information about the bug: https://github.com/insthync/test-missing-prefabs)
- Make it able to select character class when create character (Try single player demo)



## 1.38

- Add `CharacterDeathSoundComponent` can attach it with Character Entity to play random sound when character dead 
- Move Dimension Type configs to Game Instance 
- Can use Item Refine to define item rarity 
- Can set animations based on weapon type at character model 
- Add equipment set, characters can gain more extra stats when equipped same set equipments 

More Info (https://medium.com/suriyun-production/1-38-updates-ef4586da2799) 



## 1.37b

- Refactor C# var to explicit type
- Make it able to use with older Unity (should be 2018.2 or above)
- Add WebSockets support for WebGL build
- Fix NPC icon showing multiple
- Fix footstep sound playing while jump



## 1.37

- Update Unity version to 2018.3.0f2, developers have to update to this version or above
- Add harvestable entity for 2d demo
- Make Singleplayer / LAN can change scene when entering warp portals
- Add configs to `MapInfo` to make it able to override saved respawn point so some map may force characters to respawn at the specific point
- Add footstep sound component
- Add UI to show attacking harvestable's health
- Add configs to `PlayerCharacterController` to make it not move to selected target immediately. To move to the selected target, player has to click on the selected target again
- Can show selected item information while dealing



## 1.36

- Add group buff / party buff skills
- Add summon skill
- Add pet system, it is items that when uses it will spawn pet, If pet dies it will unsummon as item and lock for sometime
- Add GM commands



## 1.35

- Clear listing when disconnected / stop server, to avoid null exception when accessing data from list
- Make networking system more easier to use
- Improve WASD movement now it will stop immediately when unpressed buttons
- Remove deprecated codes that relates to this (https://medium.com/suriyun-production/mmorpg-kit-1-32-character-database-entity-workflow-changes-ddeac9c4cc5d)
- Add 2D MMO Demo



## 1.34b

- Fix empty guild data for UI Guild
- Add Refine dialog for NPC, In case that someone wants to make it able to refine when talks to NPC only
- Add `hitOnlySelectedTarget` to `DamageInfo` class to make sword swing / arrow hitting only the selected target, instead of hitting any characters by hit FOV



## 1.34

- Add guild skills, Passive / Active, only guild leader can increase guild skill level, member can use active guild skills
- Add ENABLE_PURCHASING predefine, developer have to add it in "Scripting Define Symbols" when enable Unity Purchasing, I've added this to make it more friendly for beginners
- Add death EXP penalty, you can set the percentage at Game rule



## 1.33

- Fix leave party messages not sent to clients
- Fix leave guild messages not sent to clients
- Keep chat messages as static field, will be showed when warped to another map
- Showing game messages such as "Cannot carry anymore", "Not enough gold", "Not enough items"



## 1.32

- Remove all deprecated animation codes that moved to `Character Model`
- Fix monster character entity which placed in scene not respawn after dead
- Fix harvestable entity which placed in scene not respawn after dead
- Add Save respawn point dialog to NPC
- Change workflow `Character` -> `Entity Prefab` will be deprecated (Information about it: https://medium.com/suriyun-production/mmorpg-kit-1-32-character-database-entity-workflow-changes-ddeac9c4cc5d)



## 1.31

- Fix cannot create guild with SQLite database
- Fix connot read guild data with SQLite database
- Guild can level up, now it just collecting skill point but it will be used with guild skills later



## 1.30b

- Add default value to characters.partyId, characters.guildId, characters.guildRole, characters.sharedGuildExp for SQLite to fix it is not able to create new character
- Change how to get free ports to fix it is not able to create offline game on Mac OSX



## 1.30

- Make it able to customize network library, so it can change network library to another library instead of LiteNetLib
- Add OnGameDataLoaded callback to GameInstance and use it with MMOServerInstance to fix wrong script running order
- Can change party leader
- Make harvestable entity able to place in map scene (Does not have to use spawn area)
- Changes all database operations to be synchronized, and will be run on other threads to avoid main thread blocking, so gameplay will update smoothly while doing an database operations
- Add guild system (Can create / invite member / kick member / leave / terminate / change leader / set guild message / set role / change member role / change leader)



## 1.29

- Add party system (Can create / invite member / kick member / leave / terminate / set exp share / set item share)
- Change Connector/NET (MySql.Data) to MySqlConnector (https://github.com/mysql-net/MySqlConnector) to improve performance, for old version migration you have to remove MySql.Data.dll file



## 1.28

- Add choices for Player Character Movement to secure or not
- Reduce network transform packet size



## 1.27

- Add 2D games features
- Move weapon attack animations, skill cast animations to Character Model (Migration guide: https://medium.com/suriyun-production/mmorpg-kit-1-27-move-weapon-attack-animations-skill-cast-animations-to-character-model-f9016bd5a0ba)
- Make another entity (Harvestable / Building) able to play effects (Hit effects)
- Add destroyHideDelay to the harvestable entity, this is a delay before it's going to be hidden from clients after harvestable's hp reached zero (destroyed)
- Add onHarvestableDestroy event to the harvestable entity, developers may use this event to play destroy animations 
- Remove SecurePlayerCharacterEntity, make PlayerCharacterEntity secured



## 1.26

- Add cash shop demo
- Add IAP/IAB for iOS/Android
- Fix invalid equipment requirement calculation
- Add JSON config file reader for MMO server/MySQL/SQLite



## 1.25b

- Fix invalid map server scene loads



## 1.25

- Optimize garbage collections
- Cache all character data stats it will be updated when there are changes, so it will not re-calculate stats every frame
- Secure Player Character Entity can jump
- All Text / InputField changes to use TextWrapper / InputFieldWrapper, we can use wrappers to switch to TextMeshPro components easily, an old user should migrate to use the wrapper, see more details at https://medium.com/suriyun-production/mmorpg-kit-1-25-text-inputfield-migration-46d21a846262
- Add Game Database, you can use this Scriptable Object to add game data that you want to use instead of adding them to Resources folder



## 1.24

- Fix duplicating listing data bugs
- Fix invalid initialize data bugs
- Fix MMO can't choose character again when cannot connect to Map Server
- Improve jump animation to triggering when press jump, not play when high y speed



## 1.23

- Add Dev extension demo
- Fix Equip Weapons NULL exceptions
- Fix Building Object migrate codes obstruct game builds
- Add safe zone, Player cannot attack other players in safe zone, Monster cannot move into safe zone



## 1.22

- Hugh changes of workflows, Now character model will be instantiated as Character entity / Npc entity child, it will attached at same place of Character entity / Npc entity (Migration Guide: https://medium.com/suriyun-production/mmorpg-kit-1-22-changes-note-458cb291687)
- Build Object will be removed, Now its data moved to Build Entity
- Show player name / HP at its position
- Show monster name / HP at its position
- Show npc name / quest indecation at its position
- Make an network entity to be partial class and invoke some functions by function name suffix
- Make an UI to be partial class and invoke some functions by function name suffix
- Make an game data to be partial class
- Make game network manager to be partial class and invoke some functions by function name suffix



## 1.21

- Equipment Refining



## 1.20

- Fix WASD lock attack not working bugs
- Add missing skill available items description
- Add Require gold to craft system
- Add Craft Item Type for NPC Dialog, now you can create Craft Item Dialog by NPC
- Improve MMO enter map scene from character selection scene, it will disconnect from central server when able to connect to map server
- Add loading message when waiting for register/login/retrieve character list/create character/delete character



## 1.19

- Start scene / other scenes are deprecated, use Map Info instead
- Add PVP system
- Add new solution to add NPCs, by using Npc Database



## 1.18

- Facebook login integration (Require Facebook SDK: https://developers.facebook.com/docs/unity/)
- Google login integration (Require Google play games: https://github.com/playgameservices/play-games-plugin-for-unity)
- Fix cannot set custom missile damage entity to monster entity
- Fix invalid skill attack range
- Fix not lock enemy when using skill



## 1.17

- Separate (BaseCharacterEntity, PlayerCharacterEntity) to multiple files for more easier to read
- Add SecurePlayerCharacterEntity which is 100% server authoritative movement but not able to jump
- Add Player Dealing



## 1.16

- NPC can sell items
- Player can sell items to NPC
- Move and changes condition codes: Current <= 0 to IsDead()



## 1.15

-  Warp portal database system, developer can use this to add warp portals for more convenience than open scene to changes it
- Harvest system
- Fix bug, host cannot start game after loaded map scene sometime (Singleplayer/Multiplayer mode)
- Fix invalid network behaviour missing initialize data
- Remove predefined LiteNetLib.dll and add it source code directly, so develop will have to remove old plugins file from the project



## 1.14

- Building system
- World's building database
- Avoid class collision to other projects by add namespaces to some files
- Improve UI systems



## 1.12

- Fix mobile demo UI issues
- Add legacy animation supports
- Able to override action animation clips. So if you have difference animations for difference character model, you can override it.



## 1.11

- Reduce network message size
- Stop using tuples, change tuples to structs
- Stop using ECS, I will bring it back when it's stable
- Fix missing data when register
- Add equipment durability



## 1.10

- Add MMO Mode
- Account & Character Management for MMO Mode
- Multiple map server for MMO Mode
- Sqlite database for MMO Mode
- MySql database for MMO Mode
- Add new log file writer for more ease to read
- Changes some codes to ECS style



## 1.04

- Hungry, Thirsty, Food and Water system



## 1.03

- Add `Ammo` items
- Add crafting system
- Add passive skills
- Can set start skill level
- Prepare some stats for survival mode



## 1.02

- Add `controllerMode` to `PlayerCharacterController`, developer can set it to PointClick or WASD or Both
- Add `wasdLockAttackTarget` that if it TRUE, it will lock close character to attack
- Add `lockAttackTargetDistance` this value will be used to find close character to attack (it will sum with attack distance)
- Fix level up multiple times but does not increase statpoint / skillpoint multiple times
- Fix invalid exp calculation when level up multiple times
- Fix collect item quest tasks not consume items



## 1.01

- Add mobile controllers
- Prepare some stats for survival mode
- Change gameplay rule class to be ScriptableObject
- Change game instance extra to network settings so developers can changes network settings easily