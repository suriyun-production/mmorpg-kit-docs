# How to create interactable objects
You can create interactable objects by create a new component which implements following interfaces:

- **IActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player press activate key
- **IHoldActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player hold-press activate key
- **IPickupActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player press pickup key

## Function Description

### Shared for all interfaces
- **SetAsTargetInOneClick** - This must return `TRUE`, if you want controller to set this entity as target immediately in one click. if it is `FALSE`, first click will select it for information viewing, second will set it as target. For example, an item drop entities will returns `TRUE` because it can just pickup an items immediately it one-click, it is not like monster or other entities which should wait player to decide to attack or do something.
- **NotBeingSelectedOnClick** - This must return `TRUE`, if you want controller to *NOT* set this entity as selecting entity. For some entities such as building foundation may allow character to move pass it so set it to `TRUE` to allow to move pass it.
- **GetActivatableDistance** - Distance to players that allows them to activate.
- **ShouldClearTargetAfterActivated** - If this returns `TRUE`, when character moved to it and activated, it will clear player's target from controller.

### IActivatableEntity
- **ShouldBeAttackTarget** - If this returns `TRUE`, when set this entity as a target, character will move to it to attack. Otherwise it will move to it to activate.
- **ShouldNotActivateAfterFollowed** - If this returns `TRUE`, when playing character followed this entity it won't activate, I've set this to `TRUE` for player character entity because I want it to activate player character entities only when press activate button.
- **CanActivate** - Can activate or not? return `TRUE` if it can.
- **OnActivate** - Put anything you want to do when interact the object.

### IHoldActivatableEntity
- **CanHoldActivate** - Can activate or not? return `TRUE` if it can.
- **OnHoldActivate** - Put anything you want to do when interact the object.

### IPickupActivatableEntity
- **CanPickupActivate** - Can activate or not? return `TRUE` if it can.
- **OnPickupActivate** - Put anything you want to do when interact the object.

### Example
```CSharp
using MultiplayerARPG;

public class LogHelloWorldOnActivate : MonoBehaviour, IActivatableEntity
{
    public Transform EntityTransform => transform;
 
    public GameObject EntityGameObject => gameObject;
 
    public bool CanActivate()
    {
        return true;
    }
 
    public float GetActivatableDistance()
    {
        return 10f;
    }
 
    public bool NotBeingSelectedOnClick()
    {
        return false;
    }
 
    public void OnActivate()
    {
        Debug.LogError("Hello, World");
    }
 
    public bool SetAsTargetInOneClick()
    {
        return false;
    }
 
    public bool ShouldBeAttackTarget()
    {
        return false;
    }
 
    public bool ShouldClearTargetAfterActivated()
    {
        return false;
    }
 
    public bool ShouldNotActivateAfterFollowed()
    {
        return false;
    }
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExODIwMjE4NDcsMTM3NDQ1NjA1OF19
-->