# Item Drops (Item Drop Entity)

Every item drop objects will be spawned as **Item Drop Entity** around the character, we have to prepare just one **Item Drop Entity** for all item drop objects but we will have to prepare model objects that will be spawned as **Item Drop Entity** child

For the demo, I’ve prepared the **Item Drop Entity** which located at **/Assets/UnityMultiplayerARPG/Demo/Prefabs/Gameplay**

![](https://cdn-images-1.medium.com/max/1600/1*idjFgCp3XFBFWti6f2z49Q.png)

It attaches the following components:

*   **Item Drop Entity**, it will be used as a networking component which set model object for clients to show where and which item dropped. Its **Model Container** is the transform where model objects will be spawned as its children.
*   **Box Collider**, it will be used to detect mouse click / touch event you can use another collider if you want.
*   **Animator**, I’ve used it to play drop animation, by move / rotate **Model Container**.
*   **Lite Net Lib Visible Checker**, I’ve used it to not send networking message when your character is far from it.

So you can change drop animation as you wish, then after you prepared your **Item Drop Entity** and made it as a prefab. You have to set it to **Game Instance -> Item Drop Entity Prefab**

![](https://cdn-images-1.medium.com/max/1600/1*tCJkCdrsuXgNR5d-8mVdlw.png)

* * *

Then each item will have a different drop model right?

You can prepare drop model by creating a static model prefab for the item and set it to **Item -> Drop Model**

![](https://cdn-images-1.medium.com/max/1600/1*52DW9YncPRHeBelA0zbmhw.png)

But you should adjust its position, rotation and scale by drag the static model prefab to **Item Drop Entity -> Model Container** then adjust transform then make it as prefab.