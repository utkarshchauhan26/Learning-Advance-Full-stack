const http=require('http');
const { JSON } = require('stream/consumers');

const habits =["Drink Water","Coding","Exercise"];

const server=http.createServer((req,res) =>{
    if(req.url==='/health'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({status:'ok'}));
    }
    else if(req.url==='/habits'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({habits}));
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({error:'Not Found'}));
    }



}
);
server.listen(3000, ()=>{
    console.log('Server on http://localhost:3000');
});
