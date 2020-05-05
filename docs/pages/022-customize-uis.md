* * *

MMORPG KIT — Customize UIs
==========================

To change gameplay UIs you may duplicate demo’s **CanvasGameplay** prefab and customize as you wish, for the demo there are **CanvasGameplay**, **CanvasGameplayMobile**, **CanvasGameplay\_Survival** and **CanvasGameplayMobile\_Survival** for the name with \_Survival it will add Food and Water indicator for survival gameplay

* * *

Let’s start learn how to modify the gameplay UI with CanvasGameplay prefab, drag this prefab to empty scene

![](https://cdn-images-1.medium.com/max/1600/1*jJIZdxNFerr5R_9Bl2yJLw.png)

I will gradually explains from generic UI components that have same settings and use as part of other components to more specific UI components

#### UI Base

For most of UIs they are extends from UI Base to add more functionality, the UI Base is made for handle UI show / hide with events you can set following settings

*   **Hide On Awake**, if this is **TRUE** the UI will be hidden when awake (when scene loaded)
*   **Move To Last Sibling On Show**, if this is **TRUE** the UI will move to last sibling to make it appear above other UIs that have same parent
*   **Root**, is the game object which will activate when show and deactivate when hide, if this is empty it will use game object which the component attached to as root
*   **On Show**, event when the UI show
*   **On Hide**, event when the UI hide

* * *

#### Text Wrapper

This project is not use **Text** component directly it use **Text Wrapper** to collect reference to text components because I want to make it able to use other Text component such as **TextMeshPro’s Text** component, if you want to use **Text Wrapper** with **TextMeshPro** you have to import TextMeshPro package to your project then add **USE\_TEXT\_MESH\_PRO** to **Scripting Define Symbols** in **Player Settings**

![](https://cdn-images-1.medium.com/max/1600/1*2mLc2_faPPGDUPwrQ_z1WA.png)

* * *

#### Input Field Wrapper

This is like Text Wrapper but for input field components

* * *

#### Dropdown Wrapper

This is like Text Wrapper but for dropdown components

* * *

#### Text Formats

**This is changed since version 1.45b**

Now all format settings in UIs are changes to be key which you can changes format in `Language Manager` which usually attached to `Game Instance`.

For example, in `UI Character` you can set format key for `Format Key Stat Point` to `UI_FORMAT_STAT_POINTS`

![](../images/localization/1.png)

Then in `Language Manager` if format for `UI_FORMAT_STAT_POINTS` is set to `Stat Point: {0}` it will show in the game as `Stat Point: 10` if your character have stat point = 10.

![](../images/localization/2.png)

![](../images/localization/3.png)

<s>
Some UI their are options to set string format.

For example in **UI Character** it has Hp Format

If it set to “Hp: {0}/{1}” while gameplay if character has current Hp = 10 and max Hp = 15 it will show as “Hp: 10/15”

But if it set to “Hp: {0}” it will show as “Hp: 10”

Each formats have tool tip which showing when your mouse cursor is on it in inspector to tell about format information
</s>

![](https://cdn-images-1.medium.com/max/1600/1*Zr7QO1ONJVvKaoIUHiEIBQ.png)

* * *

#### Image for Gage / Progress

Sometime I use **Image** component as gage / progress indicator to setup Image component for that you have to set **Image Type** as **Filled** then set other settings as you wish

![](https://cdn-images-1.medium.com/max/1600/1*9uOrkgqA112XGuN5PyvVbA.png)

* * *

#### List UI Setting

For every list UI setting, you have to set prefab and container, container is transform where it will instantiates prefab as its children.

For example **UI Non Equip Items**, there are **Ui Character Item Prefab** which is prefab that will instantiates as **Ui Character Item Container** children

![](https://cdn-images-1.medium.com/max/1600/1*yDM1i7qLUE7nrPvvuTdF8A.png)

You can learn about prefab from [this link](https://unity3d.com/learn/tutorials/topics/interface-essentials/prefabs-concept-usage)

* * *

#### Key-Value UI Setting

For every key-value UI setting, there are differences kind of key and value, value is reference to UI component, both key and value are required

For example **UI Character**, there are **Ui Character Attributes** which use **Attribute** as key and **Ui Character Attribute** as value, then it set **Ui Character Attribute**’s data by specific key

![](https://cdn-images-1.medium.com/max/1600/1*n2F7b3KHobj98Ph4HZSG_A.png)

* * *

#### **UI Scene Gameplay**

It’s main ui handler which receive an events from playing character to update UIs and also receive events from player to toggle UIs in this component there are

*   **Ui Characters** this is list of an **UI Character** component, why I made this as list ? because developer might want to set UIs to show character information in multiple places as this demo I made UI to show simple character stats (HP / MP) and the other is character dialog which show stats including EXP, Attributes, Stat Point and so on
*   **Ui Target Character** this is UI to show selected character (attacking character / monster), its type is **UI Character**
*   **Ui Equip Items** this is UI to show playing character’s equipped items
*   **Ui Non Equip Items** this is UI to show playing character’s inventory
*   **Ui Skills** this is UI to show playing character’s skills
*   **Ui Hotkeys** this is UI to show playing character’s hotkeys / shortcut keys to use items / skills
*   **Ui Quests** this is UI to show playing character’s quests
*   **Ui Npc Dialog** this is UI to show NPC dialog
*   **Ui Refine Item** this is UI which showing when refine / upgrade / enhance an item
*   **Ui Construct Building** this is UI which showing when playing character’s constructing the building now this is just dialog to confirm that player will construct the building or not
*   **Ui Current Building** this is UI which showing when playing character’s enter building menu on built buildings (by hold-click on buildings) now this is just dialog to confirm that player will destroy the building or not
*   **Ui Player Activate Menu** this is UI which showing when enter other character menu (by press E when near other character)
*   **Ui Dealing Request** this is UI which showing when other character request playing character to dealing with gold and items, this is just dialog to confirm to start dealing or not
*   **UI Dealing** this is UI which showing after start dealing, it’s contains gold and items that both players want to use to make deals
*   **Ui Party Invitation** this is UI which showing when other character invite playing character to join party, this is just dialog to confirm to join party or not
*   **Ui Guild Invitation** this is UI which showing when other character invite playing character to join guild, this is just dialog to confirm to join guild or not
*   **Toggle UIs** this is list of UIs that can toggle by defined key for example the demo you can press C to toggle character dialog, press I to toggle inventory dialog, press T to toggle skill dialog and so on
*   **Ignore Pointer Detection Uis** this is list of UIs that will not block click events when click on map / entities
*   **Combat Text Transform** this is container for an combat text, combat text is texts that showing up when character receive damages or recovery
*   **On Character Dead** this is event that will happen when character dead, you can use this event to show respawn dialog
*   **On Character Respawn** this is event that will happen when character respawn, you can use this event to hide respawn dialog

* * *

#### UI Cash Packages Gateway

This is component which deciding that cash packages dialog should be shown or open website with defined URL because on non mobile its payment method may difference but most game will make payment on website.

In this component you can set

*   **Non Mobile Url**, payment website URL to make payment for non mobile devices
*   **UI Cash Packages**, cash packages dialog for mobile devices, this dialog will show cash packages which can buy by Google Play’s or Apple’s payment methods

* * *

#### UI Character

This is component which show character stats / attributes / damages and so on. Most of settings are text formats, text components and image as gage components that I think its name and tool tips may helps you to understand enough so I will explains some settings

*   **Ui Text Weapon Damages**, this is text component which will show damage for both right hand (or main hand) and left hand (or off hand) as sum damages of all elements. If you want show damages for specific hand and/or specific elements, use **Ui Right Hand Damages, Ui Left Hand Damages**
*   **Ui Right Hand Damages** and **Ui Left Hand Damages**, they are reference to **UI Damage Element Amounts** component which use to show damages for each elements or sum of them
*   **Ui Character Stats**, this is reference to **UI Character Stats** which use to show stats
*   **Ui Character Buffs**, this is reference to **UI Character Buffs** which use to show every buffs that applied to the character
*   **Ui Character Attributes**, this is list of **UI Character Attribute Pair** which use to show every attributes amount for each attributes. This is key-value setting which use **Attribute** as key and **UI Character Attribute** as value, you should see **Key-Value UI Setting** section for more information
*   **Show Stats With Buffs**, if this is **TRUE** it will show stats (at **Ui Character Stats**) as sum of character stats and buff stats, if **FALSE**,  it will show only character stats
*   **Show Attribute With Buffs**, if this is **TRUE** it will show attributes (at **Ui Character Attributes**) as sum of character attributes and buff attributes, if **FALSE**,  it will show only character attributes

* * *

#### UI Character Attribute

This is component which show character attribute by specific kind of attribute (STR or DEX or others). Most of settings are text formats, text components and image as gage components that I think its name and tool tips may helps you to understand enough so I will explains some settings

*   **On Able To Increase**, this is event which happen when the character attribute is able to increase (have stat point)
*   **On Unable To Increase**, this is event which happen when the character attribute is Unable to increase (not have stat point)

UI Character Attribute have following event functions that you can set to buttons (or call it via another scripts as you wish)

*   **On Click Add**, when use this function it will increase the character attribute

* * *

#### UI Equip Items

This is component which show equip items

*   **Ui Item Dialog**, this is reference to item dialog which will show when any item was selected to show item information and hide when deselected. Its type is **UI Character Item** which you can see information about it later (At **UI Character Item** section)

![](https://cdn-images-1.medium.com/max/1600/1*mghvrHs59HI6pdufpPf_Sg.png)

I made close button to deselect selected UI to hide this dialog, as I mentioned above this dialog will hide when deselected

*   **Right Hand Slot** and **Left Hand Slot**, they are reference to **UI Character Component** component which use to show equipped item data for each hand, I usually make it to show just item icon but you may make it to show other information as you wish

![](https://cdn-images-1.medium.com/max/1600/1*B2jMdu1Ez5Hnt6s8ZnPtrQ.png)

I just make an equip item slot to show just icon

*   **Other Equip Slots**, this is list of **UI Character Item Pair** which use to show other equip items (not for right hand / left hand), This is key-value setting which use **Armor Type** as key and **UI Character Item** as value, you should see **Key-Value UI Setting** section for more information

You have to set **UI Character Item -> On Click Select** function to **Button -> On Click** event for every slots to make it able to select and show **Ui Item Dialog** to let player decide what player want to do with selected item

![](https://cdn-images-1.medium.com/max/1600/1*7_hId_p-8SkynhHzS59W0Q.png)

For the demo, I have attached **Button** at the same game object with **UI Character Item** so I set **On Click** event with **On Click Select** function from the same game object

* * *

#### UI Non Equip Items

This is component which show non equip items (items in inventory)

This component have list UI which use **Ui Character Item Prefab** as prefab and **Ui Character Item Container** as container, you should see **List UI Setting** section for more information

For another setting there are

*   **Ui Item Dialog**, this is reference to item dialog which will show when any item was selected to show item information and hide when deselected. Its type is **UI Character Item** which you can see information about it later (At **UI Character Item** section)

* * *

#### UI Character Item

This is component which show character item data. Most of settings are text formats, text components and image as gage components that I think its name and tool tips may helps you to understand enough so I will explains some settings

*   **Drop Input Title**, this is title which will shows in amount dialog when dropping items
*   **Drop Input Description**, this is description which will shows in amount dialog when dropping items
*   **Sell Input Title**, this is title which will shows in amount dialog when selling items
*   **Sell Input Description**, this is description which will shows in amount dialog when selling items
*   **Set Dealing Input Title**, this is title which will shows in amount dialog when set dealing items
*   **Set Dealing Input Description**, this is description which will shows in amount dialog when set dealing items
*   **Ui Requirement**, this is reference to **UI Equipment Item Requirement** object which showing required character level / class and an attributes
*   **Ui Stats**, this is reference to **UI Character Stats** object which use to show stats that increasing to character when equip
*   **Ui Increase Attributes**, this is reference to **UI Attribute Amounts** object which use to show attributes that increasing to character when equip
*   **Ui Increase Resistances**, this is reference to **UI Resistance Amounts** object which use to show resistances that increasing to character when equip
*   **Ui Increase Damage Amounts**, this is reference to **UI Damage Element Amounts** object which use to show damages that increasing to character when equip
*   **Ui Damage Amounts**, this is reference to **UI Damage Element Amounts** object which use to show weapon damages that set to character when equip
*   **On Set Level Zero Data**, this is event which happen when set character item data which its level = 0, I use this function in case to hide / show some text UIs
*   **On Set Non Level Zero Data**, this is event which happen when set character item data which its level > 0, I use this function in case to hide / show some text UIs
*   **On Set Equipped Data**, this is event which happen when set character item data which equipped, I use this to show unequip button
*   **On Set Un Equipped Data**, this is event which happen when set character item data which is not equipped, I use this to show equip, refine, drop buttons
*   **On Set Un Equippable Data**, this is event which happen when set character item data which is not able to be equipped, I use this to show drop button because it is not equipment item so it is not able to equip and refine
*   **On Npc Sell Item Dialog Appear**, this is event which happen when NPC’s sell item dialog shown
*   **On Npc Sell Item Dialog Disappear**, this is event which happen when NPC’s sell item dialog hidden
*   **On Refine Item Dialog Appear**, this is event which happen when refine item dialog shown
*   **On Refine Item Dialog Disappear**, this is event which happen when refine item dialog hidden
*   **On Enter Dealing State**, this is event which happen when dealing with another character, I use this to enable set dealing item button
*   **On Exit Dealing State**, this is event which happen dealing state change to Lock or Confirm, I use this to disable set dealing item button

![](https://cdn-images-1.medium.com/max/1600/1*pOT9Q_0UabOSd0Qx-RWWvQ.png)

I have use event to show/hide buttons

*   **Ui Next Level Item**, this is reference to **UI Character Item**, which will show current item’s next level data
*   **Show Amount When Max Is One**, if this is **TRUE** it will show amount when max stack = 1
*   **Show Level As Default**, if this is **FALSE** it will show level as level-1, I use this because start item level is 1 when refine to next level it is 2 but some game may show level as “+1” so I will set this to **FALSE** if I want to show it as “+1”.
*   **Dont Append Refine Level To Title**, If this is **FALSE** it will set title as “Item Title (+1)” or it may shown as “Item Title Lv.+1, it’s up to the format

UI Character Item have following event functions that you can set to buttons (or call it via another scripts as you wish)

*   **On Click Equip**, when use this function it will equip the item if item is equipment item and equippable
*   **On Click Un Equip**, when use this function it will unequip the item if item is equipment item
*   **On Click Drop**, when use this function it will drop item if item is not equipped
*   **On Click Sell**, when use this function it will sell item if item is not equipped
*   **On Click Set Dealing Item**, when use this function it will set dealing item if item is not equipped and dealing state is not lock or confirm to add this item to dealing dialog
*   **On Click Set Refine Item**, when use this function it will set the item data to refine item dialog to let player to refine the item

![](https://cdn-images-1.medium.com/max/1600/1*Zkl_Tkn3VckguGVqFviAhQ.png)

I have set events to an buttons

* * *

#### UI Character Skills

This is component which show skills that can level up and use

This component have list UI which use **Ui Character Skill Prefab** as prefab and **Ui Character Skill Container** as container, you should see **List UI Setting** section for more information

For another setting there are

*   **Ui Skill Dialog**, this is reference to skill dialog which will show when any skill was selected to show skill information and hide when deselected. Its type is **UI Character Skill** which you can see information about it later (At **UI Character Skill** section)

* * *

#### UI Character Skill

This is component which show character skill data. Most of settings are text formats, text components and image as gage components that I think its name and tool tips may helps you to understand enough so I will explains some settings

*   **Ui Damage Amount**, this is reference to **UI Damage Element Amount** object which show skill damage when **Skill Attack Type** = **Normal**, to show damages that applying to enemy when attack that not sum which character/weapon attack damages
*   **Ui Damage Inflictions**, this is reference to **UI Damage Element Inflictions** object which show skill damage inflictions
*   **Ui Additional Damage Amounts**, this is reference to **UI Damage Element Amounts** object which show skill additional damage amounts
*   **Ui Skill Buff**, this is reference to **UI Buff** object which showing when the skill have buffs
*   **Ui Skill Debuff**, this is reference to **UI Buff** object which showing when the skill is attack skill and have debuffs
*   **On Set Level Zero Data**, this is event which happen when set character skill data which its level = 0, I use this function in case to hide / show some text UIs
*   **On Set Non Level Zero Data**, this is event which happen when set character skill data which its level > 0, I use this function in case to hide / show some text UIs
*   **On Able To Level Up**, this is event which happen when the character skill is able to level up (have skill point and not reached max level)
*   **On Unable To Level Up**, this is event which happen when the character skill is Unable to level up (not have skill point or reached max level)
*   **Ui Next Level Skill**, this is reference to **UI Character Skill**, which will show current skill’s next level data

**UI Character Skill** have following event functions that you can set to buttons (or call it via another scripts as you wish)

*   **On Click Add**, when use this function it will level up the character skill

* * *

#### UI Character Hotkeys

This is component is collection of **UI Character Hotkey** which show hotkeys / shortcuts to use item / skill, it’s set up as Key-Value UI Setting via **Ui Character Hotkeys**, this is list of **UI Character Hotkey Pair** which use **Hotkey Id** as key and **UI Character Hotkey** as value, you should see **Key-Value UI Setting** section for more information

* * *

#### UI Character Hotkey

This is component which show hotkey / shortcut to use item / skill, you can set following setting

*   **Key**, this is key which when pressed item / skill will be used
*   **Ui Character Skill**, this is reference to **UI Character Skill** object which will shown when the hotkey set as skill
*   **Ui Character Item**, this is reference to **UI Character Item** object which will shown when the hotkey set as item
*   **Ui Assigner**, this is reference to **UI Character Hotkey Assigner** which showing list of items and skills that allowed to set as hotkey

**UI Character Hotkey** have following event functions that you can set to buttons (or call it via another scripts as you wish)

*   **On Click Assign**, when use this function it will show **Ui Assigner** for set the hotkey
*   **On Click Use**, when use this function it will use item / skill if it was set

![](https://cdn-images-1.medium.com/max/1600/1*GDXiX0rI6rM8SF6wo8BTAw.png)

I have set function to an event when click on hotkeys

* * *

#### UI Character Quests

TODO

* * *

#### UI Npc Dialog

TODO

* * *

#### UI Refine Item

TODO

* * *

#### UI Construct Building

This is UI which showing when constructing the building, now I made this to show confirm dialog to build the building or not there are following functions that can set to buttons

*   **On Click Confirm Build**, when use this function it will build the building
*   **On Click Cancel Build**, when use this function it will cancel the building

* * *

#### UI Current Building

This is UI which showing when select the building (by hold click on it), now I made this to show destroy dialog to destroy the building, there are following functions that can set to buttons

*   **On Click Destroy**, when use this function it will destroy the building (for now only owner can destroy it)
*   **On Click Deselect**, when use this function it will deselect the building

* * *

#### UI Player Activate Menu

This is UI which showing when player active other character (by press E when near other character) to show actions that player can do with another character, there are following functions that can set to buttons

*   **On Click Send Dealing Request**, when use this function it will send dealing request to other character
*   **On Click Send Party Invitation**, when use this function it will send party invitation to other character
*   **On Click Send Guild Invitation**, when use this function it will send guild invitation to other character

![](https://cdn-images-1.medium.com/max/1600/1*UQV-bDIYKcykzS3WfZTsrg.png)

The example that I set on click event to send dealing request to another character

* * *

#### UI Dealing Request

This is UI which showing when character receive dealing request from other character, there are following functions that can set to buttons

*   **On Click Accept**, when use this function, the character will accept dealing request and start dealing item / gold
*   **On Click Decline**, when use this function, the character will decline dealing request

* * *

#### UI Dealing

TODO

* * *

#### UI Party Invitation

This is UI which showing when character receive party invitation from other character, there are following functions that can set to buttons

*   **On Click Accept**, when use this function, the character will accept invitation and join the party
*   **On Click Decline**, when use this function, the character will decline the invitation

* * *

#### UI Guild Invitation

This is UI which showing when character receive dealing request from other character, there are following functions that can set to buttons

*   **On Click Accept**, when use this function, the character will accept invitation and join the guild
*   **On Click Decline**, when use this function, the character will decline the invitation

* * *

After made modification, save the prefab then set it to **GameInstance -> Ui Scene Gameplay Prefab** and **Ui Scene Gameplay Mobile Prefab** for mobile mode UI

You can test mobile UIs in the editor by set **GameInstance -> Use Mobile In Editor** to **TRUE**

![](https://cdn-images-1.medium.com/max/1600/1*W9AuXXyn_f9thiwZBDpLzg.png)