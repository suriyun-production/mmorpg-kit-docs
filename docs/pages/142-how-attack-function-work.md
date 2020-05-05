# How attack function work?

When player attack with `BaseCharacterEntity` -> `RequestAttack` function, then it will send networking message to server. 

Then at server-side after received the message, it will call `BaseCharacterEntity` -> `NetFuncAttack` function to process attack function, it also prepare attack animation here and then at the server-side it will call `BaseCharacterEntity` -> `RequestPlayAttackAnimation` which will send networking message to clients to play attack animation by `BaseCharacterEntity` -> `NetFuncPlayAttack` function. 

The function: `BaseCharacterEntity` -> `NetFuncPlayAttack` also called at server-side too.

Then when `BaseCharacterEntity` -> `NetFuncPlayAttack` called, it will play character attack animation, then apply damage with `BaseCharacterEntity` -> `ApplyAttack` function.

About skill, it's working in a similar way, just uses different functions.