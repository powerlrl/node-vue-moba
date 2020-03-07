<!--
 * @Author: your name
 * @Date: 2020-02-25 12:51:22
 * @LastEditTime: 2020-03-03 21:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\CategoriesEdit.vue
 -->
<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}分类</h1>
    <el-form label-width="120px">
      <el-form-item>
        <el-select 
          v-model="model.parents" 
          placeholder="请选择">
          <el-option 
            v-for="item in parents" 
            :key="item._id" 
            :label="item.name" 
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    props: {
        id: {}
    },
    created() {
      this.handleParents()
        if (this.id) {
            this.handleLoad()
        }
    },
    data() {
        return {
            model: {
                name: ""
            },
            parents: []
        };
    },
    methods: {
        async save() {
            if (this.id) {
                await this.$http.put(
                    `http://localhost:3000/admin/api/rest/categories/${this.id}`,
                    this.model
                );
            } else {
                await this.$http.post(
                    "http://localhost:3000/admin/api/rest/categories",
                    this.model
                );
            }
            this.$router.push("/categories/lists");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async handleLoad() {
            let res = await this.$http.get(
                `http://localhost:3000/admin/api/rest/categories/${this.id}`
            );
            this.model = res.data
        },
        async handleParents(){
          let res = await this.$http.get(`http://localhost:3000/admin/api/rest/categories`)
          this.parents = res.data
        }
    }
};
</script>

