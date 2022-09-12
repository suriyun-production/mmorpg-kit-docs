#  Game Database

It is database for game data, it can store following data:

**Game Entity**

* Player Character Entities
* Monster Character Entities
* Vehicle Entities
* Other Network Objects

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

## Create a Game Database

You can create new Game Database by right click in `Project` window then select  
**Create -> Create GameDatabase -> Game Database**

![](https://cdn-images-1.medium.com/max/1600/1*BpIQ-B1sC0b3A8dEVDyC3g.png)

Then place game data you want to use in your project into the list

Then set your **Game Database** to **Game Instance** component in init scene (For the demo it is `00Init`)

![](https://cdn-images-1.medium.com/max/1600/1*MB-6RRfwa4O5faoMiMRkJg.png)

## Manage Game Data with Game Database Dialog

You can manage game data with game database dialog, which is a dialog which help your to find game data easily (and also have buttons for create, duplicate, delete game data), you can open the dialog by menu `MMORPG KIT -> Game Database`, after you select the menu, it will show a dialog to select your game database, then after selected your game database, it will shows list of all game data and its settings.

## Load Game Data From Resources Folder
I actaully not recommend to do this, but if you don’t want to use **Game Database**, and you just want to create game data and put into **Resources** folder, then leave **Game Database** in **Game Instance** component to be empty.

Then when game start it will load all game data which is located in **Resources** folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE3ODUxNzA4Ml19
-->