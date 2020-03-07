/*
 * @Author: your name
 * @Date: 2020-02-29 10:23:03
 * @LastEditTime: 2020-03-01 21:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\Item.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String },
  icon: { type: String }
})
module.exports = mongoose.model('Item',schema)
