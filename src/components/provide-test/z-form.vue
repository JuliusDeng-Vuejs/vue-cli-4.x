<template>
	<form>
		<slot/>
	</form>
</template>

<script>
	export default {
		props: ['form', 'validate'],
		provide() {
			return {
				form: this.form,
				validate: this.validate
			}
		}
	}
</script>

<style>
</style>
