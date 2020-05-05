* * *

MMORPG KIT — Skills
===================

With this project you can define any skills as you wish, for each skill you can set following data:

*   **Skill Type**, there are `Active` which can attack, buff characters, `Passive` which can buff characters, `Craft Item` which can craft an items
*   **Max Level**, max level of this skill
*   **Move Speed Rate While Using Skill** this value will be multiplied with character move speed while using this skill
*   **Available Weapons**, skill can use when equip weapon in this available weapon types, if this is empty every weapon types is available
*   **Consume Mp**, require Mp to use this skill
*   **Cool Down Duration**, cool down for this skill before use it again next time
*   **Requirement**, requirement to level up this skill
*   **Skill Attack Type**, how this skill attack to target if it’s Normal it will override weapon’s damage info, attribute effectiveness and damage amount
*   **Weapon Damage Inflictions**, damage inflictions based on weapon damage amount
*   **Additional Damage Amounts**, damage amounts that will be increasing while attacking target
*   **Is Debuff**, if this is TRUE damage receiver will receive debuff
*   **Debuff**, debuff which will be applied to attacking characters
*   **Skill Buff Type**, how buff will be applied to characters
*   **Buff**, buff which will be applied to characters
*   **Crafting Item**, which item you want to craft when use this skill
*   **Craft Requirements**, an items an amount that required to craft the item

* * *

For buff skills you can set the following data:

*   **Duration**, duration for applying this buff
*   **Recovery Hp**, recovery Hp within duration
*   **Recovery Mp**, recovery Mp within duration
*   **Increase Stats**, increasing character stats
*   **Increase Attributes**, increasing attributes
*   **Increase Resistances**, increasing resistances
*   **Increase Damages**, increasing damages
*   **Effects**, effects that will play while this buff is applying

* * *

For summoning skills you can set the following data:

*   Monster Entity, create Monster Character Entity which will be spawned when using the skill
*   **Duration**, life duration for spawned monster
*   **Amount Each Time**, if this is 2 it will spawn 2 monsters when using the skill
*   **Max Stack**, this is 4 it will able to spawn 4 monsters. For example: if **Amount Each Time** = 2, and **Max Stack** = 4. Then when using skill first time 2 monsters will be spawned, then a second time it will spawn 2 more monsters so there are 4 spawned monsters and then the third time it will kill 2 monsters to spawn 2 new monsters so there are 4 spawned monsters
*   **Level**, this is level of spawning monster

* * *

You can create new skill by right click in **Project** tab select   
**Create -> Create GameData -> Skill**

![](https://cdn-images-1.medium.com/max/1600/0*n882F_k1l2VRQeiM)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other skill data) then define its data as you wish

* * *

If you want to make character can use created skill you will have to put the skill in **Skill Levels** entry at **Player Character** data

![](https://cdn-images-1.medium.com/max/1600/1*MP0tSD3EvsrPpln9F2AFCA.png)