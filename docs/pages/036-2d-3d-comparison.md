# 3D -> 2D Components / Settings changes

For 2D games, there are some components / settings that differences from 3D, when you're going to make 2D game you have to change to use following components / settings

*   `Game Instance`
    Change dimension type to 2D
*   `Character Model`
    Change component to `Character Model 2D` or `Animator Character Model 2D`
*   `Player Character Entity`
    Use Collider 2D instead of 3D
*   `Monster Character Entity`
    Use Collider/Rigidbody 2D instead of 3D
*   `Harvestable Entity`
    Use Collider 2D instead of 3D
*   `Warp Portal Entity`
    Use Collider 2D instead of 3D
*   `Npc Entity`
    Use Collider/Rigidbody 2D instead of 3D, Use Character Model 2D
*   `Item Drop Entity`
    Use Collider2D instead of 3D