# Animation Character Model

This component working by just change animation clip by `CrossFade` function, you will have to set `Animation` component to `Legacy Animation` field and add an animation clips.

To setup this component, you should learn about [Legacy Animation System](https://docs.unity3d.com/Manual/Animations.html) and [Animation Clip](https://docs.unity3d.com/Manual/AnimationClips.html).

* * *

You can prepare it after prepared `Character Entity` then add `Animation Character Model` component, then setup following settings:

### Hidding Objects

This is a list of game objects which will be deactivated when hidden, character model can be hidden in shooter game mode when zooming with guns.

You can set just root of bone here because when root deactivated, all equipment models that are its children will be hidden too.

* * *

### Effect Containers

Effect container was made to instantiates effects (particles, sfx and so on) to difference positions, some buff effects may instantiates at character hands, some effects may instantiates at character body.

To set a container, you have to create empty game object then set its position to where you wish the effects to instantiates.

For example, `Body` container's position will be located at center of character like this

![](../images/105/1.png)

Then drag it to `Effect Containers` and set `Effect Socket`

![](../images/105/2.png)

That is it, but there is another way to setup effect container by using `Effect Container Setter`

You have to create empty game object, set its position, then you have to set its name as `Effect Socket` and attach `Effect Container Setter` to the game object

![](../images/105/3.png)

Then go back to character model and press on `Set Effect Containers by Setters` button

![](../images/105/4.png)

Finally, the effect container has been set

![](../images/105/5.png)

* * *

### Equipment Containers

Equipment container was made to instantiates equipments (helment, armor, sword and so on) to difference positions, some equipments may instantiates at character hands, some equipments may instantiates at character body.

To set a container, you have to create empty game object then set its position to where you wish the equipments to instantiates.

For example, `Head` container's position will be located at character head bone like this

![](../images/105/6.png)

Then drag it to `Equipment Containers`, set `Equip Socket` and set `Default Model` it is the model which will be deactivated when equip the equipment and activated when unequip the equipment, for example `Hair` is default model it will be deactivated to hide it when equip `Helmet`

![](../images/105/7.png)

That is it, but there is another way to setup equipment container by using `Equipment Container Setter`

You have to create empty game object, set its position, then you have to set its name as `Equipment Socket` and attach `Equipment Container Setter` to the game object

![](../images/105/8.png)

Then go back to character model and press on `Set Equipment Containers by Setters` button

![](../images/105/9.png)

Finally, the equipment container has been set

![](../images/105/10.png)
* * *

## Animation Clip Settings

Before looking into animation clip settings list, I want you to know about `Action Animation` settings

### Action Animation

*   `Clip` set `Animation Clip` as you wish to play specific action animation.
*   `Play Clip All Layers`,  if this is `TRUE` it will player action clip all layers.
*   `Anim Speed Rate`, this will be multiplied while playing action animation. If this <= 0, it will not be used to calculates with animation speed multiplier.
*   `Trigger Duration Rate` this value will multiplies with animation clip's length to trigger an action events to do actions such as hit an enemies or spawn magical projectiles. For example, if attack animation length is 2 seconds, and this value is 0.5, then 1 second after start play this animation clip, an enemies will receives damages.
*   `Multi Hit Trigger Duration Rates`, if this length more than 1, will use each entry as trigger duration rate.
*   `Duration Type` there are 2 types: `By Clip Length` and `By Fix Value`. for the first one, next action will be able to play after animation clip length duration. for the second one, next action will be able to play after `Fix Duration Value` duration.
*   `Extra Duration` some duration which will sum with animation clip length or `Fix Duration Value`, may use it to play idle animation before next attack animation.
*   `Audio Clips` an audio clips which will play randomly when trigger an action events.
* * *

All animation clip settings contains:

*   `Default Animations` this is contains default animation clips and action animations
*   `Weapon Animations` each of this is contains animation clips and action animations for specific `Weapon Type`.
*   `Skill Animations` each of this is contains skill cast clip and activate skill action animation for specific `Skill`.
*   `Legacy Animation` set `Animation` component here.

* * *

## Helper Context Menu

Context menu is menu which will appear when click on gear icon on top-left of component  in `Inspector`, sometime you might want to copy animations from character model to other character models you can use context menu to do it easily.

![](../images/105/11.png)
* * *

After done you can save it as a prefab (drag to any folder in `Project` tab).