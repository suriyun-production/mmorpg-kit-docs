# How to create Weapon Item

You can create item by right click in `Project` tab then select `Create` -> `Create GameData` -> `Item`

![](../images/items/001.png)

After the item created. Set its name, its name must be unique unlike other data because we're going to use it as data id (*You can change filename later after you have done the setup*)

![](../images/items/002.png)

There are following configs

- `Title` is default title. if you want to set title for specific language you can set it to `Titles`
- `Titles` is language specific titles. You can set title for specific language key, language key must be the key which existed in `Language Manager` -> `Language List`
- `Description` is default description. if you want to set description for specific language you can set it to `Descriptions`
- `Descriptions` is language specific descriptions. You can set description for specific language key, language key must be the key which existed in `Language Manager` -> `Language List`
- `Icon` is icon which represent item appearance
Then we're going to create `Weapon Item` so set `Item Type` to `Weapon`

![](../images/items/003-3.png)

There are following configs for `Weapon Item`

- `Drop Model` set mesh or skinned mesh prefab which you want it to be instantiated in gameplay scene to represend dropped item, you also able to attach drop sfx audio source to the prefab which will play on awake when instantiates.
- `Sell Price` is item sell price when sell item to NPC. Not price to buy from NPC.
- `Weight` item weight. About this package, character stats has weight limit, if character carry too many items and sum weight is over weight limit. Character will not able to carry more item.
- `Max Stack` this is max item amount for each slot in inventory.
- `Item Refine` item refine contains settings for refine settings for each level, repair price for each durability rates which available for an equipment items only and title color which available for all item types, you may assume that an item refine is an item rarity settings.

You can create item refine by right click in `Project` tab then select `Create` -> `Create GameData` -> `Item Refine`

![](../images/items/004.png)
## Equipment Configs

- `Requirement` is requirement for equip this item, if character hasn't pass this requirement. it will not able to equip this item. You can `Character` which is `Player Character` data (which assumable as character class). `Level` is character level. `Attribute Amounts` an attributes with each amount that required to equip this item.
- `Equipment Set` this package has equipment set system which when character equipped same item set, character can receives bonus. The `Equipment Set` has `Effects` which is an bonus for each amount of same item set that equipped. You can create equipment set by right click in `Project` tab then select `Create` -> `Create GameData` -> `Equipment Set`

![](../images/items/005.png)

- `Max Durability` is equipment max durability. If this is set to 0 it will not broken.
- `Destroy If Broken` if this is `TRUE` item will be destroy (remove from inventory) when broken.
- `Max Socket` is max amount of sockets that can be enhance by `Socket Enhancer` items.
## Weapon Configs

- `Weapon Type` this is type of this weapon item, you may create sword, axe, bow and so on, up to you. Every item type contains 
    * `Equip Type` if `Equip Type` is `One Hand` it will be able to equip to main-hand only character will still able to equip shield, `One Hand Can Dual` will be able to equip to both main-hand and off-hand and also able to equip to both hands at same time, `Two Hand` will be able to equip to main-hand only character will not able to equip shield. 
    * `Damage Info` contains info about how weapon applies damage to other characters ([See more](pages/018-damage-info ':target=__blank')). 
    * `Effectiveness Attributes` weapon can increase more damage based on these attributes ([See more](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank')). 
    * `Ammo` is type of ammo which required to use to attack, leave this is be empty if weapon doesn't required ammo. 
    
    You can create weapon type by right click in `Project` tab then select `Create` -> `Create GameData` -> `Weapon Type`

![](../images/items/007.png)

- `Damage Amount` this is main stats for this item, it is damage when attack with this weapon item, Its `Base Amount` is amount of damage when item level is 1. Its `Amount Increase Each Level` is amount of damage that will be increased when item level > 0.
- `Harvest Damage Amount` this is damage which will applies to harvestable entities only to collect materials from them.
- `Move Speed Rate While Attacking` this value will multiplies with character move speed stats while character is attacking, set this to 0 if you want to make character don't move while attacking.
- `Ammo Capacity` amount of ammo that can be loaded to weapon, For macine gun may set this to 30 as magazine capacity, if this is 0 it will not need to have ammo loaded to shoot but still need ammo in inventory.
- `Weapon Ability` ability of weapons, for now there is `Zoom Weapon Ability` only which will be in-use with `Shooter Character Controller` only.
- `Crosshair Setting` settings for crosshair, this will in-use with `Shooter Character Controller` only.

## Equipment Bonus Stats

- `Increase Stats` increasing character stats when equip this item, Its `Base Stats` is amount of stats that will be increased when item level is 1. Its `Stats Increase Each Level` is amount of stats that will be increased when item level > 0.
- `Increase Stats Rate` increasing character stats rate when equip this item, Its `Base Stats` is amount of stats rate that will be increased when item level is 1. Its `Stats Increase Each Level` is amount of stats rate that will be increased when item level > 0.
- `Increase Attributes` increasing character attributes when equip this item, You have to set [attribute](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank') which you want to increase then its `Base Amount` is amount of attributes that will be increased when item level is 1. Its `Amount Increase Each Level` is amount of attributes that will be increased when item level > 0.
- `Increase Attributes Rate` increasing character attributes rate when equip this item, You have to set [attribute](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank') which you want to increase then its `Base Amount` is amount of attributes rate that will be increased when item level is 1. Its `Amount Increase Each Level` is amount of attributes rate that will be increased when item level > 0.
- `Increase Resistances` increasing character resistances when equip this item, You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of resistances that will be increased when item level is 1. Its `Amount Increase Each Level` is amount of resistances that will be increased when item level > 0.
- `Increase Armors` increasing character armors when equip this item, You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of armors that will be increased when item level is 1. Its `Amount Increase Each Level` is amount of armors that will be increased when item level > 0.
- `Increase Damages` increasing character damages when equip this item, You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of damages that will be increased when item level is 1. Its `Amount Increase Each Level` is amount of damages that will be increased when item level > 0.
- `Increase Skill Levels` increasing character skill levels when equip this item.
## Fire Configs

- `Fire Type` this will be in-use with `Shooter Character Controller` only. If this is `Single Fire` player have to release button for next fire, if this is `Automatic` player can hold to fire without button release for next fire.
- `Fire Stagger` this is amount of how bullet will staggering while firing, more amount more staggering.
- `Fire Spread` this is amount of bullets that will be spread. For shotgun may set it to 6.

## Equipment Model

- `Equipment Models` set mesh or skinned mesh prefab which you want it to be instantiated in gameplay scene to represend equipped item, you also able to `EquipmentEntity` to the prefab to changes mesh's materials based on item level (more item level may have brighter glow materials).- `Sub Equipment Models` this is like `Equipment Models` but for left-hand weapons (aka. off-hand :p).

* * *

That's an configs for `Weapon Item`

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.