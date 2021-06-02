<template>
	<div>
		<div>
			<button class="btn btn-primary" @click="aa">
				点击通讯
			</button>
			
			 <!-- 父组件下有多个子组件 -->
		<!-- 	<demo-item></demo-item>
			<demo-item></demo-item>
			<demo-item></demo-item> -->
			
		</div>
	</div>
</template>

<script>
	import demoItem from './demo-item.vue'
	
	export default {
		inject: ['$_app'],
		// provide() {
		// 	return {
		// 		$_demo: this
		// 	}
		// },
		components: {
			demoItem
		},
		mounted () {
			this.$on('test', (e) => {
				console.log(e, '--$on');
			})
			// this.$on('test', (e) => {  
			// 	// 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
			// 	console.log(e, '父组件的eee');
			// })
			// 开启一个全局监听事件
			this.$_app.$on("test", (e) => {
				console.log(e, '--demo里面的e值');
			})
		},
		methods: {
			aa () {
				console.log( 'emit');
				this.$emit('test', {
					// 触发当前实例上的事件。附加参数都会传给监听器回调(即传给$on的回调)。
					value: '点击通讯',
					love: 'boy',
				})
			}
		}
	}
</script>

<style>
</style>
