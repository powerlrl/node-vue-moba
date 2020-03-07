/*
 * @Author: your name
 * @Date: 2020-02-25 16:31:53
 * @LastEditTime: 2020-03-06 10:10:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\plugins\db.js
 */
module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  require('require-all')(__dirname + '/../models')
}