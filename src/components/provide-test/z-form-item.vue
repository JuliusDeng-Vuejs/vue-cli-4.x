<template>
	<div class="form-group">
		<label :for="name">{{label}}</label>
		<slot/>
		<div class="invalid-feedback">
			 用户名不能为空
		</div>
	</div>
</template>

<script>
	export default {
		props: ["label", "name"],
		inject: ["form", "validate"],
		data() {
			return {
				valis: {}
			}
		},
		mounted() {
			this.validate.forEach((v) => {
				if(v.name === this.name) {
					this.valis = v.validate
				}
			})
			
			this.$watch(`form.${this.name}`, (newVal, oldVal) => {
				// console.log(newVal);
				// 1 验证是否必填
				if(this.valis.required.data) {
					if(newVal === '') {
						console.log(this.valis.required.msg);
						return
					}
				}
			})
		}
	}
</script>

<style>
</style>
