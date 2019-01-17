* * *

MMORPG KIT — Gameplay rules / Another settings
==============================================

### Gameplay Rule Settings

With this project you can set some setting via game play rule, developer may create their own gameplay rule by inherit from class **BaseGameplayRule**, I’ve prepare simple gameplay rule settings named **SimpleGameplayRule** which you can set following confing:

*   **Increase Stat Point Each Level**, Amount of stat point will be increased when level up
*   **Increase Skill Point Each Level**, Amount of skill point will be increased when level up
*   **Hungry When Food Lower Than**, Character will hungry when its food amount lower than this value
*   **Thirsty When Water Lower Than**, Character will thirsty when its water amount lower than this value
*   **Stamina Recovery Per Seconds**, Stamina recovery amount per seconds when it lower than max stamina
*   **Stamina Decrease Per Seconds**, Stamina decrease amount per seconds when character is running
*   **Food Decrease Per Seconds**, Food decrease amount per seconds
*   **Water Decrease Per Seconds**, Water decrease amount per seconds
*   **Move Speed Rate While Sprint**, This will multiply with move speed to calculate move speed while character is sprinting
*   **Normal Decrease Weapon Durability**, amount of decreasing weapon durability when attack with normal hit
*   **Normal Decrease Shield Durability**, amount of decreasing shield durability when receive normal hit damage
*   **Normal Decrease Armor Durability**, amount of decreasing armor durability when receive normal hit damage
*   **Blocked Decrease Weapon Durability**, amount of decreasing weapon durability when attack with blocked hit
*   **Blocked Decrease Shield Durability**, amount of decreasing shield durability when blocked damage
*   **Blocked Decrease Armor Durability**, amount of decreasing armor durability when blocked damage
*   **Critical Decrease Weapon Durability**, amount of decreasing weapon durability when attack with critical hit
*   **Critical Decrease Shield Durability**, amount of decreasing shield durability when receive critical hit damage
*   **Critical Decrease Armor Durability**, amount of decreasing armor durability when receive critical hit damage
*   **Miss Decrease Weapon Durability**, amount of decreasing weapon durability when attack is miss
*   **Miss Decrease Shield Durability**, amount of decreasing shield durability when receive miss hit
*   **Miss Decrease Armor Durability**, amount of decreasing armor durability when receive miss hit
*   **Hp Recovery Rate Per Seconds**, This will multiply with max hp to calculate hp recovery per seconds
*   **Mp Recovery Rate Per Seconds**, This will multiply with max mp to calculate mp recovery per seconds
*   **Hp Decrease Rate Per Seconds When Hungry**, This will multiply with max hp to calculate hp decrease amount per seconds when character is hungry
*   **Mp Decrease Rate Per Seconds When Hungry**, This will multiply with max mp to calculate mp decrease amount per seconds when character is hungry
*   **Hp Decrease Rate Per Seconds When Thirsty**, This will multiply with max hp to calculate hp decrease amount per seconds when character is thirsty
*   **Mp Decrease Rate Per Seconds When Thirsty**, This will multiply with max mp to calculate mp decrease amount per seconds when character is thirsty

You can create new simple gameplay rule by right click in **Project** tab select **Create → Create GameplayRule → SimpleGameplayRule**

