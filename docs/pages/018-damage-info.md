# Damage Info

`Damage Info` is part of `Weapon Type`, `Skill` and `Monster Character`. Use it to set how weapon, skill applies damages to other characters.

Now there are:

`Melee` will applies damages to characters within `Hit Distance` and `Hit Fov` it detects characters by [Overlap Sphere](https://docs.unity3d.com/ScriptReference/Physics.OverlapSphere.html) at character entity's `Melee Damage Transform` position

![](https://cdn-images-1.medium.com/max/1600/1*KpiiLAWmjcrBA2FJu2G5VA.png)

* * *

`Missile` will applies damages to characters by instantiates `Missile Damage Entity` and move it forwarding. When `Missile Damage Entity`'s collider triggers to other characters it will applies damages. Missile lifetime before it destroyed from the scene will be calculated by `Missile Distance` and `Missile Speed`.

About `Missile Damage Entity`, it will spawn when character attack or use skill at `Missile Damage Transform` you can attach render component such as mesh or particles system and you must attaches collider and rigidbody components to makes it works.

For 2D game, you must attach collider 2d and rigidbody 2d. And makes an render component such as missile sprite point down because this is right direction.

![](https://cdn-images-1.medium.com/max/1600/1*l35QTjuQFjryyIdOuSP-tg.png)

* * *

`Raycast` will applies damages by raycasting from entity's `Missile Damage Entity` to `Aim Position`. If raycasts hits other characters it will applies damages. `Projectile Effect` will instantiates when character attack and move from `Missile Damage Entity` to `Aim Position`. `Projectile Effect` lifetime before it destroyed from the scene will be calculated by `Missile Distance` and `Missile Speed`.