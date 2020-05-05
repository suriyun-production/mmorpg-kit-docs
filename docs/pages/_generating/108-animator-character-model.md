# Animator Character Model

This component working by create [Animator Override Controller](https://docs.unity3d.com/Manual/AnimatorOverrideController.html) at runtime based on `Animator Controller` which set to `Animator Controller` field. Then when character change weapon it can change animation set (idle, move, dead and other animations) based on clip's names which set to `Animator Controller's states`.

To setup this component, you should learn about [Mechanim Animation System](https://docs.unity3d.com/Manual/AnimationOverview.html) and [Animation Clip](https://docs.unity3d.com/Manual/AnimationClips.html).

* * *

You can prepare it after prepared `Character Entity` then add `Animation Character Model` component, then setup following settings:

!INCLUDE "./game-data/_character-model-generic-config.md"

* * *

## Animation Clip Settings

Before looking into animation clip settings list, I want you to know about `Action Animation` settings

!INCLUDE "./game-data/_action-animation.md"

* * *

All animation clip settings contains:

*   `Default Animations` this is contains default animation clips and action animations
*   `Weapon Animations` each of this is contains animation clips and action animations for specific `Weapon Type`.
*   `Skill Animations` each of this is contains skill cast clip and activate skill action animation for specific `Skill`.
*   `Controller Type` there are 3 choices: `Simple` it will use pre-made `Animator Controller` which has 1 layer and made for **non shooter-games**, `Advance` it will use pre-made `Animator Controller` which have 2 layers and made for **shooter-games** which can attack while moving and `Custom` which use custom `Animator Controller`, developer should see `Custom Controller Type` section.
*   `Animator` set `Animator` which will be used to handle `Animation Controller` here.
*   `Animator Controller` set `Animator Controller` which will be overrided to change animation set
*   `Action State Layer` this is animator controller layer for action state (state for attack and activate skill animations), set layer to layer which has the action state, if you have only 1 layer set it to 0, for **shooter-games** it may have 2 layers for generic movement and actions because most **shooter-games** can attack while moving, you may set it to 1.
*   `Cast Skill State Layer` this is animator controller layer for cast skill state (play "cast skill" animation then play "activate skill" animation later), set layer to layer which has the cast skill state.

* * *

## Custom Controller Type

You can create your own `Animation Controller` to use with this character model instead of using an pre-made animation controllers, but you have to set clip names for each states to:

*   `__Idle` for clip which will set to **idle** state.
*   `__MoveForward` for clip which will set to **move forward** state.
*   `__MoveBackward` for clip which will set to **move backward** state.
*   `__MoveLeft` for clip which will set to **move left** state.
*   `__MoveRight` for clip which will set to **move right** state.
*   `__MoveForwardLeft` for clip which will set to **move forward left** state.
*   `__MoveForwardRight` for clip which will set to **move forward right** state.
*   `__MoveBackwardLeft` for clip which will set to **move backward left** state.
*   `__MoveBackwardRight` for clip which will set to **move backward right** state.
*   `__Jump` for clip which will set to **jump** state.
*   `__Fall` for clip which will set to **fall** state.
*   `__Hurt` for clip which will set to **hurt** state.
*   `__Dead` for clip which will set to **dead** state.
*   `__Action` for clip which will set to **action** state.
*   `__CastSkill` for clip which will set to **cast skill** state.

And also add parameters:

*   `IsDead`(boolean) this will be `TRUE` while character is dead.
*   `IsGrounded`(boolean) this will be `TRUE` while character is stand on the ground.
*   `MoveSpeed`(float) this will be > 0 while character move forward and < 0 while character move backward.
*   `SideMoveSpeed`(float) this will be > 0 while character move right and < 0 while character move left
*   `DoAction`(boolean) this will be `TRUE` while character is attacking or activate skill
*   `IsCastingSkill`(boolean) this will be `TRUE` while character is casting skill
*   `Hurt`(trigger) this will trigger when character receive damage
*   `Jump`(trigger) this will trigger when character jump
*   `MoveSpeedMultiplier`(float) this should set to action state -> multiplier parameter
*   `ActionSpeedMultiplier`(float) this should set to move states -> multiplier parameter

* * *

!INCLUDE "./game-data/_character-model-helper-context-menu.md"

* * *

After done you can save it as prefab (drag to any folder in `Project` tab).