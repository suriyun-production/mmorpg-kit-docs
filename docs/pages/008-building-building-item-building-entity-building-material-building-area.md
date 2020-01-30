# Building (Building Item / Building Entity / Building Material / Building Area)

### Building Items

Building items are an items that can active to build an building, it is required Building Entity prefab, so you have to learn more about `Building Entity`, `Building Material` and `Building Area`

* * *

### Building Entity

Building entity is root object for building model which will represent while playing the game when building, you can create new building entity by add `Building Entity` component to game object, you can set following data for Building entity:

*   `Title`, title/name of building
*   `Building Type`, this is value which use to match with building area to find where to place this building
*   `Character Forward Distance`, forwarding distance from character to place pre-building entity
*   `Max Hp`, Maximum Hp, if this value equals to 0 the building will be destroyed
*   `Combat Text Transform`, we will use this transform's position to show damage amount when attacked

As it is just root object for building model so we usually add building models as its children then attach `Building Material` component to handle building model's material and collider/collision events

* * *

### Door Entity

Door entity is one of building entity which player can interact to toggle open state, there is an events for each states for developer to player open / close animation, toggle colliders and so on. Developer can set:

*   `Lockable`, if this is `TRUE` it will be able to lock with 0-6 digits number and unlock. While it's locking, players have to enter passcode to use it.

* * *

### Storage Entity

Storage entity is one of building entity which player can interact to open storage to manage items. Developer can set:

*   `Lockable`, if this is `TRUE` it will be able to lock with 0-6 digits number and unlock. While it's locking, players have to enter passcode to use it.
*   `Weight Limit`, if this less than or equals to 0 it will not limit
*   `Slot Limit`, if this less than or equals to 0 it will not limit

It is also have an events for each states for developer to player open / close animation, toggle colliders and so on

* * *

### Workbench Entity

Workbench entity is one of building entity which player can interact to craft an items. Developer can set:

*   `Item Crafts`, the list of items that can craft with this workbench

* * *

### Building Material

Building material is component which handle building model's material, it will change materials to `Can Build Materials` when building can place to target, will change materials to `Cannot Build Materials` when building cannot place to target, default materials will be used when building already built

You should attach this component at same game object with collider component to handle trigger events

* * *

### Building Area

Building area is component which handle where to place build objects, you can add it to terrain or ground as where to place foundation, you can add it as children of build object as where to place another building entity

For example foundation can have 4 building areas as its children as where to place walls

![](https://cdn-images-1.medium.com/max/1600/0*fr-UNDnavAv3Z5n6)

The `Building Type` will matching with Building entity's `Building Type` to allow player to place building entity

If `Snap Building Object` is set to `TRUE`, building entity's position will snap to building area's world position. For example, Foundation have 4 building areas for walls, it will set `Snap Building Object` to `TRUE` to make building entity's position set to building area's world position when build

You also have to add collider for building area and adjust it to allow player to find position to build the building