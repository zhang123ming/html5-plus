<script>
var global = null;
export default {
	onLaunch: function(option) {

	},

	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}

/* #endif */
page {
	width: 100%;
	height: 100%;
}
</style>
