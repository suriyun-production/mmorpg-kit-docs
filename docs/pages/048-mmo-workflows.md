# MMO Workflows

From previous articles, you know that there are **Central Server**, **Cluster Server**, **Map Spawn Server** and **Map Server**, in this article I will explains about their workflow.

Before explanation about servers workflow, I want you to know about **MMOServerInstance** and **MMOClientInstance**

* **MMOServerInstance** it is component which handle all server configs and servers execution, it will read config files and commands to set server configs and start server
* **MMOClientInstance** it is component which handle client connection to server events. I use events in home scene to show server selection UIs when not connected to **Central Server**, after connected to **Central Server** will show login UIs. This component also keep account ID and access token after login, account ID and access token will be used when connected to **Map Server** to validate player to confirm that players is playing their character correctly, an functions for client to connect to servers, login, character management also in this component.

### Server Workflow

Next, about servers workflow, When **Central Server** is started, it will start **Cluster Server** along with it, then it will wait for **Map Spawn Server**, **Map Server** and client connections.

When **Map Spawn Server** connected to **Cluster Server**. Then **Map Spawn Server** will spawn **Map Server**, maps which will be spawned is set in `spawnMaps` config.

When **Map Server** started, it will connects to **Cluster Server**. Then after connected, **Map Server** will send connection information (Machine address, port, connection key) to **Cluster Server**. After that **Cluster Server** will send other **Map Server**'s connection information to THIS **Map Server**. And finally, **Cluster Server** will collect the connection information to tell other **Map Server**s later.

```
Map Server X (map data) -> Cluster Server (broadcast: map data) -> Other Map Servers
                           Cluster Server (send: other map servers) -> Map Server X
```

#### About Machine Address

The machine address is for map-spawn-server and map-server, but if the map-server is spawned by map-spawn-server, map-server's machine address will be the value which receiving from map-spawn-server.

If you can read codes, you can find which configs will be applied to which server in `MMOServerInstance`, you may try find `ARG_MACHINE_ADDRESS` and see where it was applied.

* * *

### Client Workflow

At client side, it will connect to **Central Server** to login and manage characters, after selected character to play, client will receive **Map Server** connection information after sent select character message to **Central Server**. Then client will disconnect from **Central Server** then connect to **Map Server** with received connection information.

When warping **Map Server** will send another **Map Server** connection information to client. Then client will disconnect from **Map Server** then connect to another **Map Server** with received connection information.  
 