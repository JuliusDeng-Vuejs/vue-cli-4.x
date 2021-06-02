# 1. $refs，$parent，$children

### 基础使用：参考vue官方文档

 $refs

父组件调用子组件的方法或属性

 $children

父组件调用子组件的方法或属性

 $parent

子组件调用父组件的方法或属性


### 实战案例



# 2. provide   inject跨多组件通讯

ref` 和 `$parent / $children` 在**跨级**通信时是有弊端的。当组件 A 和组件 B 中间隔了数代（甚至不确定具体级别）时，以往会借助 Vuex 这样的解决方案，不得不引入三方库来支持。本节课则介绍一种无依赖的组件通信方法：Vue.js 内置的 provide / inject 接口。

### 基础使用：参考vue官方文档

### 实战案例

#### 案例一：form表单验证实现



#### 案例二：实现状态管理



app.vue

```vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
	provide () {
      return {
        app: this
      }
    }
  }
</script>

```



我们把 app.vue 理解为一个最外层的根组件，用来存储所有需要的全局数据和状态，甚至是计算属性（computed）、方法（methods）等。因为你的项目中所有的组件（包含路由），它的父组件（或根组件）都是 app.vue，所以我们**把整个 app.vue 实例通过 `provide` 对外提供**。



接下来，任何组件（或路由）只要通过 `inject` 注入 app.vue 的 app 的话，都可以直接通过 **[this.app.xxx](http://this.app.xxx)** 来访问 app.vue 的 `data`、`computed`、`methods` 等内容。



app.vue 是整个项目第一个被渲染的组件，而且只会渲染一次（即使切换路由，app.vue 也不会被再次渲染），利用这个特性，很适合做一次性全局的状态数据管理



# 3. $on 与 $emit

### 基础使用：参考vue官方文档

### 实战案例



局部：监听通讯（只能当前组件使用）

```js
this.$on('ftest',(e)=>{
    console.log(e);
})

this.$emit('childtest','父组件点击了')
```





全局：监听通讯

```js
//app.vue
provide(){
  	return {
  		app:this
  	}
  },
//组件
inject:['app'],
mounted(){
    this.app.$on('childtest',(e)=>{
        console.log('-----------子组件接收-----------')
        console.log(e);
    })
},
    methods:{
        event(){
            console.log('2222')
            this.app.$emit('ftest','子组件点击了')
        }
    }
```



常用于父组件下有多个子组件，数量未知情况，随时通知任何组件

父组件

```js
provide(){
    return {
        $_self:this
    }
},
methods:{
    event(){
        this.$emit('childtest','$_self父组件点击了')
    }
}
```

子组件

```js
inject:['$_self'],
mounted(){
    this.$_self.$on('childtest',(e)=>{
        console.log('-----------$_self子组件接收-----------')
        console.log(e);
    })
},
```





# 4. extend 与手动挂载$mount

### 基础使用：参考vue官方文档

### 实战案例

开发一个loading插件



# 5. 自定义组件v-model

### 基础使用：参考vue官方文档

### 实战案例

自定义组件实现v-model





# 6. 自定义指令实战

### 基础使用：参考vue官方文档

### 实战案例



实现骨架屏







# 7. **v-slot**

### 基础使用：参考vue官方文档

### 实战案例

v-slot封装table组件

### 



# 9. nextTick

### 基础使用：参考vue官方文档



#### 应用场景

1、如果要在`created()`钩子函数中进行的`DOM`操作，由于`created()`钩子函数中还未对DOM进行任何渲染，所以无法直接操作，需要通过`$nextTick()`来完成。

```js
created(){
    this.$nextTick(()=>{
        this.$refs.myP.innerText = "我是一只小小小小鸟，想要飞，却怎么样也飞不高！";
    });
}
```

注：在`created()`钩子函数中进行的`DOM`操作，不使用`$nextTick()`会报错：

```js
//  Error in created hook: "TypeError: Cannot set property 'innerText' of undefined"
created(){
    this.$refs.myP.innerText = "我是一只小小小小鸟，想要飞，却怎么样也飞不高！";
}
```

2、更新数据后，想要使用js对新的视图进行操作时。示例（略）

3、在使用某些第三方插件时 ，这些插件需要dom动态变化后重新应用该插件，这时候就需要使用`$nextTick()`来重新应用插件的方法。示例（略）




### 实战案例



# 10. .sync

### 基础使用：参考vue官方文档

### 实战案例



# 11. Mixins

### 基础使用：参考vue官方文档

全局调用 main.js

```js
import mixin from 'mixins/mixin';
Vue.mixin(mixin)
```



局部使用





### 实战案例

分页调用（当前页面data配置指定参数，mixin文件中通过this.获取参数，实现简单配置就可以）



# 8. Render 

### 基础使用：参考vue官方文档

### 实战案例