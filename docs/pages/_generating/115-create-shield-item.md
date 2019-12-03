# How to create Shield Item

!INCLUDE "./game-data/_item-create-scriptable-object.md"

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

Then we're going to create `Shield Item` so set `Item Type` to `Shield`

![](../images/items/003-4.png)

There are following configs for `Shield Item`

!INCLUDE "./game-data/_item-generic-config.md"

## Equipment Configs

!INCLUDE "./game-data/_item-equipment-config.md"

- `Armor Amount` this is main stats for this item, it will increase character armors when equip this item, Its `Base Amount` is amount of armor when item level is 1. Its `Amount Increase Each Level` is amount of armors that will be increased when item level > 0.

## Equipment Bonus Stats

!INCLUDE "./game-data/_item-equipment-bonus-stats.md"

## Equipment Model

!INCLUDE "./game-data/_item-equipment-model.md"

* * *

That's an configs for `Shield Item`

!INCLUDE "./game-data/_game-data-put-to-database.md"