# How to create Armor Item

!INCLUDE "./game-data/_item-create-scriptable-object.md"

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

Then we're going to create `Armor Item` so set `Item Type` to `Armor`

![](../images/items/003-2.png)

There are following configs for `Armor Item`

!INCLUDE "./game-data/_item-generic-config.md"

## Equipment Configs

!INCLUDE "./game-data/_item-equipment-config.md"

## Armor Configs

- `Armor Type` this is type of this armor item, you may create body armor item type, shoes, gloves and so on, up to you. Every item type contains 
    * `Equippable Slots` you can set it more than 1 if character can equip same item type more than 1 slot, for example ring item can be equipped to 2 equip slot. 
    
    You can create armor type by right click in `Project` tab then select `Create` -> `Create GameData` -> `Armor Type`

![](../images/items/006.png)

- `Armor Amount` this is main stats for this item, it will increase character armors when equip this item, Its `Base Amount` is amount of armor when item level is 1. Its `Amount Increase Each Level` is amount of armors that will be increased when item level > 0.

## Equipment Bonus Stats

!INCLUDE "./game-data/_item-equipment-bonus-stats.md"

## Equipment Model

!INCLUDE "./game-data/_item-equipment-model.md"

* * *

That's an configs for `Armor Item`

!INCLUDE "./game-data/_game-data-put-to-database.md"