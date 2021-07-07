<template>
  <div class="container">
    <global-header :user="trueUser"></global-header>
    <column-list :list="trueData"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const testUser: UserProps = {
  isLogin: true,
  id: 1,
  name: 'codekk'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'zhihuskk',
    description: '这是一段很长的描述。。。',
    avatar: 'https://oss-mall.ehaomiao.com/haomiao-mall-20210107-b27ccb3810be4c218f7a7e56ec0bebba.png'
  },
  {
    id: 2,
    title: 'zhihuskk',
    description: '这是一段很长的描述。。。',
    avatar: 'https://oss-mall.ehaomiao.com/haomiao-mall-20210107-b27ccb3810be4c218f7a7e56ec0bebba.png'
  },
  {
    id: 3,
    title: '图片丢失了',
    description: '这是一段很长的描述。。。',
    avatar: ''
  },
  {
    id: 4,
    title: 'zhihuskk',
    description: '这是一段很长的描述。。。',
    avatar: 'https://oss-mall.ehaomiao.com/haomiao-mall-20210107-b27ccb3810be4c218f7a7e56ec0bebba.png'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      trueData: testData,
      trueUser: testUser
    }
  }
})
</script>

<style>

</style>
