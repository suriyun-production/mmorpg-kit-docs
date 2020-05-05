# Dev Extension

This is the way for developers to add more functionality to the project without core codes changes.

* * *

About to developing an extensions, you may find where the function `InvokeInstanceDevExtMethods` will be called.

For example: in `BaseCharacterEntity` -> `Awake` there is `this.InvokeInstanceDevExtMethods("Awake");` so you can extend this function by add codes in partial class file, as this example:

```
// PlayerCharacterEntity_Extension001.cs
public partial class PlayerCharacterEntity
{
    [DevExtMethods("Awake")]
    protected void DevExtAwakeDemo()
    {
        // Do something
    }
}
```

*Notice that the key is "Awake" so it is the same when invoke and define the function.*


* * *

Here is the list of functions that support dev extension:

### Support functions for an game entities  
(PlayerCharacterEntity, MonsterCharacterEntity, NpcEntity, BuildingEntity, HarvestableEntity and so on)

- void Awake()
- void OnDestroy()

And in these classes there are following events:

- onStart()
- onEnable()
- onDisable()
- onUpdate()
- onLateUpdate()
- onFixedUpdate()
- onSetup()
- onSetupNetElements()
- onSetOwnerClient()
- onNetworkDestroy(byte reasons)

So you can setup an events in `Awake` extend function.

* * *

### Support functions for an damageable entities  
(PlayerCharacterEntity, MonsterCharacterEntity, BuildingEntity, HarvestableEntity and so on)

- void Awake()
- void OnDestroy()

And in these classes there are following events:

- ReceiveDamage(IGameEntity attacker, CharacterItem weapon, Dictionary<DamageElement, MinMaxFloat> damageAmounts, BaseSkill skill, short skillLevel)
- ReceivedDamage(IGameEntity attacker, CombatAmountType combatAmountType, int damage)

So you can setup an events in `Awake` extend function.

* * *

### Support functions for an game network manager  
(LanRpgNetworkManager, MapNetworkManager)

- void RegisterClientMessages()
- void RegisterServerMessages()
- void Init()
- void OnClientOnlineSceneLoaded()
- void OnServerOnlineSceneLoaded()

* * *

### Support functions for MMO database  
(SQLiteDatabase, MySQLDatabase)

- void CreateCharacter(string userId, IPlayerCharacterData characterData)
- void ReadCharacter(IPlayerCharacterData characterData, bool withEquipWeapons, bool withAttributes, bool withSkills, bool withSkillUsages, bool withBuffs, bool withEquipItems, bool withNonEquipItems, bool withHotkeys, bool withQuests)
- void UpdateCharacter(IPlayerCharacterData character)
- void DeleteCharacter(string userId, string id)

* * *

### Support functions for Character Stats class

- CharacterStats Add(CharacterStats a, CharacterStats b)
- CharacterStats Multiply(CharacterStats a, float multiplier)

* * *

### Support functions for PlayerCharacterSerializationSurrogate

- void GetObjectData(System.Object obj, SerializationInfo info, StreamingContext context)
- void SetObjectData(System.Object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector)

* * *

### Support functions for GameInstance

- void Awake()
- void LoadedGameData()

* * *

### Support functions for BuildingSaveDataExtension

- static void CloneTo(IBuildingSaveData from, IBuildingSaveData to)

* * *

### Support functions for PlayerCharacterDataExtension

- static void CloneTo(IPlayerCharacterData from, IPlayerCharacterData to)
- static void ValidateCharacterData(IPlayerCharacterData character)
- static void SetNewPlayerCharacterData(IPlayerCharacterData character, string characterName, int dataId, int entityId)
- static void AddAllCharacterRelatesDataSurrogate(SurrogateSelector surrogateSelector)
- static void SerializeCharacterData(IPlayerCharacterData characterData, NetDataWriter writer)
- static void DeserializeCharacterData(IPlayerCharacterData characterData, NetDataReader reader)

### Support functions for CentralNetworkManager

- void SerializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataWriter writer)
- void DeserializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataReader reader)