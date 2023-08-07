# Server Config Files

You can change config by config files, config files will be created automatically if it has not existed, you can see the list of all config keys [here](../pages/027-server-configs.md), there are following files:

## Server Config
*   ./config/serverConfig.json

### Example Content
```
{
  "databaseOptionIndex" : 1,

  "centralAddress" : "localhost",
  "centralPort" : 7000,
  "clusterPort" : 7010,
  "channels" : [
    {
      "id": "1",
      "title": "Channel 1",
      "maxConnections": 500,
    },
    {
      "id": "2",
      "title": "Channel 2",
      "maxConnections": 500,
    }
  ],
  "centralMaxConnections" : 1100,
  "machineAddress" : "yourdomain.com",
  
  "mapSpawnPort" : 6001,
  "spawnExePath" : "./Build.exe",
  "notSpawnInBatchMode" : false,
  "spawnStartPort" : 8000,
  "spawnChannels" : ["1","2"],
  "spawnMaps" : ["Map001","Map002"],
  "spawnAllocateMaps" : [
    {
      "mapName": "Map001",
      "allocateAmount": 10,
    }
  ]

  "databaseManagerAddress" : "localhost",
  "databaseManagerPort" : 6003,

  "useWebSocket": true,
  "webSocketSecure": true,
  "webSocketCertPath": "./localhost.pfx",
  "webSocketCertPassword": "123456"
}
```

* * * 

## SQLite Config


*   ./config/sqliteConfig.json

### Example Content
```
{
  "sqliteDbPath" : "./mmorpgtemplate.sqlite3"
}
```

* * *

## MySQL Config


*   ./config/mySqlConfig.json

### Example Content
```
{
  "mySqlAddress" : "localhost",
  "mySqlPort" : 3306,
  "mySqlUsername" : "root",
  "mySqlPassword" : "",
  "mySqlDbName" : "mmorpgtemplate"
}
```

Config priority from high to low is **Command Line -> Config files -> Component data**
<!--stackedit_data:
eyJoaXN0b3J5IjpbODI3MDUzMzI0XX0=
-->