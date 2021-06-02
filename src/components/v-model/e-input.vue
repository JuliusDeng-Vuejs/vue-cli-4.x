<template>
	<div>
		<input type="text" class="form-control" :value="val"
		@input="changeInput">
		<!-- <input type="text" class="form-control" :value="val"
		@input="$emit('change', $event.target.value)"> -->
	</div>
</template>

<script>
	export default {
		props: ['val'],
		model: {
			prop: "val",
			event: "change"
		},
		methods: {
			changeInput(e) {
				this.$emit('change', e.target.value)
			}
		}
	}
</script>

<style>
</style>
