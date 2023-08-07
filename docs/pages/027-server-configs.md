# Server Configs

As mentioned architecture, there are different kind of servers and it's have different configs for each server you can set configs in `MMOServerInstance` game object (In `00Init\_MMO`)

![](https://cdn-images-1.medium.com/max/1600/0*RIhI1RLQVGr8ETSt)

## Central Network Manager Configs

*   `Network Port` (Args Key: `-centralPort`, Config File `serverConfig.json`, Config File Key: `centralPort`, Type: `Integer`), Central server's port, clients will connect by this port to register, login and manage characters.
*   `Cluster Server Port` (Args Key: `-clusterPort`, Config File `serverConfig.json`, Config File Key: `clusterPort`, Type: `Integer`), Cluster server's port, cluster server is a server that will start along with central server to handle app-servers (map-server, map-spawn-server) connections and listing, broadcasting chat messages, player's character updating from any map-server to other map-servers.
*   `Max Connections` (Args Key: `-centralMaxConnections`, Config File `serverConfig.json`, Config File Key: `centralMaxConnections`, Type: `Integer`), Maximum client connections.
*   `Map Spawn Millseconds Timeout` (Args Key: `-mapSpawnMillisecondsTimeout`, Config File `serverConfig.json`, Config File Key: `mapSpawnMillisecondsTimeout`, Type: `Integer`), a duration to wait for map-server to be spawned, set it to `0` to not have a timeout, if a timeout occurs it will not move players to the instance map-server. Time unit is milliseconds, so set it to 5000, if you want a 5 seconds duration.
*   `Default Channel Max Connections` (Args Key: `-defaultChannelMaxConnections`, Config File `serverConfig.json`, Config File Key: `defaultChannelMaxConnections`, Type: `Integer`), a default maximum client connections to each channels, if channel's max connections not being set (or set to `<= 0`) it will use this value as its max connections.
*   `Channels` (Config File `serverConfig.json`, Config File Key: `channels`, Type: `{"id": String, "title": String, "maxConnections": Integer}[]`), a list of channels each have `Id`, `Title`, and `Max Connections` settings, if `Max Connections` is `<= 0`, it will use `Default Channel Max Connections` as its max connections.
*   `Disable Default Login`, turn it on to disable default login system, so user won't be able to register/login by username and password.
*   `Min Username Length`, Minimum username length.
*   `Max Username Length`, Maximum username length.
*   `Min Password Length`, Minimum password length.
*   `Min Character Name Length`, Minimum character name length.
*   `Max Character Name Length`, Maximum character name length.
*   `Require Email`, turn it on if it require user's email for registration.
*   `Require Email Verification`, turn it on if it require user's email verification, but you have to develop email verification part by yourself.

## Map Spawn Network Manager Configs

*   `Network Port` (Args Key: `-mapSpawnPort`, Config File `serverConfig.json`, Config File Key: `mapSpawnPort`, Type: `Integer`), Map spawn server's port.
*   `Cluster Network Address` (Args Key: `-centralAddress`, Config File `serverConfig.json`, Config File Key: `centralAddress`, Type: `String`), address where cluster server is running, it will be used by map spawn network manager to connect to server to tell what is machine address to this (map spawn server).
*   `Cluster Network Port` (Args Key: `-clusterPort`, Config File `serverConfig.json`, Config File Key: `clusterPort`, Type: `Integer`), port where cluster server is running.
*   `Machine Address` (Args Key: `-machineAddress`, Config File `serverConfig.json`, Config File Key: `machineAddress`, Type: `String`), public address to this server.
*   `Exe Path` (Args Key: `-spawnExePath`, Config File `serverConfig.json`, Config File Key: `spawnExePath`, Type: `String`), path to execution file (`.exe` file in Windows, `.app` in Mac) must set it correctly to start map servers.
*   `Not Spawn In Batch Mode` (Args Key: `-notSpawnInBatchMode`, Config File `serverConfig.json`, Config File Key: `notSpawnInBatchMode`, Type: `Boolean`), if this is `TRUE` it will run map server in non batch mode (have graphics and interactable).
*   `Start Port` (Args Key: `-spawnStartPort`, Config File `serverConfig.json`, Config File Key: `spawnStartPort`, Type: `Integer`), Port which will be used to run map server then it will increasing when running next map server.
*   `Spawning Channel Ids` (Args Key: `-spawnChannels`, Config File `serverConfig.json`, Config File Key: `spawnChannels`, Type: `String[]`), this is list of channel IDs which will be used to spawn map-servers when the map-spawn server started.
*   `Spawning Maps` (Args Key: `-spawnMaps`, Config File `serverConfig.json`, Config File Key: `spawnMaps`, Type: `String[]`), This is list of maps which will be spawned when the map-spawn server started.
*   `Spawning Allocate Maps` (Config File `serverConfig.json`, Config File Key: `spawnAllocateMaps`, Type: `{"mapName": String, "allocateAmount": Integer}[]`), This is list of allocating instance maps which will be spawned when the map-spawn server started, `allocateAmount` is a spawn amount.
*   `Is Override Exe Path`, if this is turned on, it will use value from `Override Exe Path` to execute map server instead of `Exe Path` when running in editor.
*   `Editor Not Spawn In Batch Mode`, if this is TRUE it will run map server in non batch mode (have graphics and interactable) when running in editor.

## Database Network Manager Configs

*   `Database`, current connecting database server.
*   `Database Options`, options of database server to connect.
*   `Network Address`, address where database management server is running, it will be used by database network manager client to connect to server to manage database.
*   `Network Port`, port where database management server is running.

## Custom Database Client Configs

*   `Use Custom Database Client`, if you turn this on it will use custom database client. You can setup database client by create a component which implements `IDatabaseClient`, then implement it, then attach that component to any game object and set the game object which has that component attached to `MMO Server Instance` -> `Custom Database Client Source`. Now it has only 1 built-in custom database client is `RestDatabaseClient`.

## Map Network Manager Configs

*   `Network Port` (Args Key: `-mapPort`, Config File `serverConfig.json`, Config File Key: `mapPort`, Type: `Integer`), Map server's port.
*   `Max Connections` (Args Key: `-mapMaxConnections`, Config File `serverConfig.json`, Config File Key: `mapMaxConnections`, Type: `Integer`), maximum connections for clients including with other servers.
*   `Cluster Network Address` (Args Key: `-centralAddress`, Config File `serverConfig.json`, Config File Key: `centralAddress`, Type: `String`), address where cluster server is running, it will be used by map network manager to connect to server to tell what is machine address to this (map server).
*   `Cluster Network Port` (Args Key: `-clusterPort`, Config File `serverConfig.json`, Config File Key: `clusterPort`, Type: `Integer`), port where cluster server is running.

* * *

## Rest Database Client Configs

*   `Api Url` (Config File `serverConfig.json`, Config File Key: `dbApiUrl`, Type: `String`), this is config which will be used by `RestDatabaseClient` component, this is URL to REST database service, if you runs REST database service at machine which have public IP is `128.199.78.31` and running on port `5757`, set this to `http://128.199.78.31:5757`
*   `Secret Key` (Config File `serverConfig.json`, Config File Key: `dbSecretKey`, Type: `String`), this is config which will be used by `RestDatabaseClient` component, secret key which will be validated at REST database service to allow database client to use functions (It will set secret as a `Bearer` token).

* * *

## MySQL Database Configs

*   `Address` (Config File `mySqlConfig.json`, Config File Key: `mySqlAddress`)
*   `Port` (Config File `mySqlConfig.json`, Config File Key: `mySqlPort`)
*   `Username` (Config File `mySqlConfig.json`, Config File Key: `mySqlUsername`)
*   `Password` (Config File `mySqlConfig.json`, Config File Key: `mySqlPassword`)
*   `Db Name` (Config File `mySqlConfig.json`, Config File Key: `mySqlDbName`)
*   `Connection String` (Config File `mySqlConfig.json`, Config File Key: `mySqlConnectionString`)

It will create a connection string by `Address`, `Port`, `Username`, `Password`, and `Db Name` (Example: `Server=127.0.0.1;Port=3306;Uid=root;Pwd="Password";Database=mmorpg_kit;SSL Mode=None;`), But if you set `Connection String`, it won't use generated connection string, it will use value from `Connection String`.

* * *

## SQLite Database Configs

*   `Db Path` (Config File `sqliteConfig.json`, Config File Key: `sqliteDbPath`)