<!--
 * @Author: your name
 * @Date: 2020-03-03 14:14:48
 * @LastEditTime: 2020-03-05 21:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\AdminEdit.vue
 -->
<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}管理员</h1>
    <el-form label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="model.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password" />
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
        if (this.id) {
            this.handleLoad()
        }
    },
    data() {
        return {
            model: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        async save() {
            if (this.id) {
                await this.$http.put(
                    `/rest/admin_users/${this.id}`,
                    this.model
                );
            } else {
                await this.$http.post(
                    "/rest/admin_users",
                    this.model
                );
            }
            this.$router.push("/admin_users/lists");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async handleLoad() {
            let res = await this.$http.get(
                `/rest/admin_users/${this.id}`
            );
            this.model = res.data
        },
    },
};
</script>

