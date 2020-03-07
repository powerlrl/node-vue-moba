<!--
 * @Author: your name
 * @Date: 2020-03-02 22:04:53
 * @LastEditTime: 2020-03-05 21:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\views\AdEdit.vue
 -->
<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}广告位</h1>
    <el-form label-width="120px" style="margin-top: .8rem">
      <el-form-item label="名称">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item label="广告">
          <el-button type="text" @click="model.items.push({})">
              <i class="el-icon-plus"></i>添加广告
          </el-button>
            <el-row type="flex" style="flex-wrap: wrap;">
                <el-col :md="12" v-for="(item,i) in model.items" :key="i">
                    <el-form-item label="跳转链接（url）">
                        <el-input v-model="item.url" />
                    </el-form-item>
                    <el-form-item label="图片" style="margin-top: .8rem">
                        <el-upload 
                            class="avatar-uploader" 
                            :action="$http.defaults.baseURL + '/upload'" 
                            :show-file-list="false" 
                            :on-success="res=>$set(item,'image',res.url)">
                            <img v-if="item.image"
                                :src="item.image" 
                                class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="model.items.splice(i,1)">删除</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
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
                items: [],
            },
        };
    },
    methods: {
        async save() {
            if (this.id) {
                await this.$http.put(
                    `/rest/ads/${this.id}`,
                    this.model
                );
            } else {
                await this.$http.post(
                    "/rest/ads",
                    this.model
                );
            }
            this.$router.push("/ads/lists");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async handleLoad() {
            let res = await this.$http.get(
                `/rest/ads/${this.id}`
            );
            this.model = Object.assign({},this.model, res.data)
        },
    },
};
</script>

