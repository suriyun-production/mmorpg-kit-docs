# How to create Buff Skill

!INCLUDE "./game-data/_skill-create-scriptable-object.md"

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

Then we're going to create `Buff Skill` so set `Skill Type` to `Active` and also set `Skill Attack Type` to `None` because it will not attack other characters when use this skill.

![](../images/skills/003-2.png)

There are following configs for `Buff Skill`

!INCLUDE "./game-data/_skill-generic-config.md"

## Buff Configs

- `Skill Buff Type` set it to `Buff To User` if you want this skill applies buff to user character only. `Buff To Nearby Allies` it will applies buff to nearby allies characters (such as party members, pets). `Buff To Nearby Characters` it will applies buff to nearby characters including with an enemies. `Buff To Target` have to select target character before use this skill, it will applies buff to selected character. `Toggle` this is like `Buff To User` but toggleable.
- `Buff Distance` is distance to applies buffs.
- `Buff` applying buff while character learned this skill.

!INCLUDE "./game-data/_buff.md"

* * *

That's an configs for `Buff Skill`

!INCLUDE "./game-data/_game-data-put-to-database.md"