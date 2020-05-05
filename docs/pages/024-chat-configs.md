* * *

MMORPG KIT — Chat Configs
=========================

With this project it’s currently have following chat channels there are:

*   **Local**, messages will be sent to nearby characters within setup distance
*   **Global (/a {message})**, messages will be sent to all characters in the server
*   **Whisper (/w {character name} {message})**, messages will be sent to the specific character
*   **Party (/p {message})**, messages will be sent to characters in the same party
*   **Guild (/g {message})**, messages will be sent to characters in the same guild

* * *

For local chat, you can set distance for the local chat at **Game Instance** -> **Local Chat Distance**

![](https://cdn-images-1.medium.com/max/1600/1*6Nt_N7I-ycnACulVsJJX1A.png)

* * *

For chat commands, you can customize them in **UI Chat Handler**.

For the demo, I’ve attached it to **CanvasGameplay -> Chat**, so if you want to customize it, you have to drag **CanvasGameplay** prefab to any scene then find for **UIChatHandler** then changes configs

![](https://cdn-images-1.medium.com/max/1600/1*1xb60jN5hJzXry6lnVOO6g.png)