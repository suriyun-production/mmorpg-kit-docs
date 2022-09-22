# Server list for client / Client Production Build

If you planned to run multiple servers you can add network settings to connect to each server at client side by right click at `Project` tab, then select   
**Create -> Create NetworkSetting -> MmoNetworkSetting**

![](https://cdn-images-1.medium.com/max/1600/0*98043rQP_fuq-nXw)

Then set server name (title), central server’s address and port

![](https://cdn-images-1.medium.com/max/1600/0*4qxd-1eCkl4kVRc0)

Then add it into **MMOClientInstance** game object (In 00Init\_MMO scene)

![](https://cdn-images-1.medium.com/max/1600/0*q9oRrBn8gICMuCGm)

## Client Production Build

Before you build your game for players, you should add `MMO_BUILD` to `Project Settings -> Scripting Define Symbols`, then players won't be able to use your game to create private server. But for offline/LAN games you must delete it because they have to use codes from both the server and client sides.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTA5MDc0OTBdfQ==
-->