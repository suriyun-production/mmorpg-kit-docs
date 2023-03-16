# Sheathing Animations

Sheathing animations is available for `Playable Character Model` only.

Its default settings in `Default Animations` are `Right Hand Weapon Sheathing Animation`, `Left Hand Weapon Sheathing Animation`, and `Left Hand Shield Sheathing Animation`.

Each having these settings:
- `Sheath State` settings for sheath animation state you can set animation clip, animation mask, speed rate and so on here. You should set set animation which move your character hand to your character back and hide item model here.
- `Sheathed Duration Rate` this is rate of animation clip's length to hide item model, for example: if animation clip's length is `2` seconds, and if this value is `0.5`, then it will hide item model after animation clip played `1` seconds.
- `Unsheath State` settings for unsheath animation state you can set animation clip, animation mask, speed rate and so on here. You should set set animation which move your character hand to your character back to change item model and move your character hand back to idle animation here.
- `Unsheathed Duration Rate` this is rate of animation clip's length to hide item model, for example: if animation clip's length is `2` seconds, and if this value is `0.5`, then it will change item model to the new one after animation clip played `1` seconds.

## Weapon Type specific settings

You can set Sheath/Unsheath animations for difference weapon type in each `Weapon Animations` entries.