* * *

MMORPG KIT — How to integrate Google Play Login
===============================================

To integrate Google Play login you have to create app at publisher console ([https://play.google.com/apps/publish/](https://play.google.com/apps/publish/))

Set all Store listing / Pricing & distribution / Content rating and make it available for internal test (manage at Release management → App releases) by upload signed APK file, then Save and Review to make it available for internal test

Then go to **Game Services** from main publisher console page then press on **ADD NEW GAME**

![](https://cdn-images-1.medium.com/max/1600/1*LaAnTnUgow83RewpCjuXhw.png)

Fill an information

![](https://cdn-images-1.medium.com/max/1600/1*1tNUH_iTk4BRANk8NSmYiA.png)

Then link it to your created game

![](https://cdn-images-1.medium.com/max/1600/1*6hSgoMMa-vDR4mx8JlIEVQ.png)

![](https://cdn-images-1.medium.com/max/1600/1*kwBQ5LjEk_X9t_AqaHTCMA.png)

Then do Authorize and Confirm processes

![](https://cdn-images-1.medium.com/max/1600/1*fTC8Tdwpaaz1DD_Vi3sVtw.png)

Create **Events** or **Achievements** or **Leaderboards** then press Get resources button to copy export resources data

![](https://cdn-images-1.medium.com/max/1600/1*z6RLUwgHiwlhsv68BCHBrA.png)

![](https://cdn-images-1.medium.com/max/1600/1*dE1C91ba9RIk2mHApRKqZQ.png)

Then paste copied data to **Unity → Google play games — Android Configuration → Resources Definition**

Then press **Setup**

![](https://cdn-images-1.medium.com/max/1600/1*W7MEg7URb4MCdlQPVNf6bw.png)

![](https://cdn-images-1.medium.com/max/1600/1*971L7V6dx4d06gp4fGgDhg.png)

Go to your **App Console** page then go to **App Signing**

Copy **SHA-1** data at **Upload certificate**

![](https://cdn-images-1.medium.com/max/1600/1*isizWZTmZajxiuBsQJPQig.png)

Then go to API Console ([https://console.cloud.google.com/apis/](https://console.cloud.google.com/apis/)) choose your App project then go to **Credentials**

![](https://cdn-images-1.medium.com/max/1600/1*0XtZoKOkLZSX2g3QZgxsxg.png)

Choose **OAuth Client** then paste copied **SHA-1** and **Save**

![](https://cdn-images-1.medium.com/max/1600/1*3f-q4IzPbFCP4yipZEMdHQ.png)

![](https://cdn-images-1.medium.com/max/1600/1*6HZSYzhG_NNDdzRXZqusPg.png)

Then open your login scene (for the demo it is Home scene), add **Google Play Login** component to any game object (for the demo, I’ve added it at CanvasHome → UILogin)

![](https://cdn-images-1.medium.com/max/1600/1*-K9FCMGntqR_X8f9C-JRzA.png)

Then set an events when Login success / fail, the Demo I make it show character list after success

Then in your Login with Google Play button set **Google Play Login** component → **On Click Google Play Login** at **On Click** event

![](https://cdn-images-1.medium.com/max/1600/1*1pnX7eo4qpOlYbohzriBOw.png)