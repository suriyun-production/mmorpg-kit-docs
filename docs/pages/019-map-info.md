# How to add Map (Map Info)

To add map you have to prepare map scene with NavMesh for an AI you can learn about how to build NavMesh from [this link](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html)

In map scenes, you can add Monster Character Entity, Npc Entity, Harvestable Entity, Warp Portal Entity, Monster Spawn Area and Harvestable Spawn Area. No any components required to add to map scenes.

Then you have to create Map Info, we will use Map Info to set map scene and setup some ons (for now there are **Can Pvp** flag only)

* * *

## Map Info

After you have created your map scene you have to create **Map Info** and set map scene to **Map Info**

You can create new map info by right click in `Project` window select   
`Create -> Create GameData -> MapInfo`

![](https://cdn-images-1.medium.com/max/1600/0*7_a38hcHWo38MNM0)

Then set map scene, and other settings

![](https://cdn-images-1.medium.com/max/1600/0*qlyeR8iDp88w6MDT)

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA5NTM4MDc3Miw1MDU0MDcyOTRdfQ==
-->