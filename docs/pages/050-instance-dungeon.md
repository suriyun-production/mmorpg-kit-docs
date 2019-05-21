* * *

Instance Dungeon
==============

Players can enter instance dungeon by talks to NPC which has warp dialog with `Warp Portal Type` set to `Enter Instance` or Warp Portal with `Type` set to `Enter Instance`, then the `map-server (1)` will send request to `central-server (2)` then `central-server (2)` send request to `map-spawn-server (3)` to spawn `new map-server instance (4)`, after that `new map-server instance (4)` will send its adress and port to `central-server(2)` then `central-server (2)` send address and port to `map-server (1)`, after that `map-server (1)` send address and port to clients and finally clients enter `new map-server instance (4)`.

While playing in instance-dungeon, character's current-map and position will not be saved, so when player exit a game while playing in instance-dungeon and enter the game later character's current-map and position will be current-map and position before enter instance-dungeon.

Developer can NPC/Warp Portal with `Type` set to `Default` in instance-dungeon as exit