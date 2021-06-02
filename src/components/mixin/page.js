	import page from "./page.vue"
	
	export default {
		components: {
			page
		},
		data() {
			return {
				current: 1,
				total: 100,
				limit: 10,
			}
		},
	}