<template>
	<view>
		<navigator animation-type="slide-in-right" animation-duration="3000" url="../about/about"></navigator>
		<button type="warn" @click="routerLink">路由跳转about页面</button>
		<button type="warn" @click="routerLink('slide-in-right')">slide-in-right</button>
		<button type="warn" @click="routerLink('slide-in-left')">slide-in-left</button>
		<button type="warn" @click="routerLink('slide-in-top')">slide-in-top</button>
		<button type="warn" @click="routerLink('slide-in-bottom')">slide-in-bottom</button>
		<button type="warn" @click="routerLink('fade-in')">fade-in</button>
		<button type="warn" @click="routerLink('zoom-out')">zoom-out</button>
		<button type="warn" @click="routerLink('zoom-fade-out')">zoom-fade-out</button>
		<button type="warn" @click="routerLink('pop-in')">pop-in</button>
		<button type="warn" @click="routerlinkProgram">打开小程序</button>
		<navigator url="../program/program"><button type="default">program</button></navigator>
		<button type="warn" @click="getAddress">获取当前地理位置</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		uni.getStorageInfo({
			success: function(res) {
				// console.log(res.keys);
				// console.log(res.currentSize);
				// console.log(res.limitSize);
			}
		});
	},
	methods: {
		getAddress() {
			uni.showLoading({
				title: '加载中。。。'
			});
			uni.getLocation({
				type: 'gcj02',
				success: function(res) {
					uni.hideLoading();

					plus.nativeUI.alert('当前位置的经度' + res.longitude);
					plus.nativeUI.alert('当前位置的纬度' + res.latitude);
				}
			});
		},
		routerLink(e) {
			uni.navigateTo({
				url: '../about/about',
				animationType: e,
				animationDuration: 500
			});
		}
	}
};
</script>

<style lang="scss">
button {
	width: 90%;
	margin-left: 5%;
	margin-top: 10px;
}
button:last-child {
	margin-bottom: 60px;
}
</style>
