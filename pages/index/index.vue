<template>
	<view class="container">
		<button type="default" @click="getCurrentInfo">获取手机加速信息</button>
		<button type="default" @click="openBarcodeCustom">扫一扫</button>
		<button type="default" @click="openBluetoothAdapter">打开蓝牙</button>
		<button type="default" @click="getBluetoothState">获取本机蓝牙状态</button>
		<button type="default" @click="getBluetoothDevices">搜索蓝牙</button>
		<button type="default" @click="fingerprint">指纹识别</button>
		<button type="default" @click="isKeyguardSecure">是否设置密码锁屏</button>
		<button type="default" @click="authenticate">指纹识别认证</button>
		<button type="default" @click="AuthenticateOptions">指纹认证参数</button>
		<button type="default" @click="galleryImg">从相册中选择图片</button>
		<button type="default" @click="galleryImgs">从相册中选择多张图片</button>
		<button type="default" @click="savePicture">保存图片到手机相册</button>
		<button type="default" @click="getlocal">获取当前位置</button>
		<button type="default" @click="clearAddress">清除定位信息</button>
		<button type="default" @click="getAddress">调取第三方地理位置</button>
		<button type="default" @click="smsTest">发生短信</button>
		<button type="default" @click="actionSheet">弹出系统对话框</button>
		<button type="default" @click="showConfirm">弹出提示信息对话框</button>
		<button type="default" @click="autoCloseWaiting">自动关闭系统等待对话框</button>
		<button type="default" @click="previewImage">图片预览</button>
		<button type="default" @click="pickDate">选择日期</button>
		<button type="default" @click="checkPermissionPos">检查定位权限</button>
		<button type="default" @click="closeSplashscreen">关闭应用启动界面</button>
		<button type="default" @click="hasSplashscreen">查询应用启动界面是否已关闭</button>
		<button type="default" @click="hasNotchInScreen">查询设备是否是刘海屏</button>
		<button type="default" @click="updateSplashscreen">更新启动界面</button>
		<button type="default" @click="createShortcut">创建应用快捷方式</button>
		<button type="default" @click="hasShortcut">查询是否存在应用快捷方式</button>
		<button type="default" @click="isBackground">判断当前应用是否切换到后台</button>
		<button type="default" @click="isFullscreen">判断当前应用是否全屏模式显示</button>
		<button type="default" @click="setFullscreen">设置当前应用全屏显示</button>
		<button type="default" @click="isLogs">判断应用当前是否输出日志</button>
		<button type="default" @click="setLogs">设置应用是否输出日志</button>
		<button type="default" @click="setStatusBarBackground">设置系统状态栏背景颜色</button>
		<button type="default" @click="getStatusBarBackground">获取系统状态栏背景颜色</button>
		<button type="default" @click="setStatusBarStyle">设置系统状态栏样式</button>
		<button type="default" @click="getStatusBarStyle">获取系统状态栏样式</button>
		<button type="default" @click="getStatusbarHeight">获取系统状态栏高度</button>
		<button type="default" @click="isImmersedStatusbar">判断当前是否为沉浸式状态模式</button>
		<button type="default" @click="getSafeAreaInsets">获取应用的安全区域</button>
		<button type="default" @click="getServices">获取登录授权认证服务列表</button>
		<button type="default" @click="login">请求登录认证</button>
		<button type="default" @click="getCurrentOrientation">获取当前设备的方向信息</button>
		<button type="default" @click="watchOrientation">监听设备方向信息的变化</button>
		<button type="default" @click="clearWatch">关闭监听设备方向信息</button>
		<button type="default" @click="getCurrentProximity">获取当前设备的接近距离信息</button>
		<button type="default" @click="appid">当前应用的APPID</button>
		<button type="default" @click="arguments">第三方程序调用时 传递给程序的参数</button>
		<button type="default" @click="channel">应用渠道标识</button>
		<button type="default" @click="launcher">应用启动来源</button>
		<button type="default" @click="origin">应用安装来源</button>
		<button type="default" @click="launchLoadedTime">获取当前应用首页加载时间</button>
		<button type="default" @click="agreePrivacy">用户同意隐私政策</button>
		<button type="default" @click="setBadgeNumber">设置程序快捷方式上显示的角标数字</button>
		<button type="default" @click="openURL">打开第三方程序</button>
		<button type="default" @click="launchApplication">调用第三方程序</button>
		<button type="default" @click="isApplicationExist">判断第三方程序是否存在wx</button>
		<button type="default" @click="restart">重启当前的应用</button>
		<view>
			{{tip}}
		</view>
	</view>
</template>

