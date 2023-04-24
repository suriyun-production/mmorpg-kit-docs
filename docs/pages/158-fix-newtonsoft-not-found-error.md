# Fix Newtonsoft JSON Not Found Error

*You will find this error because you weren't following the getting started document. It is a bit upsetting when some of you say the document is outdated, but why do I have to write it while you guys don't read it?*

You have to install newtonsoft-json package by

Go to your project folder then `/Packages` edit `manifest.json`, Add
```
 "com.unity.nuget.newtonsoft-json": "3.0.2"
```
Into dependencies

![](../images/json-deps.png)

Or use Package manager from menu `Window` -> `Package Manager`

![](../images/json-package-install-1.png)

![](../images/json-package-install-2.png)