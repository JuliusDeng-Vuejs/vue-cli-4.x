<template>
	<div>
		<!-- <form>
			<div class="form-group">
				<label for="username">用户名</label>
				<input type="text" class="form-control is-invalid" id="username">
				<div class="invalid-feedback">
					 用户名不能为空
				</div>
			</div>
			<div class="form-group">
				<label for="email">邮箱</label>
				<input type="text" class="form-control is-valid" id="email">
				<div class="valid-feedback">
					 验证通过
				</div>
			</div>
			<button type="submit" class="btn btn-primary">提交</button> 
		</form> -->
		
		<z-form :form="form" :validate="validate">
			<z-form-item label="用户名" name="username">
				<input type="text" class="form-control" id="username"
				v-model="form.username">
			</z-form-item>
			<z-form-item label="邮箱" name="email">
				<input type="text" class="form-control" id="email"
				v-model="form.email">
			</z-form-item>
			<z-form-item>
				<button class="btn btn-primary" type="submit">提交</button>
			</z-form-item>
		</z-form>
	</div>
</template>

<script>
	import zForm from "./z-form.vue"
	import zFormItem from "./z-form-item.vue"
	
	export default {
		components: {
			zForm,
			zFormItem
		},
		data() {
			return {
				form: {
					username: '',
					email: ''
				},
				validate: [
					{
						name: 'username',
						validate: {
							required: {
								data: true,
								msg: "用户名不能为空"
							},
							rule: false
						}
					},
					{
						name: "email",
						validate: {
							required: {
								data: true,
								msg: "邮箱不能为空"
							},
							rule: false
						}
					}
				]
			}
		}
	}
</script>

<style>
</style>
