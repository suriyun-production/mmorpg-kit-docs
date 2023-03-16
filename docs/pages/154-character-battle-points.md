# Character's Battle Points

Character's battle points will be calculated by amount of `Attribute`, `Resistance`, `Armor`, `Damage`, `Skill` and `Character Stats` from equipment, skills, increased attributes, and buffs.
You can change amount of score in:
- `Attribute` game data -> `battlePointScore`.
- `Skill` game data -> `battlePointScore`.
- `DamageElement` game data -> `resistanceBattlePointScore`.
- `DamageElement` game data -> `armorBattlePointScore`.
- `DamageElement` game data -> `damageBattlePointScore`.
- `DefaultGameplayRule` game data -> in `Battle Points Score` section.

* * *

## Calculation example:
If your game have 2 attributes, `STR` and `DEX`, then your `STR` -> `battlePointScore` = `7`, and your `DEX` -> `battlePointScore` = `5`

Then if your character have `STR` = `10` and `DEX` = `20`

Your battle point will be calculated by `STR` = `7` * `10`, and `DEX` = `5` * `20`

= (`7` * `10`) + (`5` * `20`) = `170`

* * * 

`Skills`, `Resistances` and `Armors` battle points score will be calculated like `Attribute`

But `DamageAmounts` battle points will calculated by its ((`min damage` + `max damage`) / `2`) * `damageBattlePointScore`