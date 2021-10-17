# GM Commands

You can enable user to be GM by change `userLevel` at `userLogin` data to be more than 0

![](https://cdn-images-1.medium.com/max/1600/1*XQZjquv2j-n7HheoLpuS8A.png)

The current version has following GM commands:

* `/help` = Get list of commands.
* `/level {level}` = Set character's level to {level} value.
* `/statpoint {amount}` = Set character's stat point to {amount} value.
* `/skillpoint {amount}` = Set character's skill point to {amount} value.
* `/gold {amount}` = Set character's gold to {amount} value.
* `/add_item {item_id} {amount}` = Add item which its ID is {item_id} (if item ID have spaces, use _ for spaces) x {amount}.
* `/give_gold {name} {amount}` = Increase {amount} of gold to character which its name is {name}.
* `/give_item {name} {item_id} {amount}` = Add item which its ID is {item_id} (if item ID have spaces, use _ for spaces) x {amount} to character which its name is {name}.
* `/gold_rate {rate}` = Set server's gold drop rate to {rate}.
* `/exp_rate {rate}` = Set server's exp rewarding rate to {rate}.
* `/warp {map_id}` = Warp to specific map (if map ID have spaces, use _ for spaces).
* `/warp_character {name} {map_id} {x} {y} {z}` = Warp to specific character to specific map and position (if map ID have spaces, use _ for spaces).
* `/warp_to_character {name}` = Warp to character which its name is {name}.
* `/summon {name}` = Summon character which its name is {name}.
* `/monster {monster_id} {level} {amount}` = Summon monster entity which its ID is {monster_id} (if prefab name have spaces, use _ for spaces), lv. {level}, amount {amount}.
* `/kill {name}` = Kill character which its name is {name}.
* `/suicide` = Kill yourself.
* `/mute {name} {duration}` = Mute character which its name is {name} for {duration} minutes.
* `/unmute {name}` = Unmute character which its name is {name}.
* `/ban {name} {duration}` = Ban character's account which its name is {name} for {duration} days.
* `/unban {name}` = Unban character's account which its name is {name}.
* `/kick {name}` = Kick character which its name is {name}.