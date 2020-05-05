* * *

MMORPG KIT — **Server list for client / Client Production Build**
=================================================================

If you planned to run multiple servers you can add network settings to connect to each server at client side by right click at Project tab select   
**Create -> Create NetworkSetting -> MmoNetworkSetting**

![](https://cdn-images-1.medium.com/max/1600/0*98043rQP_fuq-nXw)

Then set server name (title), central server’s address and port

![](https://cdn-images-1.medium.com/max/1600/0*4qxd-1eCkl4kVRc0)

Then add it into **MMOClientInstance** game object (In 00Init\_MMO scene)

![](https://cdn-images-1.medium.com/max/1600/0*q9oRrBn8gICMuCGm)

#### **Client Production Build**

Before you build the game for players you should remove **MMOServerInstance** game object to avoid players use the game to create private server