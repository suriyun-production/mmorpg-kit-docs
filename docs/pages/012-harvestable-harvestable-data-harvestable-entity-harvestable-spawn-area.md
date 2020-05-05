* * *

MMORPG KIT — **Harvestable (Harvestable Data / Harvestable Entity / Harvestable Spawn Area)**
=============================================================================================

### Harvestable

This is game data which used by **Harvestable Entity** to define kind of harvestable, weapons can use to harvest and amount of items will be received when harvest

You can create new harvestable by right click in **Project** tab select   
**Create -> Create GameData -> Harvestable**

![](https://cdn-images-1.medium.com/max/1600/0*u9lwzwlIoFWyeXu5)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other harvestable data) then define its data as you wish

**Harvestable** game data will have harvestable effectivesses config which use to define which item should be use to harvest it, you can set more than 1 item type, you may make Axe, and Stone pick to harvest Stone but received different amount of items

You can set following configs for harvest effectiveness:

*   **Weapon Type**, which weapon type can use to harvest this harvestable
*   **Damage Effectiveness**, this will multiply with weapon’s **Harvest Damage Amount** to calculate damage that will applies to **Harvestable Entity**
*   **Items**, randoming items and amount will be receive when harvesting

* * *

### Harvestable Entity

It is entity which will be spawned by Harvestable Spawn Area, player’s character can attack it to collect items, an available weapons that can use to attack it and items that will be received will be set at Harvestable game data

You can create new harvestable entity by add **Harvestable Entity** component to game object, you can set following data for Harvestable entity:

*   **Combat Text Transform**, we will use this transform’s position to show damage amount when attacked
*   **Max Hp**, Maximum Hp, if this value equals to 0 the building will be destroyed
*   **Harvestable**, Harvestable game data for this harvestable entity
*   **Collider Detection Radius**, This is radius to detect another entity’s collider to avoid spawning this overlap another entities
*   **Respawn Delay**, Delay before respawn after destroyed

Then you add collider to the same game object to make it able to pick and interactive, then you can add model of harvestable entity, it can be Tree, Rock, Grass as you wish

![](https://cdn-images-1.medium.com/max/1600/0*fYDeNbdjNqnb66Uk)

After finished make it as prefab, set its name uniquely (Not like other harvestable entity)

* * *

### Harvestable Spawn Area

This is area to spawn an Harvestable Entities

You can create new harvestable spawn area by add **Harvestable Spawn Area** component to game object, you can set following data for Harvestable spawn area:

*   **Harvestable Entity**, the Harvestable Entity prefab which you want to spawn with this spawn area
*   **Amount**, amount of Harvestable entities that will be spawned
*   **Random Radius**, Range/Radius from spawn area transform’s position to random spawn