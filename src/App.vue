<template>
  <div class="container">
    <global-header :user="trueUser"></global-header>
    <!-- <message :type="success" :message="'操作成功!'"></message> -->
    <loader v-if="false"></loader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 说乎专栏</li>
          <li class="list-inline-item">点赞</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
    <column-list :list="trueData" v-if="false"></column-list>
    <validate-form @form-submit="onFormSubmit" v-if="false">
      <validate-input :rules="trueRules" v-model="emailValue" type="text" placeholder="请输入邮箱地址">{{emailValue}}</validate-input>
      <validate-input :rules="truePasswordRules" v-model="passwordValue" type="password" placeholder="请输入密码" ref="inputRef"></validate-input>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
// import Message from './components/Message.vue'
// import ValidateForm from './components/ValidateForm.vue'
import Loader from './components/Loader.vue'
import createMessage from './components/createMessage'
import { useStore } from 'vuex'
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
const testRules: RulesProp = [
  { type: 'required', message: '邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的邮箱地址' }
]
const passwordRules: RulesProp = [
  { type: 'required', message: '密码不能为空' }
]
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader,
    ColumnList,
    ValidateInput
    // Message
  },
  setup () {
    // createMessage('请求成功啦', 'success')
    const store = useStore()
    const emailValue = ref('12@qq.com')
    const passwordValue = ref('123')
    const inputRef = ref<any>()
    const onFormSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput())
      console.log(result)
    }
    console.log(testUser)
    return {
      trueData: testData,
      trueUser: store.state.user,
      // emailRef,
      // validateEmail,
      trueRules: testRules,
      truePasswordRules: passwordRules,
      emailValue,
      passwordValue,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style>

</style>
