# How to create interactable objects
You can create interactable objects by create a new component which implements following interfaces:

- **IActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player press activate key
- **IHoldActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player hold-press activate key
- **IPickupActivatableEntity** - Implement this if you want to create a interactable object which can be interacted when player press pickup key

## Function Description

### Shared for all interfaces
- **SetAsTargetInOneClick** - This must return `TRUE`, if you want controller to set this entity as target immediately in one click. if it is `FALSE`, first click will select it for information viewing, second will set it as target. For example an item drop entities this will returns `TRUE` because, it can just pickup an items immediately it one-click, it is not like monster or other entities which should wait player to decide to attack or do something.

### IActivatableEntity

### IHoldActivatableEntity

### IPickupActivatableEntity
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk2OTgxNDY5MV19
-->