* * *

MMORPG KIT — Damage Info (Melee Damage / Missile Damage / Missile Damage Entity)
================================================================================

Damage Info is part of Weapon Type / Skill, use it to set how weapon / skill apply damage.

Now there are:

Melee damage will apply damage to characters that in `Hit Distance` and `Hit Fov` it detects characters by [Overlap Sphere](https://docs.unity3d.com/ScriptReference/Physics.OverlapSphere.html) at character entity’s `Melee Transform` position

![](https://cdn-images-1.medium.com/max/1600/1*KpiiLAWmjcrBA2FJu2G5VA.png)

* * *

Missile damage will apply damage to characters by `Missile Damage Entity`'s collider triggers, missile lifetime before destroy from scene will be calculated by `Missile Distance` and `Missile Speed`

About Missile Damage Entity, it will spawn when character attack or use skill at `Missile Transform` you can attach render component such as mesh or particle system and you must attach collider and rigidbody.

For 2d game, you must set `Dimension Type` to `Dimension 2D` and attach collider 2d and rigidbody 2d. You should add an render component such as sprite as its child and rotate it to make it point down

![](https://cdn-images-1.medium.com/max/1600/1*l35QTjuQFjryyIdOuSP-tg.png)