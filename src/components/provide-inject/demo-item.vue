<template>
	<div class="pt-5">
		<h1>子组件里的内容</h1>
		<div class="card">
			<div class="card-body">
				<!-- 注！父组件里data中传来数据只会初始化渲染，并不是响应式的 -->
				{{title}}
			</div>
		</div>
		
		<button class="btn btn-primary" type="button" @click="rename('邓宇辰')">
			子组件-点击触发父
		</button>
		
		<button class="btn btn-danger" @click="showHide(true)">
			显示消息提示框
		</button>
		<button class="btn btn-warning" @click="showHide(false)">
			隐藏消息提示框
		</button>
		
		<h2>{{sontit}}</h2>
		
	</div>
</template>

<script>
	export default {
		inject: ['title', 'rename', 'show', 'showHide', 'sontit'],
		methods: {
			clickEvent() {
				this.rename('子组件修改标题')
			}
		}
	}
</script>

<style>
</style>
