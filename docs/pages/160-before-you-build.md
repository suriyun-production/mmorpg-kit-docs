# Before you build

Before you build your game, you may forget to set proper scripting define symbols, if you forget it and build it, something will not functional.

So you have to setup proper scripting define symbols for difference build by click on following menu:

- `MMORPG KIT -> Setup For Offline-Lan Build` - For offline-LAN games.
- `MMORPG KIT -> Setup For MMO Build` - For MMO client, it will exclude all server codes, so your customers won't be able to use it to run their private servers.
- `MMORPG KIT -> Setup For MMO with Server Codes Build` - For testing MMO server. If your target build (in Unity's `Build Settings`) is server, you don't have to do this.

![](../images/setup-offline-lan.png)