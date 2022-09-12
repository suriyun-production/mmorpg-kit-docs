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

        #region Character Death Rules
        [Category("Character Death Rules")]
        [Tooltip("When character fall to this position, character will dead")]
        [SerializeField]
        private float deadY = -100f;
        public virtual float DeadY { get { return deadY; } }

        [Tooltip("When character dead, it will drop equipping weapons or not?")]
        [SerializeField]
        private bool playerDeadDropsEquipWeapons = false;
        public virtual bool PlayerDeadDropsEquipWeapons { get { return playerDeadDropsEquipWeapons; } }

        [Tooltip("When character dead, it will drop equipping items or not?")]
        [SerializeField]
        private bool playerDeadDropsEquipItems = false;
        public virtual bool PlayerDeadDropsEquipItems { get { return playerDeadDropsEquipItems; } }

        [Tooltip("When character dead, it will drop non equipping items or not?")]
        [SerializeField]
        private bool playerDeadDropsNonEquipItems = false;
        public virtual bool PlayerDeadDropsNonEquipItems { get { return playerDeadDropsNonEquipItems; } }
        #endregion

        #region Item Drop Rules
        [Category("Item Drop Rules")]
        [SerializeField]
        private List<BaseItem> excludeItems = new List<BaseItem>();
        public List<BaseItem> ExcludeItems { get { return excludeItems; } }

        [SerializeField]
        private List<AmmoType> excludeAmmoTypes = new List<AmmoType>();
        public List<AmmoType> ExcludeAmmoTypes { get { return excludeAmmoTypes; } }

        [SerializeField]
        private List<ArmorType> excludeArmorTypes = new List<ArmorType>();
        public List<ArmorType> ExcludeArmorTypes { get { return excludeArmorTypes; } }

        [SerializeField]
        private List<WeaponType> excludeWeaponTypes = new List<WeaponType>();
        public List<WeaponType> ExcludeWeaponTypes { get { return excludeWeaponTypes; } }

        [SerializeField]
        private bool excludeJunk = false;
        public bool ExcludeJunk { get { return excludeJunk; } }

        [SerializeField]
        private bool excludeArmor = false;
        public bool ExcludeArmor { get { return excludeArmor; } }

        [SerializeField]
        private bool excludeShield = false;
        public bool ExcludeShield { get { return excludeShield; } }

        [SerializeField]
        private bool excludeWeapon = false;
        public bool ExcludeWeapon { get { return excludeWeapon; } }

        [SerializeField]
        private bool excludePotion = false;
        public bool ExcludePotion { get { return excludePotion; } }

        [SerializeField]
        private bool excludeAmmo = false;
        public bool ExcludeAmmo { get { return excludeAmmo; } }

        [SerializeField]
        private bool excludeBuilding = false;
        public bool ExcludeBuilding { get { return excludeBuilding; } }

        [SerializeField]
        private bool excludePet = false;
        public bool ExcludePet { get { return excludePet; } }

        [SerializeField]
        private bool excludeSocketEnhancer = false;
        public bool ExcludeSocketEnhancer { get { return excludeSocketEnhancer; } }

        [SerializeField]
        private bool excludeMount = false;
        public bool ExcludeMount { get { return excludeMount; } }

        [SerializeField]
        private bool excludeSkill = false;
        public bool ExcludeSkill { get { return excludeSkill; } }

After finish the setup, add it to your [game database](pages/103-game-database.md). If you're using `Resources Folder Game Database` as your [game database](pages/103-game-database.md), you must put it in `Resources` folder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ5MTUyOTcwLDUwNTQwNzI5NF19
-->