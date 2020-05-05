* * *

MMORPG KIT — Getting Started (Singleplayer/LAN)
===============================================

### \*\*\* FOR UNITY 2018.2.17 or above, you have to find and remove System.Data.dll file \*\*\*

![](https://cdn-images-1.medium.com/max/1600/1*bEMmwqy8w8lBwIzeS8PiVA.png)

* * *

1.  Before import the package, you should to set **Scripting Runtime Version** to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

Click menu Edit -> Project Settings -> Player

![](https://cdn-images-1.medium.com/max/1600/0*1taaUXKewT6ZOVMc)

Then set **Scripting Runtime Version** to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

![](https://cdn-images-1.medium.com/max/1600/0*AzhYdsPL_d-QrZFo)

If there is no **.NET 4.x** choice in **Api Compatibility Level**, you should try to close the editor and reopen the project again

* * *

2\. Then import the package

3\. Then we’re going to build the test demo

Click menu **File -> Build Settings**

![](https://cdn-images-1.medium.com/max/1600/0*i6_ocWDmzchYMHvv)

Then drag **00Init, 01Home, Map001** scenes to **Build Settings** dialog

![](https://cdn-images-1.medium.com/max/1600/0*lw-3-iQGIs2PPnjp)

Then press **Build** to build it

4\. Now you can try a game, create your first character

![](https://cdn-images-1.medium.com/max/1600/0*O8ega95yhy_WA5TM)

5\. Then start game

![](https://cdn-images-1.medium.com/max/1600/0*f5dB79OpE8_V1MrE)

You can move character by clicking on the ground, you can click on npc to talk, attack monster, pick up an items, rotate camera by right drag

![](https://cdn-images-1.medium.com/max/1600/0*JpjUJPMVLHwYMEpM)

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