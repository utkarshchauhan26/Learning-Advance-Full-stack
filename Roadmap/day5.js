const fs=require('fs');

const stream=fs.createReadStream('largeFile.txt',{encoding:'utf8'});

let lineCount=0;
let wordCount=0;


stream.on('data',(chunk)=>{
    console.log('chunk size:',chunk.length);
    lineCount+=chunk.split('\n').length-1;
    chunk.split(" ").forEach(()=>
    wordCount++);
    
});

stream.on('end',()=>{
    console.log('Total lines:',lineCount)
    console.log('Total Words:',wordCount)
})
stream.on('error',(err)=>console.error('Error',err.message));

