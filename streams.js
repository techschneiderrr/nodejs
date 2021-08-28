const fs = require('fs');
const readStream = fs.createReadStream('./docs/long.txt');
const writeStream = fs.createWriteStream('./docs/write.txt');

// readStream.on('data',(chunk)=>{
//  console.log("\n------New Chunk-----");
//  console.log(chunk);
//  writeStream.write('\n----------NEW CHUNK----------\n');
//  writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);