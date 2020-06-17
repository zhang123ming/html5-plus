<template>
	<view class="box">
		<button type="warn" @click="capture">保存图片</button>
		<view class="list" v-for="(item,index) in 100" :key="index">
			{{item}}
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			
			capture() {
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				plus.nativeUI.alert(page.$getAppWebview())

				var bitmap = null;
				var currentWebview = page.$getAppWebview();

				bitmap = new plus.nativeObj.Bitmap('amway_img');
				// 将webview内容绘制到Bitmap对象中
				currentWebview.draw(bitmap, function() {
					plus.nativeUI.alert('截屏绘制图片成功');
					bitmap.save("_doc/a.jpg", {}, function(i) {
						plus.nativeUI.alert('保存图片成功：' + JSON.stringify(i));
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success: function() {
								bitmap.clear(); //销毁Bitmap图片
								uni.showToast({
									title: '保存图片成功',
									mask: false,
									duration: 1500
								});
							}
						});
					}, function(e) {
						plus.nativeUI.alert('保存图片失败：' + JSON.stringify(e));
					});
				}, function(e) {
					plus.nativeUI.alert('截屏绘制图片失败：' + JSON.stringify(e));
				});

			}
		}
	}
</script>

<style>
	.box {
		width: 100%;
		height: 100%;
	}

	.list {
		list-style: none;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
	}

	.list:nth-child(odd) {
		background-color: #f0f8ff;
	}

	.list:nth-child(even) {
		background-color: #056461;
	}
	
</style>
