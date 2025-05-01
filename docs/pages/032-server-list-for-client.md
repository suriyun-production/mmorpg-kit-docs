# Server list for client / Client Production Build

If you planned to run multiple servers you can add network settings to connect to each server at client side by right click at `Project` tab, then select   
**Create -> Create NetworkSetting -> MmoNetworkSetting**

![](https://cdn-images-1.medium.com/max/1600/0*98043rQP_fuq-nXw)

Then set server name (title), central server’s address and port

![](https://cdn-images-1.medium.com/max/1600/0*4qxd-1eCkl4kVRc0)

Then add it into **MMOClientInstance** game object (In 00Init\_MMO scene)

![](https://cdn-images-1.medium.com/max/1600/0*q9oRrBn8gICMuCGm)

## Server list by text file

You also can make list of server by create a new text file named `serverList.txt` in [StreamingAssets](https://docs.unity3d.com/Manual/StreamingAssets.html) folder.
Content format is: `SERVER_TITLE, ADDRESS, IS_WEBSOCKET_SECURE`, so you can put content like this:

```
Local Server 1, 127.0.0.1:7000
LAN Server 1, 192.168.1.1:7000
WSS Server 1, www.yourdomain.com:7000, true
```


## Client Production Build

Before you build your game for players, use menu: `MMORPG KIT -> Setup For MMO Build` to setup scripting define symbols to exclude server codes from client.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM1MjU2MTMwOCwtMTQ1MDkwNzQ5MF19
-->