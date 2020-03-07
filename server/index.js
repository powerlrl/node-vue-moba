/*
 * @Author: your name
 * @Date: 2020-02-25 12:26:27
 * @LastEditTime: 2020-03-03 16:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\index.js
 */
const express = require('express')
const app = express()

app.set('secret','yodefine')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)


app.listen(3000,async(req,res)=>{
  console.log(`server is running`)
})