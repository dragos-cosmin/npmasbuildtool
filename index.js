const Koa=require('koa');
const app=new Koa();
module.exports=app;

const html=
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Page Title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <script src="http://localhost:9091"></script>
        
    </head>
    <body>
        Page loaded at: <span id="demo"></span>
        <script>
            document.getElementById('demo').innerHTML=new Date();
        </script>
        
    </body>
    </html>`;


app.use(async ctx=> {
    if(ctx.request.path==="/client"){
        ctx.body=html;
        return;
    }
    ctx.body="Koa says Hello!";
});

let port=process.env.PORT || (process.argv[2] || 3000);
// port=(typeof port==="number") ? port: 3000;

if(!module.parent){app.listen(port);}


console.log("application started. Listening to port:"+port);
// console.log("typeof port is:"+typeof port+ " port:"+port);
// console.log("process.env.PORT:"+typeof process.env.PORT+ " "+process.env.PORT);
// // console.log("process.argv[2]:"+typeof process.argv[2]+ " "+process.argv[2]);