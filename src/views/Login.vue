<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到说乎</h5>
    <validate-form @form-submit="onFormSubmit">
      <validate-input :rules="testRules" v-model="emailValue" type="text" placeholder="请输入邮箱地址"></validate-input>
      <validate-input :rules="passwordRules" v-model="passwordValue" type="password" placeholder="请输入密码" ref="inputRef"></validate-input>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
const testRules: RulesProp = [
  { type: 'required', message: '邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的邮箱地址' }
]
const passwordRules: RulesProp = [
  { type: 'required', message: '密码不能为空' }
]
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailValue = ref('12@qq.com')
    const passwordValue = ref('123')
    const inputRef = ref<any>()
    const onFormSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput())
      console.log(result)
    }
    return {
      emailValue,
      passwordValue,
      testRules,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>
