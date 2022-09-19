# How to integrate Facebook Login

To integrate Facebook login you have to import [Facebook SDK for Unity](https://developers.facebook.com/docs/unity/) and the  `MMO_FacebookLogin` package which included in the kit. 

Then you will have to create your Facebook app from [Facebook Apps Dashboard](https://developers.facebook.com/apps/)

You may see how to do it from

*   [https://developers.facebook.com/docs/unity/gettingstarted](https://developers.facebook.com/docs/unity/gettingstarted)
*   [https://developers.facebook.com/docs/unity/getting-started/ios](https://developers.facebook.com/docs/unity/getting-started/ios)
*   [https://developers.facebook.com/docs/unity/getting-started/android](https://developers.facebook.com/docs/unity/getting-started/android)

* * *

## Setup UIs

Then open your login scene (for the demo it is Home scene), add **Facebook Login** component to any game object (for the demo, I’ve added it at CanvasHome -> UILogin)

![](https://cdn-images-1.medium.com/max/1600/1*UlYwaQVPnNAxpZA-saF3aA.png)

Then set an events when Login success / fail, the Demo I make it show character list after success

Then in your Login with Facebook button set **Facebook Login** component -> **On Click Facebook Login** at **On Click** event

![](https://cdn-images-1.medium.com/max/1600/1*qlY44CvGzdY84ETGrc-4ow.png)
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTE1NDQwMDg5XX0=
-->