# Character Stats and relates data

## Character Stats

This project have a `CharacterStats` struct which contains:

*   `Hp` as all we know if this value = 0, character will die
*   `Mp` required to use skills
*   `Armor` reduce receiving damage from enemies
*   `Accuracy` add chances to hit enemies
*   `Evasion` add chances to evade enemies
*   `Cri Rate` chances to occurs critical damage
*   `Cri Dmg Rate` when critical damage occurs, damage will multiply with this value
*   `Block Rate` chances to block damage
*   `Block Dmg Rate` when blocking, damage will reduce by this rate
*   `Move Speed` increase character move speed
*   `Atk Speed` increase character attack speed
*   `Weight Limit` increase inventory weight limit
*   `Slot Limit` increase inventory slot limit
*   `Stamina` increase stamina
*   `Food` if this is low, the character will hungry and Hp will decreasing (It's up to how you setup gameplay rule)
*   `Water` if this is low, the character will thirsty and Hp will decreasing (It's up to how you setup gameplay rule)

##### How accuracy, evasion and hit chance calculated

If first character have `Accuracy` = 10

Second character have `Evasion` = 30

Hit chance = 2 * (10 / (10 + 30)) = 0.5

Then second character will receives damage if random result from 0 to 1 <= 0.5

##### Modify accuracy, evasion and hit chance calculation formula

You can create new gameplay rule, based on `BaseGameplayRule` class to make your own hit chance calculation formula in implemented `GetHitChance()` function

##### Critial (Cri Rate and Cri damage rate)

Critical will occuring if random result from 0 to 1 <= Cri Rate

Then applying damage to another character will multiply with Cri damage rate

##### Modify critical calculation formula

You can create new gameplay rule, based on `BaseGameplayRule` class to make your own critical chance and critical damage calculation formula in implemented `GetCriticalChance()` and `GetCriticalDamage()` functions

##### Block (Block Rate and Block damage rate)

Block will occuring if random result from 0 to 1 <= Block Rate

Then applying damage to another character will multiply with Block damage rate

##### Modify block calculation formula

You can create new gameplay rule, based on `BaseGameplayRule` class to make your own block chance and block damage calculation formula in implemented `GetBlockChance()` and `GetBlockDamage()` functions

##### Add customize character stats

You can add more stats to `CharacterStats` struct by create new partial script (`public partial struct CharacterStats`) to add new type of stats, then you should implement dev extension functions to add and multiply amount of stats, you can see following example:

```
// File named DevExtDemo_CharacterStats.cs, you also can find this in demo :p
using UnityEngine;
namespace MultiplayerARPG
{
    public partial struct CharacterStats
    {
        // Add new stats
        public float testStats;
        // Implement dev extension to add amount of stats
        [DevExtMethods("Add")]
        public CharacterStats DevExtDemo_Add(CharacterStats b)
        {
            testStats = testStats + b.testStats;
            return this;
        }
        // Implement dev extension to multiply amount of stats
        [DevExtMethods("Multiply")]
        public CharacterStats DevExtDemo_Multiply(float multiplier)
        {
            testStats = testStats * multiplier;
            return this;
        }
    }
}
```

Only `CharacterStats` might not enough for an RPG games, so it's also have `Attribute`, `Damage Element`, `Damage Amount` and `Damage Resistance`

*   `Attribute` which can be increased by statpoints then it can increase amount of `CharacterStats`
*   `Damage Element` which will be used with `damage amount` and `damage resistance` to calculate receives damages

* * *

## Attribute

This is game data which is part of character stats, its amount can be increased by statpoints, equipped items, buffs. Then it can increase amount of `CharacterStats`, can increase weapon damages (damage effectiveness attributes), and also can be part of requirement for an equipments and levelling-up skills

I have set following `Attribute` in the demo, you can find it and see how I set it, there is:
*   `Str` this is stands for strength, this attribute can increase `Weight Limit` and also can increase `OneHandSword and TwoHandSword` weapon damages (see it in `Effectiveness Attributes`) 
*   `Dex` this is stands for dexterity, this attribute can increase `Accuracy` and `Evasion`
*   `Vit` this is stands for vitality, this attribute can increase `Hp`
*   `Int` this is stands for intelligence, this attribute can increase `Mp`

You can create `Attribute` by right click in `Project` tab, choose `Create -> Create GameData -> Attribute`

Then you have to set this game data to game database to make it available in your game

##### How weapon's damage effectiveness attribute work example - 1

For example `OneHandSword` has `Str` as its effectiveness attribute with effectiveness = `0.1`

Then the character who has `Str` = `30`, attacking with `Sword` which its damage amount is `3 to 6`

Applying damage will calculated to (3 to 6) + (0.1 * 30) = (3 to 6) + (3 to 3) = (6 to 9)

##### How weapon's damage effectiveness attribute work example - 2

For example `Spear` have `Str` as its effectiveness attribute with effectiveness = `0.1` and `Dex` as its effectiveness attribute with effectiveness = `0.05`

Then the character who has `Str` = `30` and `Dex` = `25`, attacking with `Spear` which its damage amount is `3 to 6`

Applying damage will calculated to (3 to 6) + (0.1 * 30) + (0.05 * 25) = (3 to 6) + (3 to 3) + (1.25 to 1.25) = (7.25 to 10.25)

* * *

## Damage Element

This is game data which is part of damage amount and resistance amount that affecting to applying damage amount. You can set its max resistance amount which used for limit amount of resistance that increased by equipments, skills, buffs. And hit effects which you can set effect like burning effect for fire damage element

I have set following `Damage Element` in the demo, you can find it and see how I set it, there is Fire, Ice, Lightning and Poison

You can create `Damage Element` by right click in `Project` tab, choose `Create -> Create GameData -> Damage Element`

Then you have to set this game data to game database to make it available in your game

##### Damage calculation example - 1

For example of how applying damage ammount calculate, There is `Fire` damage element, if the first character has Fire damage amount = `10` attack to second character which has Fire resistance amount = `0.1`

Applying fire damage amount = 10 - (10 * 0.1)

So second character will receives damage amount = 9

##### Damage calculation example - 2

First character have `Fire` damage amount = `10`, `Ice` damage amount = `5`

Second character has only `Fire` resistance amount = `0.1`

Applying fire damage amount = 10 - (10 * 0.1)

Applying ice damage amount = 5

So second character will receives damage amount = 9 + 5 = 14

##### Modify damage calculation formula

You can create new gameplay rule, based on `BaseGameplayRule` class to make your own damage calculation formula in implemented `GetDamageReducedByResistance()` function
