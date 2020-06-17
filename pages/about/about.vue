<template>
	<view class="box">
		<h1>这是about页面</h1>
		<view :animation="animationData" class="animation">
			<image src="http://img0.imgtn.bdimg.com/it/u=137628589,3436980029&fm=26&gp=0.jpg" style="width: 100px;height: 100px;"></image>
		</view>
		<button @click="running(step)">别跑</button>

	</view>
</template>

<script>
export default {
	data() {
		return {
			animationData: {},
			step:200
		};
	},
	onLoad() {
		this.animation = uni.createAnimation();
		// 创建动画实例
	},
	onUnload() {
		this.animationData = {};
		// 页面关闭后清空数据
	},
	methods: {
		running(e) {
		if(e!=200){
			this.step=200;
		}else{
			this.step=0;
		}
			console.log(e)
			this.animation.translateX(e).step({ duration: 1000 });
			// 调用实例的方法来描述动画,translateX定义动画类型为x轴偏移, 500为偏移长度, 单位px
			// 调用 step() 来表示一组动画完成(当前参数动画时间1s)
			// step 可以配置参数用于指定当前组动画的配置。具体参数请看文档
			this.animationData = this.animation.export();
			// export方法导出动画数据
		}
	}
};
</script>

<style>
.box {
	width: 100%;
	height: 100%;
	background: #dd524d;
	/* align-items: center; */
	/* display: flex; */
	/* justify-content: center; */
}
</style>
