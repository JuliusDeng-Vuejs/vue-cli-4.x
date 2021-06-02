<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		inject: ['$_app'],
		// inject: ['$_demo'],
		data() {
			return {
				msg: '我是子组件'
			}
		},
		mounted() {
			// this.$on('test', (e) => {
			// 	console.log(e,'子组件的eee');
			// 	this.msg = e.value
			// })
			// this.$_demo.$on('test', (e) => {
			// 	console.log(e,'子组件的eee');
			// 	this.msg = e.value
			// })
			// 开启一个全局监听事件
			this.$_app.$on("test", (e) => {
				console.log(e, '--demoitem里面的e值');
				this.msg = e.value
			})
		}
	}
</script>

<style>
</style>
