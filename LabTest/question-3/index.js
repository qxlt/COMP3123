const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'Logs');

const addFile = ()=>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    process.chdir(dir);

    for (let x = 0; x < 10; x++){
        fs.writeFileSync(`log${x}.txt`, `Log file No.${x}`);
        console.log(`log${x}.txt`);
    }
}

const removeFile = ()=>{
    if(fs.existsSync(dir)){
        const files = fs.readdirSync(dir);
        files.forEach((file)=>{
            fs.unlinkSync(file);
            console.log(`delete files...${file}`);
        })
        fs.rmdirSync(dir);

    }
}

addFile();
removeFile();