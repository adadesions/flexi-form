const wordcut = require("wordcut");
const fs = require('fs');

let page = [];
fs.readFile('sample.txt', 'utf8', function(err, body){
    wordcut.init();
    const modBody = body.replace(/\n/g, " ");
    const cutContent = wordcut.cut(modBody);
    const cutContentList = cutContent.split('|');
    const limit = 90;
    const lenCutList = cutContentList.length;
    let curCount = 0;
    let line = '';
    let strPage = '';

    for (let [i, word] of cutContentList.entries()) {
        let tempCout = curCount + word.length;

        // DEBUG
        // console.log(i)
        // console.log("curCount:"+curCount)
        // console.log("word:"+word.length)
        // console.log("TempCount:"+tempCout)

        if(tempCout <= limit) {
            curCount += word.length;
            line += word;
        }
        else {
            page.push(line);
            strPage += line+'\n';
            curCount = word.length;
            line = word;
            continue;
        }

        // Condition for the last group
        if (i == lenCutList-1 && curCount <= limit) {
            page.push(line);
            strPage += line+'\n';
        }
    }

    console.log(page);
    fs.writeFile('result.txt', strPage, (err) => {
        if (err) console.log(err);
        console.log("Content was Wrote");
    })
});
