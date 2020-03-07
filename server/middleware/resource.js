/*
 * @Author: your name
 * @Date: 2020-03-03 21:12:14
 * @LastEditTime: 2020-03-03 21:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\middleware\resource.js
 */
module.exports = options=>{
  return async(req,res,next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}