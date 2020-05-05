# Gameplay Rule settings

With this project you can set some setting via game play rule, developer may create their own gameplay rule by create a class which derived from `BaseGameplayRule`, I've prepare default gameplay rule settings named `DefaultGameplayRule` which you can set following confing:

*   `Increase Stat Point Each Level`, Amount of stat point will be increased when level up
*   `Increase Skill Point Each Level`, Amount of skill point will be increased when level up
*   `Exp Lost Percentage When Death`, Amount of Exp which will lost when death, its calculation formula is:  `Current Exp` -= (`Max Exp` * `Exp Lost Percentage When Death` / `100`)
*   `Stamina Recovery Per Seconds`, Stamina recovery amount per seconds when it's lower than max stamina
*   `Stamina Decrease Per Seconds`, Stamina decrease amount per seconds while character is sprinting
*   `Move Speed Rate While Sprinting`, This will multiply with move speed to calculate move speed while character is sprinting
*   `Move Speed Rate While Crouching`, This will multiply with move speed to calculate move speed while character is crouching
*   `Move Speed Rate While Crawling`, This will multiply with move speed to calculate move speed while character is crawling
*   `Move Speed Rate While Swimming`, This will multiply with move speed to calculate move speed while character is swimming
*   `Hungry When Food Lower Than`, Characters will hungry when their food amount lower than this value
*   `Thirsty When Water Lower Than`, Characters will thirsty when their water amount lower than this value
*   `Food Decrease Per Seconds`, Food decrease amount per seconds
*   `Water Decrease Per Seconds`, Water decrease amount per seconds
*   `Hp Recovery Rate Per Seconds`, This will multiply with max hp to calculate hp recovery per seconds
*   `Mp Recovery Rate Per Seconds`, This will multiply with max mp to calculate mp recovery per seconds
*   `Hp Decrease Rate Per Seconds When Hungry`, This will multiply with max hp to calculate hp decrease amount per seconds when character is hungry
*   `Mp Decrease Rate Per Seconds When Hungry`, This will multiply with max mp to calculate mp decrease amount per seconds when character is hungry
*   `Hp Decrease Rate Per Seconds When Thirsty`, This will multiply with max hp to calculate hp decrease amount per seconds when character is thirsty
*   `Mp Decrease Rate Per Seconds When Thirsty`, This will multiply with max mp to calculate mp decrease amount per seconds when character is thirsty
*   `Normal Decrease Weapon Durability`, Amount of decreasing weapon durability when attack with normal hit
*   `Normal Decrease Shield Durability`, Amount of decreasing shield durability when receive normal hit damage
*   `Normal Decrease Armor Durability`, Amount of decreasing armor durability when receive normal hit damage
*   `Blocked Decrease Weapon Durability`, Amount of decreasing weapon durability when attack with blocked hit
*   `Blocked Decrease Shield Durability`, Amount of decreasing shield durability when blocked damage
*   `Blocked Decrease Armor Durability`, Amount of decreasing armor durability when blocked damage
*   `Critical Decrease Weapon Durability`, Amount of decreasing weapon durability when attack with critical hit
*   `Critical Decrease Shield Durability`, Amount of decreasing shield durability when receive critical hit damage
*   `Critical Decrease Armor Durability`, Amount of decreasing armor durability when receive critical hit damage
*   `Miss Decrease Weapon Durability`, Amount of decreasing weapon durability when attack is miss
*   `Miss Decrease Shield Durability`, Amount of decreasing shield durability when receive miss hit
*   `Miss Decrease Armor Durability`, Amount of decreasing armor durability when receive miss hit
*   `Fall Damage Min Distance`, Character will receive damage 1% of Max Hp, when fall distance = min distance
*   `Fall Damage Max Distance`, Character will receive damage 100% of Max Hp, when fall distance >= max distance

You can create new default gameplay rule by right click in `Project` tab select `Create -> Create GameplayRule -> DefaultGameplayRule`

![](https://cdn-images-1.medium.com/max/1600/0*9g8NAYs8XPKGryui)

Then set it to `GameInstance's Gameplay Rule` in init scene

![](https://cdn-images-1.medium.com/max/1600/0*crGH3R-2lJOW8HNz)
