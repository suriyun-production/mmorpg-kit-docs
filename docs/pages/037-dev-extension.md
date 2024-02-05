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
(`PlayerCharacterEntity`, `MonsterCharacterEntity`, `NpcEntity`, `BuildingEntity`, `HarvestableEntity` and so on)

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()

**Events**
- void onStart()
- void onEnable()
- void onDisable()
- void onUpdate()
- void onLateUpdate()
- void onSetup()
- void onSetupNetElements()
- void onSetOwnerClient()
- void onIsUpdateEntityComponentsChanged(bool isUpdate)
- void onNetworkDestroy(byte reasons)
- void onCanMoveValidated(ref bool canMove)
- void onCanSprintValidated(ref bool canSprint)
- void onCanWalkValidated(ref bool canWalk)
- void onCanCrouchValidated(ref bool canCrouch)
- void onCanCrawlValidated(ref bool canCrawl)
- void onCanJumpValidated(ref bool canJump)
- void onCanTurnValidated(ref bool canTurn)
- void onJumpForceApplied(float verticalVelocity)

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
(`PlayerCharacterEntity`, `MonsterCharacterEntity`, `BuildingEntity`, `HarvestableEntity` and so on)

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()

**Events**
- void onCurrentHpChange(int currentHp)
- void onReceiveDamage(HitBoxPosition position, Vector3 fromPosition, IGameEntity attacker, Dictionary<DamageElement, MinMaxFloat> damageAmounts, CharacterItem weapon, BaseSkill skill, int skillLevel)
- void onReceivedDamage(HitBoxPosition position, Vector3 fromPosition, IGameEntity attacker, CombatAmountType combatAmountType, int totalDamage, CharacterItem weapon, BaseSkill skill, int skillLevel, CharacterBuff buff, bool isDamageOverTime)

*You can add an events in `Awake` and remove in `OnDestroy`*

* * *

## Support functions for an `BaseCharacterEntity`

**Events**
- void onRecached()
- void onIdChange(string id)
- void onCharacterNameChange(string characterName)
- void onLevelChange(int level)
- void onExpChange(int exp)
- void onIsImmuneChange(bool isImmune)
- void onCurrentMpChange(int currentMp)
- void onCurrentFoodChange(int currentFood)
- void onCurrentWaterChange(int currentWater)
- void onEquipWeaponSetChange(byte equipWeaponSet)
- void onIsWeaponsSheathedChange(bool isSheathed)
- void onPitchChange(ushort pitch)
- void onAimPositionChange(AimPosition aimPosition)
- void onTargetEntityIdChange(uint targetEntityId)
- void onSelectableWeaponSetsOperation(LiteNetLibSyncList.Operation op, int index)
- void onAttributesOperation(LiteNetLibSyncList.Operation op, int index)
- void onSkillsOperation(LiteNetLibSyncList.Operation op, int index)
- void onSkillUsagesOperation(LiteNetLibSyncList.Operation op, int index)
- void onBuffsOperation(LiteNetLibSyncList.Operation op, int index)
- void onEquipItemsOperation(LiteNetLibSyncList.Operation op, int index)
- void onNonEquipItemsOperation(LiteNetLibSyncList.Operation op, int index)
- void onSummonsOperation(LiteNetLibSyncList.Operation op, int index)
- void onAttackRoutine(bool isLeftHand, CharacterItem weapon, int simulateSeed, byte triggerIndex, DamageInfo damageInfo, Dictionary<DamageElement, MinMaxFloat> damageAmounts, AimPosition aimPosition)
- void onUseSkillRoutine(BaseSkill skill, int level, bool isLeftHand, CharacterItem weapon, int simulateSeed, byte triggerIndex, Dictionary<DamageElement, MinMaxFloat> damageAmounts, uint targetObjectId, AimPosition aimPosition)
- void onLaunchDamageEntity(bool isLeftHand, CharacterItem weapon, int simulateSeed, byte triggerIndex, byte spreadIndex, Dictionary<DamageElement, MinMaxFloat> damageAmounts, BaseSkill skill, int skillLevel, AimPosition aimPosition)
- void onApplyBuff(CharacterBuff buff)
- void onRemoveBuff(CharacterBuff buff, BuffRemoveReasons reason)
- void onBuffHpRecovery(EntityInfo causer, int amount)
- void onBuffHpDecrease(EntityInfo causer, int amount)
- void onBuffMpRecovery(EntityInfo causer, int amount)
- void onBuffMpDecrease(EntityInfo causer, int amount)
- void onBuffStaminaRecovery(EntityInfo causer, int amount)
- void onBuffStaminaDecrease(EntityInfo causer, int amount)
- void onBuffFoodRecovery(EntityInfo causer, int amount)
- void onBuffFoodDecrease(EntityInfo causer, int amount)
- void onBuffWaterRecovery(EntityInfo causer, int amount)
- void onBuffWaterDecrease(EntityInfo causer, int amount)
- void onNotifyEnemySpotted(BaseCharacterEntity enemy)
- void onNotifyEnemySpottedByAlly(BaseCharacterEntity ally, BaseCharacterEntity enemy)

