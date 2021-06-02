<template>
	<nav aria-label="Page navigation example">
	  <ul class="pagination">
		<li class="page-item" :class="current === 1 ? 'disabled' : ''">
		  <a class="page-link" href="#" aria-label="Previous">
			<span aria-hidden="true">&laquo;</span>
			<span class="sr-only">Previous</span>
		  </a>
		</li>
		
		<li class="page-item" v-for="(item, index) in getPage" :key="index"
		:class="current === item ? 'active' : ''">
			<a class="page-link" @click="changePage(item)">{{item}}</a>
		</li>
		
		
		<li class="page-item" :class="current === getPage ? 'disabled' : ''">
		  <a class="page-link" href="#" aria-label="Next">
			<span aria-hidden="true">&raquo;</span>
			<span class="sr-only">Next</span>
		  </a>
		</li>
	  </ul>
	</nav>
</template>

<script>
	export default {
		props: ["current", "total", "limit"],
		computed: {
			getPage() {
				return this.total/this.limit
			}
		},
		methods: {
			changePage(item) {
				// this.current = item
				this.$emit("update:current", item)
				// console.log(index, 'index');
			}
		}
	}
	
	
</script>

<style>
</style>
