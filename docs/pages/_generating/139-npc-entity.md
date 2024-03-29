# How to create Npc Entity

Before create new npc entity, you should know about `Npc Dialog Graph`, you can create new `Npc Dialog Graph` by right click in `Project` window then select `Create GameData` and select `Npc Dialog Graph` then new graph will be created, double-click on it to see the graph and edit it any time.

![](../images/npcs/001.png)

You can create new dialog by right click in graph then select `Multiplayer ARPG -> Npc Dialog`.

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

* * *

!INCLUDE "./game-data/_entity-put-to-database.md"

* * *

### How to add Npcs directly to the scene

You can add Npcs directly in game scene to make it appear in map scene, to do it you have to prepare `Npc Entity` then drag prepared `Npc Entity` to the map scene.

Then set created npc dialog graph to `Graph`.

![](../images/npcs/005.png)

* * *

### How to add Npcs to Npc Database to spawn to the scene later

To add Npcs via Npc Database you have to prepare `Npc Entity` prefab and `Npc Dialog Graph`.

About `Npc Database`, you can create new `Npc Database` by right click in `Project` window select `Create -> Create GameDatabase -> Npc Database`.

![](../images/npcs/006.png)

Then in `Npc Database` you can set map which you wish to spawn an Npcs then each map you can set Npc's position, rotation, `Npc Entity` and `Graph`.

![](../images/npcs/007.png)

Then set `Npc Database` to `Game Instance -> Npc Database` in init scene.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExOTAyMzEwMjhdfQ==
-->