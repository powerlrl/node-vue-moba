<!--
 * @Author: your name
 * @Date: 2020-03-01 21:10:24
 * @LastEditTime: 2020-03-01 21:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\HeroList.vue
 -->
<template>
  <div>
    <h3>英雄列表</h3>
    <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="ID"
      width="400">
    </el-table-column>
    <el-table-column
      prop="name"
      label="物品名称"
    >
    </el-table-column>
    <el-table-column
      prop="avatar"
      label="头像">
      <template slot-scope="scope">
        <img :src="scope.row.avatar" style="height: 3rem">
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      width="180">
      <template slot-scope="scope">
        <el-button 
          type="text" 
          size="small"
          @click="$router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑</el-button>
        <el-button 
          type="text" 
          size="small"
          @click="handleRemove(scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    created(){
      this.handleLoad()
    },
    data(){
      return {
        list: []
      }
    },
    methods: {
      async handleLoad(){
        let res = await this.$http.get("/rest/heroes")
        this.list = res.data
      },
      async handleRemove(row){
        this.$confirm('此操作删除该分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async () => {
          await this.$http.delete(`/rest/heroes/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.handleLoad()
        })
      }
    }
  }
</script>