import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.get('http://ustbhuangyi.com/music-next/api/getRecommend').then(res => {
  console.log(res)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
