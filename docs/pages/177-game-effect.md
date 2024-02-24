# Game Effect

`Game Effect` is a component which made for special effect playing, it will play particles, audio sources that attached to the game object and its children 
when play function is called (it will be called and play automatically when get instance from pooling system).

When it is going to play on game entity (character/monster and so on)
it will be instantiated and move following to game entity model's effect container which has a same `effectSocket`, 
for example, the demo's level up effect which its `effectSocket` is "Floor" and game entity's `effectContainers` has one with "Floor" too.

![](../images/177/1.png)

![](../images/177/2.png)

So if your game effect don't play as you wish, you have to check game effect's `effectSocket` and game entity's `effectContainers` entries.
