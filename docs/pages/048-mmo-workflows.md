* * *

MMO Workflows
==============

From previous articles, you know that there are **Central Server**, **Chat Server**, **Map Spawn Server** and **Map Server**, in this article I will explains about their workflow.

Before explanation about servers workflow, I want you to know about **MMOServerInstance** and **MMOClientInstance**

* **MMOServerInstance** it is component which handle all server configs and servers execution, it will read config files and commands to set server configs and start server
* **MMOClientInstance** it is component which handle client connection to server events. I use events in home scene to show server selection UIs when not connected to **Central Server**, after connected to **Central Server** will show login UIs. This component also keep account ID and access token after login, account ID and access token will be used when connected to **Map Server** to validate player to confirm that players is playing their character correctly, an functions for client to connect to servers, login, character management also in this component.

### Server Workflow

Next, about servers workflow, **Central Server** when it started it will wait for **Chat Server**, **Map Spawn Server**, **Map Server** and client connections.

When **Chat Server** connected to **Central Server**. Then **Chat Server** will send connection information (Machine address, port, connection key) to **Central Server**. After that **Central Server** will collect the connection information to tell **Map Server** later.

When **Map Spawn Server** connected to **Central Server**. Then **Map Spawn Server** will spawn **Map Server**, maps which will be spawned is set in `spawnMaps` config.

When **Map Server** connected to **Central Server**. Then **Map Server** will send connection information (Machine address, port, connection key) to **Central Server**. After that **Central Server** will send **Chat Server** connection information and other **Map Server**'s connection information to THIS **Map Server**. And in the end **Central Server** will collect the connection information to tell other **Map Server**s later.

When **Map Server** receives **Chat Server** connection information and other **Map Server**s connection information, **Map Server** will make connection to **Chat Server** to handle chat messages which will be sent from client like this:
```
Client -> Map Server -> Chat Server -> Other Map Servers -> Other Clients
```
And collects other **Map Server** connection information. So **Map Server** will have other **Map Server** connection information to tell clients when warp to other maps.

### Client Workflow

At client side, it will connect to **Central Server** to login and manage characters, after selected character to play, client will receive **Map Server** connection information after sent select character message to **Central Server**. Then client will disconnect from **Central Server** then connect to **Map Server** with received connection information.

When warping **Map Server** will send another **Map Server** connection information to client. Then client will disconnect from **Map Server** then connect to another **Map Server** with received connection information.  
 