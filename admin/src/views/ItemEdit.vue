<!--
 * @Author: your name
 * @Date: 2020-02-29 10:34:41
 * @LastEditTime: 2020-03-05 21:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\ItemEdit.vue
 -->
<template>
    <div>
        <h1>{{id ? '编辑':'新建'}}分类</h1>
        <el-form label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name" />
            </el-form-item>
            <el-form-item label="图标">
                <el-upload 
                    class="avatar-uploader" 
                    :action="uploadUrl" 
                    :headers="getAuthHeaders()"
                    :show-file-list="false" 
                    :on-success="afterUpload">
                    <img 
                        v-if="model.icon" 
                        :src="model.icon" 
                        class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
            this.handleLoad();
        }
    },
    data() {
        return {
            model: {
                name: '',
                icon: ''
            },
        };
    },
    methods: {
        afterUpload(res) {
            this.$set(this.model,"icon",res.url)
            console.log(this.model.icon)
        },
        async save() {
            if (this.id) {
                await this.$http.put(
                    `/rest/items/${this.id}`,
                    this.model
                );
            } else {
                await this.$http.post(
                    "/rest/items",
                    this.model
                );
            }
            this.$router.push("/items/lists");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async handleLoad() {
            let res = await this.$http.get(
                `/rest/items/${this.id}`
            );
            this.model = res.data;
        },
    },
};
</script>
<style>

</style>