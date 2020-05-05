# Water Area

Water area can be any type of game object which attached collider components. You will have to set game object's layer to `Water` and turn on collider -> `isTrigger` to make it works.

![](../images/npcs/140-01.png)

* * *

## Settings relates to Swimming System

Now, only characters which uses `RigidbodyEntityMovement` as their entity movement component will be able to swim.

There are new settings for swimming are:

*   `Under Water Threshold` For example of how it work. If character height is `1`, `Under Water Threshold` set to `0.5` and water height is `0.55`. Character will start swimming. If water eight is `0.48`. Character won't start swimming.
*   `Auto Swim To Surface` If this is turned on, character will swim up to surface automatically, turn it off if you want character able to diving.