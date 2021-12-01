# Dedicate MMO server (Digital Ocean)
* * *

This is example to dedicate server via [Digital Ocean](https://m.do.co/c/03d10d801aee), with MySQL database

There is old video tutorial to dedicate server ([Link](https://www.youtube.com/watch?v=1CGRlHGDu8U))

* * *

### Create Droplet

First, Let's Create a droplet

*   Click **Create -> Droplets** menu  

![](./img-digitalocean/003-create_droplet_001.png)

*   Click **One-click apps** tab  

![](./img-digitalocean/004-create_droplet_002.png)

*   Choose **PhpMyAdmin** app  

![](./img-digitalocean/005-create_droplet_003.png)

*   Choose size as you wish  

![](./img-digitalocean/006-create_droplet_004.png)

*   Choose data center as you wish  

![](./img-digitalocean/008-create_droplet_006.png)

*   Choose host name as you wish  

![](./img-digitalocean/009-create_droplet_007.png)

*   Press **Create** button  

![](./img-digitalocean/010-create_droplet_008.png)

* * *

### Login to server and prepare database

*   Then after droplet created it will send information to your email, copy it, we will use it to login via SSH client 

![](./img-digitalocean/011-mailed_password.png)

*   Login to the server by SSH client (For Windows you can use Putty, For Mac you can use Terminal) with copied password. Then it will request you to change password, change it as you wish  

![](./img-digitalocean/012-ssh_login.png)

*   After logged in enter command `nano /root/.digitalocean_password` to read password                                                                              

![](./img-digitalocean/014-get_password_001.png)

*   Copy admin password, we will use it to login to **PhpMyAdmin** to manage database                                                                       

![](./img-digitalocean/015-get_password_002.png)

*   Go to **PhpMyAdmin** website: `{server address}/phpmyadmin`, for this server address is 128.199.78.31 so go to **PhpMyAdmin** website at `http://128.199.78.31/phpmyadmin`, then login with username `admin` and copied admin password  

![](./img-digitalocean/016-db_login.png)

*   Then we are going to create database and import tables data, Click **Database** menu  

![](./img-digitalocean/017-create_db_001.png)

*   Then enter database name and press **Create**  

![](./img-digitalocean/018-create_db_002.png)

*   Click **Import** menu  

![](./img-digitalocean/019-create_db_003.png)

*   Click **Choose File** button  

![](./img-digitalocean/020-create_db_004.png)

*   Click select **mysql_main.sql** from `{your project folder}/Assets/UnityMultiplayerARPG/MMO/SQLs/` 

![](./img-digitalocean/021-create_db_005.png)

*   Scroll down and click **Go** button  

![](./img-digitalocean/022-create_db_006.png)

* * *

### Build and prepare configs

Then we're going to build the server and upload it

*   Build server files from menu **File -> Build Settings...** then change target platfrom to Linux, set arhitecture to x86_64, turn on server mode (or headless mode for older Unity). Then build it  

![](./img-digitalocean/002-build_as_server.png)

*   After server files built, prepare config files at where server files located by create folder named `config` then create 2 files named `serverConfig.json` and `mySqlConfig.json`  

![](./img-digitalocean/029-prepare_configs.png)

*   `serverConfig.json` content:  

The "databaseOptionIndex"  in the serverconfig file indicates which Database type we want to use,
0 = Sqlite Database
1 = Mysql Database

![](./img-digitalocean/030-database_index.png)

```
{
  "databaseOptionIndex" : 1,

  "centralAddress" : "localhost",
  "centralPort" : 7000,
  "clusterPort" : 7010,
  "centralMaxConnections" : 1000,
  "machineAddress" : "128.199.78.31",
  
  "mapSpawnPort" : 6001,
  "mapSpawnMaxConnections" : 2,
  "spawnExePath" : "/root/Build.x86_64",
  "notSpawnInBatchMode" : false,
  "spawnStartPort" : 8000,
  "spawnMaps" : ["Map001","Map002"],

  "databaseManagerAddress" : "localhost",
  "databaseManagerPort" : 6003,

  "useWebSocket": true,
  "webSocketSecure": true,
  "webSocketCertPath": "./localhost.pfx",
  "webSocketCertPassword": "123456"
}
```
Set `centralAddress` and `machineAddress` to `128.199.78.31` because it is server address, set `spawnExePath` to `/root/Build.x86_64` because I going to upload server files to this path

*   `./config/mySqlConfig.json` content:  
```
{
    "mySqlAddress" : "localhost",
    "mySqlPort" : 3306,
    "mySqlUsername" : "root",
    "mySqlPassword" : "password",
    "mySqlDbName" : "mmorpg_kit"
}
```

* * *

### Upload and run server

*   Then upload server files, I use [FileZilla](https://filezilla-project.org/) to do it, login as SFTP, port 22 with root and its password (that you have set when login to server by SSH client)  

![](./img-digitalocean/023-ftp_login.png)

*   Upload server files and configs to server. Then after files uploaded, set permission for server execution file to `744`  

![](./img-digitalocean/024-set_permissions_001.png)

![](./img-digitalocean/025-set_permissions_002.png)

*   Then allow ports to make clients able to connect to servers

![](./img-digitalocean/026-open_ports.png)

*   Then run the server with command `/root/Build.x86_64 -startCentralServer -startMapSpawnServer -startDatabaseServer`

![](./img-digitalocean/027-run_server.png)

*   Then you can test connection by change `Network Address` to server address  

![](./img-digitalocean/028-setup_client.PNG)

*   If it can connect, go back to SSH client, close servers by press CRTL + C then run server with command `nohup /root/Build.x86_64 -startCentralServer -startMapSpawnServer -startDatabaseServer &` you can learn about nohup command from this [link]

(https://www.ibm.com/support/knowledgecenter/en/ssw_aix_72/com.ibm.aix.cmds4/nohup.htm)
