# NPC Dialog Message by Keys

You can set keys that you want them to be replaced to messages to NPC dialog title and description, the replacing proceeding by message manager class which is currently has only 1 function is `ReplaceKeysToMessages` which being used to replace keys to messages.

It has a `DefaultMessageManager` (which will being used by default) which can replace following keys:
- Replaces `@characterName` to your character's name.
- Replaces `@level` to your character's level.
- Replaces `@characterClass` to your character class's title.
- Replaces `@exp` to your character's exp.
- Replaces `@nextExp` to your character's next level exp.
- Replaces `@currentHp` to your character's current Hp.
- Replaces `@maxHp` to your character's max Hp.
- Replaces `@currentMp` to your character's current Mp.
- Replaces `@maxMp` to your character's max Mp.
- Replaces `@currentMapName` to your character's current map name.
- Replaces `@currentPosition` to your character's current position.
- Replaces `@respawnMapName` to your character's respawn map name.
- Replaces `@respawnPosition` to your character's respawn position.

You can create a new message manager class by create a new class which extends from `BaseMessageManager` and implement `ReplaceKeysToMessages` function as you wish, then set it to `GameInstance` -> `messageManager` field if you want to use it.