# NPC Workflows

When player interactห an NPC entities, the client will send activate message to server.

Then, server will validate `NPC Entity` -> `Start Dialog`. If it is existed, server will send show dialog message with dialog id to the client.

After that, if client have the dialog (client have same data with server) the dialog will be shown.

Then, if player select any menu it will send select dialog menu message with dialog id to server, if server have the dialog (assume that dialog id from client is valid) it will send show dialog message with dialog id to client.

So npc dialog messages will be lite because it is not send all text in dialog to client it just send dialog id. 

First dialog will come from `NPC Entity` -> `Start Dialog` so this is required to make NPC interactable.