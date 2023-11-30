
const csv = require('csv-parser')

export const parseCSV : any = async (data : any) => {
if(!data.filename.includes('.csv') || data.mimetype !== 'text/csv'){
    throw new Error('Not a csv file!');
}
const results: any = [];
const onDataPromise = new Promise<void>((resolve) => {
  data.file
    .pipe(csv())
    .on('data', (ab: any) => results.push(ab))
    .on('end', resolve);
});

await onDataPromise; 


return results;
}