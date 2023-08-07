# Instance Dungeon

Players can enter instance dungeon by talks to NPC which has warp dialog with `Warp Portal Type` set to `Enter Instance`, or enetaring Warp Portal with `Type` set to `Enter Instance`.

## Instance Dungoen Starting Workflow

The `map-server (1)` will send request to `central-server (2)` then `central-server (2)` send request to `map-spawn-server (3)` to spawn `new map-server instance (4)`.

After that `new map-server instance (4)` will send its adress and port to `central-server(2)` then `central-server (2)` send address and port to `map-server (1)`

And then, `map-server (1)` send address and port to clients and finally clients enter `new map-server instance (4)`.

## Instance Dungeon Allocation

With allocated map-servers, it will take a shorter time to start a new instance dungeon map-server because its data and scene was loaded and just awaiting someone to tell it to start, its workflow to connect to allocated map-server is:

The `map-server (1)` will send request to `central-server (2)` then if `central-server (2)` found a allocated instance it will send request to tell `allocated map-server instance (3)` to start, then `central-server (2)` send address and port to `map-server (1)`

And then, `map-server (1)` send address and port to clients and finally clients enter `allocated map-server instance (3)`.

ํYou can setup allocating instance by server configs file, like this example:

```
{
    "spawnAllocateMaps": [
        {
            "mapName": "Map001",
            "allocateAmount": 10,
        }
    ]
}
```

It will start `10` instances of map-server which load map named `Map001`.


* * *

While playing in instance-dungeon, character's current-map and position will not being saved, so when player exit a game while playing in instance-dungeon and enter the game later character's current-map and position will be current-map and position before enter instance-dungeon.

Developer can NPC/Warp Portal with `Type` set to `Default` in instance-dungeon as exit