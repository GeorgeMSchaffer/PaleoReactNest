var parser = require('parse-csv')
var fs = require('fs');

const csv = require('csv');
var {parse} = require('parse-csv-simple');
const path = 'D:\\code\\csv-parser\\CSVs\\';
(async () => {
    main().then((res)=>{
        console.log('RESPONSE',res);
        return res;
    }).catch(e => {
      console.error('ERROR',e);
  });
})();

    async function parseCSV(path){
//        const files = await parser();
        console.log('PATH',path)
        const dir = await fs.promises.opendir(path);
        console.log('DIRECTORY?',dir.readSync())

        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DIR',dir.readSync(path));
    }

  async function main(){
      console.log('START',Date.now());
      const res = await parseCSV(path);
      console.log("RES",res);

  }