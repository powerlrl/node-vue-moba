/*
 * @Author: your name
 * @Date: 2020-03-02 19:36:08
 * @LastEditTime: 2020-03-06 10:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\Article.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  categories: [{type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}],
  title: { type: String },
  body: { type: String }
},{
  timestamps: true
})
module.exports = mongoose.model('Article',schema)