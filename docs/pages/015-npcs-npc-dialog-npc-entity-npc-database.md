* * *

MMORPG KIT —How to add NPCs (Npc Dialog / Npc Entity / Npc Database)
====================================================================

### Prepare Npc Entity

To prepare Npc Entity you should prepare it in empty scene you can create empty scene via menu File -> New Scene

Then drag your model which you want to use as Npc model into the scene

![](https://cdn-images-1.medium.com/max/1600/0*0X6gBEW0c7ZbmSOw)

Then add **Npc Entity** component

![](https://cdn-images-1.medium.com/max/1600/1*MTXyhRJ5tgOIFZXIqp33bw.png)

After added **Npc Entity** then set an transforms / containers

![](https://cdn-images-1.medium.com/max/1600/0*VYl_k1NrmG_f5jTM)

*   **Ui Element Transform**, is where instantiates UI Character Entity object which can use to show character’s name
*   **Quest Indicator Container**, is where instantiates Npc Quest Indicator object which usually showing symbols to let player know states of quest to this NPC

Then add collider and adjust it fit to character

![](https://cdn-images-1.medium.com/max/1600/0*HQ777cZH7Gzj3Ebo)

Then after preparation drag it to **Project** tab to make prefab

* * *

### Npc Dialog

You have to create Npc dialogs to make Npc able to talk to player, each Npc dialog you can set following data:

*   **Type**, type of this dialog
*   **Menus**, choices to next dialog, you also can set conditions to show the menu

You can create new npc dialog by right click in **Project** tab select   
**Create -> Create GameData -> NpcDialog**

![](https://cdn-images-1.medium.com/max/1600/0*yY9qqcEleu0bZBTx)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other npc dialog data) then define its data as you wish

Types of Npc dialog there are:

*   **Normal**, you can set only title, description and menu to next dialogs. You may set NPC name at title and set what it says in description
*   **Quest**, you can set which quest this dialog will handle then when player is not start quest it will show **Accept** quest and **Decline** quest menu, if player started quest and quest tasks are completed it will show **Complete** quest menu, if not completed will show **Abandon** quest menu
*   **Shop**, you can set selling items here with an items you want to sell and its price
*   **Craft Item**, you can set crafing item data here with item you want to allow player to craft with its requires materials

* * *

### Add NPCs directly in the scene

You can add NPCs directly in game scene to make it appear in game scene, to do it you have to prepare **Npc Entity** then bring prepared **Npc Entity** into the scene

Then set created npc dialog to **Start Dialog**, this dialog will be first dialog when talking to this Npc

![](https://cdn-images-1.medium.com/max/1600/0*wShC_s18P2J7WMP3)

* * *

### Add NPCs via Npc Database

To add NPCs via Npc Database you have to prepare Npc Entity prefab / Npc Dialogs

About Npc Database, you can create new Npc Database by right click in **Project** tab select **Create -> Create GameDatabase -> Npc Database**

![](https://cdn-images-1.medium.com/max/1600/0*yc8ktAVxDGN34X9V)

Then in **Npc Database** you can set maps you wish to add NPCs then each map you can set NPC’s position, rotation, start dialog and **Npc Entity**

![](https://cdn-images-1.medium.com/max/1600/0*y05jw8zyGp7dL2c5)

Then set it to **GameInstance’s Npc Database** in init scene

![](https://cdn-images-1.medium.com/max/1600/0*jhMTQtmsxsLq5yf1)