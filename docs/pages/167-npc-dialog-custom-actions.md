# NPC Dialog Custom Actions

You can create an custom actions when enter the NPC dialog and set to NPC dialog's `Enter Dialog Actions On Client` and `Enter Dialog Actions On Server` lists

You may move camera, shake camera or play NPC animation at client by actions which set to `Enter Dialog Actions On Client`.

You may increase/decrease items at server by actions which set to `Enter Dialog Actions On Server`.

You can create a new action by create a new class based on `BaseNpcDialogAction` class, then implement following functions:

- `IsPass` function has a `IPlayerCharacterData player` parameter, it will pass reference to player who enter the NPC dialog, so we can use player data to setup condition to show the dialog's menu, return `TRUE` if player is pass the condition.
- `DoAction` function has a `IPlayerCharacterData player` parameter, it will pass reference to player who enter the NPC dialog, so we can use player data to do something such as increase/decrease player's items.

*This function can be async function, so we can make it connect to external services to validate some data or do something with external services.*

To use it, you must create a new scriptable object of your class, then set to dialog's `Enter Dialog Actions On Client` or `Enter Dialog Actions On Server` list.

![](../images/167/1.png)