<script>
	var ws = null;
	var scan = null;
	var wid = null;

	// 微信授权登录对象
	var aweixin = null;
	// 当前环境支持的所有授权登录对象
	var auths = {};
	var shares = null;
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				getCurrentAcceleration: "",
				tip: false,
			}
		},
		onLoad() {
		

			// 监听返回按键
			// plus.key.addEventListener("backbutton", function() {
			// 	plus.nativeUI.alert("BackButton Key pressed!");
			// });
			// this.setBadge();
		},
		methods: {
			setBadge() {
				var num = -1;
				var timer = setInterval(() => {
					num++;
					if (num >= 99) {
						num = "99++";
						uni.showToast({
							title: "结束" + num,
							mask: true,
							duration: 5000
						})
						clearInterval(timer);
					}
				}, 500)
				// #ifdef APP-PLUS
				plus.runtime.setBadgeNumber(num);
				// #endif
			},
			// 判断第三方程序是否存在
			isApplicationExist() {
				if (plus.runtime.isApplicationExist({
						pname: 'com.tencent.mm',
						action: 'weixin://'
					})) {
					plus.nativeUI.alert("微信应用已安装");
				} else {
					plus.nativeUI.alert("微信应用未安装");
				}
			},
			// 调用第三方程序
			launchApplication() {
				if (plus.os.name == "Android") {
					plus.runtime.launchApplication({
						pname: "com.taobao.taobao",
						extra: {
							url: "https://item.taobao.com/item.htm?id=20118332770"
						}
					}, function(e) {
						plus.nativeUI.alert("Open system default browser failed: " + e.message);
					});
				} else if (plus.os.name == "iOS") {
					plus.runtime.launchApplication({
						action: "http://www.html5plus.org"
					}, function(e) {
						plus.nativeUI.alert("Open system default browser failed: " + e.message);
					});
				}
			},

			// 第三方程序
			openApp(url) {
				var ua = navigator.userAgent.toLowerCase();
				var tb = url.replace("http://", "").replace("https://", "");
				if (ua.match(/iphone os 9/i) == "iphone os 9") {
					window.location = "taobao://" + tb;
					window.setTimeout(function() {
						window.location = url;
					}, 4000);
				} else {
					var ifr = document.createElement('iframe');
					ifr.src = 'taobao://' + tb;
					ifr.style.display = 'none';
					document.body.appendChild(ifr);
					window.location = url;
				}
			},

			// 打开第三方程序
			openURL() {
				// plus.runtime.openURL("https://www.baidu.com", function(e) {
				// 	plus.nativeUI.alert("打开失败");
				// }, "百度")
				this.openApp('https://item.taobao.com/item.htm?id=20118332770');
				// plus.runtime.openURL("https://m.jd.com/")
				// plus.runtime.openURL("https://main.m.taobao.com/?sprefer=sypc00");
			},

			// 重启当前的应用
			restart() {
				plus.runtime.restart();
			},
			// 用户同意隐私政策
			agreePrivacy() {
				plus.nativeUI.alert(plus.runtime.isAgreePrivacy());
			},
			// 获取当前应用首页加载时间
			launchLoadedTime() {
				plus.nativeUI.alert(plus.runtime.launchLoadedTime);
			},
			// 应用安装来源
			origin() {
				plus.nativeUI.alert(plus.runtime.origin);
			},
			// 应用启动来源
			launcher() {
				plus.nativeUI.alert(plus.runtime.launcher)
			},
			// 应用渠道标识
			channel() {
				plus.nativeUI.alert(plus.runtime.channel);
			},
			arguments() {
				// 处理第三方传入的参数
				if (plus.runtime.arguments != "") {
					try {
						var aj = JSON.parse(plus.runtime.arguments);
						this.alert(aj)
						// 处理JSON对象aj
					} catch (e) {
						this.alert(e)
						// 若传入的参数不是JSON格式字符，需处理异常情况
					}
				} else {
					this.alert("error");
				}
			},
			// appid
			appid() {
				this.alert(plus.runtime.appid);
			},
			// 获取当前设备的接近距离信息
			getCurrentProximity() {
				plus.proximity.getCurrentProximity(function(d) {
					plus.nativeUI.alert(e);
				}, function(e) {
					plus.nativeUI.alert(e.message);
				})
			},
			// 关闭监听设备方向的信息
			clearWatch() {
				plus.orientation.clearWatch(1);
			},
			// 监听设备方向信息的变化
			watchOrientation() {
				plus.orientation.watchOrientation(function(o) {
					plus.nativeUI.alert("Orientation\nAlpha:" + o.alpha + "\nBeta:" + o.beta + "\nGamma:" + o.gamma);
				}, function(e) {
					plus.nativeUI.alert("Orientation error: " + e.message);
				});
			},
			// 获取当前设备的方向信息
			getCurrentOrientation() {
				/**
				 * alpha  beta  gamma 
				 * */
				plus.orientation.getCurrentOrientation(function(o) {
					plus.nativeUI.alert("alpha:" + o.alpha + "===beta:0" + o.beta + "===gamma:" + o.gamma)
				});
			},
			// 请求登录
			login() {
				if (!aweixin) {
					plus.nativeUI.alert("当前环境不支持微信登录");
					return;
				}
				if (!aweixin.authResult) {
					aweixin.login(function(e) {
						plus.nativeUI.alert("登录认证成功!");
					}, function(e) {
						plus.nativeUI.alert("登录认证失败: " + JSON.stringify(e));
					});
				} else {
					plus.nativeUI.alert("已经登录认证!");
				}
			},
			// 获取登录授权认证服务列表
			getServices() {
				plus.oauth.getServices(function(services) {

					for (var i in services) {

						auths[service.id] = service;
					}

					aweixin = auths['weixin'];
					plus.nativeUI.alert(aweixin)

				}, function(e) {
					plus.nativeUI.alert("获取登录授权服务列表失败：" + JSON.stringify(e));
				});
			},
			// 获取应用的安全区域
			getSafeAreaInsets() {
				this.alert(plus.navigator.getSafeAreaInsets())
			},
			// 判断当前是否为沉浸式状态模式
			isImmersedStatusbar() {
				this.alert(plus.navigator.isImmersedStatusbar())
			},
			// 获取系统栏状态高度
			getStatusbarHeight() {
				this.alert(plus.navigator.getStatusbarHeight())
			},
			// 获取系统状态栏样式
			getStatusBarStyle() {
				this.alert(plus.navigator.getStatusBarStyle());
			},
			// 设置系统状态栏样式
			setStatusBarStyle() {
				plus.navigator.setStatusBarStyle('light');
				this.alert("设置成功");
			},
			// 获取系统状态栏背景颜色
			getStatusBarBackground() {
				plus.nativeUI.alert(plus.navigator.getStatusBarBackground())
			},
			// 设置系统状态栏背景颜色
			setStatusBarBackground() {
				plus.navigator.setStatusBarBackground('#55007f');
				plus.navigator.setStatusBarStyle('light');
			},
			// 设置应用是否输出日志
			setLogs() {
				plus.navigator.setLogs(true);
				plus.nativeUI.alert("设置成功");
			},
			// 判断应用当前是否输出日志
			isLogs() {
				if (plus.navigator.isLogs()) {
					plus.nativeUI.alert("输出日志");
				} else {
					plus.nativeUI.alert("没有输出");
				}
			},
			// 设置当前应用全屏显示
			setFullscreen() {
				plus.navigator.setFullscreen(true);
				plus.nativeUI.alert("设置成功");
			},

			// 判断当前应用是否全屏显示
			isFullscreen() {
				if (plus.navigator.isFullscreen()) {
					plus.nativeUI.alert("全屏显示");
				} else {
					plus.nativeUI.alert("不是全屏显示");
				}
			},
			// 判断当前应用是否切换到后台
			isBackground() {
				if (plus.navigator.isBackground()) {
					plus.nativeUI.alert("是");
				} else {
					plus.nativeUI.alert("不是");
				}
			},
			// 查询是否存在应用快捷方式
			hasShortcut() {
				plus.navigator.hasShortcut({}, function(e) {
					// 可通过result获取结果：
					// "existing"：快捷方式已存在；
					// "none"：快捷方式不存在（支持创建）；
					// "unsupported"：不支持创建桌面快捷方式；
					// "unknown"：不确定快捷方式是否存在。
					plus.nativeUI.alert(e.result);
				});
			},
			// 创建应用快捷方式
			createShortcut() {
				plus.navigator.createShortcut();
				plus.nativeUI.alert("创建成功")
			},
			// 更新启动界面
			updateSplashscreen() {
				plus.navigator.updateSplashscreen({
					image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591865301290&di=74d72d6ec20123a44ec40977f601f50f&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201412%2F10%2F175018td3l7lz6qwq75lsl.jpg"
				});
				plus.nativeUI.alert("设置成功")
			},
			// 查询设备是否是刘海屏
			hasNotchInScreen() {
				if (plus.navigator.hasNotchInScreen()) {
					plus.nativeUI.alert('此设备是刘海屏');
				} else {
					plus.nativeUI.alert('此设备不是刘海屏');
				}
			},
			// 查询应用启动界面是否已关闭
			hasSplashscreen() {
				if (plus.navigator.hasSplashscreen()) {
					plus.nativeUI.alert("启动界面未关闭");
				} else {
					plus.nativeUI.alert("启动界面已关闭");
				}
			},
			// 关闭应用启动界面
			closeSplashscreen() {
				plus.navigator.closeSplashscreen();
			},
			// 检查定位权限
			checkPermissionPos() {
				var pp = plus.navigator.checkPermission('LOCATION');
				switch (pp) {
					case 'authorized':
						plus.nativeUI.alert('已开启定位权限');
						break;
					case 'denied':
						plus.nativeUI.alert('已关闭定位权限');
						break;
					case 'undetermined':
						plus.nativeUI.alert('未确定定位权限');
						break;
					case 'unknown':
						plus.nativeUI.alert('无法查询定位权限');
						break;
					default:
						plus.nativeUI.alert('不支持定位权限');
						break;
				}
			},
			// 选择日期
			pickDate() {
				plus.nativeUI.pickDate(function(e) {
					var d = e.date;
					plus.nativeUI.alert(d);
					console.log("选择的日期：" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
				}, function(e) {
					console.log("未选择日期：" + JSON.stringify(e));
				});
			},
			// 
			previewImage() {
				plus.nativeUI.previewImage([
					"_www/logo.png",
					"http://img-cdn-qiniu.dcloud.net.cn/icon1.png",
					"http://img-cdn-qiniu.dcloud.net.cn/icon2.png",
					"http://img-cdn-qiniu.dcloud.net.cn/icon3.png"
				]);
			},
			autoCloseWaiting() {
				plus.nativeUI.showWaiting("loading...");
				setTimeout(function() {
					plus.nativeUI.closeWaiting();
				}, 5000);
			},
			showConfirm() {
				plus.nativeUI.confirm("Are you sure ready?", function(e) {
					plus.nativeUI.alert("Close confirm ", e)
				});
			},
			actionSheet() {
				plus.nativeUI.actionSheet({
						title: "Plus is ready!",
						cancel: "取消",
						buttons: [{
							title: "1"
						}, {
							title: "2"
						}]
					},
					function(e) {
						plus.nativeUI.alert(e.index)
					})
			},
			// 发送短信
			smsTest() {
				var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
				msg.to = ['18611497504', '15811140520'];
				msg.body = 'This is HTML5 Plus example test message';
				plus.messaging.sendMessage(msg);
			},
			// 调取第三方地理位置
			getAddress() {
				var dst = new plus.maps.Point(116.39131928, 39.90793074); // 天安门 
				var src = new plus.maps.Point(116.335, 39.966); // 大钟寺
				// 调用系统地图显示 
				plus.maps.openSysMap(dst, "天安门", src);
			},
			// 清除定位信息
			clearAddress() {
				plus.geolocation.clearWatch(wid);
				wid = null;
				plus.nativeUI.alert("清除成功");
			},
			// 获取当前位置
			getlocal() {
				wid = plus.geolocation.watchPosition(function(p) {
					plus.nativeUI.alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude +
						'\nAltitude:' + p.coords.altitude);
				}, function(e) {
					plus.nativeUI.alert('Geolocation error: ' + e.message);
				})
			},
			// 保存图片到手机相册
			savePicture() {
				plus.gallery.save("http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=26&gp=0.jpg", function() {
					plus.nativeUI.alert("保存图片到相册成功")
				});
			},
			// 选择多张图片

			galleryImgs() {
				// 从相册中选择图片

				plus.gallery.pick(function(e) {
					for (var i in e.files) {
						plus.nativeUI.alert(e.files[i]);
					}
				}, function(e) {
					plus.nativeUI.alert("取消选择图片")

				}, {
					filter: "image",
					multiple: true
				});
			},
			// 选择图片
			galleryImg() {
				plus.gallery.pick(function(path) {
					plus.nativeUI.alert(path);
				}, function(e) {
					plus.nativeUI.alert("取消选择图片")
				}, {
					filter: "image"
				});
			},
			// 指纹认证参数
			AuthenticateOptions() {
				var waiting = null;
				// 自动调用指纹识别
				plus.fingerprint.authenticate(function() {
					waiting && (waiting.onclose = null);
					plus.nativeUI.closeWaiting();
					plus.nativeUI.alert('指纹识别成功');
				}, function(e) {
					if (e.AUTHENTICATE_MISMATCH == e.code) {
						plus.nativeUI.toast('指纹匹配失败，请重新输入');
						return;
					}
					waiting && (waiting.onclose = null);
					plus.nativeUI.closeWaiting();
					plus.nativeUI.alert('指纹识别失败(' + e.code + ')');
				}, {
					message: '通过Home键验证已有手机指纹'
				});
				// Android平台使用自定义等待框显示 
				if ("Android" == plus.os.name) {
					waiting = plus.nativeUI.showWaiting('验证已有手机指纹', {
						width: '196px',
						height: '196px',
						padding: '16px',
						loading: {
							height: '96px',
							icon: 'fp.png'
						},
						background: 'rgba(0,0,0,0.3)'
					});
					waiting.onclose = function() {
						waiting = null;
						plus.fingerprint.cancel();
					}
				}
			},
			// 取消指纹认证
			cancelFingerpring() {
				plus.fingerprint.cancel();
			},
			// 指纹认证
			authenticate() {
				var waiting = null;
				plus.fingerprint.authenticate(function() {
					plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
					alert('指纹识别成功');
				}, function(e) {
					switch (e.code) {
						case e.AUTHENTICATE_MISMATCH:
							plus.nativeUI.toast('指纹匹配失败，请重新输入');
							break;
						case e.AUTHENTICATE_OVERLIMIT:
							plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
							plus.nativeUI.alert('指纹识别失败次数超出限制，请使用其它方式进行认证');
							break;
						default:
							plus.nativeUI.closeWaiting(); //兼容Android平台关闭等待框
							plus.nativeUI.alert('指纹识别失败(' + e.code + ')，请重试');
							break;
					}
				});
				// Android平台弹出等待提示框 
				if ('Android' == plus.os.name) {
					plus.nativeUI.showWaiting('指纹识别中...');
				}
			},
			// 是否设置密码锁屏
			isKeyguardSecure() {
				plus.nativeUI.alert(plus.fingerprint.isKeyguardSecure())
			},
			// 是否支持指纹识别
			fingerprint() {
				plus.nativeUI.alert(plus.fingerprint.isSupport())
			},
			openBluetoothAdapter() {
				plus.bluetooth.openBluetoothAdapter({
					success: function(e) {
						plus.nativeUI.alert("success===>", JSON.stringify())

						console.log('open success: ' + JSON.stringify(e));
					},
					fail: function(e) {
						plus.nativeUI.alert("error===>", JSON.stringify())
					}
				})
			},
			getBluetoothDevices() {
				plus.bluetooth.getBluetoothDevices({
					success: function(e) {
						var devices = e.devices;

						for (var i in devices) {

							plus.nativeUI.alert("success===>", JSON.stringify(devices[i]))

						}
					},
					fail: function(e) {
						plus.nativeUI.alert("error===>", JSON.stringify(e))
					}
				});
			},
			getBluetoothState() {
				plus.bluetooth.getBluetoothAdapterState({
					success: function(e) {
						plus.nativeUI.alert("success===>", JSON.stringify(e))
					},
					fail: function(e) {
						plus.nativeUI.alert("error===>", JSON.stringify(e))

					}
				});

			},
			getCurrentInfo() {
				plus.accelerometer.getCurrentAcceleration(function(a) {
					plus.nativeUI.alert("Acceleration:" + a.xAxis + "\n:" + a.yAxis + "\n" + a.zAxis)
				})
			},
			openBarcodeCustom() {
				plus.gallery.pick(function() {
					plus.barcode.scan(Path, function(type, code, file) {
						var result = "type" + type + "<br/>code:" + code + "<br/>file:" + file;
						plus.nativeUI.alert(result)
					}, function(error) {
						plus.nativeUI.alert('无法识别图片');
					});
				}, function(err) {
					plus.nativeUI.alert('Failed:' + err.message);
				});
			},
			// 自动检测手机是否支持指纹
			plusReady() {
				// 检查是否支持指纹识别
				if (plus.fingerprint) {
					if (!plus.fingerprint.isSupport()) {
						plus.nativeUI.alert("此设备不支持指纹识别")
						return;
					}
					if (!plus.fingerprint.isKeyguardSecure()) {
						plus.nativeUI.alert("此设备未设置密码锁屏，无法使用指纹识别")

						return;
					}
					if (!plus.fingerprint.isEnrolledFingerprints()) {
						plus.nativeUI.alert("此设备未录入指纹，请到设置中开启")


						return;
					}
					plus.nativeUI.alert("此设备支持指纹识别")

				} else {
					plus.nativeUI.alert("当前环境不支持指纹识别API，请更新到最新版本")


				}
			},
			alert(tip) {
				return plus.nativeUI.alert(tip);
			},
		}
	}
</script>

<style>
	.container {
		padding: 5px 20px;
		font-size: 14px;

	}

	button {
		margin-top: 10px;
	}
</style>
