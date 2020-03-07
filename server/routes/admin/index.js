/*
 * @Author: your name
 * @Date: 2020-02-25 15:53:15
 * @LastEditTime: 2020-03-06 11:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\server\routes\admin\index.js
 */
const express = require('express')
const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
const router = express.Router({
  mergeParams: true
})

module.exports = app => {
  router.post('/', async (req, res) => {
    let result = await req.Model.create(req.body)
    res.send(result)
  })
  // 资源列表
  router.get('/',async (req, res) => {
    queryOption = {}
    if(req.Model.modelName === 'Category'){
      queryOption.populate = 'parents'
    }
    let result = await req.Model.find().setOptions(queryOption).limit(100)
    res.send(result)  
  })
  router.get('/:id',async(req, res) => {
    let result = await req.Model.findById(req.params.id)
    res.send(result)
  })
  router.put('/:id',async(req, res) => {
    let result = await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(result)
  })
  router.delete('/:id',async(req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)
  
  // 解决上传图片
  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async (req,res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  app.post('/admin/api/login',async (req, res)=>{
    const {username, password} = req.body

    // 1.根据用户名找用户
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user,422,'用户不存在')
    
    // 2.验证密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid,422,'密码错误')
    // 3.返回token
    
    const token = jwt.sign({ id: user._id },app.get('secret'))
    res.send({token})
  })

  // 错误处理函数
  app.use(async (err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
// router.post('/categories',async (req, res) => {
//   let model = await Category.create(req.body)
//   res.send(model)
// console.log(req.body)
// res.send('ok')
// })
// module.exports = router