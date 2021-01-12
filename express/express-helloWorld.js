const express = require('express')
const app = express()
const port = 3000

// hello world
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'))

//参数‘/’可当作设置url的根显示页面，这里即”http://localhost:3000/“访问的页面设置为index.html
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")        //设置/下访问文件位置
});

//参数‘/tow’可当作设置url的/tow下显示页面，这里即”http://localhost:3000/tow“访问的页面设置为index2.html
app.get("/tow",(req,res)=>{
    res.sendFile(__dirname+"/"+"index2.html")        //设置/tow下访问文件位置
})

//设置端口3000访问地址，即http://localhost:3000
var server =app.listen(3000,()=>{
    var port =server.address().port
    console.log("【】访问地址http://localhost:%s",port)
})