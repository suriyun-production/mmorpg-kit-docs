* * *

MMORPG KIT 1.25 — Text/InputField Migration
===========================================

For version 1.25 and above I have decided to use TextWrapper/InputFieldWrapper to make it able to switch to other text/input field components easily, but for old user, you should do migration

It’s easy just drag UI prefab to empty scene

![](https://cdn-images-1.medium.com/max/1600/1*0H5aCN9_CRyeysCocoSNjg.png)

Then create new game object and add **MigrateUIWrapper** component

![](https://cdn-images-1.medium.com/max/1600/1*y9xnyfpywDMalydMs2dyNA.png)

Then call function **Migrate UIs** from context menu

![](https://cdn-images-1.medium.com/max/1600/1*hKfFgiPQ5E1N0tjIf32Omw.png)

Then save all prefab, done :)

And if you want to use Text Mesh Pro, you have to install Text Mesh Pro package and add symbol “USE\_TEXT\_MESH\_PRO” to “Scripting Define Symbols” at “Build Settings” section

![](https://cdn-images-1.medium.com/max/1600/1*LAjEyLaOihwzk3-GpPJY-Q.png)