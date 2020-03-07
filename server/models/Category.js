/*
 * @Author: your name
 * @Date: 2020-02-25 16:36:42
 * @LastEditTime: 2020-03-06 11:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: {type: String},
  parents: {type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}
})
schema.virtual('children',{
  localField: '_id',
  foreignField: 'parents',
  justOne: false,
  ref: 'Category'
})
schema.virtual('newsList',{
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Article'
})

module.exports = mongoose.model('Category',schema)
