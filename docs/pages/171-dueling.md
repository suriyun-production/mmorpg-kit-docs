# Dueling

- You can send dueling requests to another player (by press `E` and select a menu)
- It won't have any punishment when a player dies on the default gameplay rule. You change the rule by create your gameplay rule (by create class which extends `BaseGameplayRule`), and implement `void GetPlayerDeadPunishment(DeadPunishmentType type, BasePlayerCharacterEntity player, BaseCharacterEntity attacker, out int decreaseExp, out int decreaseGold, out int decreaseItems, out int attackerPkPoint)` function to add punishment.
- The player who enters the safe zone will lose.
- If someone disconnects, it won't have a result.
- You can change `Dueling Count Down Duration` which is a count down before dueling start and `Dueling Duration` which is a duration before the dueling end, in game instance.
- You can disable this feature in game instance and map info -> `Disable Dueling`