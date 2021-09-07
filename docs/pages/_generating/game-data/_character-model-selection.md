Then setup character model component based on dimension (2D or 3D) and animation type.

## 3D Character Model

*   **[Playable CharacterModel](pages/149-playable-character-model ':target=__blank')**, this character model is using [playable graph](https://docs.unity3d.com/Manual/Playables-Graph.html) to play animations, its performance is better than `Animator Character Model`. Its state settings can be set in components settings only, cannot set state settings in `Animtor` window like `Animator Character Model`.
*   **[Animator Character Model](pages/108-animator-character-model ':target=__blank')**, This character model will support **[Mechanim Animation System](https://docs.unity3d.com/Manual/AnimationOverview.html ':target=__blank')** only, it's using pre-made animator controller then override it at runtime to change animation but it's allow to make custom animator controller too with some conditions.
*   **[Animation Character Model](pages/107-animation-character-model ':target=__blank')**, This character model will support **[Legacy Animation System](https://docs.unity3d.com/Manual/Animations.html ':target=__blank')** only.

## 2D Character Model

*   **[Character Model 2D](pages/109-character-model-2d ':target=__blank')**, This is character model for 2D game, it's use `Animation Clip 2D` to manage animation's frames