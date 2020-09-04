# Server Configs

As mentioned architecture, there are different kind of servers and it's have different configs for each server you can set configs in `MMOServerInstance` game object (In `00Init\_MMO`)

![](https://cdn-images-1.medium.com/max/1600/0*RIhI1RLQVGr8ETSt)

#### Central Network Manager important configs

*   `Network Port`, Central server's port. Clients, chat server, map spawn server and map server will connect to central server by this port.
*   `Max Connections`, maximum connections for clients including with other servers.
*   `Min Username Length`, Minimum username length.
*   `Max Username Length`, Maximum username length.
*   `Min Password Length`, Minimum password length.
*   `Min Character Name Length`, Minimum character name length.
*   `Max Character Name Length`, Maximum character name length.

#### Map Spawn Network Manager important configs

*   `Network Port`, Map spawn server's port.
*   `Max Connections`, maximum connections for clients including with other servers.
*   `Central Network Address`, address where central server is running, it will be used by map spawn network manager to connect to server to tell what is machine address to this (map spawn server).
*   `Central Network Port`, port where central server is running.
*   `Machine Address`, public address to this server.
*   `Exe Path`, path to execution file must set it correctly to start map servers.
*   `Not Spawn In Batch Mode`, if this is `TRUE` it will run map server in non batch mode (have graphics and interactable).
*   `Start Port`, Port which will be used to run map server then it will increasing when running next map server.
*   `Spawning Scenes`, This is list of scenes which will be spawned when this server started.
*   `Is Override Exe Path`, if this is `TRUE` it will use value from `Override Exe Path` to execute map server instead of `Exe Path` when running in editor.
*   `Editor Not Spawn In Batch Mode`, if this is TRUE it will run map server in non batch mode (have graphics and interactable) when running in editor.

#### Map Network Manager important configs

*   `Network Port`, Map server's port. It can be set when spawned by map spawn server.
*   `Max Connections`, maximum connections for clients including with other servers.
*   `Central Network Address`, address where central server is running, it will be used by map network manager to connect to server to tell what is machine address to this (map server). It can be set when spawned by map spawn server.
*   `Central Network Port`, port where map server is running. It can be set when spawned by map spawn server.

#### Chat Network Manager important configs

*   `Network Port`, Chat server's port.
*   `Max Connections`, maximum connections for clients including with other servers.
*   `Central Network Address`, address where central server is running, it will be used by chat network manager to connect to server to tell what is machine address to this (chat server).
*   `Central Network Port`, port where central server is running.
*   `Machine Address`, address to this server.

#### Database Network Manager important configs

*   `Database`, current connecting database server.
*   `Database Options`, options of database server to connect.
*   `Network Address`, address where database management server is running, it will be used by database network manager client to connect to server to manage database.
*   `Network Port`, port where database management server is running.