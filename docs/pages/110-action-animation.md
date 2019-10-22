# Action Animation

*   `Clip` set `Animation Clip` as you wish to play specific action animation.
*   `Trigger Duration Rate` is rate from total animation clip length to trigger an action events to do actions such as hit enemy or spawn magical projectile. For example, if attack animation length is 2 seconds, and this value is 0.5, then 1 second after start play this animation clip, an enemies will receives damages
*   `Duration Type` there are 2 types: `By Clip Length` and `By Fix Value`. for the first one, next action will be able to play after animation clip length duration. for the second one, next action will be able to play after `Fix Duration Value` duration.
*   `Extra Duration` some duration which will sum with animation clip length or `Fix Duration Value`, may use it to play idle animation before next attack animation.
*   `Audio Clips` an audio clips which will play randomly when trigger an action events.