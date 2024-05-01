# Custom Map System Loading Awaiting / Procedural Dungeon Generation

You can waiting for custom map systems loading before all of custom map systems are done and ready to instantiates objects (monsters/harvestable and so on),
by telling `BaseGameNetworkManager` for which kind of custom map systems are loading and each is done already or not by storing custom key and and simple boolean value to telling that it is done.

* * *

For the server, you can use dev extension to do it like this:
```
public partial class BaseGameNetworkManager {
    public CustomMapSystem customMapSystem;
    [DevExtMethods("UpdateServerReadyToInstantiateObjectsStates")]
    public void CustomUpdateServerReadyToInstantiateObjectsStates1(Dictionary<string, bool> serverReadyToInstantiateObjectsStates)
    {
        if (!customMapSystem.isDone)
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }
}
```
or by extends `BaseGameNetworkManagerComponent` and implements `UpdateServerReadyToInstantiateObjectsStates` function like this:
```
public class CustomMapSystemGameNetworkManagerComponent : BaseGameNetworkManagerComponent {
    public CustomMapSystem customMapSystem;
    public override void UpdateServerReadyToInstantiateObjectsStates(BaseGameNetworkManager networkManager, Dictionary<string, bool> serverReadyToInstantiateObjectsStates) {
        if (!customMapSystem.isDone)
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }
}
```

* * *

You can do the same thing with client, just change function names:

```
public partial class BaseGameNetworkManager {
    public CustomMapSystem customMapSystem;
    [DevExtMethods("UpdateClientReadyToInstantiateObjectsStates")]
    public void CustomUpdateClientReadyToInstantiateObjectsStates1(Dictionary<string, bool> clientReadyToInstantiateObjectsStates)
    {
        if (!customMapSystem.isDone)
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }
}
```
or by extends `BaseGameNetworkManagerComponent` and implements `UpdateClientReadyToInstantiateObjectsStates` function like this:
```
public class CustomMapSystemGameNetworkManagerComponent : BaseGameNetworkManagerComponent {
    public CustomMapSystem customMapSystem;
    public override void UpdateClientReadyToInstantiateObjectsStates(BaseGameNetworkManager networkManager, Dictionary<string, bool> clientReadyToInstantiateObjectsStates) {
        if (!customMapSystem.isDone)
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }
}
```
* * *

## Procedural Dungeon Generation

You can set seed for Procedural Dungeon Generation and send it from server to client then client can use the seed to generate the same map with server by:

### Writing/Reading custom map info by dev extension
```
public partial class BaseGameNetworkManager {
    public int seed = 123456;

    [DevExtMethods("WriteMapInfoExtra")]
    public void WriteMapInfoExtraSeed(NetDataWriter writer) {
        writer.Put(seed);
    }

    [DevExtMethods("ReadMapInfoExtra")]
    public void ReadMapInfoExtraSeed(NetDataReader reader) {
        seed = reader.GetInt();
    }
}
```

### Writing/Reading custom map info by `BaseGameNetworkManagerComponent`
```
public class CustomMapSystemGameNetworkManagerComponent : BaseGameNetworkManagerComponent {
    public virtual void ReadMapInfoExtra(BaseGameNetworkManager networkManager, NetDataReader reader)
    {
        networkManager.seed = reader.GetInt();
    }

    public virtual void WriteMapInfoExtra(BaseGameNetworkManager networkManager, NetDataWriter writer)
    {
        writer.Put(networkManager.seed);
    }
}
```

* * *

Then you may generate the dungeon by seed which received like this:

```
public partial class BaseGameNetworkManager {
    public int seed = 123456;

    [DevExtMethods("WriteMapInfoExtra")]
    public void WriteMapInfoExtraSeed(NetDataWriter writer) {
        // Write seed at server
        writer.Put(seed);
    }

    [DevExtMethods("ReadMapInfoExtra")]
    public void ReadMapInfoExtraSeed(NetDataReader reader) {
        // Read seed at client
        seed = reader.GetInt();
    }

    public CustomMapSystem customMapSystem;
    [DevExtMethods("UpdateServerReadyToInstantiateObjectsStates")]
    public void CustomUpdateServerReadyToInstantiateObjectsStates1(Dictionary<string, bool> serverReadyToInstantiateObjectsStates)
    {
        // Load map by seed at server
        if (!customMapSystem.isStarted)
            customMapSystem.StartMapLoading(seed);
        if (!customMapSystem.isDone)
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            serverReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }

    [DevExtMethods("UpdateClientReadyToInstantiateObjectsStates")]
    public void CustomUpdateClientReadyToInstantiateObjectsStates1(Dictionary<string, bool> clientReadyToInstantiateObjectsStates)
    {
        // Load map by seed at client
        if (!customMapSystem.isStarted)
            customMapSystem.StartMapLoading(seed);
        if (!customMapSystem.isDone)
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = false;
        else
            clientReadyToInstantiateObjectsStates["customMapSystemLoading"] = true;
    }
}
```

