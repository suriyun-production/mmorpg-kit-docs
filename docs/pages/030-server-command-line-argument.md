# Server Command Line Arguments

You can change server configs when starting servers by command line arguments, there are following arguments:

#### All Server Configs

*   `-machineAddress`, this will change chat, map spawner and map server's `Machine Address` config
*   `-useWebSocket`, servers will start as websocket server if this is `true`
*   `-webSocketSecure`, if servers start as websocket server, it will start in secure mode if this is `true`
*   `-webSocketCertPath`, path to certification file which its extension is `.pfx`, it is required if `webSocketSecure` is `true`
*   `-webSocketCertPassword`, password for the certification file (`.pfx`).

#### Central Server Configs

*   `-centralAddress`, this will change chat, map spawner and map server's `Central Network Address` config
*   `-centralPort`, this will change central server's `Network Port` config.
*   `-clusterPort`, this will change cluster server's port and change map spawner and map server's `Cluster Server Port` config
*   `-centralMaxConnections`, this will change central server's `Max Connections` config

#### Map Spawn Server Configs

*   `-mapSpawnPort`, this will change map spawn server's `Network Port` config
*   `-spawnExePath`, this will change map spawn server's `Exe Path` config
*   `-notSpawnInBatchMode`, this will change map spawn server's `Not Spawn In Batch Mode` config to `true`
*   `-spawnStartPort`, this will change map spawn server's `Start Port`
*   `-spawnChannels`, this will change map spawn server's `Spawning Channel Ids`, its format is as "1|2|3" (It will spawn maps for channels: `1`, `2` and `3`)
*   `-spawnMaps`, this will change map spawn server's `Spawning Scenes`, its format is as "Map001|Map002|Map003" (It will spawns: `Map001`, `Map002` and `Map003`)

#### Map Server Configs

*   `-mapPort`, this will change map server's `Network Port` config
*   `-mapMaxConnections`, this will change map server's `Max Connections` config
*   `-sceneName`, this will change map server's online scene config

#### Database Server Configs

*   `-databaseManagerAddress`, this will change database server's `Network Address` config
*   `-databaseManagerPort`, this will change database server's `Network Port` config

#### Server Launch Commands

*   `-startCentralServer`, add this command to run central server
*   `-startMapSpawnServer`, add this command to run map spawn server
*   `-startMapServer`, add this command to run map server
*   `-startDatabaseServer`, add this command to run database management sever