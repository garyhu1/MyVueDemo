<template>
	<div class="father">
		<div class="container" id="con">
			<div class="line"></div>
			<div class="progress"></div>
			<div class="ball" @mousedown="down" @mouseup="up" @mousemove="move"></div>
			<div class="content" disabled>
				<span>无限</span>
				<span>1000</span>
				<span>5000</span>
				<span>10000</span>
			</div>
		</div>
		<p>{{x}}</p>
		<p>{{x1}}</p>
		<p>{{e1}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				move: false,
				x: 0,
				x0: 0,
				x1: 0,
				e1: null
			}
		},
		create() {
			this.x0 = jQuery(".con").offset(left);
		},
		methods: {
			down(e) {
				this.move = true;
				this.x = e.offsetX;
			},
			up() {
				this.move = false;
				if(this.x1 > 0 && this.x1 < 592) {
					if(this.x1 <= 100) {
						jQuery('.ball').animate({
							left: "0px"
						}, 200);
						jQuery('.progress').animate({
							width: "0px"
						}, 200);
					} else if(this.x1 <= 300) {
						jQuery('.ball').animate({
							left: "200px"
						}, 200);
						jQuery('.progress').animate({
							width: "200px"
						}, 200);
					} else if(this.x1 <= 500) {
						jQuery('.ball').animate({
							left: "400px"
						}, 200);
						jQuery('.progress').animate({
							width: "400px"
						}, 200);
					} else {
						jQuery('.ball').animate({
							left: "592px"
						}, 200);
						jQuery('.progress').animate({
							width: "600px"
						}, 200);
					}
				}
			},
			move(e) {
				if(this.move) {
					this.x1 = e.clientX - this.x - this.x0;
					if(this.x1 > 0 &&this. x1 < 592) {
						jQuery('.ball').css("left", this.x1);
						jQuery('.progress').css("width", this.x1);
					}
				}
			}
		}
	}
</script>

<style>
	.father {
		padding: 0;
		margin: 0;
		height: 100%;
		width: 100%;
		background: #ADAEA8;
	}
	
	.container {
		position: relative;
		height: 100px;
		width: 620px;
		margin: 300px auto;
	}
	
	.line {
		position: absolute;
		top: 7px;
		left: 5px;
		height: 5px;
		width: 600px;
		background: #f0f0f0;
		border-radius: 5px;
	}
	
	.progress {
		position: absolute;
		background: #4EB900;
		width: 0px;
		height: 5px;
		border-radius: 5px;
		top: 7px;
		left: 5px;
	}
	
	.ball {
		position: absolute;
		top: 0;
		left: 0;
		width: 19px;
		height: 19px;
		background: #4eb900;
		border-radius: 50%;
		cursor: pointer;
	}
	
	.content {
		position: absolute;
		top: 22px;
		width: 620px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.content span {
		color: #000000;
		font-size: 12px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>