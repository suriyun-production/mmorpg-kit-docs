# Web Socket Server

To run game as web socket server to serve HTML5 clients, you have to set `useWebSocket` config to `true`, you can set it by
- Turn on `MMO Server Instance` -> `Use Web Socket` config
- Or enter it with the launch command line (`-useWebSocket`)
- Or set it in `serverConfig.json file` (`"useWebSocket": true`)

There are other settings relates to Web Socket Server settings, can read from [this link](pages/030-server-command-line-argument.md)

### Web Socket Client

To make your game able to connect to web socket server you have to set `useWebSocket` config in `MMO Client Instance` component to `true`, that is it.