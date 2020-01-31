# Server Command Line Arguments

You can change server configs when starting servers by command line arguments, there are following arguments:

#### All Server Configs

*   `-machineAddress`, this will change chat, map spawner and map server’s `Machine Address` config

#### Central Server Configs

*   `-centralAddress`, this will change chat, map spawner and map server’s `Central Network Address` config
*   `-centralPort`, this will change central server’s `Network Port` config and change chat, map spawner and map server’s `Central Network Port` config
*   `-centralMaxConnections`, this will change central server’s `Max Connections` config

#### Map Spawn Server Configs

*   `-mapSpawnPort`, this will change map spawn server’s `Network Port` config
*   `-mapSpawnMaxConnections`, this will change map spawn server’s `Max Connections` config
*   `-spawnExePath`, this will change map spawn server’s `Exe Path` config
*   `-notSpawnInBatchMode`, this will change map spawn server’s `Not Spawn In Batch Mode` config to `TRUE`
*   `-spawnStartPort`, this will change map spawn server’s `Start Port`
*   `-spawnMaps`, this will change map spawn server’s `Spawning Scenes`, its format is as "Map001|Map002|Map003" (It will spawns: `Map001`, `Map002` and `Map003`)

#### Map Server Configs

*   `-mapPort`, this will change map server’s `Network Port` config
*   `-mapMaxConnections`, this will change map server’s `Max Connections` config
*   `-sceneName`, this will change map server’s online scene config

#### Chat Server Configs

*   `-chatPort`, this will change chat server’s `Network Port` config
*   `-chatMaxConnections`, this will change chat server’s `Max Connections` config

#### Server Launch Commands

*   `-startCentralServer`, add this command to run central server
*   `-startMapSpawnServer`, add this command to run map spawn server
*   `-startMapServer`, add this command to run map server
*   `-startChatServer`, add this command to run chat server