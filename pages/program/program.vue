<template>
	<view><button type="warn" @click="checkWeChat">跳转到小程序</button></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onShow() {},
	onLoad() {},
	methods: {
		checkWeChat() {
			plus.share.getServices(
				function(res) {
					var sweixin = null;
					for (var i = 0; i < res.length; i++) {
						var t = res[i];
						if (t.id == 'weixin') {
							sweixin = t;
						}
					}
					if (sweixin) {
						sweixin.launchMiniProgram({
							id: 'gh_d5f27564492c',
							type: 0
						});
					}
				},
				function(res) {
					plus.nativeUI.alert('分享失败！！');
				}
			);
		}
	}
};
</script>

<style></style>
