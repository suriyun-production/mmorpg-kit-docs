# Animation Clip 2D

This is contains following settings:
*   `Frames` this is list of sprites which will be used to make animation.
*   `Frame Per Sec` this is frame per seconds.
*   `Loop` if this is `TRUE` it will loop, set this to `TRUE` for idle, move animations.
*   `Flip X` if this is `TRUE` it will flip sprites on X-axis.
*   `Flip Y` if this is `TRUE` it will flip sprites on Y-axis.

* * *

# Character Animation 2D

You can set `Animation Clip 2D` for each directions there are: `Down`, `Up`, `Left`, `Right`, `Down Left`, `Down Right`, `Up Left` and `Up Right`. If your character have only 4 directions, you leave `Right`, `Down Left`, `Down Right`, `Up Left` and `Up Right` empty.

## Action Animation 2D

This is extended from `Character Animation 2D` so it will contains settings from `Character Animation 2D`.

*   `Trigger Duration Rate` is rate from total animation clip length to trigger an action events to do actions such as hit enemy or spawn magical projectile. For example, if attack animation length is 2 seconds, and this value is 0.5, then 1 second after start play this animation clip, an enemies will receives damages.
*   `Extra Duration` some duration which will sum with animation clip length or `Fix Duration Value`, may use it to play idle animation before next attack animation.
*   `Audio Clips` an audio clips which will play randomly when trigger an action events.