*You can add an events in `Awake` and remove in `OnDestroy`*

* * *

## Support functions for an `BasePlayerCharacterEntity`

**Events**
- void onDataIdChange(int dataId)
- void onFactionIdChange(int factionId)
- void onStatPointChange(int statPoint)
- void onSkillPointChange(int skillPoint)
- void onGoldChange(int gold)
- void onUserGoldChange(int userGold)
- void onUserCashChange(int userCash)
- void onPartyIdChange(int partyId)
- void onGuildIdChange(int guildId)
- void onIconDataIdChange(int iconDataId)
- void onFrameDataIdChange(int frameDataId)
- void onTitleDataIdChange(int titleDataId)
- void onIsPkOnChange(bool isPkOn)
- void onPkPointChange(int pkPoint)
- void onConsecutivePkKillsChange(int consecutivePkKills)
- void onIsWarpingChange(bool isWarping)
- void onHotkeysOperation(LiteNetLibSyncList.Operation op, int index)
- void onQuestsOperation(LiteNetLibSyncList.Operation op, int index)
- void onCurrenciesOperation(LiteNetLibSyncList.Operation op, int index)
- void onPrivateBoolsOperation(LiteNetLibSyncList.Operation op, int index)
- void onPrivateIntsOperation(LiteNetLibSyncList.Operation op, int index)
- void onPrivateFloatsOperation(LiteNetLibSyncList.Operation op, int index)
- void onPublicBoolsOperation(LiteNetLibSyncList.Operation op, int index)
- void onPublicIntsOperation(LiteNetLibSyncList.Operation op, int index)
- void onPublicFloatsOperation(LiteNetLibSyncList.Operation op, int index)

*You can add an events in `Awake` and remove in `OnDestroy`*

* * *

## Support functions for `BasePlayerCharacterController` component
**Implemented dev extension functions**
- void Awake()
- void OnDestroy()

* * *

## Support functions for game network manager components
(`LanRpgNetworkManager`, `MapNetworkManager`)

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStopServer()
- void OnStartClient(LiteNetLibClient client)
- void OnStopClient()
- void OnPeerConnected(long connectionId)
- void InitPrefabs()
- void OnClientOnlineSceneLoaded()
- void OnServerOnlineSceneLoaded()
- void UpdateReadyToInstantiateObjectsStates(Dictionary<string, bool> readyToInstantiateObjectsStates)
- void ReadMapInfoExtra(NetDataReader reader)
- void WriteMapInfoExtra(NetDataWriter writer)

**Implemented dev extension functions for `MapNetworkManager`**
- void OnInitCentralAppServerRegister()

* * *

## Support functions for `MapSpawnNetworkManager` component

**Implemented dev extension functions**
- void RegisterMessages()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void OnInitCentralAppServerRegister()

* * *

## Support functions for `ChatNetworkManager` component

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void OnInitCentralAppServerRegister()

* * *

## Support functions for `CentralNetworkManager` component

**Implemented dev extension functions**
- void RegisterMessages()
- void Clean()
- void OnStartServer()
- void OnStartClient(LiteNetLibClient client)
- void SerializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataWriter writer)
- void DeserializeCreateCharacterExtra(PlayerCharacterData characterData, NetDataReader reader)

* * *

## Support functions for `DatabaseNetworkManager` component

**Implemented dev extension functions**
- void RegisterMessages()

