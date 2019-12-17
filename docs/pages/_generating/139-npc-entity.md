# How to create Npc Entity

Before create new npc entity, you should know about `Npc Dialog Graph`, you can create new `Npc Dialog Graph` by right click in `Project` tab then select `Create GameData` and select `Npc Dialog Graph` then new graph will be created, double-click on it to see the graph and edit it any time.

![](../images/npcs/001.png)

You can create new dialog by right click in graph then select `Multiplayer ARPG` → `Npc Dialog`.

![](../images/npcs/002.png)

![](../images/npcs/003.png)

`Npc Dialog` have following configs:

!INCLUDE "./game-data/_game-data-generic-config.md"

*   `Type` type of this dialog.
*   `Menus` choices to next dialog, you also can set conditions to show the menu.

You can set next dialog by drag from menu to another dialog .

![](../images/npcs/004.png)

Okay, you known about `Npc Dialog Graph` and `Npc Dialog` then next section is about `Npc Entity`.

* * *

If your project is 3D game, you have to drag skinned mesh to empty scene then add `Npc Entity` component. If your project is 2D, you can create empty game object then add `Npc Entity` component.

Then set created `Npc Dialog Graph` to `Graph` field.

![](../images/npcs/005.png)

* * *

!INCLUDE "./game-data/_entity-put-to-database.md"