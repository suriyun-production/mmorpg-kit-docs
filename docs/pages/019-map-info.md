# How to add Map (Map Info)

To add map you have to prepare map scene with NavMesh for an AI you can learn about how to build NavMesh from [this link](https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html)

In map scenes, you can add Monster Character Entity, Npc Entity, Harvestable Entity, Warp Portal Entity, Monster Spawn Area and Harvestable Spawn Area. No any components required to add to map scenes.

Then you have to create **Map Info**, we will use Map Info to set map scene and setup some settings

* * *

## Map Info

After you have created your map scene you have to create **Map Info** and set map scene to **Map Info**

You can create new map info by right click in `Project` window select   
`Create -> Create GameData -> MapInfo`

![](https://cdn-images-1.medium.com/max/1600/0*7_a38hcHWo38MNM0)

Then set map scene, and other settings

![](https://cdn-images-1.medium.com/max/1600/0*qlyeR8iDp88w6MDT)

**Other Settings**
* **Start Position** - This will be used when new character has been created to set its position, and this map data is the start map
* **Start Rotation** - This will be used when new character has been created to set its rotation, and this map data is the start map
* **Dead Y** - When character fall to this position, character will dead
* **Player Dead Drops Equip Weapons** - When character dead, it will drop equipping weapons or not?
* **Player Dead Drops Equip Items** - When character dead, it will drop equipping items or not?
* **Player Dead Drops Non Equip Items** - When character dead, it will drop non equipping items or not?
* **Exclude Items** - These items will be excluded when monster dropping items
* **Exclude Ammo Types** - Items with these ammo types will be excluded when monster dropping items
* **Exclude Armor Types** - Items with these armor types will be excluded when monster dropping items
* **Exclude Weapon Types** - Items with these weapon types will be excluded when monster dropping items
* **Exclude Junk** - Junk items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeJunk = false;
        public bool ExcludeJunk { get { return excludeJunk; } }

        [Tooltip("Armor items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeArmor = false;
        public bool ExcludeArmor { get { return excludeArmor; } }

        [Tooltip("Shield items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeShield = false;
        public bool ExcludeShield { get { return excludeShield; } }

        [Tooltip("Weapon items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeWeapon = false;
        public bool ExcludeWeapon { get { return excludeWeapon; } }

        [Tooltip("Potion items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludePotion = false;
        public bool ExcludePotion { get { return excludePotion; } }

        [Tooltip("Ammo items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeAmmo = false;
        public bool ExcludeAmmo { get { return excludeAmmo; } }

        [Tooltip("Building items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeBuilding = false;
        public bool ExcludeBuilding { get { return excludeBuilding; } }

        [Tooltip("Pet items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludePet = false;
        public bool ExcludePet { get { return excludePet; } }

        [Tooltip("Socket enhancer items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeSocketEnhancer = false;
        public bool ExcludeSocketEnhancer { get { return excludeSocketEnhancer; } }

        [Tooltip("Mount items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeMount = false;
        public bool ExcludeMount { get { return excludeMount; } }

        [Tooltip("Skill items will be excluded when monster dropping items")]
        [SerializeField]
        private bool excludeSkill = false;
        public bool ExcludeSkill { get { return excludeSkill; } }

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MTM4MDY4NjAsLTE4MTczNTg1NjcsNT
A1NDA3Mjk0XX0=
-->