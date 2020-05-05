* * *

MMORPG KIT — Character Animation
================================

If you’re using Mechanim animtion for your character model, you will have to prepare [Animator Controller](https://docs.unity3d.com/Manual/class-AnimatorController.html), it’s required following parameters:

*   **IsDead** (Boolean) — This will be **TRUE** when character dead, you can use this as a transition to play dead animation
*   **MoveSpeed** (Float) — This is character movement X-Z magnitude, you can use this as a transition to play walk or run animation
*   **DoAction** (Boolean) — This will be **TRUE** while character does action, action may be attack or skill casts or harvesting. Action animation clip will be changed at runtime by **CharacterModel** class function **PlayActionAnimation\_Animator**, I will explain how action animation clip changes later, you can use this as a transition to play attack / skill casts / harvesting animations
*   **YSpeed** (Float) — This is character movement Y speed, you can use this as a transition to play fall animation
*   **MoveSpeedMultiplier** (Float) — This value calculated by Character’s current move-speed divide with base move-speed. For example, if base move-speed is 0.8 and current move-speed is 2 this value will be 2.5, You can use it as animation speed multiplier to make it play move speed faster or slower up to current move-speed

![](https://cdn-images-1.medium.com/max/1600/1*h1MgsNPLOnoKay_JCP_lDQ.png)

With Unity you can set parameters to play animation faster

*   **ActionSpeedMultiplier** (Float) — This is like **MoveSpeedMultiplier** but for attack animations, attack speed can be increased by items
*   **Hurt** (Trigger) — This will be triggered when receiving damage, you can use this as a transition to play hurt animation
*   **Jump** (Trigger) — This will be triggered when jumping, you can use this as a transition to play jump animation

You can see the demo’s animation controller as example, located at Assets/UnityMultiplayerARPG/Demo/Animations

![](https://cdn-images-1.medium.com/max/1600/1*WbxG7VEfLkXnv3Dx8XDN1A.png)

* * *

As I explained about action changed at runtime by **CharacterModel** class function **PlayActionAnimation\_Animator**, Now I will tell how it works

(**TLDR** - If you don't want to know how it work, just want to setup. You have to set same **Animation Clip** to **Animator Controller -> Action State** and **Character Model -> Default Animator Data -> Action Clip**)

**CharacterModel** class will create [Animator Override Controller](https://docs.unity3d.com/Manual/AnimatorOverrideController.html) to change animation clip to play specific action animation, it will override clip which has same name as clip which you set to **Default Animator Data -> Action Clip** to other animations. So it requires the state which has a same clip.

So you have to create a state with any name (for the demo it is Action) but you have to set the animation clip uniquely named (the demo named as **_Action**), the animation clip can be any clip. I recommend to just create new empty animation clip, it will be used as the reference to change to other animation clips

*   Then create state with any name for this example it is “Action”

![](https://cdn-images-1.medium.com/max/1600/1*jRE-lqrjiN9V3uv0L6voeQ.png)

*   Then set state clip to **_Action** clip

![](https://cdn-images-1.medium.com/max/1600/1*I1DSdEc6c9jg9Ze9lg0URw.png)

*   Then set **Character Model -> Default Animator Data -> Action Clip** to **_Action** clip

![](../images/set_action_clip_to_character_model.png)

*   Then you can set character action animation clip at character model class

![](https://cdn-images-1.medium.com/max/1600/1*w0EwBq4-QxF03iy9Ix9Zdg.png)

*   **Default Attack Animations** are animations that will be played randomly when not equip weapons or equip weapon which not set animations at **Weapon Animations** config
*   **Default Skill Cast Animations** are animations that will be played randomly when cast skill
*   **Weapon Animations** are attack animations for specific weapons
*   **Skill Cast Animations** are skill cast animations for specific skills