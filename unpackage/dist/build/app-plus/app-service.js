(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,n,i){"use strict";function a(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function u(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var o=n.shift();if(r())return n.push(n.pop().replace("at ","uni-app:///")),console[o].apply(console,n);var u=n.map((function(t){var n=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===n||"[object array]"===n)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=a(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),s="";if(u.length>1){var c=u.pop();s=u.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=u[0];console[o](s)}i.r(n),i.d(n,"log",(function(){return o})),i.d(n,"default",(function(){return u}))},"2ccc":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=null,a=null,r={},o={data:function(){return{href:"https://uniapp.dcloud.io/component/README?id=uniui",getCurrentAcceleration:"",tip:!1}},onLoad:function(){},methods:{setBadge:function(){var t=-1,e=setInterval((function(){t++,t>=99&&(t="99++",uni.showToast({title:"结束"+t,mask:!0,duration:5e3}),clearInterval(e))}),500);plus.runtime.setBadgeNumber(t)},isApplicationExist:function(){plus.runtime.isApplicationExist({pname:"com.tencent.mm",action:"weixin://"})?plus.nativeUI.alert("微信应用已安装"):plus.nativeUI.alert("微信应用未安装")},launchApplication:function(){"Android"==plus.os.name?plus.runtime.launchApplication({pname:"com.taobao.taobao",extra:{url:"https://item.taobao.com/item.htm?id=20118332770"}},(function(t){plus.nativeUI.alert("Open system default browser failed: "+t.message)})):"iOS"==plus.os.name&&plus.runtime.launchApplication({action:"http://www.html5plus.org"},(function(t){plus.nativeUI.alert("Open system default browser failed: "+t.message)}))},openApp:function(t){var e=navigator.userAgent.toLowerCase(),n=t.replace("http://","").replace("https://","");if("iphone os 9"==e.match(/iphone os 9/i))window.location="taobao://"+n,window.setTimeout((function(){window.location=t}),4e3);else{var i=document.createElement("iframe");i.src="taobao://"+n,i.style.display="none",document.body.appendChild(i),window.location=t}},openURL:function(){this.openApp("https://item.taobao.com/item.htm?id=20118332770")},restart:function(){plus.runtime.restart()},agreePrivacy:function(){plus.nativeUI.alert(plus.runtime.isAgreePrivacy())},launchLoadedTime:function(){plus.nativeUI.alert(plus.runtime.launchLoadedTime)},origin:function(){plus.nativeUI.alert(plus.runtime.origin)},launcher:function(){plus.nativeUI.alert(plus.runtime.launcher)},channel:function(){plus.nativeUI.alert(plus.runtime.channel)},arguments:function(){if(""!=plus.runtime.arguments)try{var t=JSON.parse(plus.runtime.arguments);this.alert(t)}catch(e){this.alert(e)}else this.alert("error")},appid:function(){this.alert(plus.runtime.appid)},getCurrentProximity:function(){plus.proximity.getCurrentProximity((function(t){plus.nativeUI.alert(e)}),(function(t){plus.nativeUI.alert(t.message)}))},clearWatch:function(){plus.orientation.clearWatch(1)},watchOrientation:function(){plus.orientation.watchOrientation((function(t){plus.nativeUI.alert("Orientation\nAlpha:"+t.alpha+"\nBeta:"+t.beta+"\nGamma:"+t.gamma)}),(function(t){plus.nativeUI.alert("Orientation error: "+t.message)}))},getCurrentOrientation:function(){plus.orientation.getCurrentOrientation((function(t){plus.nativeUI.alert("alpha:"+t.alpha+"===beta:0"+t.beta+"===gamma:"+t.gamma)}))},login:function(){a?a.authResult?plus.nativeUI.alert("已经登录认证!"):a.login((function(t){plus.nativeUI.alert("登录认证成功!")}),(function(t){plus.nativeUI.alert("登录认证失败: "+JSON.stringify(t))})):plus.nativeUI.alert("当前环境不支持微信登录")},getServices:function(){plus.oauth.getServices((function(t){for(var e in t)r[service.id]=service;a=r["weixin"],plus.nativeUI.alert(a)}),(function(t){plus.nativeUI.alert("获取登录授权服务列表失败："+JSON.stringify(t))}))},getSafeAreaInsets:function(){this.alert(plus.navigator.getSafeAreaInsets())},isImmersedStatusbar:function(){this.alert(plus.navigator.isImmersedStatusbar())},getStatusbarHeight:function(){this.alert(plus.navigator.getStatusbarHeight())},getStatusBarStyle:function(){this.alert(plus.navigator.getStatusBarStyle())},setStatusBarStyle:function(){plus.navigator.setStatusBarStyle("light"),this.alert("设置成功")},getStatusBarBackground:function(){plus.nativeUI.alert(plus.navigator.getStatusBarBackground())},setStatusBarBackground:function(){plus.navigator.setStatusBarBackground("#55007f"),plus.navigator.setStatusBarStyle("light")},setLogs:function(){plus.navigator.setLogs(!0),plus.nativeUI.alert("设置成功")},isLogs:function(){plus.navigator.isLogs()?plus.nativeUI.alert("输出日志"):plus.nativeUI.alert("没有输出")},setFullscreen:function(){plus.navigator.setFullscreen(!0),plus.nativeUI.alert("设置成功")},isFullscreen:function(){plus.navigator.isFullscreen()?plus.nativeUI.alert("全屏显示"):plus.nativeUI.alert("不是全屏显示")},isBackground:function(){plus.navigator.isBackground()?plus.nativeUI.alert("是"):plus.nativeUI.alert("不是")},hasShortcut:function(){plus.navigator.hasShortcut({},(function(t){plus.nativeUI.alert(t.result)}))},createShortcut:function(){plus.navigator.createShortcut(),plus.nativeUI.alert("创建成功")},updateSplashscreen:function(){plus.navigator.updateSplashscreen({image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591865301290&di=74d72d6ec20123a44ec40977f601f50f&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201412%2F10%2F175018td3l7lz6qwq75lsl.jpg"}),plus.nativeUI.alert("设置成功")},hasNotchInScreen:function(){plus.navigator.hasNotchInScreen()?plus.nativeUI.alert("此设备是刘海屏"):plus.nativeUI.alert("此设备不是刘海屏")},hasSplashscreen:function(){plus.navigator.hasSplashscreen()?plus.nativeUI.alert("启动界面未关闭"):plus.nativeUI.alert("启动界面已关闭")},closeSplashscreen:function(){plus.navigator.closeSplashscreen()},checkPermissionPos:function(){var t=plus.navigator.checkPermission("LOCATION");switch(t){case"authorized":plus.nativeUI.alert("已开启定位权限");break;case"denied":plus.nativeUI.alert("已关闭定位权限");break;case"undetermined":plus.nativeUI.alert("未确定定位权限");break;case"unknown":plus.nativeUI.alert("无法查询定位权限");break;default:plus.nativeUI.alert("不支持定位权限");break}},pickDate:function(){plus.nativeUI.pickDate((function(e){var n=e.date;plus.nativeUI.alert(n),t("log","选择的日期："+n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()," at pages\\index\\index.vue:410")}),(function(e){t("log","未选择日期："+JSON.stringify(e)," at pages\\index\\index.vue:412")}))},previewImage:function(){plus.nativeUI.previewImage(["_www/logo.png","http://img-cdn-qiniu.dcloud.net.cn/icon1.png","http://img-cdn-qiniu.dcloud.net.cn/icon2.png","http://img-cdn-qiniu.dcloud.net.cn/icon3.png"])},autoCloseWaiting:function(){plus.nativeUI.showWaiting("loading..."),setTimeout((function(){plus.nativeUI.closeWaiting()}),5e3)},showConfirm:function(){plus.nativeUI.confirm("Are you sure ready?",(function(t){plus.nativeUI.alert("Close confirm ",t)}))},actionSheet:function(){plus.nativeUI.actionSheet({title:"Plus is ready!",cancel:"取消",buttons:[{title:"1"},{title:"2"}]},(function(t){plus.nativeUI.alert(t.index)}))},smsTest:function(){var t=plus.messaging.createMessage(plus.messaging.TYPE_SMS);t.to=["18611497504","15811140520"],t.body="This is HTML5 Plus example test message",plus.messaging.sendMessage(t)},getAddress:function(){var t=new plus.maps.Point(116.39131928,39.90793074),e=new plus.maps.Point(116.335,39.966);plus.maps.openSysMap(t,"天安门",e)},clearAddress:function(){plus.geolocation.clearWatch(i),i=null,plus.nativeUI.alert("清除成功")},getlocal:function(){i=plus.geolocation.watchPosition((function(t){plus.nativeUI.alert("Geolocation\nLatitude:"+t.coords.latitude+"\nLongitude:"+t.coords.longitude+"\nAltitude:"+t.coords.altitude)}),(function(t){plus.nativeUI.alert("Geolocation error: "+t.message)}))},savePicture:function(){plus.gallery.save("http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=26&gp=0.jpg",(function(){plus.nativeUI.alert("保存图片到相册成功")}))},galleryImgs:function(){plus.gallery.pick((function(t){for(var e in t.files)plus.nativeUI.alert(t.files[e])}),(function(t){plus.nativeUI.alert("取消选择图片")}),{filter:"image",multiple:!0})},galleryImg:function(){plus.gallery.pick((function(t){plus.nativeUI.alert(t)}),(function(t){plus.nativeUI.alert("取消选择图片")}),{filter:"image"})},AuthenticateOptions:function(){var t=null;plus.fingerprint.authenticate((function(){t&&(t.onclose=null),plus.nativeUI.closeWaiting(),plus.nativeUI.alert("指纹识别成功")}),(function(e){e.AUTHENTICATE_MISMATCH!=e.code?(t&&(t.onclose=null),plus.nativeUI.closeWaiting(),plus.nativeUI.alert("指纹识别失败("+e.code+")")):plus.nativeUI.toast("指纹匹配失败，请重新输入")}),{message:"通过Home键验证已有手机指纹"}),"Android"==plus.os.name&&(t=plus.nativeUI.showWaiting("验证已有手机指纹",{width:"196px",height:"196px",padding:"16px",loading:{height:"96px",icon:"fp.png"},background:"rgba(0,0,0,0.3)"}),t.onclose=function(){t=null,plus.fingerprint.cancel()})},cancelFingerpring:function(){plus.fingerprint.cancel()},authenticate:function(){plus.fingerprint.authenticate((function(){plus.nativeUI.closeWaiting(),alert("指纹识别成功")}),(function(t){switch(t.code){case t.AUTHENTICATE_MISMATCH:plus.nativeUI.toast("指纹匹配失败，请重新输入");break;case t.AUTHENTICATE_OVERLIMIT:plus.nativeUI.closeWaiting(),plus.nativeUI.alert("指纹识别失败次数超出限制，请使用其它方式进行认证");break;default:plus.nativeUI.closeWaiting(),plus.nativeUI.alert("指纹识别失败("+t.code+")，请重试");break}})),"Android"==plus.os.name&&plus.nativeUI.showWaiting("指纹识别中...")},isKeyguardSecure:function(){plus.nativeUI.alert(plus.fingerprint.isKeyguardSecure())},fingerprint:function(){plus.nativeUI.alert(plus.fingerprint.isSupport())},openBluetoothAdapter:function(){plus.bluetooth.openBluetoothAdapter({success:function(e){plus.nativeUI.alert("success===>",JSON.stringify()),t("log","open success: "+JSON.stringify(e)," at pages\\index\\index.vue:591")},fail:function(t){plus.nativeUI.alert("error===>",JSON.stringify())}})},getBluetoothDevices:function(){plus.bluetooth.getBluetoothDevices({success:function(t){var e=t.devices;for(var n in e)plus.nativeUI.alert("success===>",JSON.stringify(e[n]))},fail:function(t){plus.nativeUI.alert("error===>",JSON.stringify(t))}})},getBluetoothState:function(){plus.bluetooth.getBluetoothAdapterState({success:function(t){plus.nativeUI.alert("success===>",JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("error===>",JSON.stringify(t))}})},getCurrentInfo:function(){plus.accelerometer.getCurrentAcceleration((function(t){plus.nativeUI.alert("Acceleration:"+t.xAxis+"\n:"+t.yAxis+"\n"+t.zAxis)}))},openBarcodeCustom:function(){plus.gallery.pick((function(){plus.barcode.scan(Path,(function(t,e,n){var i="type"+t+"<br/>code:"+e+"<br/>file:"+n;plus.nativeUI.alert(i)}),(function(t){plus.nativeUI.alert("无法识别图片")}))}),(function(t){plus.nativeUI.alert("Failed:"+t.message)}))},plusReady:function(){if(plus.fingerprint){if(!plus.fingerprint.isSupport())return void plus.nativeUI.alert("此设备不支持指纹识别");if(!plus.fingerprint.isKeyguardSecure())return void plus.nativeUI.alert("此设备未设置密码锁屏，无法使用指纹识别");if(!plus.fingerprint.isEnrolledFingerprints())return void plus.nativeUI.alert("此设备未录入指纹，请到设置中开启");plus.nativeUI.alert("此设备支持指纹识别")}else plus.nativeUI.alert("当前环境不支持指纹识别API，请更新到最新版本")},alert:function(t){return plus.nativeUI.alert(t)}}};n.default=o}).call(this,i("0de9")["default"])},"34a4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__EA94B6C"};e.default=i},"36a0":function(t,e,n){"use strict";n.r(e);var i=n("6dca"),a=n("788e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},"3b96":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(){},methods:{capture:function(){var t=getCurrentPages(),e=t[t.length-1];plus.nativeUI.alert(e.$getAppWebview());var n=null,i=e.$getAppWebview();n=new plus.nativeObj.Bitmap("amway_img"),i.draw(n,(function(){plus.nativeUI.alert("截屏绘制图片成功"),n.save("_doc/a.jpg",{},(function(t){plus.nativeUI.alert("保存图片成功："+JSON.stringify(t)),uni.saveImageToPhotosAlbum({filePath:t.target,success:function(){n.clear(),uni.showToast({title:"保存图片成功",mask:!1,duration:1500})}})}),(function(t){plus.nativeUI.alert("保存图片失败："+JSON.stringify(t))}))}),(function(t){plus.nativeUI.alert("截屏绘制图片失败："+JSON.stringify(t))}))}}};e.default=i},"59c2":function(t,e,n){"use strict";n.r(e);var i=n("8b0e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"5e3a":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("navigator",{}),n("button",{attrs:{_i:2},on:{click:t.routerLink}}),n("button",{attrs:{_i:3},on:{click:function(e){return t.routerLink("slide-in-right")}}}),n("button",{attrs:{_i:4},on:{click:function(e){return t.routerLink("slide-in-left")}}}),n("button",{attrs:{_i:5},on:{click:function(e){return t.routerLink("slide-in-top")}}}),n("button",{attrs:{_i:6},on:{click:function(e){return t.routerLink("slide-in-bottom")}}}),n("button",{attrs:{_i:7},on:{click:function(e){return t.routerLink("fade-in")}}}),n("button",{attrs:{_i:8},on:{click:function(e){return t.routerLink("zoom-out")}}}),n("button",{attrs:{_i:9},on:{click:function(e){return t.routerLink("zoom-fade-out")}}}),n("button",{attrs:{_i:10},on:{click:function(e){return t.routerLink("pop-in")}}})])},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"5f94":function(t,e,n){"use strict";n.r(e);var i=n("a63b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"6dca":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("button",{attrs:{_i:1},on:{click:t.getCurrentInfo}}),n("button",{attrs:{_i:2},on:{click:t.openBarcodeCustom}}),n("button",{attrs:{_i:3},on:{click:t.openBluetoothAdapter}}),n("button",{attrs:{_i:4},on:{click:t.getBluetoothState}}),n("button",{attrs:{_i:5},on:{click:t.getBluetoothDevices}}),n("button",{attrs:{_i:6},on:{click:t.fingerprint}}),n("button",{attrs:{_i:7},on:{click:t.isKeyguardSecure}}),n("button",{attrs:{_i:8},on:{click:t.authenticate}}),n("button",{attrs:{_i:9},on:{click:t.AuthenticateOptions}}),n("button",{attrs:{_i:10},on:{click:t.galleryImg}}),n("button",{attrs:{_i:11},on:{click:t.galleryImgs}}),n("button",{attrs:{_i:12},on:{click:t.savePicture}}),n("button",{attrs:{_i:13},on:{click:t.getlocal}}),n("button",{attrs:{_i:14},on:{click:t.clearAddress}}),n("button",{attrs:{_i:15},on:{click:t.getAddress}}),n("button",{attrs:{_i:16},on:{click:t.smsTest}}),n("button",{attrs:{_i:17},on:{click:t.actionSheet}}),n("button",{attrs:{_i:18},on:{click:t.showConfirm}}),n("button",{attrs:{_i:19},on:{click:t.autoCloseWaiting}}),n("button",{attrs:{_i:20},on:{click:t.previewImage}}),n("button",{attrs:{_i:21},on:{click:t.pickDate}}),n("button",{attrs:{_i:22},on:{click:t.checkPermissionPos}}),n("button",{attrs:{_i:23},on:{click:t.closeSplashscreen}}),n("button",{attrs:{_i:24},on:{click:t.hasSplashscreen}}),n("button",{attrs:{_i:25},on:{click:t.hasNotchInScreen}}),n("button",{attrs:{_i:26},on:{click:t.updateSplashscreen}}),n("button",{attrs:{_i:27},on:{click:t.createShortcut}}),n("button",{attrs:{_i:28},on:{click:t.hasShortcut}}),n("button",{attrs:{_i:29},on:{click:t.isBackground}}),n("button",{attrs:{_i:30},on:{click:t.isFullscreen}}),n("button",{attrs:{_i:31},on:{click:t.setFullscreen}}),n("button",{attrs:{_i:32},on:{click:t.isLogs}}),n("button",{attrs:{_i:33},on:{click:t.setLogs}}),n("button",{attrs:{_i:34},on:{click:t.setStatusBarBackground}}),n("button",{attrs:{_i:35},on:{click:t.getStatusBarBackground}}),n("button",{attrs:{_i:36},on:{click:t.setStatusBarStyle}}),n("button",{attrs:{_i:37},on:{click:t.getStatusBarStyle}}),n("button",{attrs:{_i:38},on:{click:t.getStatusbarHeight}}),n("button",{attrs:{_i:39},on:{click:t.isImmersedStatusbar}}),n("button",{attrs:{_i:40},on:{click:t.getSafeAreaInsets}}),n("button",{attrs:{_i:41},on:{click:t.getServices}}),n("button",{attrs:{_i:42},on:{click:t.login}}),n("button",{attrs:{_i:43},on:{click:t.getCurrentOrientation}}),n("button",{attrs:{_i:44},on:{click:t.watchOrientation}}),n("button",{attrs:{_i:45},on:{click:t.clearWatch}}),n("button",{attrs:{_i:46},on:{click:t.getCurrentProximity}}),n("button",{attrs:{_i:47},on:{click:t.appid}}),n("button",{attrs:{_i:48},on:{click:arguments}}),n("button",{attrs:{_i:49},on:{click:t.channel}}),n("button",{attrs:{_i:50},on:{click:t.launcher}}),n("button",{attrs:{_i:51},on:{click:t.origin}}),n("button",{attrs:{_i:52},on:{click:t.launchLoadedTime}}),n("button",{attrs:{_i:53},on:{click:t.agreePrivacy}}),n("button",{attrs:{_i:54},on:{click:t.setBadgeNumber}}),n("button",{attrs:{_i:55},on:{click:t.openURL}}),n("button",{attrs:{_i:56},on:{click:t.launchApplication}}),n("button",{attrs:{_i:57},on:{click:t.isApplicationExist}}),n("button",{attrs:{_i:58},on:{click:t.restart}}),n("view",[t._v(t._$s(59,"t0-0",t._s(t.tip)))])])},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},7782:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","box"),attrs:{_i:0}},[n("h1"),n("view",{staticClass:t._$s(2,"sc","animation"),attrs:{animation:t._$s(2,"a-animation",t.animationData),_i:2}},[n("image",{attrs:{_i:3}})]),n("button",{attrs:{_i:4},on:{click:function(e){return t.running(t.step)}}})])},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"788e":function(t,e,n){"use strict";n.r(e);var i=n("2ccc"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},7898:function(t,e,n){"use strict";n.r(e);var i=n("7782"),a=n("5f94");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},"7c89":function(t,e,n){"use strict";n.r(e);var i=n("8c3e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26920200424005",_inBundle:!1,_integrity:"sha512-FT8Z/C5xSmIxooqhV1v69jTkxATPz+FsRQIFOrbdlWekjGkrE73jfrdNMWm7gL5u41ALPJTVArxN1Re9by1bjQ==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26920200424005.tgz",_shasum:"47f4375095eda3089cf4678b4b96fc656a7ab623",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"94494d54ed23e2dcf9ab8e3245b48b770b4e98a9",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26920200424005"}},"84d0":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("36a0").default)})),__definePage("pages/picture/picture",(function(){return Vue.extend(n("dec4").default)})),__definePage("pages/API/API",(function(){return Vue.extend(n("efe9").default)})),__definePage("pages/about/about",(function(){return Vue.extend(n("7898").default)}))},"8b0e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{routerLink:function(t){uni.navigateTo({url:"../about/about",animationType:t,animationDuration:2e3})}}};e.default=i},"8bbf":function(t,e){t.exports=Vue},"8c3e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(e){t("log","App Launch",e.scene," at App.vue:5")},onShow:function(){t("log","App Show"," at App.vue:9")},onHide:function(){t("log","App Hide"," at App.vue:12")}};e.default=n}).call(this,n("0de9")["default"])},"921b":function(t,n,i){"use strict";var a=i("8189");function r(t){return function(){var e,n=c(t);if(s()){var i=c(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return o(this,e)}}function o(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var v=a.version,h="https://tongji.dcloud.io/uni/stat",_="https://tongji.dcloud.io/uni/stat.gif",m=1800,b=300,y=10,S="__DC_STAT_UUID",k="__DC_UUID_VALUE";function I(){var t="";if("n"===D()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(S)}catch(e){t=k}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(S,t)}catch(e){uni.setStorageSync(S,k)}}return t}var U=function(t){var e=Object.keys(t),n=e.sort(),i={},a="";for(var r in n)i[n[r]]=t[n[r]],a+=n[r]+"="+t[n[r]]+"&";return{sign:"",options:a.substr(0,a.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},D=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var t="";return"wx"!==D()&&"qq"!==D()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},T=function(){return"n"===D()?plus.runtime.version:""},P=function(){var t=D(),e="";return"n"===t&&(e=plus.runtime.channel),e},x=function(t){var e=D(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)},N="First__Visit__Time",j="Last__Visit__Time",R=function(){var t=uni.getStorageSync(N),e=0;return t?e=t:(e=O(),uni.setStorageSync(N,e),uni.removeStorageSync(j)),e},q=function(){var t=uni.getStorageSync(j),e=0;return e=t||"",uni.setStorageSync(j,O()),e},C="__page__residence__time",B=0,E=0,L=function(){return B=O(),"n"===D()&&uni.setStorageSync(C,O()),B},$=function(){return E=O(),"n"===D()&&(B=uni.getStorageSync(C)),E-B},M="Total__Visit__Count",J=function(){var t=uni.getStorageSync(M),e=1;return t&&(e=t,e++),uni.setStorageSync(M,e),e},H=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},F=0,W=0,V=function(){var t=(new Date).getTime();return F=t,W=0,t},z=function(){var t=(new Date).getTime();return W=t,t},G=function(t){var e=0;if(0!==F&&(e=W-F),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>b;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>m;return{residenceTime:e,overtime:i}}return{residenceTime:e}},K=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===D()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},X=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,a=t._query,r=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===D()?i.$mp&&i.$mp.page.is+r:i.$scope&&i.$scope.route+r||i.$mp&&i.$mp.page.route+r},Q=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Y=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Z=i("dc4b").default,tt=i("34a4").default||i("34a4"),et=uni.getSystemInfoSync(),nt=function(){function t(){f(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:I(),ut:D(),mpn:A(),ak:tt.appid,usv:v,v:T(),ch:P(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===et.platform?"a":"i",brand:et.brand||"",md:et.model,sv:et.system.replace(/(Android|iOS)\s/,""),mpsdk:et.SDKVersion||"",mpv:et.version||"",lang:et.language,pr:et.pixelRatio,ww:et.windowWidth,wh:et.windowHeight,sw:et.screenWidth,sh:et.screenHeight}}return g(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){z();var t=G("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,z();var n=G();V();var i=X(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=X(this),e=K();if(this._navigationBarTitle.config=Z&&Z.pages[e]&&Z.pages[e].titleNView&&Z.pages[e].titleNView.titleText||Z&&Z.pages[e]&&Z.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);z(),this._lastPageRoute=t;var n=G("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){z();var t=G("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=O(),this.statData.sc=x(t.scene),this.statData.fvts=R(),this.statData.lvts=q(),this.statData.tvc=J(),"n"===D()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,r=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"===typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;tt.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=O(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===D()&&(r=uni.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===D()&&uni.setStorageSync("__UNI__STAT__DATA",r),!($()<y)||e){var o=this._reportingRequestData;"n"===D()&&(o=uni.getStorageSync("__UNI__STAT__DATA")),L();var u=[],s=[],c=[],l=function(t){var e=o[t];e.forEach((function(e){var n=w(e);0===t?u.push(n):3===t?c.push(n):s.push(n)}))};for(var p in o)l(p);u.push.apply(u,s.concat(c));var f={usv:v,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===D()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==D()||"a"!==this.statData.p?this._sendRequest(f):setTimeout((function(){n._sendRequest(f)}),200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:h,method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=U(H(t)).options;e.src=_+"?"+n}},{key:"sendEvent",value:function(t,e){Y(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),it=function(t){l(n,t);var e=r(n);function n(){var t;return f(this,n),t=e.call(this),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return g(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),g(n,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,L(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Q(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Q(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(n)}}]),n}(nt),at=it.getInstance(),rt=!1,ot={onLaunch:function(t){at.report(t,this)},onReady:function(){at.ready(this)},onLoad:function(t){if(at.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return at.interceptShare(!1),e.call(this,t)}}},onShow:function(){rt=!1,at.show(this)},onHide:function(){rt=!0,at.hide(this)},onUnload:function(){rt?rt=!1:at.hide(this)},onError:function(t){at.error(t)}};function ut(){var t=i("8bbf");(t.default||t).mixin(ot),uni.report=function(t,e){at.sendEvent(t,e)}}ut()},a63b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{animationData:{},step:200}},onLoad:function(){this.animation=uni.createAnimation()},onUnload:function(){this.animationData={}},methods:{running:function(e){this.step=200!=e?200:0,t("log",e," at pages\\about\\about.vue:34"),this.animation.translateX(e).step({duration:1e3}),this.animationData=this.animation.export()}}};e.default=n}).call(this,n("0de9")["default"])},b3a0:function(t,e,n){"use strict";n("84d0"),n("921b");var i=r(n("8bbf")),a=r(n("e961"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,a.default.mpType="app";var c=new i.default(u({},a.default));c.$mount()},cb9d:function(t,e,n){"use strict";n.r(e);var i=n("3b96"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d606:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","box"),attrs:{_i:0}},[n("button",{attrs:{_i:1},on:{click:t.capture}}),t._l(100,(function(e,i,a,r){return n("view",{key:i,staticClass:t._$s("2-"+r,"sc","list"),attrs:{_i:"2-"+r}},[t._v(t._$s("2-"+r,"t0-0",t._s(e)))])}))],2)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},dc4b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{},globalStyle:{}};e.default=i},dec4:function(t,e,n){"use strict";n.r(e);var i=n("d606"),a=n("cb9d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},e961:function(t,e,n){"use strict";n.r(e);var i=n("7c89");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r,o,u,s,c=n("f0c5"),l=Object(c["a"])(i["default"],r,o,!1,null,null,null,!1,u,s);e["default"]=l.exports},efe9:function(t,e,n){"use strict";n.r(e);var i=n("5e3a"),a=n("59c2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,u,s,c){var l,p="function"===typeof t?t.options:t;if(s){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in s)f.call(s,d)&&!f.call(p.components,d)&&(p.components[d]=s[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=l):a&&(l=u?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var g=p.render;p.render=function(t,e){return l.call(e),g(t,e)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))}},[["b3a0","app-config"]]]);