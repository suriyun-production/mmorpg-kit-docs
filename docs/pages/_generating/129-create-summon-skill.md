# How to create Summon Skill

!INCLUDE "./game-data/_skill-create-scriptable-object.md"

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

Then we're going to create `Summon Skill` so set `Skill Type` to `Active` and also set `Skill Attack Type` to `None` because it will not attack other characters when use this skill.

![](../images/skills/003-2.png)

There are following configs for `Summon Skill`

!INCLUDE "./game-data/_skill-generic-config.md"

## Summon Configs

- `Monster Entity` the monster character entity which will be spawned when use this skill.
- `Duration` this is life duration for spawned monster.
- `Amount Each Time` if this is `2` it will spawn `2` monsters when using the skill.
- `Max Stack` if this is `4` it will able to spawn `4` monsters. For example: if `Amount Each Time` is `2`, and `Max Stack` is `4`. Then when using skill first time `2` monsters will be spawned, then the second time it will spawn `2` more monsters so there are `4` spawned monsters and then the third time it will kill `2` monsters to spawn `2` new monsters so it will have `4` spawned monsters.
- `Level` this is level of spawning monsters.

* * *

That's an configs for `Summon Skill`

!INCLUDE "./game-data/_game-data-put-to-database.md"