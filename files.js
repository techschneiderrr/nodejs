const fs = require('fs');
// //read
// fs.readFile('./docs/hello.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//         console.log(data.toString());
// });
// //write
// fs.writeFile('./docs/hello.txt','Hello world',()=>{
//     console.log('File was written');
// });// 

//directories
// if(!fs.existsSync('./assets'))
// { 
//     fs.mkdir('./assets',(err)=>{
//      if (err){
//         console.log(err);
//     }
//     console.log("Folder created !");
//     });
// }
// else
// {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder deleted !"); 
//     });
// }

//delete a file
// if (fs.existsSync('./docs/delme.txt')){
//     fs.unlink('./docs/delme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File is deleted");
//     });
// }