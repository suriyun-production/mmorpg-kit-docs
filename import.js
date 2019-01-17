const fs = require('fs');
const url = require("url");
const path = require("path");
const mediumToMarkdown = require('medium-to-markdown');
 
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
