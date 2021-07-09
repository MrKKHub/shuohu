import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps } from './testData'
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  id?: string;
  columnId? :number
}
export interface PostProps {
  id?: number;
  title: string;
  content?: string;
  columnId: number;
  createdAt: string;
  image?: string;
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
    user: { isLogin: false, columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: false, nickName: 'codekk', columnId: 1 }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
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
      console.log(cid)
      console.log(state.posts)
      return state.posts.filter(post => post.columnId === cid)
    }
    // getCurrentPost: (state) => (id: string) => {
    //   return state.posts.data[id]
    // }
  }
})

export default store
