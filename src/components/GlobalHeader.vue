<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" to="/">说乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <dropdown :title="`你好 ${user.name}`"></dropdown>
      <!-- <li class="list-inline-item">
          <a href="#" class="tn btn-outline-light my-2">你好 {{user.name}}</a>
      </li> -->
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
export interface UserProps {
  id?: number,
  name?: string,
  isLogin: boolean
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown
  }
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>
