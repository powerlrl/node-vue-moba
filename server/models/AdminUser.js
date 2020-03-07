/*
 * @Author: your name
 * @Date: 2020-03-03 13:50:46
 * @LastEditTime: 2020-03-03 14:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\AdminUser.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val){
      return require('bcryptjs').hashSync(val,10)
    }
   },
})
module.exports = mongoose.model('AdminUser',schema)
