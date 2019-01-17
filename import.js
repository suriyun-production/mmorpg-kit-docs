const fs = require('fs');
const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
function convert(url)
{
    mediumToMarkdown.convertFromUrl(url)
    .then(function (markdown) {
        fs.writeFile("/docs/pages", markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}