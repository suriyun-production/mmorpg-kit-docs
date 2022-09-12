# Currency

You can create new currency by right click in `Project` window then select `Create` -> `Create GameData` -> `Currency`

Then after finish the setup (Set name, description, icon), add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.

That is it

* * *

Currency can be received by quest so in `Quest` game data is contains `rewardCurrencies` as currency amount when complete setting.

And currency will be used to buy items from NPC, so in `NpcDialog -> sellItems` will contains `sellPrices` as item pricing.

* * *

## UI Component Updates

- Added `uiRewardCurrencies`(`UICurrencyAmounts`) to In `UICharacterQuest`.
- Added `uiSellPrices`(`UICurrencyAmounts`) to In `UINpcSellItem`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY2OTEwOTU4Ml19
-->