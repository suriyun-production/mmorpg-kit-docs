* * *

MMORPG KIT — Items (Item Refine Info / Equipment / Equipment Set / Armor / Weapon / Potion / Ammo / Building / Pet)
================================================================================

With this project you can create Item as following types:

*   **Junk**, generic item that can do nothing, can sell only
*   **Armor**, character equip armor items to reduce attack damage and also receive another bonus
*   **Weapon**, character equip weapons to increase attack damage and also receive another bonus
*   **Shield**, character equip shield at off-hand to reduce attack damage and also receive another bonus
*   **Potion**, character can consume this to regenerate HP, MP and also can receives another buffs
*   **Ammo**, some weapon such as Bow can requires ammo to shot, this kind of item also able to increase damages to attack enemies
*   **Building**, character can use this item to build an buildings
*   **Pet**, character can use this item to summon pet, pet can helps you to attack enemies and can level up. When dismissing pet it will be back to item with some delay to allow player to spawn it again

For generic item data you can set following data:

*   **Item Type**, type of items like as explained above
*   **Drop Model**, model which will present in the ground when drop
*   **Sell Price**, price when sell to Npc
*   **Weight**, weight
*   **Item Refine Info**, other item info such as rarity (with rarity title color), refine level/price and repair price. You can create this data by right click in **Project** tab select   
**Create -> Create GameData -> Item Refine Info**
*   **Max Stack**, max amount that can stack

You can create new attribute by right click in **Project** tab select   
**Create -> Create GameData -> Item**

![](https://cdn-images-1.medium.com/max/1600/0*6PVE9xFgxZAXcRGR)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other item data) then define its data as you wish

* * *

### Equipment Items

Armor, weapon and shield are equipment item, equipment item can set following data:

*   **Max Level**, max level that can level up to
*   **Equipment Models**, An socket name and model which will appear when equipped by character
*   **Requirement**, requirement to equip this item
*   **Increase Attributes**, increasing attributes when equip this item
*   **Increase Resistances**, increasing resistances when equip this item
*   **Increase Damages**, increasing damages when equip this item
*   **Increase Stats**, increasing character stats when equip this item
*   **Equipment Set**, characters can gain more extra stats when equipped same set equipments. You can create this data by right click in **Project** tab select   
**Create -> Create GameData -> Equipment Set**
*   **Max Durability**, equipment durability, If this set to 0 it will not broken
*   **Destroy If Broken**, If this is **TRUE**, your equipment will be destroyed when durability = 0
*   **Max Socket**, this is nax amount of sockets that allow to enhance by **Socket Enhancer** items

* * *

### Armor Items

For armor item it is required armor type data

You can create new armor type by right click in **Project** tab select   
**Create -> Create GameData -> ArmorType**

![](https://cdn-images-1.medium.com/max/1600/0*8U1SxLXvCBLm40q2)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other armor type data) then define its data as you wish

We will use the armor type file name to define which position this item will be equipped to

* * *

### Weapon Items

For weapon item you can set following data:
*   **Sub Equipment Models** for weapons that can equip at off-hand (or left-hand)
*   **Weapon Type** the weapon type
*   **Move Speed Rate While Attacking** this value will be multiplied with character move speed while using this weapon item to attack
*   **Damage Amount** is damage when attack target
*   **Harvest Damage Amount** is damage when attack (harvest) harvestable entity
*   **Ammo Capacity** For macine gun, may set this to 30 as magazine capacity, if this is 0 it will not need to have ammo loaded to shoot but still need ammo in inventory if weapon type required ammo
*   **Weapon Ability** weapon ability, for now there is only Zoom
*   **Crosshair Setting** settings for crosshair, this will work with FPS-controller only
*   **Fire Type** this will work with FPS-controller only if this is `Single Fire` player have to release button for next fire, if this is `Automatic` player can hold to fire without button release for next fire

Weapon item is required weapon type data

You can create new weapon type by right click in **Project** tab select   
**Create -> Create GameData -> WeaponType**

![](https://cdn-images-1.medium.com/max/1600/0*9bZLVRqeUj3uyqpX)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other weapon type data) then define its data as you wish

Weapon type data have following data:

*   **Equip Type**, There are: **One Hand** — can equip in right hand only, **One Hand Can Dual** — can equip to any hand, **Two Hand** — require two hand to equip it
*   **Damage Info**, There are: **Melee** and **Missile**
*   **Effectiveness Attributes**, Attributes that can increase attack damage

About damage info, as described above, now there are 2 types there are melee and missile

For melee damage, you can set **Hit Distance** it is distance from character position to hit enemy and **Hit Fov** it is FOV in front of character position to hit enemy

For missile damage, you can set **Missile Distance** is distance that this missile can travel to, **Missile Speed** is move speed to target and **Missile Damage Entity** is entity which will appear in game scene to apply damage when hit to target

* * *

### Potion Items

For potion item you can set **Buff**, about buff you can set following data:

*   **Duration**, duration for applying this buff
*   **Recovery Hp**, recovery Hp within duration
*   **Recovery Mp**, recovery Mp within duration
*   **Increase Stats**, increasing character stats
*   **Increase Attributes**, increasing attributes
*   **Increase Resistances**, increasing resistances
*   **Increase Damages**, increasing damages
*   **Effects**, effects that will playing while this buff is applying

* * *

### Ammo Items

Some weapon such as Gun, Bow might require ammo, you can create ammo item for that weapons, ammo item also can increase weapon attack damage

Ammo item is required ammo type data you also have to set ammo type to weapon type which required the ammo

You can create new ammo type by right click in **Project** tab select   
**Create -> Create GameData -> Ammo Type**

![](https://cdn-images-1.medium.com/max/1600/0*A8_7zsQX79qSfjRr)

You may place it in [**Resources**](https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html)  folder or anywhere but use [**GameDatabase**](https://medium.com/suriyun-production/mmorpg-kit-game-database-ce081169f097), then define its name which must be unique (Not same as other ammo type data) then define its data as you wish

* * *

### Building Item

For building item, you have to set created **Building Entity** to **Building Entity** to make it able to build the building

![](https://cdn-images-1.medium.com/max/1600/1*T5xk2bN7KQcUSwN0ZnNpGg.png)

* * *

### Pet Item

For pet item, you have to set created **Monster Character Entity** to **Pet Entity** to make it able to summon the pet

![](https://cdn-images-1.medium.com/max/1600/1*1r_cPZbCY-owsjzk6KcYIQ.png)

### Socket Enhancer Item

For socket enhancer item, you have to set **Socket Enhance Effect** as bonus you want to applies to **Equipment Item** when equip it
