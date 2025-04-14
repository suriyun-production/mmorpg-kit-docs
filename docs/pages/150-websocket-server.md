# Web Socket Server

In `serverConfig.json`, there are following configs which relates to Web Socket:

- useWebSocket (boolean): use web socket or not, if your setup transport is not web socket transport then it will change transport to web socket transport.
- webSocketSecure (boolean): use wss protocol or not, if you are going to use it, you must prepare SSL Certificate (read next section).
- webSocketCertPath (string): path of PFX cert file.
- webSocketCertPassword (string): password for PFX cert.

## SSL Certificate for WSS protocol

Generate / obtain an SSL certificate by using Let's Encrypt, you must have domain name for your server.

```
sudo apt update
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
```

You'll get:
- fullchain.pem (certificate + chain)
- privkey.pem (private key)

Then it will tell where the cert files were saved (usually be `/etc/letsencrypt/live/yourdomain.com`), enter the folder to convert PEM to PFX

```
openssl pkcs12 -export -out certificate.pfx -inkey privkey.pem -in cert.pem
```

Enter password as you wish, remember it, you're going to use it later.

Then a certificate.pfx will be created in the folder.

Then set config in `serverConfig.json` file
```
{
    "useWebSocket": true,
    "webSocketSecure": true,
    "webSocketCertPath": "/etc/letsencrypt/live/yourdomain.com",
    "webSocketCertPassword": "yourpassword",
}
```

# Web Socket Client

To make your game able to connect to web socket server you have to set `useWebSocket` config in `MMO Client Instance` component to `true`, that is it.