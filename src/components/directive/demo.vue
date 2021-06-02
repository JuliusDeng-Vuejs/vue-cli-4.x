<template>
	<div>
		<!-- <input type="text" class="form-control" v-focus="123"> -->
		
		<!-- <ul class="list-group">
			<li class="list-group-item" v-for="(item, index) in list" :key="index"
			v-list="item" @click="deleteItem(index)">
				{{item}}
			</li>
		</ul> -->
	<div class="row">
		<div class="col-4 mb-3" v-for="(item, index) in imgs" :key="index">
			<img class="w-100 mb-2" v-skeleton.img="item.src" style="min-height: 100px;">
			<h6 class="w-100" style="min-height: 30px;" v-skeleton.text="item.name"></h6>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [1,2,3,4,5,6],
				imgs: []
			}
		},
		created() {
			console.log('---created');
			for(let i=0; i<6; i++) {
				this.imgs.push({
					src: "",
					name: ""
				})
			}
		},
		mounted() {
			// console.log('---mounted');
			setTimeout(() =>{
				this.imgs =  [
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					},
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					},
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					},
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					},
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					},
					{
						src: "https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266331af80aa318972bd40736ff@wm_1,g_7,k_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5",
						name: "我听过空谷的回音"
					}
				]
			}, 3000)
		},
		methods: {
			setItem(index) {
				console.log(index, '--index');
				// this.list[index] = Math.floor(Math.random()*10)
				let num = Math.floor(Math.random()*10)
				this.$set(this.list, index, num)
			},
			deleteItem(index) {
				this.list.splice(index, 1)
			}
		},
		// directives: {
		// 	skeleton: {
		// 		bind(el, binding) {
		// 			// console.log('---bind');
		// 			el.style.backgroundColor = "#eeeeee",
		// 			el.style.color = "#eeeeee"
		// 		},
		// 		update(el, binding) {
		// 			// console.log('---update');
		// 			console.log(binding, '--binding');
		// 			// console.log(binding.value);
		// 			// console.log(binding.modifiers, '--update el');
		// 			el.style.backgroundColor = "";
		// 			el.style.color = "";
		// 			for (let key in binding.modifiers) {
		// 				switch (key){
		// 					case "img":
		// 					el.src = binding.value
		// 						break;
		// 					case "text":
		// 					el.innerHTML = binding.value
		// 						break;
		// 				}
		// 			}
		// 		}
		// 	},
			
		// 	// focus: {
		// 	// 	bind(el, binding, vNode) {
		// 	// 		console.log('---bind');
		// 	// 		console.log(el);
		// 	// 		console.log(binding);
		// 	// 	},
		// 	// 	inserted(el, binding) {
		// 	// 		console.log('---inserted');
		// 	// 		console.log(binding);
		// 	// 		el.focus()
		// 	// 	},
		// 	// 	update(el, binding) {
		// 	// 		console.log('---update');
		// 	// 		console.log(binding);
		// 	// 	}
		// 	// },
		// 	list: {
		// 		bind(el, binding, vNode) {
		// 			// console.log(binding);
		// 		},
		// 		inserted(el, binding) {
		// 			// console.log(binding);
		// 		},
		// 		// update(el, binding) {
		// 			// if(binding.oldValue !== binding.value) {
		// 			// 	console.log(binding);
		// 			// }
		// 		// 	console.log('--update');
		// 		// 	console.log(binding);
		// 		// }
		// 	}
		// }
	}
</script>

<style>
</style>
