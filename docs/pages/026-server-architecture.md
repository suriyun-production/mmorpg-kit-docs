# Server Architecture

![](https://cdn-images-1.medium.com/max/1600/0*9gWWZgpjrKvT8dNZ)

For this project, there are 3 kind of servers are:

*   `Central server`, this server will handle user login/register/character create/character delete more than that it is collects list of other servers
*   `Chat server`, this server will handle user chat, this server will connect to Central server to send its address
*   `Map spawn server`, this server will connect to central server and then central server will send request to this server to start an map servers
*   `Map server`, this server will handle gameplay, each Map scene will handle by 1 server, so if you have 3 maps, it will run 3 servers to handle each map, this server will connect to Central server to send its address and users list, also connect to Chat server to send/receive chat messages