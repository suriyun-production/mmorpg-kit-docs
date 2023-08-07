# Channel

You can setup channel list to `Central Network Manager` -> `Channels`, or set it in `serverConfig.json` in this format:

```
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
  ]
```

About channel's max connections, it is max connections for sum of all map-servers, for example, if you runs 2 maps: `Map001` and `Map002`, for channel `1`. Then `Map001` have `300` players, and `Map002` have `200` players, then current connections for channel `1` is `500`, if channel `1`'s max connections is `500`, then next player won't be able to enter the game.

If channel's max connections set to `0`, it will use default max connections value from `Central Network Manager` -> `Default Channel Max Connections`, or set it in `serverConfig.json` in this format:

```
  "defaultChannelMaxConnections": 500
```

## Map-Spawn Server, Spawn Maps for Channels

In `Map Spawn Network Manager` it has a `Spawning Channel Ids` setting, you can set list of channels which you want to spawn maps when start a map-spawn server.

If you set `Spawning Channel Ids` to `["1","2"]` and `Spawning Maps` to `[Map001, Map002]` then when a map-spawn server started, it will run `4` map-servers are:

- `Map001` for channel `1`.
- `Map002` for channel `1`.
- `Map001` for channel `2`.
- `Map002` for channel `2`.

## How party EXP and items sharing?

Players in `Map001` channel `1`, won't share anything to players in `Map001` channel `2`, althrough they are in the same party and same map.

## How building being created and loaded?

Building which created in `Map001` channel `1`, won't be created in `Map001` channel `2`.