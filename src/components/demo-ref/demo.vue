<template>
	<div>
		<h3>一.声明式渲染</h3>
		<h5>{{msg}}</h5>
		<h5 v-bind:title="title">鼠标停留显示</h5>
		<h5>{{title}}</h5>
		<h5>{{title2}}</h5>
		
		<h3>二、条件与循环</h3>
		<div v-if="seen">you  see me ！</div>
		<button @click="clickSeen">click seen</button>
		 <!-- v-for -->
		<div>
		  <ol>
		    <li v-for="todo in todos">
		      {{ todo.text }}
		    </li>
		  </ol>
		</div>
		<div>
			<p>{{msg}}</p>
			<button @click="reverseMsg">反转消息</button>
		</div>
		<!-- v-model 指令 -->
		<div>
			<p>{{msg}}</p>
			<input type="text" name="" id="" v-model="msg">
		</div>
		
		
		
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				msg: "Hello Vue , Hello World !",
				title: "亲，这是你鼠标停留显示的内容哦 --" + new Date() ,
				title2: "亲，这是你鼠标停留显示的内容哦 --" + new Date().toLocaleString() ,
				seen: false,
				
				todos: [
				  { text: '学习 JavaScript' },
				  { text: '学习 Vue' },
				  { text: '整个牛项目' }
				]
			}
		},
		methods: {
			clickSeen() {
				this.seen = ! this.seen
			},
			reverseMsg() {
				this.msg = this.msg.split('').reverse().join('')
			}
			
		}
		
		
	}
</script>

<style>
</style>
