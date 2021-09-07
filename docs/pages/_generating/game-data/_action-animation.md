### Action Animation

*   `Clip` set `Animation Clip` as you wish to play specific action animation.
*   `Play Clip All Layers`,  if this is `TRUE` it will player action clip all layers.
*   `Anim Speed Rate`, this will be multiplied while playing action animation. If this <= 0, it will not be used to calculates with animation speed multiplier.
*   `Trigger Duration Rate` this value will multiplies with animation clip's length to trigger an action events to do actions such as hit an enemies or spawn magical projectiles. For example, if attack animation length is 2 seconds, and this value is 0.5, then 1 second after start play this animation clip, an enemies will receives damages.
*   `Multi Hit Trigger Duration Rates`, if this length more than 1, will use each entry as trigger duration rate.
*   `Duration Type` there are 2 types: `By Clip Length` and `By Fixed Duration`. for the first one, next action will be able to play after animation clip length duration. for the second one, next action will be able to play after `Fixed Duration` duration.
*   `Extra Duration` some duration which will sum with animation clip length or `Fix Duration Value`, may use it to play idle animation before next attack animation.
*   `Audio Clips` an audio clips which will play randomly when trigger an action events.