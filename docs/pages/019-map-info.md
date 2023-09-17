# How to add Map (Map Info)

To add map you have to prepare map scene with NavMesh for an AI you can learn about how to build NavMesh from [this link](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html)

In map scenes, you can add Monster Character Entity, Npc Entity, Harvestable Entity, Warp Portal Entity, Monster Spawn Area and Harvestable Spawn Area. No any components required to add to map scenes.

Then you have to create **Map Info**, we will use Map Info to set map scene and setup some settings

* * *

## Map Info

After you have created your map scene you have to create **Map Info** and set map scene to **Map Info**

You can create new map info by right click in `Project` window select   
`Create -> Create GameData -> MapInfo`

![](https://cdn-images-1.medium.com/max/1600/0*7_a38hcHWo38MNM0)

Then set map scene, and other settings

![](https://cdn-images-1.medium.com/max/1600/0*qlyeR8iDp88w6MDT)

**Other Settings**
* **Start Position** - This will be used when new character has been created to set its position, and this map data is the start map
* **Start Rotation** - This will be used when new character has been created to set its rotation, and this map data is the start map
* **Enable Pk Rules** - If this is `TRUE`, PK rules will enabled in this map, players whose turn Pk on can attacks each other
* **Disable Dealing** - If this is `TRUE`, dealing feature will be disabled, all players in this map won't be able to deal items to each other
* **Disable Vending** - If this is `TRUE`, vending feature will be disabled, all players won't be able to deal items to each other
* **Disable Dueling** - If this is `TRUE`, dueling feature will be disabled, all players won't be able to deal items to each other
* **Dead Y** - When character fall to this position, character will dead
* **Player Dead Drops Equip Weapons** - When character dead, it will drop equipping weapons or not?
* **Player Dead Drops Equip Items** - When character dead, it will drop equipping items or not?
* **Player Dead Drops Non Equip Items** - When character dead, it will drop non equipping items or not?
* **Exclude Items** - These items will be excluded when monster dropping items
* **Exclude Ammo Types** - Items with these ammo types will be excluded when monster dropping items
* **Exclude Armor Types** - Items with these armor types will be excluded when monster dropping items
* **Exclude Weapon Types** - Items with these weapon types will be excluded when monster dropping items
* **Exclude Junk** - Junk items will be excluded when monster dropping items or not?
* **Exclude Armor** - Armor items will be excluded when monster dropping items or not?
* **Exclude Shield** - Shield items will be excluded when monster dropping items or not?
* **Exclude Weapon** - Weapon items will be excluded when monster dropping items or not?
* **Exclude Potion** - Potion items will be excluded when monster dropping items or not?
* **Exclude Ammo** - Ammo items will be excluded when monster dropping items or not?
* **Exclude Building** - Building items will be excluded when monster dropping items or not?
* **Exclude Pet** - Pet items will be excluded when monster dropping items or not?
* **Exclude Socket Enhancer** - Socket enhancer items will be excluded when monster dropping items
* **Exclude Mount** - Mount items will be excluded when monster dropping items
* **Exclude Skill** - Skill items will be excluded when monster dropping items

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk3NjIxMDY5NiwtMTgxNzM1ODU2Nyw1MD
U0MDcyOTRdfQ==
-->