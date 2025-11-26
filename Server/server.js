// import http from 'http'
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{"content-type": "text/csv"})
//         res.end("Home Page")
//     }
//     else if(req.url==='/data' && req.method=="POST"){
//         let body = ''
//         req.on("data",(chunk)=>{
//             body+=chunk
//         })
//         req.on("end",()=>{
//             res.writeHead(200,{"content-type":"application/json"})
//             const pdata = JSON.parse(body)
//             res.write(JSON.stringify(pdata))
//         })
//     }
//     else{
//         res.end('Error: Url not Found')
//     }
// })

// const port = 3000
// server.listen(port,(req,res)=>{
//     console.log(`server is Listening on ${port} `)
// })

import http from 'http';
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.writeHead(200,{"content-type":"text/csv"})
    res.end("Home Page")
}
else if(req.url==="/data" && req.method=="POST"){
    let body="";
    req.on("data",(chunk)=>{
      body+=chunk;
    })
    req.on("end",()=>{
        res.writeHead(200,{"content-type": "application/json"})
        const pdata=JSON.parse(body);
      res.end(JSON.stringify(pdata));  
    })
    
}
else{
    res.end('Error: URL Not Found')
}
})

const port = 3000
server.listen(port,(req,res)=>{
    console.log(`Server is running on port 3001`);
})