<template>
	<div>
			<button class="btn btn-danger" @click="showHide()">
				显示消息提示框
			</button>
	    <child></child>
	  </div>
</template>

<script>
	import child from './child'
	export default {
	  provide() {
	     return {
	       testData: this.testData
	     }
	   },
	   data () {
	     return {
	       testData: 'null'
	     }
	   },
		 methods: {
			 showHide() {
				 this.testData = '改变的值'
				 console.log(this.testData, '--test');
			 }
			 
		 },
	   
	   components: {
	     child
	   }
	}
	
</script>

<style>
</style>
