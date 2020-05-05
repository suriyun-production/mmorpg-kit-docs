* * *

MMORPG KIT — Quests
===================

With this project you can define any quests as you wish, for each quest you can set following data:

*   **Tasks**, each task you can set its type set it to **Kill Monster** if you want player to kill monster to complete quest and set it to **Collect Item** if you want player to collect item to complete quest
*   **Reward Exp**, exp that character will gain when complete the quest
*   **Reward Gold**, gold that character will gain when complete the quest
*   **Reward Items**, items that character will gain when complete the quest
*   **Can Repeat**, if this is **TRUE**, this quest will able to start repeatedly

You can set **Quest** in **Npc** dialog to make it available to receive and complete it

You can create new quest by right click in **Project** tab select   
**Create -> Create GameData -> Quest**

![](https://cdn-images-1.medium.com/max/1600/0*QAY5mNVzc5Wj6Bi2)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other quest data) then define its data as you wish