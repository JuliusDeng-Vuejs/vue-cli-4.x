export default {
	data() {
		return {
			list: [1,2,3,4,5,6]
		}
	},
	mounted() {
		console.log('mixin--mounted');
	},
	methods: {
		test(index) {
			console.log("son--我是子组件里的方法");
		}
	}
}