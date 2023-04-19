# Custom Database Client

You can create client to connect to external database management service or server which is run outside in Unity project by create a component which implements `IDatabaseClient`.

Then attach that component to any game object and set the game object which has that component attached to `MMOServerInstance` -> `customDatabaseClientSource`, then turn `useCustomDatabaseClient` option on to use it. You also can set `useCustomDatabaseClient` option in `serverConfig.json` too.

![](../images/157/1.png)

![](../images/157/2.png)

This assets has a built-in REST database client and also a REST database service which developed by using .NET7, you can find it [here](https://github.com/insthync/UnityMultiplayerARPG_DatabaseManager)