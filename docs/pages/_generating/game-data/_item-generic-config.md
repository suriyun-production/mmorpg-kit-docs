- `Drop Model` set mesh or skinned mesh prefab which you want it to be instantiated in gameplay scene to represend dropped item, you also able to attach drop sfx audio source to the prefab which will play on awake when instantiates.
- `Sell Price` is item sell price when sell item to NPC. Not price to buy from NPC.
- `Weight` item weight. About this package, character stats has weight limit, if character carry too many items and sum weight is over weight limit. Character will not able to carry more item.
- `Max Stack` this is max item amount for each slot in inventory.
- `Item Refine` item refine contains settings for refine settings for each level, repair price for each durability rates which available for an equipment items only and title color which available for all item types, you may assume that an item refine is an item rarity settings.

You can create item refine by right click in `Project` tab then select `Create` -> `Create GameData` -> `Item Refine`

![](../images/items/004.png)