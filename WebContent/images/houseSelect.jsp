<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="北京房地产,北京房产网,北京房产信息网, 北京手机搜狐焦点网" />
    <meta name="description" content="北京手机搜狐焦点网为购房者提供北京房产信息、家居装修资讯,北京房产楼盘详情、买房流程、业主论坛、家居装修等全面内容信息，北京手机搜狐焦点网互联网的购房平台。" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="telephone=no" name="format-detection" />
    <meta name="apple-mobile-web-app-title" content="搜狐焦点房产">
    <link rel="apple-touch-icon" sizes="57x57" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus57_75493c93e438a29f0c5f4eba1f12938c.png">
    <link rel="apple-touch-icon" sizes="72x72" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus72_a1be4dd145165d5c837fc83f7b1e1eb6.png">
    <link rel="apple-touch-icon" sizes="114x114" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus114_10cb41af990a985ebdb1a7929a5b1e68.png">
    <link rel="apple-touch-icon" sizes="144x144" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus144_711d6a736034fb8e4bdfadd0e0db1e1d.png">
    <link rel="apple-touch-icon" sizes="152x152" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus152_33e8a02e7fbc4f6431e63cb02e1cfa30.png">
    <link rel="stylesheet" type="text/css" href="//t.focus-res.cn/front-end/icon/iconfont.css">
    <title>全部房源</title>
    <script type="text/javascript">
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' :
            'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                // 大于640,就应该去访问pc站了
                if (clientWidth > 640) clientWidth = 640;
                // 页面中换算比例 : rem = px/75, 设计稿按750来
                docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);

    })(window.document, window)
    </script>
    <!-- GrowingIO Analytics code version 2.1 -->
    <script type='text/javascript'>
    ! function(e, t, n, g, i) { e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments) }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag) }(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
    gio('init', '87a4bcbf0b1ea517', {});
    gio('send');
    </script>
    <!-- End GrowingIO Analytics code version: 2.1 -->
    <!-- 微信自定义分享。 wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=4168910 -->
    <script type="text/javascript" src="https://t.focus-res.cn/front-end/lib/jquery/jquery.1.12.4.js"></script>
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <link href="images/houseSelect1.css" rel="stylesheet">
    <link href="images/houseSelect2.css" rel="stylesheet"> 										//部分代码引用外部图片资源，可能需要保存到本地项目
</head>

<body data-pagename="all-house" data-needhiddentime="0" data-isselectnum="" data-projectid="4354127744">
    <div class="content">
        <div class="house-source-tab flex">
            <a href="javascript:;" class="cell all cur">全部房源</a>
            <a href=" /subscribe/4354127744/collection/9255358696 " class="cell my ">我的收藏</a>
        </div>
        <div class="house-source-list" data-userId="9255358696" data-projectId="4354127744" data-nowTime="1562053273451" data-isSecretProj="" data-needSecret="" data-hideLouTxt="" data-noBuildingDetail="3" data-ifShowBuildingDetail="true" data-hasGrab="">
            <div class="house-all-header ">
                <div class="house-all-select ">
                    <a href="javascript:" data-buildingId="225" data-buildingName="1" class="house-select cur ">1号楼</a>
                    <a href="javascript:" data-buildingId="226" data-buildingName="2" class="house-select  second-child">2号楼</a>
                    <a href="javascript:" data-buildingId="227" data-buildingName="3" class="house-select  ">3号楼</a>
                </div>
                <div class="jiabian hide"></div>
                <a href="javascript:;" class="select-filter">只看未选</a>
            </div>
            <div class="house-all-unites unite1 cur">
                <div class="unites">
                    <a href="javascript:" data-unitId="427" class="unit-select cur">1单元</a>
                    <a href="javascript:" data-unitId="428" class="unit-select ">2单元</a>
                </div>
                <div class="house-all-floors floor1  cur">
                    <!-- <tr>
					<th>编号</th>
					<th>id</th>
					<th>姓名</th>
					<th>电话</th>
					<th>密码</th>
					<th>机构</th>
					<th>app推荐人</th>
					<th>操作</th>
				</tr> -->
				<%-- <c:forEach  varStatus="i" var="house" items="${houseList }"> --%>
				<c:forEach  varStatus="i" items="${houseList }">
					<tr>
						<%-- <td>${i.count+(page-1)*pageSize }</td> --%>
						<td>${house.house_idn }</td>
						<td>${house.house_floor }</td>
						<td>${house.house_num }</td>
						<td>${house.house_area }</td>
						<td>${house.house_price_single}</td>
						<td>${house.house_price_total}</td>
						<td>${house.house_status}</td>
						<td><button class="btn btn-mini btn-info" type="button" onclick="javascript:window.location='userList?action=preSave&userId=${user.userId }'">修改</button>&nbsp;
							<button class="btn btn-mini btn-danger" type="button" onclick="userDelete(${user.userId})">删除</button></td>
					</tr>
				</c:forEach>
                    
                    
                    </div>
                </div>
            </div>
        </div>
        <div class="house-source-pop" data-userId="9255358696" data-phone="17737517656" data-idcard="DEMOCARD9255358696" data-collect="[]" data-name="崔凯航" data-projectId="4354127744" data-simulateStartTime="1000" data-simulateEndTime="1000" data-officialStartTime="1515050720000" data-officialEndTime="1577863520000" data-nowTime="1562053273451" data-timesOfSimulate="0" data-isSecretProj="" data-needHiddenTime="0" data-hideLouTxt="" data-showNotice="false" data-isSelectNum="">
        </div>
        <div class="house-source-pop-area global-masker"></div>
    </div>
    <div class="common-bottom" data-projectId="4354127744" data-userId="9255358696">
        <div class="jianbian"></div>
        <div class="toolbar flex">
            <a class="cell index " href="javascript:void(0)">
                <span class="item">
                    <i></i><span>首页</span>
                </span>
            </a>
            <a class="cell mine  " href="javascript:void(0)">
                <span class="item">
                    <i></i><span>我的</span>
                </span>
            </a>
        </div>
        <div class="select-wrap">选房</div>
    </div>
    <div class="right-toolbar">
        <div class="tool refresh"></div>
        <div class="tool go-top"></div>
    </div>
    <input type="hidden" id="v_ust" value="1"></input>
    <script type="text/javascript" src="//t.focus-res.cn/front-end/stat.js"></script>
    <script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/manifest/manifest.f94a9d37ef3adf711406.js"></script>
    <script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.16dc0e501b4619e5587e.js"></script>
    <script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/all-house/all-house.4a6c4d1cace5e6941b5b.js"></script>
</body>

</html>