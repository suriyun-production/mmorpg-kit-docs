Then setup entity movement component based on dimension (2D or 3D) and animation type.

## 3D Entity Movement

*   **Character Controller Entity Movement** It uses Unity's [Character Controller](https://docs.unity3d.com/ScriptReference/CharacterController.html) for movement.
*   **Rigid Body Entity Movement** It uses Unity's [Open Character Controller](https://github.com/Unity-Technologies/Standard-Assets-Characters) which is uses kinematic rigid body for movement.
*   **Legacy Rigid Body Entity Movement** It uses Unity's [Rigidbody](https://docs.unity3d.com/ScriptReference/Rigidbody.html) (non-kinematic) for movement.
*   **Nav Mesh Entity Movement** It uses Unity's [NavMeshAgent](https://docs.unity3d.com/ScriptReference/AI.NavMeshAgent.html) for movement, so you cannot controller your character to jump or swim. It made for point click games.

## 2D Entity Movement

*   **Rigid Body Entity Movement 2D** For 2D games, there is only one built-in entity movement, if you want to use another entity movement which integrates [A* Pathfinding Project](https://arongranberg.com/astar). You can get it from: [UnityMultiplayerARPG_2DAI](https://github.com/insthync/UnityMultiplayerARPG_2DAI).

After setup entity movement, then adjust colliders fit to character

![](https://cdn-images-1.medium.com/max/1600/0*kILIMeK-SrC2rsoa)