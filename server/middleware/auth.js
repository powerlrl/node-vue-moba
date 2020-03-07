/*
 * @Author: your name
 * @Date: 2020-03-03 21:07:51
 * @LastEditTime: 2020-03-03 21:56:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\middleware\auth.js
 */
module.exports = options=>{
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  
  return async(req,res,next)=>{
    const token = String(req.headers.authorization || '').split(' ').pop()
    // token不存在，报错
    assert(token,401,'请先登录')
    const {id} = jwt.verify(token,req.app.get('secret'))
    assert(id,401,'请先登录')
    req.user = await AdminUser.findById(id) 
    assert(req.user,401,'请先登录')
    await next() 
  }
}
