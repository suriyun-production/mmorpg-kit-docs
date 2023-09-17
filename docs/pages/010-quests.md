# Quests

With this project you can define any quests as you wish, for each quest you can set following data:

* **Requirement**, requirement to start a quest
* **Random Tasks**, *collection* of task list, the *collection* will be randomed so you can set random tasks, the tasks list will contains tasks, each task you can set its type set it to **Kill Monster** if you want player to kill monster to complete quest and set it to **Collect Item** if you want player to collect item to complete quest
* **Abandon Quests**, Quests which will be abandoned when accept this quest
* **Change Character Class**, if this is set, your character's class will be changed as you set to this when complete the quest
* **Reward Exp**, exp that character will gain when complete the quest
* **Reward Gold**, gold that character will receive when complete the quest
* **Reward Currencies**, currencies that character will receive when complete the quest
* **Reward Items**, items that character will receive when complete the quest
* **Selectable Reward Items**, items that character will receive when complete the quest, but you can select :)
* **Random Reward Items**, items that character will receive when complete the quest, but it is random :)
* **Repeat Type**, how the quest can be repeated, `None` = cannot repeat, `AnyTime` = can repeat anytime, `Daily` = can be repeat daily, `Weekly` = can be repeat weekly

You can set **Quest** in **Npc** dialog to make it available to receive and complete it

You can create new quest by right click in `Project` window select   
`Create -> Create GameData -> Quest`

![](https://cdn-images-1.medium.com/max/1600/0*QAY5mNVzc5Wj6Bi2)

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTEzODgzNjk4MV19
-->