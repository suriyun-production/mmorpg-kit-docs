# Server Config Files

From version 1.26 you will able to set configs via config files there are following config files:

*   ./config/serverConfig.json

```
{
  "databaseOptionIndex" : 1,

  "centralAddress" : "localhost",
  "centralPort" : 6000,
  "centralMaxConnections" : 1100,
  "machineAddress" : "yourdomain.com",
  
  "mapSpawnPort" : 6001,
  "mapSpawnMaxConnections" : 2,
  "spawnExePath" : "./Build.exe",
  "notSpawnInBatchMode" : false,
  "spawnStartPort" : 8000,
  "spawnMaps" : ["Map001","Map002"],
  
  "chatPort" : 6002,
  "chatMaxConnections" : 1100
}
```

*   ./config/sqliteConfig.json

```
{
  "sqliteDbPath" : "./mmorpgtemplate.sqlite3"
}
```

*   ./config/mySqlConfig.json

```
{
  "mySqlAddress" : "localhost",
  "mySqlPort" : 3306,
  "mySqlUsername" : "root",
  "mySqlPassword" : "",
  "mySqlDbName" : "mmorpgtemplate"
}
```

You will have to create config folder and config files by yourself next to project folder if you are gonna use config in editor, next to execution folder for built execution file

Config priority from high to low is **Command Line -> Config files -> Component data**