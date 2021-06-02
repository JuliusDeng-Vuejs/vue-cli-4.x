<template>
	<div>
		<ul class="list-group">
			<li class="list-group-item" v-for="(item, index) in list" :key="index"
			@click="test(index)">
				{{item}}
			</li>
		</ul>
		
		<page :current.sync="current" :total="total" :limit="limit"></page>
	</div>
</template>

<script>
	// import mixin from "./mixin.js"
	import page from "./page.js"
	
	export default {
		
		data() {
			return {
				// current: 1,
				// total: 100,
				// limit: 10,
			}
		},
		mixins: [page],
		mounted() {
			console.log('futher--mounted');
		},
		methods: {
			test(index) {
				console.log("father--我是父组件里的方法");
			}
		}
	}
</script>

<style>
</style>
