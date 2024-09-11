import parser from 'parse-csv';
import csv from 'csv'
//import {parse,pareseIterable} from('parse-csv-simple');

(async () => {
    main().then((res)=>{
        console.log('RESPONSE',res);
        return res;
    }).catch(e => {
      console.error('ERROR',e);
  });
})();

    async function parseCSV(path){
        csv.parse('D:\\code\\csv-parser\\CSVs\\Capitanian.csv')
            .then((res)=>{
                console.log('RES'.res);
                return res;
            })
    }

  async function main(){
      console.log('START',Date.now());
      const res = await parseCSV();
      console.log("RES",res);

  }