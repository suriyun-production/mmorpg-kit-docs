* * *

MMORPG KIT 1.27 —Move weapon attack animations, skill cast animations to Character Model
========================================================================================

In this version I’ve make changes on animation settings because I think the old version is pretty confuse and hard to setup, now an animations moved to at **Character Model** not an **Weapon Type** / **Skill** / **Monster Character**

I’ve prepared tool for migration, how to use it you may create empty scene then add empty game object then attach **MigrateCharacterModelAnimations** component into it

Then set Weapon Types, Skills, Monster Characters, Player Character Entities that you want to migrate

![](https://cdn-images-1.medium.com/max/1600/1*XhYnRAiY315zzMrow_vknw.png)

Then call Migrate function from context menu

![](https://cdn-images-1.medium.com/max/1600/1*W8GjR-0Woy9I4qhYGmpQJw.png)

Then you may check your Character Models that its data is correctly or not ;)

![](https://cdn-images-1.medium.com/max/1600/1*4ZmcopYQp2KScAgZFOyPYA.png)