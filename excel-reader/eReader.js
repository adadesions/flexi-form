const readExcel = require('read-excel-file/node');
const _ = require('underscore');

const dataFile = 'SampleData.xlsx'

// Get list of Sheet
readExcel(dataFile, { getSheets: true }).then((lists) => {
    console.log(lists)
    let mySheet = _.filter(lists, list => list['name'] == 'SalesOrders')[0]['name']
    console.log(mySheet)

    readExcel(dataFile, { sheet: mySheet }).then((data) => {
        for(row of data) {
            // console.log(row)
            for(col of row) {
                process.stdout.write(col+'\t\t')
            }
            console.log()
        }
    });
});

