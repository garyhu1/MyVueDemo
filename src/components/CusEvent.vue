<template>
	<div>
		<h1>自定义事件</h1>
		<cus-button @getVal='setVal'>点击相加</cus-button>
		<p>{{ total }}</p>
		<div class="item_container">
			<div class="item_content">
				<ul>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-1.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-2.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-3.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-4.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-5.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-6.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-9.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-7.png" /> </div>
					</li>
					<li>
						<div class="item"> <img src="http://www.jq22.com/img/cs/500x300-8.png" /> </div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import CusButton from './CusButton';
	import { Drag } from '../assets/js/drag';

	export default {
		data() {
			return {
				total: 0
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
			Drag()
		}
	}
</script>

<style>
	.item_content ul {
		list-style: none;
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