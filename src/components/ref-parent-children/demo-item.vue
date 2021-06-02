<template>
	<div>
		
		<h2>{{header}}</h2>
		
		<input type="text" class="form-control" v-model="val"
		ref="input" @input="changeInput"/>
		<div @click="chtit">
			点我改变父组件
		</div>
		<h3>{{chtit}}</h3>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				header:"标题",
				val: '输入框',
				chtit: "我是子组件内容"
			}
		},
		methods: {
			focus() {
				this.$refs.input.focus()
			},
			renameHeader(data){
				this.header = data
			},
			changeInput(e){
				//this.$parent.header = e.target.value
				this.$parent.parentRename(e.target.value)
			},
			chtit() {
				this.$parent.ppname('写死的标题')
			}
		},
	}
</script>

<style>
</style>
