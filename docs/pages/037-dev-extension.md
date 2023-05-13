# Dev Extension

This is the way for developers to add more functionality to the project without core codes changes.

* * *

About to developing an extensions, you may find where the function `InvokeInstanceDevExtMethods` will be called. (By searching in the IDE)

For example: in `BaseCharacterEntity -> Awake` there is `this.InvokeInstanceDevExtMethods("Awake");` so you can extend this function by add codes in partial class file, as this example:

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

Here is the list of implemented dev extension functions:

## Implemented dev extension functions and an events for game entities
(PlayerCharacterEntity, MonsterCharacterEntity, NpcEntity, BuildingEntity, HarvestableEntity and so on)

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()

**Events**
- onStart()
- onEnable()
- onDisable()
- onUpdate()
- onLateUpdate()
- onSetup()
- onSetupNetElements()
- onSetOwnerClient()
- onIsUpdateEntityComponentsChanged(bool isUpdate)
- onNetworkDestroy(byte reasons)

You can add an events in `Awake` and remove in `OnDestroy` by create extension like this:

```
// PlayerCharacterEntity_Extension001.cs
public partial class PlayerCharacterEntity
{
    [DevExtMethods("Awake")]
    protected void DevExtAwakeDemo()
    {
        onStart += OnStart_DevExt;
    }
    [DevExtMethods("OnDestroy")]
    protected void DevExtOnDestroyDemo()
    {
        onStart -= OnStart_DevExt;
    }
    private void OnStart_DevExt()
    {
        // Do something
    }
}
```

* * *

## Support functions for an damageable entities
(PlayerCharacterEntity, MonsterCharacterEntity, BuildingEntity, HarvestableEntity and so on)

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()

**Events**
- ReceiveDamage(Vector3 fromPosition, IGameEntity attacker, Dictionary<DamageElement, MinMaxFloat> damageAmounts, CharacterItem weapon, BaseSkill skill, short skillLevel)
- ReceivedDamage(Vector3 fromPosition, IGameEntity attacker, CombatAmountType combatAmountType, int totalDamage, CharacterItem weapon, BaseSkill skill, short skillLevel)

*You can add an events in `Awake` and remove in `OnDestroy`*

* * *

## Support functions for game network manager components
(LanRpgNetworkManager, MapNetworkManager)

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void OnPeerConnected(long connectionId)
- void InitPrefabs()
- void OnClientOnlineSceneLoaded()
- void OnServerOnlineSceneLoaded()
- void UpdateReadyToInstantiateObjectsStates()

**Implemented dev extension functions for MapNetworkManager**
- void OnInitCentralAppServerRegister()

* * *

## Support functions for MapSpawnNetworkManager component

**Implemented dev extension functions**
- void RegisterMessages()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void OnInitCentralAppServerRegister()

* * *

## Support functions for ChatNetworkManager component

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void OnInitCentralAppServerRegister()

* * *

## Support functions for CentralNetworkManager component

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void SerializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataWriter writer)
- void DeserializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataReader reader)

* * *

## Support functions for MMO database  
(SQLiteDatabase, MySQLDatabase)

**Implemented dev extension functions**
- void CreateCharacter(string userId, IPlayerCharacterData characterData)
- void ReadCharacter(IPlayerCharacterData characterData, bool withEquipWeapons, bool withAttributes, bool withSkills, bool withSkillUsages, bool withBuffs, bool withEquipItems, bool withNonEquipItems, bool withSummons, bool withHotkeys, bool withQuests, bool withCurrencies)
- void UpdateCharacter(IPlayerCharacterData characterData)
- void DeleteCharacter(string userId, string characterId)

* * *

## Support functions for GameInstance component

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()
- void LoadedGameData()

* * *

## Support functions for CharacterStats struct

It has no dev extension invoking for `CharacterStats` struct, but it has static delegate functions in `GameExtensionInstance` class, there are:

- onAddCharacterStats(ref CharacterStats a, CharacterStats b)
- onMultiplyCharacterStatsWithNumber(ref CharacterStats a, float b)
- onMultiplyCharacterStats(ref CharacterStats a, CharacterStats b)

*You can see `DevExtDemo_GameExtensionInstance.cs` and `DevExtDemo_CharacterStats.cs` as example.*

## Supoort function for ItemRandomBonusCache class

It has no dev extension invoking for `ItemRandomBonusCache` class, but it has static delegate functions in `GameExtensionInstance` class, there are:

- onRandomCharacterStats(System.Random random, ItemRandomBonus randomBonus, RandomCharacterStats randomStats, ref CharacterStats stats, ref int appliedAmount)


* * *

## Support functions for PlayerCharacterSerializationSurrogate

**Implemented dev extension functions**
- void GetObjectData(System.Object obj, SerializationInfo info, StreamingContext context)
- void SetObjectData(System.Object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector)

* * *

## Support functions for BuildingSaveDataExtensions

**Implemented dev extension functions**
- static void CloneTo(IBuildingSaveData from, IBuildingSaveData to)

* * *

## Support functions for PlayerCharacterDataExtensions

**Implemented dev extension functions**
- static void CloneTo(IPlayerCharacterData from, IPlayerCharacterData to)
- static void ValidateCharacterData(IPlayerCharacterData character)
- static void SetNewPlayerCharacterData(IPlayerCharacterData character, string characterName, int dataId, int entityId)
- static void AddAllCharacterRelatesDataSurrogate(SurrogateSelector surrogateSelector)
- static void SerializeCharacterData(IPlayerCharacterData characterData, NetDataWriter writer)
- static void DeserializeCharacterData(IPlayerCharacterData characterData, NetDataReader reader)

* * *