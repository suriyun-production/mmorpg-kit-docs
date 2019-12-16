# Damage Info

Damage Info is part of Weapon Type / Skill, use it to set how weapon / skill apply damage.

Now there are:

`Melee` damage will apply damage to characters that in `Hit Distance` and `Hit Fov` it detects characters by [Overlap Sphere](https://docs.unity3d.com/ScriptReference/Physics.OverlapSphere.html) at character entity’s `Melee Transform` position

![](https://cdn-images-1.medium.com/max/1600/1*KpiiLAWmjcrBA2FJu2G5VA.png)

* * *

`Missile` damage will apply damage to characters by `Missile Damage Entity`'s collider triggers, missile lifetime before destroy from scene will be calculated by `Missile Distance` and `Missile Speed`.

About Missile Damage Entity, it will spawn when character attack or use skill at `Missile Damage Transform` you can attach render component such as mesh or particle system and you must attaches collider and rigidbody components.

For 2D game, you must attach collider 2d and rigidbody 2d. And makes an render component such as missile sprite point down because this is right direction.

![](https://cdn-images-1.medium.com/max/1600/1*l35QTjuQFjryyIdOuSP-tg.png)

* * *

`Raycast`