# Character Model

This is older version of character model component, which I think it's hard to use than the new ones (`Animation Character Model` and `Animator Character Model`).

* * *

You can prepare it after prepared `Character Entity` then add `Character Model` component, then setup following settings:

!INCLUDE "./game-data/_character-model-generic-config.md"

* * *

Then there is a `Animation Type` field. You can set type of animator, there are:

### Animator

Animator mode in this character model working by create [Animator Override Controller](https://docs.unity3d.com/Manual/AnimatorOverrideController.html) at runtime based on `Animator Controller` which set to `Animator Controller` field. Then when character change weapon it can change animation set (idle, move, dead and other animations) based on clip's names which set to `Animator Controller's states`. So.. to make it know which clip's name that going to override by other clips, we have to set clips in `Default Animator Data`.

There are following settings:

*   `Animator` set `Animator` which will be used to handle `Animation Controller` here.
*   `Animator Controller` set `Animator Controller` which will be overrided to change animation set
*   `Default Animator Data` set default clips that will be overrided when change equipment weapons here. Only `Action Clip` and `Cast Skill Clip` are required to be set, other are optionals.
*   `Action State Layer` this is animator controller layer for action state (state for attack and activate skill animations), set layer to layer which has the action state, if you have only 1 layer set it to 0, for **shooter-games** it may have 2 layers for generic movement and actions because most **shooter-games** can attack while moving, you may set it to 1.
*   `Cast Skill State Layer` this is animator controller layer for cast skill state (play "cast skill" animation then play "activate skill" animation later), set layer to layer which has the cast skill state.

### Legacy Animation

Legacy Animation mode in this character model working by just change animation clip by `CrossFade` function, you will have to set `Animation` component to `Legacy Animation` field and add an animation clips to `Legacy Animation Data`.

There are following settings:

*   `Legacy Animation` set `Animation` component here.
*   `Legacy Animation Data` set default clips for generic animtions here.

* * *

## Animation Clip Settings

Before looking into animation clip settings list, I want you to know about `Action Animation` settings

!INCLUDE "./game-data/_action-animation.md"

* * *

An animation clip settings includes:
Default action animation settings:

*   `Default Attack Animations` these action animations will plays randomly when attacking while not equip weapon or while equip weapon that does not set to `Weapon Animations`.
*   `Default Skill Cast Clip` this animation clip will play while casting skill that does not set to `Skill Animations`.
*   `Default Skill Activate Animation` this action animation will play when activate skill that does not set to `Skill Animations`.
*   `Default Reload Animation` this action animation will play when reload while not equip weapon or while equip weapon that does not set to `Weapon Animations`.

Specific animation settings:

*   `Weapon Animations` each of this is contains animation clips and action animations for specific `Weapon Type`.
*   `Skill Animations` each of this is contains skill cast clip and activate skill action animation for specific `Skill`.

* * *

!INCLUDE "./game-data/_character-model-helper-context-menu.md"

* * *

After done you can save it as prefab (drag to any folder in `Project` tab).