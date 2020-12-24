<template>
  <div>
    <title-component :title="title"></title-component>
    <div class="search">
      <a-input-search placeholder="搜索你感兴趣的！" enter-button @search="onSearch" />
      <br /><br />
    </div>
    <a-table :columns="columns" :data-source="data" :loading="loading" :pagination="pagination">
      <span slot="imgs" slot-scope="cover"><img class="imgPreview" :src=cover alt=""></span>
    </a-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        pagination:{
          defaultPageSize:20,
          showTotal: total => `共 ${total} 条数据`,
          showSizeChanger:true,
          pageSizeOptions: ['5', '10', '15', '20'],
          onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
        },
        columns: [{
            title: '剧名',
            dataIndex: 'name',
            key: 'name',
            width: '100px',
            align: 'center'
          },
          { title: '图片',
            dataIndex: 'cover',
            key: 'cover',
            align: 'center',
            scopedSlots: {customRender: 'imgs' },
            align: 'center'
          },
          {
            title: '上映时间',
            dataIndex: 'year',
            key: 'year',
            width: '100px',
            align: 'center'
          },
          {
            title: '描述',
            key: 'introduction',
            dataIndex: 'introduction'
          },
          {
            title: '详情',
            key: 'action',
            width: '100px',
            align: 'center'
          },
        ],
        title: '影视基地',
        data: '',
        datatwo: '',
        loading: true
      }
    },
    created() {
      this.axios({
        methods: 'get',
        url: 'https://mediachain.info/api/resource/list',
      }).then(res => {
        this.data = res.data.data
        this.loading = false
        console.log(this.data)
      })
    },
    methods: {
      onSearch(value) {
        this.axios({
          methods: 'get',
          url: 'https://mediachain.info/api/search',
          params: {
            name: value,
          },
        }).then(res => {
          console.log(res)
        })
      },
    },
    components: {
      TitleComponent
    }
  }

</script>

<style lang="scss" scoped>
  .imgPreview {
    width: 80px;
    height: 80px;
  }
</style>
