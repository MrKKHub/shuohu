import { createStore, Commit } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      // state.user = { ...state.user, isLogin: true, name: 'viking' }
    }
  },
  getters: {
    biggerColumnLen (state) {
      return state.columns.filter(c => c.id > 2).length
    },
    // getColumns: (state) => {
    //   return objToArr(state.columns.data)
    // },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
    // getCurrentPost: (state) => (id: string) => {
    //   return state.posts.data[id]
    // }
  }
})

export default store
