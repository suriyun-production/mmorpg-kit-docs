# Server Configs

As mentioned architecture, there are different kind of servers and it’s have different configs for each server you can set configs in `MMOServerInstance` game object (In `00Init\_MMO`)

![](https://cdn-images-1.medium.com/max/1600/0*RIhI1RLQVGr8ETSt)

#### Central Network Manager important configs

*   `Connect Key`, Key for communicate between server and clients
*   `Network Port`, Central server’s port. Clients, chat server, map spawn server and map server will connect to central server by this port
*   `Max Connections`, maximum connections for clients including with other servers
*   `Min Username Length`, Minimum username length
*   `Max Username Length`, Maximum username length
*   `Min Password Length`, Minimum password length
*   `Min Character Name Length`, Minimum character name length
*   `Max Character Name Length`, Maximum character name length

#### Map Spawn Network Manager important configs

*   `Connect Key`, Key for communicate between server and clients
*   `Network Port`, Map spawn server’s port
*   `Max Connections`, maximum connections for clients including with other servers
*   `Central Connect Key`, key for communicate with central server this key must be same as central’server connect key
*   `Central Network Address`, address where central server is running
*   `Central Network Port`, port where central server is running
*   `Machine Address`, public address to this server
*   `Exe Path`, path to execution file must set it correctly to start map servers
*   `Not Spawn In Batch Mode`, if this is `TRUE` it will run map server in non batch mode (have graphics and interactable)
*   `Start Port`, Port which will be used to run map server then it will increasing when running next map server
*   `Spawning Scenes`, This is list of scenes which will be spawned when this server started
*   `Is Override Exe Path`, if this is `TRUE` it will use value from `Override Exe Path` to execute map server instead of `Exe Path` when running in editor
*   `Editor Not Spawn In Batch Mode`, if this is TRUE it will run map server in non batch mode (have graphics and interactable) when running in editor

#### Map Network Manager important configs

*   `Connect Key`, Key for communicate between server and clients
*   `Max Connections`, maximum connections for clients including with other servers

#### Chat Network Manager important configs

*   `Connect Key`, Key for communicate between server and clients
*   `Network Port`, Chat server’s port
*   `Max Connections`, maximum connections for clients including with other servers
*   `Central Connect Key`, key for communicate with central server this key must be same as central’server connect key
*   `Central Network Address`, address where central server is running
*   `Central Network Port`, port where central server is running
*   `Machine Address`, address to this server