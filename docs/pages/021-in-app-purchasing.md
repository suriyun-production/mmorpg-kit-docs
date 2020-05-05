* * *

MMORPG KIT — In-App Purchasing
==============================

For now, the In-App Purchasing is integrated for MMO mode only (Singleplayer/LAN will not works)

You have to enable **Unity Purchasing** as following steps via link [https://docs.unity3d.com/Manual/UnityIAPSettingUp.html](https://docs.unity3d.com/Manual/UnityIAPSettingUp.html)

If you enabled Unity Purchasing but errors still occur after imports MMORPG KIT package you might have to import these packages

![](https://cdn-images-1.medium.com/max/1600/1*yR_HP2MON14Jk84JJLhv3Q.png)

Then you have to add ENABLE\_PURCHASE to Scripting Define Symbols

![](https://cdn-images-1.medium.com/max/1600/1*XgsriG3Aq-J8xS5udxGJ-w.png)

* * *

#### How to disable In-App Purchasing

If you don’t want to use In-App Purchasing for your game, you can turn off Purchasing in Services tab (for Services tab you can open it from menu Window -> General -> Services)

![](https://cdn-images-1.medium.com/max/1600/1*TXIj6Wdhvp3Wa2gaLQP4iA.png)

Open Services tab then link your app then turn this off

And you may remove button from CanvasGameplay / CanvasGameplay\_Survival / CanvasGameplayMobile / CanvasGameplayMobile\_Survival

![](https://cdn-images-1.medium.com/max/1600/1*vzikaUwY9spZarfHgqzhSw.png)

Drag canvas prefabs that you want to remove cash shop button then find for ButtonCashShop then remove it

* * *

About cash shop there are 2 types of product there are

*   Cash package, it is package for hard currency which will be use to buy an Cash shop item, this can be bought with In-App Purchasing system
*   Cash shop item, it is collection of items / in-game gold which require hard currency to buy it

All products above have to place in Cash Shop Database to make it available to sell

* * *

#### **How to create Cash Shop Database**

You can create new cash package by right click in **Project** tab select   
**Create -> Create CashShop -> CashPackageDatabase** (The menu name should be CashShopDatabase I will change it later)

![](https://cdn-images-1.medium.com/max/1600/1*6PF7I3f4uSmmfrjXIAQyWA.png)

Then set this database to **Cash Shop Database** field in **Game Instance** component in Init scene

![](https://cdn-images-1.medium.com/max/1600/1*bxJT1OTjuwROsx0lE1P1rg.png)

Then you will add an cash packages / cash shop items that you want to this database later

* * *

#### **How to create Cash package**

You can create new cash package by right click in **Project** tab select   
**Create -> Create CashShop -> CashPackage**

![](https://cdn-images-1.medium.com/max/1600/1*6LVDQ5OpHHsyXRmD4eqqTA.png)

Then set variables

*   Title, title/name of this package
*   Description, description for this package
*   Icon, icon for this package
*   External Icon Url, this is Web Url for image which you want to use as icon
*   Cash amount, amount of hard currency player will receive when buy this package

Then add it to **Cash Shop Database**

* * *

#### How to create Cash Shop Item

You can create new cash shop item by right click in **Project** tab select   
**Create -> Create CashShop -> CashShopItem**

![](https://cdn-images-1.medium.com/max/1600/1*RvGtZZgMcWtuBVwiFwi00g.png)

Then set variables

*   Title, title/name of this package
*   Description, description for this package
*   Icon, icon for this package
*   External Icon Url, this is Web Url for image which you want to use as icon
*   Sell Price, amount of hard currency which required to buy this package
*   Receive Gold, amount of gold player will receive when buy this package
*   Receive Items, items player will receive when buy this package

Then add it to **Cash Shop Database**