<template>
	<div>
		<h1>{{title}}</h1>
		<demo-item></demo-item>
		<!-- <button class="btn btn-danger" @click="showHide(true)">
			显示消息提示框
		</button>
		<button class="btn btn-warning" @click="showHide(false)">
			隐藏消息提示框
		</button> -->
	</div>
</template>

<script>
	import demoItem from './demo-item.vue'
	export default {
		inject: ['show', 'showHide'],
		provide() {
			return {
				title: this.title,
				rename: this.rename,
				sontit: 'love'
			}
		},
		components: {
			demoItem
		},
		data() {
			return {
				title: '我是父组件的标题222'
			}
		},
		methods: {
			rename(data) {
				this.title = data
			}
		}
	}
</script>

<style>
</style>
