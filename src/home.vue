<template>
	<a-tree
	  v-model="checkedKeys" 
		:expanded-keys="expandedKeys"
		:auto-expand-parent="true"
		:selected-keys="selectedKeys" 
		:tree-data="treeData" 
		:default-expanded-keys="['0-0-0', '0-0-1']"
		@expand="onExpand" 
		@select="onSelect" />
</template>
<script>
	const treeData = [{
			title: '方超',
			key: '0-0',
			children: [{
					title: '郭选金',
					key: '0-0-0',
					children: [{
							title: '蒲政委',
							key: '0-0-0-0',
							children: [{
									title: '胡浩',
									key: '0-0-0-0-0'
								},
								{
									title: '李永',
									key: '0-0-0-0-1'
								},
								{
									title: '丁江',
									key: '0-0-0-0-2'
								},
							],
						},
						{
							title: '陈军',
							key: '0-0-0-1'
						},
						{
							title: '罗凤',
							key: '0-0-0-2'
						},
					],
				},
				{
					title: '胡应龙',
					key: '0-0-1',
					children: [{
							title: '李是',
							key: '0-0-1-0'
						},
						{
							title: '胡亚',
							key: '0-0-1-1'
						},
						{
							title: '张数',
							key: '0-0-1-2'
						},
					],
				},
				{
					title: '郑仲平',
					key: '0-0-2',
					children: [{
							title: '0-0-1-0',
							key: '0-0-1-0'
						},
						{
							title: '0-0-1-1',
							key: '0-0-1-1'
						},
						{
							title: '0-0-1-2',
							key: '0-0-1-2'
						},
					],
				},
			],
		},

	];

	export default {
		data() {
			return {
				expandedKeys: ['0-0-0', '0-0-1',],
				autoExpandParent: true,
				checkedKeys: ['0-0-0'],
				selectedKeys: [],
				treeData,
			};
		},
		watch: {
			checkedKeys(val) {
				console.log('onCheck', val);
			},
		},
		methods: {
			onExpand(expandedKeys) {
				console.log('onExpand', expandedKeys);
				// if not set autoExpandParent to false, if children expanded, parent can not collapse.
				// or, you can remove all expanded children keys.
				this.expandedKeys = expandedKeys;
				this.autoExpandParent = false;
			},
			onCheck(checkedKeys) {
				console.log('onCheck', checkedKeys);
				this.checkedKeys = checkedKeys;
			},
			onSelect(selectedKeys, info) {
				console.log('onSelect', info);
				this.selectedKeys = selectedKeys;
			},
		},
	};
</script>
