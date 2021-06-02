<template>
	<div>
		<h2 ref="h2">{{msg}}</h2>
		<button class="btn btn-primary" @click="test">点击修改</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "nextTick案例"
			}
		},
		created() {
			// this.$nextTick(() => {
			// 	this.$refs.h2.innerHTML = "插入值"
			// })
		},
		// mounted() {
		// 	this.$refs.h2.innerHTML = "插入值"
		// }
		methods: {
			test() {
				this.msg = "这是修改之后的内容"
				this.$nextTick(() => {
					console.log(this.$refs.h2.innerHTML);
				})
			}
		}
	}
</script>

<style>
</style>
