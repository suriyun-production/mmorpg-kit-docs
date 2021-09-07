# Guild War

In the guild war map there is a castle heart, which can be occupied by any guilds when a guild member can destroy it. When a guild can occupy the castle, guild members will receive rewards then the guild have to defend the castle if the guild can defend the castle, castle heart not destroyed. Guild members will receive rewards.

**In the version 1.60 guild battle rewards not implemented yet**

## How to create guild war map
To create guild war map, you have to prepare map scene then place castle heart anywhere, to create castle heart it's like how to create monster entities but you have to use `GuildWarCastleHeart` instread of `MonsterCharacterEntity`. And then when create map info you have to create `GuildWarMapInfo` by right click in `Project` window then choose `Create` -> `Create GameData` -> `Guild War Map Info`

### Guild war map info configs
* **Event time settings** each day has a `IsOn`, if this is `TRUE`, events will run on that day from `StartTime` to `EndTime`
* `BattleDuration` this is duration for defender guild to defend the castle.
* **Announce messages** messages settings for announce guild war's status.
