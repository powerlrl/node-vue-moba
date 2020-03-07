/*
 * @Author: your name
 * @Date: 2020-03-02 21:59:25
 * @LastEditTime: 2020-03-02 22:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\Ad.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String },
  items: [{
    image: { type: String },
    url: { type: String}
  }]
})
module.exports = mongoose.model('Ad',schema)
