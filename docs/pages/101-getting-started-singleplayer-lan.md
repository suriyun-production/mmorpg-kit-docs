# Getting Started (Singleplay/LAN)

## Create a new project

When create a new project, select `Universal 3D`

![](../images/101/2025/001.png)

## Importing

Import a package by package manager from `Window` -> `Package Manager` menu

![](../images/101/2025/002.png)

Then in Package Manager window, select `My Assets` and find `MMORPG KIT`, download and import it

![](../images/101/2025/003.png)

Then it will show project settings replacing warning dialog, select `Import`

![](../images/101/2025/004.png)

Then it will show package installing warning dialog, select `Install/Upgrade`

![](../images/101/2025/005.png)

Then it will show package content importing dialog, select `Next`

![](../images/101/2025/006.png)

And then it will show project settings importing dialog, select `Import`

![](../images/101/2025/007.png)

## Building

Before you build, you should setup scripting define symbols by use menu: `MMORPG KIT -> Setup For Offline-Lan Build` to make sure that the build will work properly.

![](../images/setup-offline-lan.png)

Next, make sure `Scenes in build` are correct, Open up the `Build Setting...` dialog from menu `File -> Build Settings...` 

![](../images/101/004.png)

To test the demo, scene named `00Init` must be the first that enabled in the list, it's also have to add and enable `01Home`, `Map01` and `Map02` scenes

![](../images/101/005.png)

* * *

Then you can build the game to test Multiplayer gameplay, by press on `Build` button to build it

![](../images/101/006.png)


* * *

## Testing

Open up first client and host the game to let other to join later

Select `Multiplayer` and `Host`

![](../images/101/007.png)

![](../images/101/008.png)

Then create first character and start game

![](../images/101/009.png)

* * *

Then open up another client and join the game that hosted

Select `Multiplayer` then `Find Game` then select the host which you are going to join the game and press on `Join` button

![](../images/101/010.png)

![](../images/101/011.png)

Then create second character and start game

![](../images/101/012.png)

* * *

In the demo you can:

*   Press C to toggle Character dialog
*   Press I to toggle Inventory dialog
*   Press T to toggle Skill tree dialog
*   Press Q to toggle Quest list dialog
*   Press P to toggle Party dialog
*   Press G to toggle Guild dialog
*   Press Esc to toggle System menu (including respawn menu when dead)
*   Press F to pick up item
*   Press E to talks to NPCs / Request other players to join party / guild / trade
*   Press V to attack nearby characters
*   Press Tab to select target character to attack
*   Click on hotkeys to assign hotkeys
*   Press 1-0 keys to use item or skill that assigned to hotkey
*   Press X to exit riding vehicle (Alpaca)

When you kill monster, your character will gain XP, collect XP to level up. When level up, your character will gain stat point and skill point. You can use stat point to increase attributes, in the demo there are:

*   `Strength` increase your character attack damage while equip sword, 2-hand sword and also increase limit inventory weight
*   `Dexterity` increase evasion and accuracy
*   `Vitality` increase max HP
*   `Intelligence` increase max MP

And you Skill point to increase skill level
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMyNDUxNDk5Nl19
-->