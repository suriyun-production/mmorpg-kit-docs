# How to create Area Attack Skill

You can create area buff skill by right click in `Project` tab then select `Create` -> `Create GameData` -> `Skill` -> `Simple Area Attack Skill`

![](../images/skills/005.png)

After the skill created. Set its name, its name must be unique unlike other data because we're going to use it as data id (*You can change filename later after you have done the setup*)

![](../images/skills/002.png)

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

!INCLUDE "./game-data/_skill-generic-config.md"

- `Cast Distance` is distance from skill caster to aim position.
- `Area Duration` is duration that the area will be appears.
- `Apply Duration` is duration that the area will apply damage to characters.
- `Target Object Prefab` is the prefab which will be instantiated at aim position while aiming before cast the skill.
- `Area Damage Entity` is the prefab which will be instantiated at aim position after skill casted.
- `Skill Attack Type` how skill applies damages to enemies.
- `Damage Info` contains info about how skill applies damage to other characters ([See more](pages/018-damage-info ':target=__blank')). This will be in-use with `Normal` skill attack type only. If skill attack type is `Based On Weapon` it will use weapon's damage info.
- `Damage Amount` base damage amounts for this skill. This will be in-use with `Normal` skill attack type only. If skill attack type is `Based On Weapon` it will use weapon's damage amounts as base damage amounts.
- `Effectiveness Attributes` skill can increase more damage based on these attributes ([See more](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank'))
- `Weapon Damage Inflictions` damage inflictions based on weapon damage amount.
- `Additional Damage Amounts` damage amounts that will be increasing while attacking target.
- `Increase Damage Amounts With Buffs` if this is `TRUE` applied buff damages will be included to skill attack damages.
- `Is Debuff` if this is `TRUE` an enemies will receive debuff.
- `Debuff` debuff which will applies to an enemies.

!INCLUDE "./game-data/_buff.md"

* * *

That's an configs for `Area Attack Skill`

!INCLUDE "./game-data/_game-data-put-to-database.md"