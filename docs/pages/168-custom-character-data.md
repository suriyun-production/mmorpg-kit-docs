# Custom Character Data

There are collections of key/value for player characters, which can be used to store custom data as you wish.

It have 3 kind of how data syncing are: Server, Private, and Public.

- `Server` data won't being synced with clients, it will being used by server only, you may use it to store quest data for checking quest steps or progress.
- `Private` data won't being synced with non-owner clients, you may use it to develops weapon's mastery which its level can be increased by weapon usage time.
- `Public` data will be synced to all clients, you may use it to develops character's appearances system.

And it have 3 kind of custom data types are: Boolean, Integer, and Float.

* * *

You can access the collections from `Player Character Entity` and `Player Character` by these properties:

### Server custom data
```
IList<CharacterDataBoolean> ServerBools { get; set; }
IList<CharacterDataInt32> ServerInts { get; set; }
IList<CharacterDataFloat32> ServerFloats { get; set; }
```

### Private custom data
```
IList<CharacterDataBoolean> PrivateBools { get; set; }
IList<CharacterDataInt32> PrivateInts { get; set; }
IList<CharacterDataFloat32> PrivateFloats { get; set; }
```

### Public custom data
```
IList<CharacterDataBoolean> PublicBools { get; set; }
IList<CharacterDataInt32> PublicInts { get; set; }
IList<CharacterDataFloat32> PublicFloats { get; set; }
```