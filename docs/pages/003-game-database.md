* * *

MMORPG KIT — Game Database
==========================

It is database for game data, it can store following data:

*   Attributes
*   Damage Elements
*   Items
*   Skills
*   Npc Dialogs
*   Quests
*   Player Characters
*   Monster Characters
*   Map Infos

You can create new Game Database by right click in **Project** tab then select  
**Create -> Create GameDatabase -> GameDatabase**

![](https://cdn-images-1.medium.com/max/1600/1*BpIQ-B1sC0b3A8dEVDyC3g.png)

Then place game data you want to use in your project into the list

Then set your **Game Database** to **Game Instance** in Init scene

![](https://cdn-images-1.medium.com/max/1600/1*MB-6RRfwa4O5faoMiMRkJg.png)

If you don’t want to use **Game Database** you can create game data into **Resources** folder, then leave **Game Database** in **Game Instance** to be empty

Then when game start it will load all game data which is located in **Resources** folder