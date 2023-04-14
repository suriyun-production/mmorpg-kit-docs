# Action Restriction and Movement Restriction

## Action Restriction
Action restriction is part of `Weapon Item` and `Skill`, you can use it to disallow some of character's actions, for example, if you have giant axe which should not be able to attack while falling in the air, you can turn on weapon item's -> `attackRestriction` -> `restrictedWhileAirborne` option to do it.

Action restriction have following options:
- `restrictedWhileAirborne`, Turn this on if you want to disallow character's attacking, reloading or use skills while jumping or falling.
- `restrictedWhileCrouching`, Turn this on if you want to disallow character's attacking, reloading or use skills while crouching.
- `restrictedWhileCrawling`, Turn this on if you want to disallow character's attacking, reloading or use skills while crawling.

## Movement Restriction
Movement restriction is part of `Weapon Item` and `Character Entity`, you can use it to disallow some of character's movements, for example, if that giant axe is too heavy so the character won't be able it jump while it is swinging, you can turn on weapon item's -> `movementRestrictionWhileAttacking` -> `jumpRestricted` option to do it.

Movement restriction have following options:
- `jumpRestricted`, Turn this on if you want to disallow to jump while character is attacking, reloading or charging.
- `turnRestricted`, Turn this on if you want to disallow to turn while character is attacking, reloading or charging.