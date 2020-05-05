- `Requirement` is requirement for equip this item, if character hasn't pass this requirement. it will not able to equip this item. You can `Character` which is `Player Character` data (which assumable as character class). `Level` is character level. `Attribute Amounts` an attributes with each amount that required to equip this item.
- `Equipment Set` this package has equipment set system which when character equipped same item set, character can receives bonus. The `Equipment Set` has `Effects` which is an bonus for each amount of same item set that equipped. You can create equipment set by right click in `Project` tab then select `Create` -> `Create GameData` -> `Equipment Set`

![](../images/items/005.png)

- `Max Durability` is equipment max durability. If this is set to 0 it will not broken.
- `Destroy If Broken` if this is `TRUE` item will be destroy (remove from inventory) when broken.
- `Max Socket` is max amount of sockets that can be enhance by `Socket Enhancer` items.