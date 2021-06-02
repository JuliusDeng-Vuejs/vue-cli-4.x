<template>
	<div>
		{{this.testData}}
	</div>
</template>

<script>
	export default {
	   inject: ['testData'],
	     created() {
	       console.log(this.testData)
	     }
	}
</script>

<style>
</style>