![](https://cdn-images-1.medium.com/max/1600/0*9g8NAYs8XPKGryui)

Then set it to **GameInstance’s Gameplay Rule** in init scene

![](https://cdn-images-1.medium.com/max/1600/0*crGH3R-2lJOW8HNz)

* * *

### Another Settings

There are another settings you can changes, In **00Init** scene there are game object named **GameInstance** which contains **Game Instance** component which you can set following settings:

*   **Gameplay Rule**, gameplay configs which can be created via menu   
    **Create → Create GameplayRule**, for now there are only 1 kind of gameplay rule is **SimpleGameplayRule**
*   **Network Setting**, network settings which can be created via menu   
    **Create → Create NetworkSetting**
*   **Item Drop Entity Prefab**, prefab of item drop entity, you may create new prefab based on Demo’s prefab which changes some settings such as rigidbody, controller, animation
*   **Warp Portal Entity Prefab**, prefab of warp portal entity, you may create new prefab based on Demo’s prefab which changes some settings such as particles, models, collider
*   **Ui Scene Gameplay Prefab**, this is prefab of gameplay UI, you may create new prefab based on Demo’s prefab which changes appearance of dialogs
*   **Ui Scene Gameplay Mobile Prefab**, this is prefab of gameplay UI, you may create new prefab based on Demo’s prefab which changes appearance of dialogs when running on mobile platform
*   **Owning Character Objects**, this is list of objects that will be instantiated as children of character which you are playing, you may add audio listener prefab here
*   **Owning Character Mini Map Objects**, this is list of objects that will be instantiated as children of character which you are playing at character entity’s **Mini Map Element Container** transform
*   **Monster Character Mini Map Objects**, this is list of objects that will be instantiated as children of monster at monster character entity’s **Mini Map Element Container** transform
*   **Owning Character UI**, this is UI for character which you are playing, you can make this UI to show character’s name / current hp / current mp, it will be instantiated at Player Character Entity’s **Ui Element Transform**
*   **Non Owning Character UI**, this is UI for characters that you are not playing, you can make this UI to show character’s name / current hp / current mp, it will be instantiated at Player Character Entity’s **Ui Element Transform**
*   **Monster Character UI**, this is UI for monsters, you can make this UI to show character’s name / current hp / current mp, it will be instantiated at Monster Character Entity’s **Ui Element Transform**
*   **Npc UI**, you can make this UI to show Npc’s name, it will be instantiated at Npc Entity’s **Ui Element Transform**
*   **Npc Quest Indicator**, this is quest progress indicator, it will be instantiated at Npc Entity’s **Quest Indicator Container**
*   **Default Weapon Item**, default weapon item when character is not equipped any item, for example Unarmed weapon with damage amount 1–1
*   **Default Hit Effects**, effects that instantiates when character received damage
*   **Exp Tree**, Exp tree, max level of character will be size of this array
*   **Game Database**, it is collection of game data if this is empty it will load all game data from **Resources** folder
*   **Warp Portal Database**, it is collection of warp portals each data contains where it placed and where it warp character to, see Warp Portal section about this
*   **Player Tag**, tag of player object we may use it to make game better performance while search for an player objects
*   **Monster Tag**, tag of monster object we may use it to make game better performance while search for an monster objects
*   **Npc Tag**, tag of Npc object we may use it to make game better performance while search for an Npc objects
*   **Item Drop Tag**, tag of item drop object we may use it to make game better performance while search for an item drop objects
*   **Building Tag**, tag of building object we may use it to make game better performance while search for an building objects
*   **Harvestable Tag**, tag of harvestable object we may use it to make game better performance while search for an harvestable objects
*   **Character Layer**, layer of character object we may use it to make game better performance while search for an character objects
*   **Item Drop Layer**, layer of item drop object we may use it to make game better performance while search for an item drop objects
*   **Building Layer**, layer of building object we may use it to make game better performance while search for an building objects
*   **Harvestable Layer**, layer of harvestable object we may use it to make game better performance while search for an harvestable objects
*   **Item Appear Duration**, Duration before item disappear
*   **Pick Up Item Distance**, Distance that character can pick up item
*   **Drop Distance**, Distance that character will drop item randomly around its position
*   **Conversation Distance**, Distance that player character can interact to Npc / Other player character
*   **Build Distance**, Distance that player character can build an buildings
*   **Level Up Effect**, Game effect which will instantiate in game scene when level up
*   **Start Gold**, amount of gold will be added when create character
*   **Start Items**, An items that will be added when create character
*   **Home Scene**, Home scene the scene which manage characters
*   **Min Character Name Length**, minimum character name length
*   **Max Character Name Length**, maximum character name length
*   **Use Mobile In Editor**, force the game running as mobile platform you may set it to **TRUE** to test mobile UIs