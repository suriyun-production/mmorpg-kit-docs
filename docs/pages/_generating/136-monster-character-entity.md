# How to create Monster Character Entity

Before create new monster character entity, you should know about `Player Character` game data first.

### Monster Character

You can create monster character by right click in `Project` tab then select `Create` -> `Create GameData` -> `Item`

![](../images/characters/003.png)

After the monster character created. Set its name, its name must be unique unlike other data because we're going to use it as data id (*You can change filename later after you have done the setup*)

![](../images/characters/004.png)

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

*   `Stats` this is character stats. Its `Base Stats` is amount of stats when character level is 1. Its `Stats Increase Each Level` is amount of stats that will be increased when character level > 0.
*   `Attributes` this is character attributes. You have to set [attribute](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank') which you want to increase then its `Base Amount` is amount of attributes when character level is 1. Its `Amount Increase Each Level` is amount of attributes that will be increased when character level > 0.
*   `Resistances` this is character resistances. You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of resistances when character level is 1. Its `Amount Increase Each Level` is amount of resistances that will be increased when character level > 0.
*   `Armors` this is character armors. You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of armors when character level is 1. Its `Amount Increase Each Level` is amount of armors that will be increased when character level > 0.
*   `Default Level` this will be used to adjust base stats, base attributes, base resistances, base armors and base damage amounts based on entity level. For example: if monster has `Base HP` = `100`, `HP Increase Each Level` = `5` and `Default Level` = `15`. It will adjust `Base HP` to `{Base Hp} - ({HP Increase Each Level} * ({Default Level} - 1))` = `100 - (5 * (15 - 1))` = `30` so monster level 1 will has `30` HP, level 2 will has `35` HP = `30 + (5 * (2 - 1))` = `{Adjusted Base Hp} + ({HP Increase Each Level} * ({Level} - 1))`.
*   `Characteristics` set it to `Normal` then monster will not attack when player nearby, `Aggressive` monster will attack when player nearby and `Assist` monster will attack when other monsters which have the same `Ally Id` has been attacked by the player.
*   `Wander Move Speed` move speed while wandering (Not chasing enemies).
*   `Ally Id` this will work with `Assist` characteristic only, to detect ally.
*   `Visual Range` range to see other characters.
*   `Damage Info` contains info about how skill applies damage to other characters ([See more](pages/018-damage-info ':target=__blank')).
*   `Damage Amount` monster's attack damage amounts.
*   `Random Exp Min` exp that character will gain when kill the monster.
*   `Random Exp Max` exp that character will gain when kill the monster.
*   `Random Gold Min` gold that character will gain when kill the monster.
*   `Random Gold Max` gold that character will gain when kill the monster.
*   `Max Drop Items` max difference of items that monster can drops after killed.
*   `Random Items` items that character will gain when kill the monster.
*   `Item Drop Table` this is like `Random Items` can create by right click in `Project` tab -> `Create` -> `Create GameData` -> `Item Drop Table`.

* * *

If your project is 3D game, you have to drag skinned mesh to empty scene then add `Monster Character Entity` component. If your project is 2D, you can create empty game object then add `Monster Character Entity` component.

![](https://cdn-images-1.medium.com/max/1600/0*0X6gBEW0c7ZbmSOw)

!INCLUDE "./game-data/_character-entity-generic-config.md"

*   `Monster Character` this is game data which contains monster stats, skills, drop info.
*   `Destroy Delay` this is delay before the entity will be destroyed after dead, can use it as to play dead animation before destroy the entity.
*   `Destroy Respawn Delay` this is delay before the entity will be respawned after dead.

![](../images/new_monster_character_entity_setting.png)

* * *

!INCLUDE "./game-data/_character-model-selection.md"

* * *

!INCLUDE "./game-data/_entity-movement-selection.md"

* * *

!INCLUDE "./game-data/_entity-put-to-database.md"