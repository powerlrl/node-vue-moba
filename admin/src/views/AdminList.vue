<!--
 * @Author: your name
 * @Date: 2020-03-03 14:14:58
 * @LastEditTime: 2020-03-03 14:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\AdminList.vue
 -->
<!--
 * @Author: your name
 * @Date: 2020-02-25 19:39:26
 * @LastEditTime: 2020-02-28 20:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\CategoriesLists.vue
 -->
<template>
  <div>
    <h3>管理员列表</h3>
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
      prop="username"
      label="用户名"
      >
    </el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      width="180">
      <template slot-scope="scope">
        <el-button 
          type="text" 
          size="small"
          @click="$router.push(`/admin_users/edit/${scope.row._id}`)"
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
        let res = await this.$http.get("/rest/admin_users")
        this.list = res.data
      },
      async handleRemove(row){
        this.$confirm('此操作删除该管理, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async () => {
          await this.$http.delete(`/rest/admin_users/${row._id}`)
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