* * *

## Support functions for `SQLiteDatabase`

**Implemented dev extension functions**
- void Init()
- void CreateCharacter(SqliteTransaction transaction, string userId, IPlayerCharacterData characterData)
- void ReadCharacter(string id bool withEquipWeapons, bool withAttributes, bool withSkills, bool withSkillUsages, bool withBuffs, bool withEquipItems, bool withNonEquipItems, bool withSummons, bool withHotkeys, bool withQuests, bool withCurrencies, bool withServerCustomData, bool withPrivateCustomData, bool withPublicCustomData)
- void UpdateCharacter(SqliteTransaction transaction, IPlayerCharacterData characterData)
- void DeleteCharacter(SqliteTransaction transaction, string userId, string characterId)

* * *

## Support functions for `MySQLDatabase`

**Implemented dev extension functions**
- void Init()
- void CreateCharacter(MySqlConnection connection, MySqlTransaction transaction, string userId, IPlayerCharacterData characterData)
- void ReadCharacter(string id bool withEquipWeapons, bool withAttributes, bool withSkills, bool withSkillUsages, bool withBuffs, bool withEquipItems, bool withNonEquipItems, bool withSummons, bool withHotkeys, bool withQuests, bool withCurrencies, bool withServerCustomData, bool withPrivateCustomData, bool withPublicCustomData)
- void UpdateCharacter(MySqlConnection connection, MySqlTransaction transaction, IPlayerCharacterData characterData)
- void DeleteCharacter(MySqlConnection connection, MySqlTransaction transaction, string userId, string characterId)

* * *

## Support functions for `BaseGameData`

**Implemented dev extension functions**
- void PrepareRelatesData()

* * *

## Support functions for `GameDatabase`

**Implemented dev extension functions**
- void LoadDataImplement(GameInstance gameInstance)
- void LoadReferredData()

* * *

## Support functions for `ResourcesFolderGameDatabase`

**Implemented dev extension functions**
- void LoadDataImplement(GameInstance gameInstance)

* * *

## Support functions for `GameEntityModel` component

**Implemented dev extension functions**
- void SetEffectContainersBySetters()

* * *

## Support functions for `BaseCharacterModel` component

**Implemented dev extension functions**
- void SetEquipmentContainersBySetters()

* * *

## Support functions for `GameInstance` component

**Implemented dev extension functions**
- void Awake()
- void OnDestroy()
- void LoadedGameData()

* * *

## Support functions for `CharacterStats` struct

It has no dev extension invoking for `CharacterStats` struct, but it has static delegate functions in `GameExtensionInstance` class, there are:

- void onAddCharacterStats(ref CharacterStats a, CharacterStats b)
- void onMultiplyCharacterStatsWithNumber(ref CharacterStats a, float b)
- void onMultiplyCharacterStats(ref CharacterStats a, CharacterStats b)

*You can see `DevExtDemo_GameExtensionInstance.cs` and `DevExtDemo_CharacterStats.cs` as example.*

* * *

## Support functions for `CharacterStatsTextGenerateData` class

**Implemented dev extension functions**
- void GetText(StringBuilder statsStringBuilder)

* * *

## Support functions for `PlayerCharacterSerializationSurrogate`

**Implemented dev extension functions**
- void GetObjectData(System.Object obj, SerializationInfo info, StreamingContext context)
- void SetObjectData(System.Object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector)

* * *

## Support functions for `BuildingSaveDataExtensions`

**Implemented dev extension functions**
- static void CloneTo(IBuildingSaveData from, IBuildingSaveData to)

* * *

## Support functions for `PlayerCharacterDataExtensions`

**Implemented dev extension functions**
- static void CloneTo(IPlayerCharacterData from, IPlayerCharacterData to)
- static void ValidateCharacterData(IPlayerCharacterData character)
- static void SetNewPlayerCharacterData(IPlayerCharacterData character, string characterName, int dataId, int entityId)
- static void AddAllCharacterRelatesDataSurrogate(SurrogateSelector surrogateSelector)
- static void SerializeCharacterData(IPlayerCharacterData characterData, NetDataWriter writer)
- static void DeserializeCharacterData(IPlayerCharacterData characterData, NetDataReader reader)

* * *