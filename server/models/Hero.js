/*
 * @Author: your name
 * @Date: 2020-03-01 21:22:13
 * @LastEditTime: 2020-03-07 12:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\models\Hero.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  title: { type: String},
  categories: [{ type: mongoose.SchemaTypes.ObjectId,ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number }
  },
  skills: [{
    icon: {type: String},
    delay: { type: String},
    cost: { type: String},
    name: {type: String},
    description: {type: String},
    tips: {type: String},
  }],
  items1: [
    {type: mongoose.SchemaTypes.ObjectId,ref: 'Item'}
  ],
  items2: [
    {type: mongoose.SchemaTypes.ObjectId,ref: 'Item'}
  ],
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partners: [{
    hero: {type: mongoose.SchemaTypes.ObjectId,ref: 'Hero'},
    description: {type: String },
  }]

})
module.exports = mongoose.model('Hero', schema,'heroes')
