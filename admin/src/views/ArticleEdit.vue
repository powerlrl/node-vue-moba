<!--
 * @Author: your name
 * @Date: 2020-03-02 18:25:44
 * @LastEditTime: 2020-03-05 21:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\ArticleEdit.vue
 -->
<template>
    <div>
        <h1>{{id ? '编辑':'新建'}}文章</h1>
        <el-form label-width="120px">
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                  <el-option v-for="item in categories" 
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="model.title" />
            </el-form-item>
            <el-form-item label="详情">
              <vue-editor 
              v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    props: {
        id: {}
    },
    components: {
      VueEditor
    },
    created() {
        this.fetchCategories()
        if (this.id) {
            this.handleLoad()
        }
    },
    data() {
        return {
            model: {},
            categories: [],
        };
    },
    methods: {
        async handleLoad(){
          let res = await this.$http.get(`rest/articles/${this.id}`)
          this.model = res.data
          console.log(res.data)
        },
        async save() {
            if (this.id) {
                await this.$http.put(
                    `/rest/articles/${this.id}`,
                    this.model
                );
            } else {
                await this.$http.post(
                    "/rest/articles",
                    this.model
                );
            }
            this.$router.push("/articles/lists");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetchCategories() {
          let res = await this.$http.get(`http://localhost:3000/admin/api/rest/categories`)
            this.categories = res.data
        },
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
          const formData = new FormData();
          formData.append("file", file)
          let res = await this.$http.post('upload',formData)
          Editor.insertEmbed(cursorLocation, "image",res.data.url);
          resetUploader();
        },
    },
};
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>