# How to create Area Buff Skill

You can create area buff skill by right click in `Project` tab then select `Create` -> `Create GameData` -> `Skill` -> `Simple Area Buff Skill`

![](../images/skills/004.png)

After the skill created. Set its name, its name must be unique unlike other data because we're going to use it as data id (*You can change filename later after you have done the setup*)

![](../images/skills/002.png)

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

!INCLUDE "./game-data/_skill-generic-config.md"

- `Cast Distance` is distance from skill caster to aim position.
- `Area Duration` is duration that the area will be appears.
- `Apply Duration` is duration that the area will apply buff to characters.
- `Target Object Prefab` is the prefab which will be instantiated at aim position while aiming before cast the skill.
- `Area Buff Entity` is the prefab which will be instantiated at aim position after skill casted.
- `Buff` applying buff while character learned this skill.

!INCLUDE "./game-data/_buff.md"

* * *

That's an configs for `Area Buff Skill`

!INCLUDE "./game-data/_game-data-put-to-database.md"