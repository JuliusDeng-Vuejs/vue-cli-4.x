<template>
	<div>
		<h2>{{msg}}</h2>
		<button class="btn btn-primary" @click="clickEvent">点击修改父组件数据</button>
	</div>
</template>

<script>
	export default {
		props: ["msg"],
		methods: {
			clickEvent() {
				let num = Math.floor(Math.random()*100)
				this.$emit("update:msg", num)
			}
		}
	}
</script>

<style>
</style>
