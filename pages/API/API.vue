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
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		uni.getStorageInfo({
		    success: function (res) {
		        console.log(res.keys);
		        console.log(res.currentSize);
		        console.log(res.limitSize);
		    }
		});
	},
	methods: {
		routerLink(e) {
			uni.redirectTo({
				url: '../about/about',
				animationType: e,
				animationDuration: 2000
			});
		}
	}
};
</script>

<style lang="scss">
	
</style>
