项目进度说明与备注

time: 2021-7-7
1. 项目创建并完成首次提交
2. ColumnList组件完成
3. 新增 Dropdown, DropdownItem等组件 
   新增自定义函数 useClickOutside 

time: 2021-7-8
1. 新增vue-router, vuex
2. 新增home, login, ColumnDeatil页面

time: 2021-7-9
1. 新增createPost页面
2. 新增PostList. Loader组件
3. 新增axios (暂无后端接口)
---------------------->
页面,组件基本功能与逻辑完成. 涉及后端接口数据处不再更新




备注:
关于http动词说明
GET--->相当于SQL中<SELECT>, 表示从服务器取出资源(一项或者多项)
POST--->相当于SQL中<CREATE>, 表示在服务器新建一个资源
PUT--->相当于SQL中<UPDATE>, 表示在服务器更新资源 (更新全部信息)
PATCH--->相当于SQL中<UPDATE>, 表示在服务器更新资源 (更新部分信息)
DELETE--->相当于SQL中<DELETE>, 表示从服务器删除资源


// 常见状态码
200:  OK [GET] 服务器成功返回用户请求数据
201:  CREATED [POST/PUT/PATCH] 用户新建或修改数据成功
204:  NO CONTENT [DELETE] 用户删除数据成功

401:  Unauthorized - [*] 没有用户权限(令牌, 用户名、密码错误)
403:  Forbidden - [*] 表示用户得到授权, (与401错误相对)但是访问是被禁止的
404:  NOT FOUND -[*] 用户发出的请求针对的是不存在的记录, 服务器没有进行操作


async await

async 包裹的函数 返回的是一个Promise对象. 会讲返回值携带进resolve()中
async function () {
  return 'hello'
}