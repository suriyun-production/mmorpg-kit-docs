# Working with Unity 2021

In Unity 2021, it has changes which requires some changes to make the kit works.

You have to delete following files:
- Assets/UnityMultiplayerARPG/Core/LiteNetLibManager/Plugins/System.Buffers.dll
- Assets/UnityMultiplayerARPG/Core/LiteNetLibManager/Plugins/System.Memory.dll
- Assets/UnityMultiplayerARPG/Core/LiteNetLibManager/Plugins/System.Threading.Tasks.Extensions.dll

Then import [this package](https://suriyun-production.github.io/mmorpg-kit-docs/files/MMORPG_KIT2021.2_Microsoft.Bcl.AsyncInterfaces5.0.0.dll.unitypackage)