# How to create Weapon Item

!INCLUDE "./game-data/_item-create-scriptable-object.md"

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

Then we're going to create `Weapon Item` so set `Item Type` to `Weapon`

![](../images/items/003-3.png)

There are following configs for `Weapon Item`

!INCLUDE "./game-data/_item-generic-config.md"

## Equipment Configs

!INCLUDE "./game-data/_item-equipment-config.md"

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

!INCLUDE "./game-data/_item-equipment-bonus-stats.md"

## Fire Configs

- `Fire Type` this will be in-use with `Shooter Character Controller` only. If this is `Single Fire` player have to release button for next fire, if this is `Automatic` player can hold to fire without button release for next fire.
- `Fire Stagger` this is amount of how bullet will staggering while firing, more amount more staggering.
- `Fire Spread` this is amount of bullets that will be spread. For shotgun may set it to 6.

## Equipment Model

!INCLUDE "./game-data/_item-equipment-model.md"
- `Sub Equipment Models` this is like `Equipment Models` but for left-hand weapons (aka. off-hand :p).

* * *

That's an configs for `Weapon Item`

!INCLUDE "./game-data/_game-data-put-to-database.md"