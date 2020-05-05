* * *

MMORPG KIT — How to add Map
===========================

To add map you have to prepare map scene with NavMesh for an AI you can learn about how to build NavMesh from [this link](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html)

In map scenes, you can add Monster Character Entity, Npc Entity, Harvestable Entity, Warp Portal Entity, Monster Spawn Area and Harvestable Spawn Area. No any components required to add to map scenes.

Then you have to create Map Info, we will use Map Info to set map scene and manage some options (for now there are **Can Pvp** flag only)

* * *

#### Map Info

After you have created your map scene you have to create **Map Info** and set map scene to **Map Info**

You can create new map info by right click in **Project** tab select   
**Create -> Create GameData -> MapInfo**

![](https://cdn-images-1.medium.com/max/1600/0*7_a38hcHWo38MNM0)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other map info data) then define its data as you wish

Then set map scene

![](https://cdn-images-1.medium.com/max/1600/0*qlyeR8iDp88w6MDT)