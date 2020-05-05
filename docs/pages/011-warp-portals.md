* * *

MMORPG KIT — **Warp Portals (Warp Portal Entity / Warp Portal Database)**
=========================================================================

There are 2 ways to add warp portals in the map are add warp portal entity directly in the scene and add it via Warp Portal Database

### Add Warp Portals directly in the scene

You can add warp portals directly in the scene by create empty game object then add **Warp Portal Entity** component

![](https://cdn-images-1.medium.com/max/1600/0*UQ8_m3hIqgvqioRc)

You can set following configs:

*   **Warp Signals**, these game objects will be active when player’s character trigger the warp entity, you may add message like “Press E to teleport” to show when player’s character trigger it
*   **Warp Immediately When Enter**, set this to **TRUE** to make player’s character warp immediately when trigger it
*   **Map Scene**, Scene where you want character warping to, For now it works for MMO mode only
*   **Position**, Position where you want character warping to

Then you have to add collider, you may use **Box Collider** and set **Is Trigger** to **TRUE**

Then add effects / models that you want them represent while playing a game as it child

![](https://cdn-images-1.medium.com/max/1600/0*_Zcm7U1zx9jOvG2F)

Then make it as prefab by drag it to anywhere in **Project** tab, and save scene

### Add Warp Portals via warp portal database

To add warp portals via warp portal database you have to prepare warp portal entity prefab first how to do it is like as explained in add warp portals directly in the scene but we’ll not place warp portal in map scene, after created warp portal prefab place it in **GameInstance’s Warp Portal Entity Prefab** in init scene by drag prefab from **Project** tab into it

![](https://cdn-images-1.medium.com/max/1600/0*HMqCgnzcZw6HF7s1)

Then create warp portal database, You can create new warp portal database by right click in **Project** tab select   
**Create -> Create GameDatabase -> Warp Portal Database**

![](https://cdn-images-1.medium.com/max/1600/0*XeFabQaQX17uzR2f)

Then in **Warp Portal Database** you can set maps you wish to add warp portals then each map you can set warp portal’s position, Scene and Position you want to move player to

![](https://cdn-images-1.medium.com/max/1600/0*fe2FjAUUdF_Kd-ry)

Then set it to **GameInstance’s Warp Portal Database** in init scene

![](https://cdn-images-1.medium.com/max/1600/0*buKq-nPJKwQEOC9t)