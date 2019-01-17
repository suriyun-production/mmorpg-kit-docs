const request = require('request');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const turndownService = new TurndownService({ gfm: true, converters: [
    {
      filter: 'section',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'div',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'figure',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'figcaption',
      replacement: function(content) {
        return content;
      }
    }
  ]
});
const fs = require('fs');
const url = require("url");
const path = require("path");
const mediumToMarkdown = require('medium-to-markdown-enhanced');
 
function convert(mediumUrl, filePath, fileName)
{
    if (!fileName)
    {
        var parsed = url.parse(mediumUrl);
        fileName = path.basename(parsed.pathname);
    }
    mediumToMarkdown.convertFromUrl(mediumUrl)
    .then(function (markdown) {
        fs.writeFile(filePath + fileName + ".md", markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var fileIndex = 0;
function convert2(mediumUrl, filePath, fileIndex)
{
    var parsed = url.parse(mediumUrl);
    var fileName = path.basename(parsed.pathname);
    fileName = fileName.replace("mmorpg-kit-", "");
    fileName = fileName.substr(0, fileName.length - 13);
    fileName = pad(fileIndex, 3) + "-" + fileName;
    convert(mediumUrl, filePath, fileName);
    return fileName;
}

// Get index document with all links
request({
    uri: "https://medium.com/suriyun-production/mmorpg-kit-setup-guide-table-of-content-2a794f21871d",
    method: 'GET'
  }, function (err, httpResponse, body) {

    if (err)
      return reject(err);

    let $ = cheerio.load(body);
    $('.postArticle-content .uiScale').remove();
    $('.postArticle-content a').each(function (i, result) {
        if ($(result).attr("href").startsWith("https://medium.com/suriyun-production/"))
        {
            console.log("found link " + $(result).attr("href"));
            var oldLink = $(result).attr("href");
            var newLink = "pages/" + convert2(oldLink, "./docs/pages/", ++fileIndex);
            $(result).attr("href", newLink);
        }
    });
    let html = $('.postArticle-content').html() || '';
    let markdown = turndownService.turndown(html);
    fs.writeFile("./docs/README.md", markdown, function(err) {
        if(err) {
            return console.log(err);
        }
    });
  });

  /*
const urlBase = "https://medium.com/suriyun-production/";
const filePath = "./docs/pages/";
convert2(urlBase + "mmorpg-kit-getting-started-singleplayer-lan-47f7ce16a0b1", filePath);
convert2(urlBase + "mmorpg-kit-character-stats-384402e92624", filePath);
convert2(urlBase + "mmorpg-kit-game-database-ce081169f097", filePath);
convert2(urlBase + "mmorpg-kit-attributes-and-how-to-create-it-fd8dbc302847", filePath);
convert2(urlBase + "mmorpg-kit-damage-elements-resistances-and-how-to-create-it-e28714655a06", filePath);
convert2(urlBase + "mmorpg-kit-items-equipment-armor-weapon-potion-ammo-f87a83afb23c", filePath);
convert2(urlBase + "item-drops-item-drop-entity-498f22f01251", filePath);
convert2(urlBase + "mmorpg-kit-building-building-item-building-entity-building-material-building-area-f67167c406fd", filePath);
convert2(urlBase + "mmorpg-kit-skills-48105e062962", filePath);
convert2(urlBase + "mmorpg-kit-quests-25192187d3e3", filePath);
convert2(urlBase + "mmorpg-kit-warp-portals-5c7da8820820", filePath);
convert2(urlBase + "mmorpg-kit-harvestable-harvestable-data-harvestable-entity-harvestable-spawn-area-4e6370e69cae", filePath);
convert2(urlBase + "character-model-entity-player-character-entity-monster-character-entity-npc-entity-f65a40ec60ad", filePath);
convert2(urlBase + "mmorpg-kit-character-animation-162197c5b5ca", filePath);
convert2(urlBase + "mmorpg-kit-npcs-npc-dialog-npc-entity-npc-database-2493761b1311", filePath);
convert2(urlBase + "mmorpg-kit-monsters-monster-character-monster-spawn-area-aeb0641bbee2", filePath);
convert2(urlBase + "mmorpg-kit-player-characters-63d00a7a183d", filePath);
convert2(urlBase + "damage-info-melee-damage-missile-damage-missile-damage-entity-431b2c924cb", filePath);
convert2(urlBase + "mmorpg-kit-map-info-ae08ea424365", filePath);
convert2(urlBase + "mmorpg-kit-party-guild-settings-socialsystemsetting-203b79a7b3f7", filePath);
convert2(urlBase + "mmorpg-kit-in-app-purchasing-53f722afbdba", filePath);
convert2(urlBase + "mmorpg-kit-customize-uis-dfee9ef1c9a0", filePath);
convert2(urlBase + "mmorpg-kit-customize-uis-gameplay-rules-another-settings-7187d97f2f46", filePath);
convert2(urlBase + "mmorpg-kit-chat-configs-892171732375", filePath);
convert2(urlBase + "mmorpg-kit-getting-started-mmo-713fe8e4448d", filePath);
convert2(urlBase + "mmorpg-kit-server-architecture-295e8a1911af", filePath);
convert2(urlBase + "mmorpg-kit-server-configs-90a7ef424d63", filePath);
convert2(urlBase + "mmorpg-kit-how-to-change-database-system-85a1ebffb6cd", filePath);
convert2(urlBase + "mmorpg-kit-gm-commands-ee9cebd1faef", filePath);
convert2(urlBase + "mmorpg-kit-server-command-line-arguments-41a0dac7456", filePath);
convert2(urlBase + "mmorpg-kit-server-config-files-211866a4135f", filePath);
convert2(urlBase + "mmorpg-kit-server-list-for-client-e16149ddc5fc", filePath);
convert2(urlBase + "mmorpg-kit-how-to-integrate-facebook-login-4f3d8d568fb8", filePath);
convert2(urlBase + "mmorpg-kit-how-to-integrate-google-play-login-dbc4e6b6387b", filePath);
convert2(urlBase + "mmorpg-kit-getting-started-2d-singleplayer-lan-2f3ad38728b2", filePath);
convert2(urlBase + "mmorpg-kit-2d-3d-comparison-d427cb18e71f", filePath);
convert2(urlBase + "mmorpg-kit-dev-extension-3976b2ff3e44", filePath);
convert2(urlBase + "mmorpg-kit-1-22-changes-note-458cb291687", filePath);
convert2(urlBase + "mmorpg-kit-1-25-text-inputfield-migration-46d21a846262", filePath);
convert2(urlBase + "mmorpg-kit-1-27-move-weapon-attack-animations-skill-cast-animations-to-character-model-f9016bd5a0ba", filePath);
convert2(urlBase + "mmorpg-kit-1-32-character-database-entity-workflow-changes-ddeac9c4cc5d", filePath);
convert2(urlBase + "1-38-updates-ef4586da2799", filePath);
*/