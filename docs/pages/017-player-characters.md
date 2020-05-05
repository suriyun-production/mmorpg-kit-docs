* * *

MMORPG KIT — How to add Player Characters (Player Entity / Player Character)
============================================================================

### Player Character

You have to create Player character data to define its data such as stats and attributes, each Player character you can set following data:

*   **Entity Prefab**, player character entity which will appear in game
*   **Attributes**, character’s attributes
*   **Stats**, character’s stats
*   **Resistances**, character’s resistances
*   **Skill Levels**, character’s skills with start level
*   **Right Hand Equip Item**, character will equip this item after created immediately
*   **Left Hand Equip Item**, character will equip this item after created immediately
*   **Armor Items**, character will equip this item after created immediately
*   **Start Map**, which map scene you want this character to be spawned at first time after created

You can create new player character by right click in **Project** tab select   
**Create -> Create GameData -> PlayerCharacter**

![](https://cdn-images-1.medium.com/max/1600/0*6e1EvN_jBzOeYGep)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html) folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other player character data) then define its data as you wish

* * *

### Prepare Character Model

Character model will be used as part of **Player Character Entity**/**Monster Character Entity** to present in game scene to let player know where the character is and interact on it

To create new Character Model, I recommend you to do it in empty scene

You can do it by drag you animated mesh which you want to make it as character model into the scene

![](https://cdn-images-1.medium.com/max/1600/0*0X6gBEW0c7ZbmSOw)

Then add **Character Model** component

![](https://cdn-images-1.medium.com/max/1600/0*3H8pIWD4reiE9wO7)

Then set following data:

*   **Animation Type**, type of animation system for this model you can use Animator or Legacy Animation but you have to add Animator or Animation component to use it
*   **Animator Controller**, choose the animation controller for this character model, I recommend you to create it based on my animator controller which located at **/Assets/UnityMultiplayerARPG/Demo/Animations/**its name is **CharacterAnimationController**
*   **Legacy Animation Data,** data for legacy animation system there clip for idle, move, jump, fall, hurt and dead with each fade length
*   **Equipment Containers**, collection of socket name and transform where equipment models will instantiate to
*   **Effect Containers**, collection of socket name and transform where game effects will instantiate to
*   **Skinned Mesh Renderer**, you can set skinned mesh renderer of your character model here, it will use its data to apply bones data to an equipment models to make an equipment models play same animation as character
*   **Default Attack Animations**, this is list of animations which will be played randomly when attack with weapon types which is not set in **Weapon Animations**
*   **Default Skill Cast Animations**, this is list of animations which will be played randomly when cast skill with skills which is not set in **Skill Cast Animations**
*   **Weapon Animations**, this is list of weapon types with animations which will be played randomly when character equip weapon as it defined in this list and attacking
*   **Skill Cast Animations**, this is list of skills with animations which will be played randomly when character is casting skill as it defined in this list

* * *

About each animation you can set following data:

*   **Clip**, the animation clip when attacking enemy
*   **Trigger Duration Rate**, rate of **Clip** length to launch damage entity or melee damage hit target
*   **Extra Duration**, extra duration after played animation clip, may use this to play idle animation before next attack
*   **Audio Clips**, randoming sound effects, it will playing once while attack animation is playing

* * *

![](https://cdn-images-1.medium.com/max/1600/0*p1VC4OlJV1eb8Gqw)

With Fantasy Customizable Pack, you can create new character easily try it!! ([https://www.assetstore.unity3d.com/#!/content/68910?aid=1100lGeN](https://www.assetstore.unity3d.com/#!/content/68910?aid=1100lGeN))

* * *

### Prepare Player Character Entity

Is component which handle player’s character data / character controlling / transforms / collision

To create new **Player Character Entity**, I recommend you to add **Player Character Entity** to prepared **Character Model** or you may add **Player Character Entity** to empty object then setup **Character Model** later

After added **Player Character Entity** then set Rigidbody’s constraints to freeze all rotation

![](https://cdn-images-1.medium.com/max/1600/0*bsCLPoqCS38MC983)

Then adjust Capsule Collider component fit to character

![](https://cdn-images-1.medium.com/max/1600/0*kILIMeK-SrC2rsoa)

Then set an transforms / containers

![](https://cdn-images-1.medium.com/max/1600/0*sN-YHUYMDuz1099a)

*   **Combat Text Transform**, is where Damage/Heal amount texts will instantiates to show amount of Damage/Heal when characters hit damages
*   **Melee Damage Transform**, is where melee damage will instantiates to find hit characters and apply damage
*   **Missile Damage Transform**, is where missile damage will instantiates to travel by direction of this transform
*   **Ui Element Transform**, is where instantiates UI Character Entity object which can use to show character’s name and other stats
*   **Mini Map Element Container**, is where instantiates Mini Map objects, I usually use World Space Canvas with image as marker to show in Mini Map (And also set its layer to MiniMap)

Then set **Character Title** as title which you want it shows in character create UIs

Then set created **Player Character** data to **Player Characters**

![](../images/new_player_character_entity_setting.png)

Then after preparation drag it to **Project** tab to make prefab, You may place the prefab in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other player character entity)
