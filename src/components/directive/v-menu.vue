<template>
	<div>
		<ul class="list-group">
			<li class="list-group-item" v-menu="menu">1</li>
			<li class="list-group-item">2</li>
			<li class="list-group-item">3</li>
			<li class="list-group-item">4</li>
			<li class="list-group-item">5</li>
		</ul>
		
		
		
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: [
					{name: "选项一"},
					{name: "选项二"},
				]
			}
		},
		directives: {
			menu: {
				inserted(el, binding) {
					el.addEventListener("contextmenu", (e) => {
						e.preventDefault()
						
						let getSubmenu = function() {
							return document.getElementById("submenu")
						}
						
							// 关闭之前菜单
						let removeSubmenu = function() {
							let submenu = getSubmenu()
							if (submenu) {
								submenu.remove()
							}
						}
						removeSubmenu()
						
						// 获取鼠标坐标
						let left = e.x
						let top = e.y
						let list = ""
						// console.log(binding.value, '---binding.val');
						// 构建菜单列表
						for (let i = 0; i < binding.value.length; i++) {
							list += `<li class="list-group-item list-group-item-primary list-group-item-action">
							${binding.value[i].name}</li>`
						}
						// 构建菜单
						let template = `
							<div id="submenu">
								<div class="" style="position: fixed; top: 0; left: 0; bottom: 0; right: 0;z-index: 998;"></div>
								<ul class="list-group" style="width: 200px; position: fixed; top: ${top}px; left: ${left}px;z-index: 999;">
									${list}
								</ul>
							</div>
						`;
						// 渲染到页面
						el.innerHTML += template
						
						// 给蒙版添加点击事件
						let submenu = getSubmenu()
						console.log(submenu.children, '--children');
						submenu.children[0].addEventListener("click", (e) => {
							console.log('关闭啊');
							removeSubmenu()
						})
						
						// 给菜单添加点击事件
						let li = submenu.getElementsByClassName("list-group-item")
						for (let i=0; i<li.length; i++) {
							li[i].addEventListener("click", (e) => {
								console.log(binding.value[i].name);
								removeSubmenu()
							})
						}
						
					})
				}
			}
		}
	}
</script>

<style>
</style>
