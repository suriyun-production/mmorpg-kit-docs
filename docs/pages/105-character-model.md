# Character Model reparation

This package have an character model components to use for difference purposes there are:

## 3D Character Model

*   **[Animator Character Model](pages/108-animator-character-model)**, This character model will support **[Mechanim Animation System](https://docs.unity3d.com/Manual/AnimationOverview.html)** only, it's using pre-made animator controller then override it at runtime to change animation but it's allow to make custom animator controller too with some conditions.
*   **[Animation Character Model](pages/107-animation-character-model)**, This character model will support **[Legacy Animation System](https://docs.unity3d.com/Manual/Animations.html)** only.
*   **[Character Model](pages/106-legacy-character-model)**, This is the old one which supports both **[Legacy Animation System](https://docs.unity3d.com/Manual/Animations.html)** and **[Mechanim Animation System](https://docs.unity3d.com/Manual/AnimationOverview.html)** but it's harder to use than `Animator Character Model`.

To prepare 3D character model you can drag skinned mesh to empty scene then add component above and set an settings that is it.

* * *

## 2D Character Model

*   **[Character Model 2D](pages/109-character-model-2d)**, This is character model for 2D game, it's use `Animation Clip 2D` to manage animation's frames

To prepare 2D character model you can create empty game object in empty scene then add component above and set an settings that is it. You should add `Sprite Renderer` as its child for more ease of transform adjustment.

* * *

## Generic Character Model Settings

For all character models, there are some settings that use same steps:

### Hidding Objects

This is a list of game objects which will be deactivated when hidden, character model can be hidden in shooter game mode when zooming with guns.

You can set just root of bone here because when root deactivated, all equipment models that are its children will be hidden too.

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

## Helper Context Menu

Context menu is menu which will appear when click on gear icon on top-left of component  in `Inspector`, sometime you might want to copy animations from character model to other character models you can use context menu to do it easily.

![](../images/105/11.png)