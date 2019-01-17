* * *

MMORPG KIT 1.22 — Changes Note
==============================

Since version 1.22, there are many changes to supports future updates

I have changes workflow for Character/NPC Entities to not instantiates Character Model as its child, but attach it at same Game Object, I decides to do this to support an Root Motion animators that another integrating assets may require it

So you guys should read following guide to migrate character/NPC setting to new version

* * *

### Migrate Player Character Entity

Before start, If you have Character/Monster/NPC that using same Character Models, you should duplicate them to use as different kind of entity

Drag your character model which you like to use as Player Character to scene

![](https://cdn-images-1.medium.com/max/1600/1*qYfa8wXCRcGoRvtEktExNQ.png)

Then add **Player Character Entity** component

![](https://cdn-images-1.medium.com/max/1600/1*AtE0v-hgce4nys44Z_UXlA.png)

Then set Rigidbody’s constraints to freeze all rotation

![](https://cdn-images-1.medium.com/max/1600/1*utn7ec67GU0FuGlEH0WTSA.png)

Then adjust Capsule Collider component fit to character

![](https://cdn-images-1.medium.com/max/1600/1*u-cKqHCUNFvVSbUaddJmEQ.png)

Then set an transforms / containers

![](https://cdn-images-1.medium.com/max/1600/1*wSjVrXvufmBsOhY2LPmOSw.png)

*   **Combat Text Transform**, is where Damage/Heal amount texts will instantiates to show amount of Damage/Heal when characters hit damages
*   **Melee Damage Transform**, is where melee damage will instantiates to find hit characters and apply damage
*   **Missile Damage Transform**, is where missile damage will instantiates to travel by direction of this transform
*   **Ui Element Transform**, is where instantiates UI Character Entity object which can use to show character’s name and other stats
*   **Mini Map Element Container**, is where instantiates Mini Map objects, I usually use World Space Canvas with image as marker to show in Mini Map (And also set its layer to MiniMap)

Then after finished setup press apply to save prefab

![](https://cdn-images-1.medium.com/max/1600/1*-6ez-X_pZphPAsyCO7W8Aw.png)

Then, place it to your **Player Character** game data at **Entity Prefab** field

![](https://cdn-images-1.medium.com/max/1600/1*cON6TJeksquMsCAMUo37UA.png)

Then you have to set **Player Character Controller Prefab** to **Player Character Entity Prefab**

![](https://cdn-images-1.medium.com/max/1600/1*Q1PJPZZGcoh_n84Uwn0NHg.png)

* * *

### Migrate Monster Character Entity

Steps to migrate Monster Character Entity is alike Player Character Entity, just change from Player Character Entity to Monster Character Entity and have to adjusts Nav Mesh Agent

Let’s do it, Drag your character model which you like to use as Monster Character to scene

![](https://cdn-images-1.medium.com/max/1600/1*GfnVd2HTK8VOznB6CzTApw.png)

Add **Monster Character Entity**

![](https://cdn-images-1.medium.com/max/1600/1*cgLhT9n7RdxJLbiqb58Ybg.png)

Adjust Nav Mesh Agent and Capsule Collider fit to the character

![](https://cdn-images-1.medium.com/max/1600/1*5J10dI6ZJNCFAmE_TZlqvg.png)

Then set an transforms / containers

![](https://cdn-images-1.medium.com/max/1600/1*bzQ_JZ1JPXbh0kBxTUdu9A.png)

*   **Combat Text Transform**, is where Damage/Heal amount texts will instantiates to show amount of Damage/Heal when characters hit damages
*   **Melee Damage Transform**, is where melee damage will instantiates to find hit characters and apply damage
*   **Missile Damage Transform**, is where missile damage will instantiates to travel by direction of this transform
*   **Ui Element Transform**, is where instantiates UI Character Entity object which can use to show character’s name and other stats
*   **Mini Map Element Container**, is where instantiates Mini Map objects, I usually use World Space Canvas with image as marker to show in Mini Map (And also set its layer to MiniMap)

Then after finished setup press apply to save prefab

![](https://cdn-images-1.medium.com/max/1600/1*SvqEkBWKEYDooWpPYI5yTw.png)

Then, place it to your **Monster Character** game data at **Entity Prefab** field

![](https://cdn-images-1.medium.com/max/1600/1*rjJrznq93x33cXqxdkEKlg.png)

* * *

### Migrate NPC Entity

Drag your character model which you like to use as NPC to scene

![](https://cdn-images-1.medium.com/max/1600/1*nlGMEk0x4235M26KWI8pgA.png)

Add **Npc Entity** component

![](https://cdn-images-1.medium.com/max/1600/1*2PpD-Y6wg0PavgTKBMqeNg.png)

Then set an transforms / containers

![](https://cdn-images-1.medium.com/max/1600/1*1zs4THcJ-W27JGucLd0APQ.png)

*   **Ui Element Transform**, is where instantiates UI Character Entity object which can use to show character’s name
*   **Quest Indicator Container**, is where instantiates Npc Quest Indicator object which usually showing symbols to let player know states of quest to this NPC

Then add collider and adjust it fit to character

![](https://cdn-images-1.medium.com/max/1600/1*i_8CzUaxULyA8Ck96adSTg.png)

Then after finished setup press apply to save prefab

![](https://cdn-images-1.medium.com/max/1600/1*ITiBhzBmD1fwKhR71tD0CQ.png)

Then you make add it to map scene or set it to NPC database

![](https://cdn-images-1.medium.com/max/1600/1*sTjiivw7mafLtKnUDd-DLw.png)

* * *

### Building Object

The Building Object class will be removed, but I have prepare migrate codes for that, so thing you have to do is set Building Item’s Building Entity

![](https://cdn-images-1.medium.com/max/1600/1*5nlpp1tNqcKD0nC-CeXT4Q.png)