* * *

MMORPG KIT — Getting Started (2D Singleplayer/LAN)
==================================================

Before import the package, you should to set **Scripting Runtime Version**to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

Click menu Edit -> Project Settings -> Player

![](https://cdn-images-1.medium.com/max/1600/0*1taaUXKewT6ZOVMc)

Then set **Scripting Runtime Version** to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

![](https://cdn-images-1.medium.com/max/1600/0*AzhYdsPL_d-QrZFo)

If there is no **.NET 4.x** choice in **Api Compatibility Level**, you should try to close the editor and reopen the project again

Then import the package, we’re going to build the test demo click menu   
**File -> Build Settings**

![](https://cdn-images-1.medium.com/max/1600/0*i6_ocWDmzchYMHvv)

Then drag **00Init\_2D, 01Home\_2D, Map001\_2D** scenes to **Build Settings** dialog

![](https://cdn-images-1.medium.com/max/1600/1*h_3RE05sCSnEj3sjvDy_BQ.png)

Then press **Build** to build it

Now you can try a game, create your first character

![](https://cdn-images-1.medium.com/max/1600/1*A2J5WmDjyWnaxSLle7zL2w.png)

Then start game

![](https://cdn-images-1.medium.com/max/1600/1*ieiP_uBO6gDUOHtN8w7f0w.png)

You can move character by clicking on the ground, you can click on npc to talk, attack monster, pick up an items, rotate camera by right drag

![](https://cdn-images-1.medium.com/max/1600/1*PqVlvLRSX2k-LvJJhsUXvw.png)

*   Press C to toggle Character dialog
*   Press I to toggle Inventory dialog
*   Press T to toggle Skill tree dialog
*   Press Q to toggle Quest list dialog
*   Press P to toggle Party dialog
*   Press G to toggle Guild dialog
*   Press Esc to toggle System menu (including respawn menu when dead)
*   Press F to pick up item
*   Press E to talks to NPCs / Request other players to join party / guild / trade

When you kill monster, your character will gain XP, collect XP to level up

When level up, your character will gain Statpoint and Skillpoint

You can use Statpoint to increase attributes, in this Demo there are:

*   **Strength** increase your character attack damage while equip sword, 2-hand sword and also increase limit inventory weight
*   **Dexterity** increase evasion and accuracy
*   **Vitality** increase max HP
*   **Intelligence** increase max MP