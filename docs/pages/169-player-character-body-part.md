# Player Character Body Part

It has a component named `PlayerCharacterBodyPartComponent` which used for character appearance customization by changing model and its materials, it works by using custom data, it will store data by using keys from `Model Setting Id` and `Color Setting Id` to store indexes of data (in `Options`).

in that component it have following settings:

- `Model Setting Id` a key to store model index, for example if I want to set a part for hair, I will set it to `hair`.
- `Color Setting Id` a key to store color index, for example if I want to set a part for hair, I will set it to `hair_color`.
- `Options` a collection of models, each of it is contains a collection of colors, so you can set difference amount of hair color for each hair style.

If you are going to add another part for example, "eyebrow", you will have to add a new component, then you may set `Model Setting Id` to `eyebrow` and `Color Setting Id` to `eyebrow_color`.

## Model Option

Model option settings will contains:

- `Default Title` and `Language Specific Titles` are settings for its title which will be shown in entry UIs.
- `Icon` a icon which will be shown in entry UIs.
- `Models` a collection of models which will be instantiates (or activated pre-instantiated child game objects).
- `Colors` a collection of colors for the models, read **Color Option** for more information.

## Color Option

Color option settings will contains:

- `Default Title` and `Language Specific Titles` are settings for its title which will be shown in entry UIs.
- `Icon` a icon which will be shown in entry UIs.
- `Icon Color` color for the `Icon`.
- `Model Color Settings` a collection of model color settings, each setting is for each `Models` (in **Model Option**), so its index is index of `Models`.

### Model Color Setting

It has only `Materials`, which is list of materials that will be applied to model's mesh renderer's [materials](https://docs.unity3d.com/Manual/class-MeshRenderer.html)

## UI components

- `UI Body Part Model Option` it is a UI component for model options, we will create its prefab and set the prefab to `UIBodyPartManager` later.
- `UI Body Part Color Option` it is a UI component for color options, we will create its prefab and set the prefab to `UIBodyPartManager` later.
- `UI Body Part Manager` is a component which being used for body part management. It will activate `Ui Model Root` game object if selected character has a body part which its model setting Id is equals to `Model Setting Id`. Otherwise it will deactivate, so I use it to show/hide model options. Then it will instantiates `Ui Model Prefab` into `Ui Model Container` as a list's entries. And when entry selected it will show `Ui Selected Model`, you can set `Ui Selected Model` to be empty if you don't want to show anything. It will activate `Ui Color Root` game object if selected character has a body part which its color setting Id is equals to `Color Setting Id` and selected model have an options to select. Otherwise it will deactivate, so I use it to show/hide color options. Then it will instantiates `Ui Color Prefab` into `Ui Color Container` as a list's entries. And when entry selected it will show `Ui Selected Color`, you can set `Ui Selected Color` to be empty if you don't want to show anything.