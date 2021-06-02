<template>
	<div>
		<!-- <demo-item :msg="msg" @change="change"></demo-item> -->
		<!-- <demo-item :msg="msg" @change="msg = $event"></demo-item> -->
		<demo-item :msg.sync="msg"></demo-item>
	</div>
</template>

<script>
	import demoItem from "./demo-item.vue"
	
	export default {
		data() {
			return {
				msg: "我是父组件传过去的"
			}
		},
		components: {
			demoItem
		},
		methods: {
			change(e) {
				this.msg = e
			}
		}
	}
</script>

<style>
</style>
