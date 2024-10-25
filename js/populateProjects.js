const fs = require('fs')

const fileNames = fs.readdirSync('interiormaster/',{withFileTypes:false})
const newNames = []
for(const fileName of fileNames){
    const isNum = fileName.split('. ')[0]
    if(isNaN(isNum) || (Math.floor(isNum) < Math.ceil(isNum))){
        newNames.push(fileName)
    }
        
}


console.log(...fileNames)