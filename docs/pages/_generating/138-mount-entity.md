# How to create Mount Entity

To create new mount, you have to prepare vehicle type, which made for character animtion specification while passenging vehicle, you can create new vehicle type by:

- Right click on `Project` panel
- Choose `Create` -> `Create Game Data` -> `Vehicle Type`

![](../images/1-46-1.png)

* * *

Then prepare mount entity, it's like when you prepare character entity, you have to drag skinned mesh to empty scene then add `Mount Entity` component. If your project is 2D, you can create empty game object then add `Mount Entity` component.

Then set created `Vehicle Type` to `Mount Entity` -> `Vehicle Type` field.

Then setup `Seats`, it must have at least 1 seat. Each seat you can set following options:

- `Passenging Transform` where character position will be while passenging the vehicle.
- `Exit Transform` where character position will be when exit from vehicle.
- `Can Attack`, if this is `TRUE` character will able to attack while passenging this vehicle in this seat.
- `Can Use Skill`, if this is `TRUE` character will able to use skill while passenging this vehicle in this seat.
- `Camera Target`, this is target for camera while character passenging this vehicle.

And set other options as you wish.

![](../images/1-46-2.png)

* * *

!INCLUDE "./game-data/_character-model-selection.md"

* * *

!INCLUDE "./game-data/_entity-movement-selection.md"

* * *

!INCLUDE "./game-data/_entity-put-to-database.md"