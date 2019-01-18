* * *

MMORPG KIT — Dev Extension
==========================

This is the way for developers to add more functionality to the project without core codes changes.

Developers can add functionality to some function/method by use attribute `DevExtMethods` with base function/method name as the following example to the function you want to use it to add functionality to base class

Here is the list of functions that support dev extension:

### Support functions for an game entities  
(PlayerCharacterEntity, MonsterCharacterEntity, PlayerCharacterEntity2D, MonsterCharacterEntity2D, NpcEntity, BuildingEntity, HarvestableEntity and so on)

*   void Awake()
*   void Start()
*   void Update()
*   void OnSetOwnerClient()
*   void OnSetup()
*   void SetupNetElements()
*   void OnEnable()
*   void OnDisable()
*   void OnDestroy()
*   void OnNetworkDestroy(DestroyObjectReasons reasons)

* * *

### Support functions for an damageable entities  
(PlayerCharacterEntity, MonsterCharacterEntity, PlayerCharacterEntity2D, MonsterCharacterEntity2D, BuildingEntity, HarvestableEntity and so on)

*   void ReceiveDamage(BaseCharacterEntity attacker, CharacterItem weapon, Dictionary<DamageElement, MinMaxFloat> allDamageAmounts, CharacterBuff debuff, uint hitEffectsId)
*   void ReceivedDamage(BaseCharacterEntity attacker, CombatAmountType combatAmountType, int damage)

* * *

### Support functions for an game network manager  
(LanRpgNetworkManager, MapNetworkManager)

*   void RegisterClientMessages()
*   void RegisterServerMessages()
*   void Init()
*   void OnClientOnlineSceneLoaded()
*   void OnServerOnlineSceneLoaded()

* * *

### Support functions for MMO database  
(SQLiteDatabase, MySQLDatabase)

*   void CreateCharacter(string userId, IPlayerCharacterData characterData)
*   void ReadCharacter(string userId, string id, bool withEquipWeapons, bool withAttributes, bool withSkills, bool withSkillUsages, bool withBuffs, bool withEquipItems, bool withNonEquipItems, bool withHotkeys, bool withQuests)
*   void UpdateCharacter(IPlayerCharacterData character)
*   void DeleteCharacter(string userId, string id)

* * *

### Support functions for Character Stats class

*   CharacterStats Add(CharacterStats a, CharacterStats b)
*   CharacterStats Multiply(CharacterStats a, float multiplier)

* * *

### Support functions for PlayerCharacterSerializationSurrogate

*   void GetObjectData(System.Object obj, SerializationInfo info, StreamingContext context)
*   void SetObjectData(System.Object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector)

* * *

### Support functions for GameInstance

*   void Awake()
*   void LoadedGameData()

* * *

### Support functions for BuildingSaveDataExtension

*   static void CloneTo(IBuildingSaveData from, IBuildingSaveData to)

* * *

### Support functions for PlayerCharacterDataExtension

*   static void CloneTo(IPlayerCharacterData from, IPlayerCharacterData to)
*   static void ValidateCharacterData(IPlayerCharacterData character)
*   static void SetNewPlayerCharacterData(IPlayerCharacterData character, string characterName, int dataId, int entityId)
*   static void AddAllCharacterRelatesDataSurrogate(SurrogateSelector surrogateSelector)