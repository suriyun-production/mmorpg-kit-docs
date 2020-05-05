# How to create Player Character Entity

Before create new player character entity, you should know about `Player Character` game data first.

### Player Character

You can create player character by right click in `Project` tab then select `Create` -> `Create GameData` -> `Item`

![](../images/characters/001.png)

After the player character created. Set its name, its name must be unique unlike other data because we're going to use it as data id (*You can change filename later after you have done the setup*)

![](../images/characters/002.png)

There are following configs

!INCLUDE "./game-data/_game-data-generic-config.md"

*   `Stats` this is character stats. Its `Base Stats` is amount of stats when character level is 1. Its `Stats Increase Each Level` is amount of stats that will be increased when character level > 0.
*   `Attributes` this is character attributes. You have to set [attribute](pages/104-character-stats-and-relates-data?id=attribute ':target=__blank') which you want to increase then its `Base Amount` is amount of attributes when character level is 1. Its `Amount Increase Each Level` is amount of attributes that will be increased when character level > 0.
*   `Resistances` this is character resistances. You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of resistances when character level is 1. Its `Amount Increase Each Level` is amount of resistances that will be increased when character level > 0.
*   `Armors` this is character armors. You have to set [damage element](pages/104-character-stats-and-relates-data?id=damage-element ':target=__blank') which you want to increase then its `Base Amount` is amount of armors when character level is 1. Its `Amount Increase Each Level` is amount of armors that will be increased when character level > 0.
*   `Skill Levels` an skills which character can level-up to use and its start level when create new character.
*   `Right Hand Equip Item` item which character will equipped when create new character.
*   `Left Hand Equip Item` item which character will equipped when create new character.
*   `Armor Items` item which character will equipped when create new character.
*   `Start Map` map which character will spawn when create new character. If this is empty, it will use first map in database.

* * *

If your project is 3D game, you have to drag skinned mesh to empty scene then add `Player Character Entity` component. If your project is 2D, you can create empty game object then add `Player Character Entity` component.

![](https://cdn-images-1.medium.com/max/1600/0*0X6gBEW0c7ZbmSOw)

!INCLUDE "./game-data/_character-entity-generic-config.md"

*   `Character Title` is title which showing in character create scene.
*   `Player Characters` list of `Player Character` data which showing in character create scene which allow players to select. You can assume that this is character classes. **This is important you must have at least 1 `Player Character` in this list**.

![](../images/new_player_character_entity_setting.png)

* * *

!INCLUDE "./game-data/_character-model-selection.md"

### Animation while mount

When add `Player Character Entity` to game object you will see `Character Model Manager`, which will manage animation specific by `Vehicle Type` and `Seat`.

If you want to make them play animation while mount horse correctly, you have to add new character model component for handle that animations. I recommend to create new child transform then add that component for ease of management.

![](../images/1-46-3.png)

 Then back to character entity. In `Character Model Manager` there is `Vehicle Models` add new entry for specific `Vehicle Type` and set `Models For Each Seats` by the new character model that mentioned above.

![](../images/1-46-4.png)

* * *

!INCLUDE "./game-data/_entity-movement-selection.md"

* * *

!INCLUDE "./game-data/_entity-put-to-database.md"