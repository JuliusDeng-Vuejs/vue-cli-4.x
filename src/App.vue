<template>
	<div id="app" class="container p-5">
		<!-- <div style="display: flex;border-bottom:  4mm ridge rgb(170, 50, 220, .6);">
			<img src="https://cn.vuejs.org/images/logo.png" alt="" class="imgvue">
			<h3 style="display: flex;align-items: center;" class="title">渐进式 <br>JavaScript 框架</h3>
			<br />
		</div>
		<h3>Vue.js介绍:</h3>
		<a-button type="primary">
			Primary
		</a-button> -->
		
		<a-button type="primary" style="margin-right: 20px;">
			<router-link to="/home">home</router-link>
		</a-button>
		<a-button type="primary">
			<router-link to="/about">about</router-link>
		</a-button> 
		
		<router-view></router-view>
		
		<!-- <on-emit></on-emit> -->

		<!-- <div class="alert alert-primary" v-show="show">
			消息提示
		</div>
		<provide></provide> -->

		<!-- <demo></demo> -->
		<!-- <time-xia></time-xia> -->
		<!-- <button class="btn btn-success" @click="clickEvent">app.vue的点击事件</button> -->
		<!-- v-slot 案例 -->
		<!-- <demo></demo> -->

	</div>
</template>

<script>
	// import demo from "@/components/ref-parent-children/demo.vue"
	// import demo from "@/components/provide-test/demo.vue"
	// import demo from '@/components/provide-inject/demo.vue'
	// import demo from '@/components/on-emit/demo.vue'
	// import demo from '@/components/directive/demo.vue'
	// import demo from "@/components/directive/v-menu.vue"
	// import demo from '@/components/nextTick/demo.vue'
	// import demo from '@/components/sync/demox.vue'
	// import demo from '@/components/mixin/demo.vue'
	// import timeXia from "@/components/demo/time.vue"
	// import demo from "@/components/v-slot/demo.vue"

	import demo from "@/components/demo-ref/demo.vue"

	export default {
		provide() {
			return {
				$_app: this
			}
		},
		// provide() {
		// 	return {
		// 		show: this.show,
		// 		showHide: this.showHide
		// 	}
		// },
		name: 'app',
		components: {
			// provide,
			demo,
			// timeXia
		},
		data() {
			return {
				// show: false
			}
		},
		methods: {
			// showHide(data) {
			// 	this.show = data
			// }
			clickEvent() {
				this.$emit('test', {
					value: 'app.vue的点击事件'
				})
			}
		}

	}
</script>

<style>
	.imgvue {
		width: 215px;
		height: 215px;
		/* float: right; */
		margin-right: 60px;
	}

	.title {
		font-weight: 300;
		margin: 0;
		font-size: 3.2em;
	}
</style>
