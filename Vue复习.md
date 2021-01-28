## Vue

#### 1.start

- 第一步：创建html页面，使用vscode生成默认代码（输入！自动引用第一行代码）

- 第二步：引入vue的js文件，类似jquery

  ```html
  <script src="vue.min.js"></script>
  ```

- 第三步：在html界面创建div标签，div添加id属性

  ```html
  <div id="app"></div>
  ```

- 第四步：编写vue代码，固定的结构

  ```html
      <script>
  
          //创建一个vue对象
          new Vue({
              el: '#app',//绑定vue作用的范围
              data: {//定义页面中显示的模型数据
                  message: 'Hello Vue!'
              }
          })
      </script>
  ```

- 第五步：使用插值表达式

```html
{{message}}
```

建议使用模板编程。文件---》首选项---》用户片段---》新建全局片段：vue-html.code-snippets

```html
{
	"vue htm": {
		"scope": "html",
		"prefix": "vuehtml",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"en\">",
			"",
			"<head>",
			" <meta charset=\"UTF-8\">",
			" <meta name=\"viewport\" content=\"width=device-width, initial￾scale=1.0\">",
			" <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
			" <title>Document</title>",
			"</head>",
			"",
			"<body>",
			" <div id=\"app\">",
			"",
			" </div>",
			" <script src=\"vue.min.js\"></script>",
			" <script>",
			" new Vue({",
			" el: '#app',",
			" data: {",
			" $1",
			" }",
			" })",
			" </script>",
			"</body>",
			"",
			"</html>",
		],
		"description": "my vue template in html"
	}
}
```



#### 2.v-bind

单向绑定：将定义的数据绑定到div表单。可以使用:冒号来省略v-bind

```html
<body>
    <div id="app">
        <!-- v-bind指令
        单向数据绑定
        这个指令一般用在标签属性里面，获取值-->
        <h1 v-bind:title="message">
            {{content}}
        </h1>

        <!--简写方式-->
        <h1 :title="message">
            {{content}}
        </h1>

    </div>
    <script src="vue.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                content: '我是标题',
                message: '页面加载于' + new Date().toLocaleDateString()
            }
        })
    </script>
</body>
```

#### 3.双向数据绑定

```html
<body>
    <div id="app">
        <!-- v-bind:value只能进行单向的数据渲染-->
        <input type="text" v-bind:value="searchMap.keyWord">
        <!-- v-model 可以进行双向的数据绑定-->
        <input type="text" v-model="searchMap.keyWord">

        <p>您要查询的是：{{searchMap.keyWord}}</p>
    </div>
    <script src="vue.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                searchMap:{
                    keyWord: '尚硅谷'
                }
            }
        })
    </script>
</body>
```

#### 4.修饰符

```html
<body>
    <div id="app">
        <!-- 修饰符用于指出一个指令应该以特殊方式绑定。
            这里的 .prevent 修饰符告诉 v-on 指令对于触发的事件调用js的event.preventDefault():
            即阻止表单提交的默认行为 -->
        <form action="save" v-on:submit.prevent="onSubmit">
            <label for="username">
                <input type="text" id="username" v-model="user.username">
                <button type="submit">保存</button>
            </label>
        </form>

    </div>
    <script src="vue.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                user: {}
            },
            methods: {
                onSubmit() {
                    if (this.user.username) {
                        console.log('提交表单');
                    } else {
                        alert('请输入用户名')
                    }
                }
            }
        })
    </script>
</body>

```

#### 6.列表渲染

```html
<body>
    <div id="app">
        <!-- <ul>
            <li v-for="n in 10">{{ n }}</li>
        </ul>
        <ul> -->
            <!-- 如果想获取索引，则使用Index关键字，注意，圆括号中的index必须放在后面-->
            <!-- <li v-for="(n,index) in 5">{{n}}-{{index}}</li>
        </ul> -->
        <table border="1">
            <tr v-for="(item,index) in userList">
                <td>{{index}}</td>
                <td>{{item.id}}</td>
                <td>{{item.username}}</td>
                <td>{{item.age}}</td>
            </tr>
        </table>
    </div>
    <script src="vue.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                userList:[
                    {id: 1,username:'helen',age:18},
                    {id: 2,username:'peter',age:28},
                    {id: 3,username:'andy',age:38},
                ]
            }
        })
    </script>
</body>
```

