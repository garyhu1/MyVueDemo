<template>
	<div>
		<h1>自定义事件</h1>
		<cus-button @getVal='setVal'>点击相加</cus-button>
		<p>{{ total }}</p>
		<div class="item_container">
			<div class="item_content">
				<ul></ul>
			</div>
		</div>
	</div>
</template>

<script>
	import CusButton from './CusButton';
	import Drag from '../assets/js/drag';

	export default {
		data() {
			return {
				total: 0,
				images: [
				    'http://www.jq22.com/img/cs/500x300-1.png',
		            'http://www.jq22.com/img/cs/500x300-2.png',
		            'http://www.jq22.com/img/cs/500x300-3.png',
		            'http://www.jq22.com/img/cs/500x300-4.png',
		            'http://www.jq22.com/img/cs/500x300-9.png',
		            'http://www.jq22.com/img/cs/500x300-5.png',
		            'http://www.jq22.com/img/cs/500x300-6.png',
		            'http://www.jq22.com/img/cs/500x300-7.png',
		            'http://www.jq22.com/img/cs/500x300-8.png'
				]
			}
		},
		components: {
			CusButton
		},
		methods: {
			setVal() {
				this.total += 2;
			}
		},
		mounted() {
			new Drag(jQuery(".item_content>ul"),this.images)
		}
	}
</script>

<style>
	.item_container {
		width: 900px;
		margin: 10px auto;
	}
	
	.item_content ul {
		list-style: none;
		position: relative;
	}
	
	.item_content ul li {
		width: 200px;
		height: 120px;
		float: left;
		margin: 10px
	}
	
	.item_content {
		width: 740px;
		height: 460px;
		border: 1px solid #ccc;
		float: left;
	}
	
	.item_content .item {
		width: 200px;
		height: 120px;
		line-height: 120px;
		text-align: center;
		cursor: pointer;
		background: #ccc;
	}
	
	.item_content .item img {
		width: 200px;
		height: 120px;
		border-radius: 6px;
	}
</style>