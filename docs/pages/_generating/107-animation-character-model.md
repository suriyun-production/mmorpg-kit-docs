# Animation Character Model

This component working by just change animation clip by `CrossFade` function, you will have to set `Animation` component to `Legacy Animation` field and add an animation clips.

To setup this component, you should learn about [Legacy Animation System](https://docs.unity3d.com/Manual/Animations.html) and [Animation Clip](https://docs.unity3d.com/Manual/AnimationClips.html).

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
*   `Legacy Animation` set `Animation` component here.

* * *

!INCLUDE "./game-data/_character-model-helper-context-menu.md"

* * *

After done you can save it as prefab (drag to any folder in `Project` tab).