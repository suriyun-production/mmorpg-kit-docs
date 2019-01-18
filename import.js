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
