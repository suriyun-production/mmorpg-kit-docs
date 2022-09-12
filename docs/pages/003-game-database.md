* * *

MMORPG KIT — Game Database
==========================

It is database for game data, it can store following data:

**Game Entity**
* Player Character Entities
* Monster Character Entities
* 

**Game Data**

* Attributes
* Currencies
* Damage Elements
* Items
* Item Craft Formulas
* Armor Types
* Weapon Types
* Ammo Types
* Skills
* Guild Skills
* Guild Icons
* Status Effects
* Player Characters
* Monster Characters
* Harvestables
* Map Infos
* Quests
* Factions
* Gachas

You can create new Game Database by right click in `Project` window then select  
**Create -> Create GameDatabase -> GameDatabase**

![](https://cdn-images-1.medium.com/max/1600/1*BpIQ-B1sC0b3A8dEVDyC3g.png)

Then place game data you want to use in your project into the list

Then set your **Game Database** to **Game Instance** in Init scene

![](https://cdn-images-1.medium.com/max/1600/1*MB-6RRfwa4O5faoMiMRkJg.png)

If you don’t want to use **Game Database** you can create game data into **Resources** folder, then leave **Game Database** in **Game Instance** to be empty

Then when game start it will load all game data which is located in **Resources** folder
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA2MDM2MDY5Nl19
-->