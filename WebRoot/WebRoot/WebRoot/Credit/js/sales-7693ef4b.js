"use strict";define("page/sales",["common/util","jquery","log","page/index/sale-car","data/wechat-entry"],function(e,n,t,i,a){function l(){function e(e){i.find("img").each(function(e,t){var i=n(t);if(i.is(":visible")){var a=i.attr("data-src");a&&(i.attr("src",a),i.removeAttr("data-src"))}}),i.animate({left:-a*e},500)}var t=n(".history-sales-cars li"),i=n(".history-sales-cars ul"),a=t.eq(0).width(),l=0,s=n(".leftLogo"),o=n(".rightLogo");o.on("click",function(){l>=t.length-1&&(i.css("left",0),l=0),l++,e(l)}),s.on("click",function(){l<=0&&(i.css("left",-a*(t.length-1)),l=t.length-1),l--,e(l)})}function s(){var t=e.parseQueryString(location.href),i=t.mobile,a=t.submit_sources,l=t.fr;i&&n("#sales_mobile_number").val(i),l&&n("#sell_phone_source").val(l),a&&n("#sales_submit").attr("rrc-tel-button",a)}function o(){var e=RRC.tuancheCity&&RRC.tuancheCity.length&&RRC.tuancheCity.indexOf(RRC.city)>-1;e&&(n(".label-phone").hide(),n("#js-sales-footer").addClass("tuanche-sales-footer").find(".input-your-tele").after('<div class="sell-footer-plan"><input type="hidden" id="buy_car_plan_val"><span class="sell-info-buy-car">卖车后是否还买车</span><span class="plan-sell-triangle"></span><div class="buy-car-plan sell-info-buy-car-hide" id="sell_info_plan"><p class="plan-list" data-plan="new">买新车</p><p class="plan-list" data-plan="old">买二手车</p><p class="plan-list" data-plan="no">不买车</p></div></div>'),n(".sell-footer-plan").click(function(e){e.stopPropagation(),n(".sell-footer-plan .buy-car-plan").toggleClass("sell-info-buy-car-hide"),n(".sell-footer-plan .plan-sell-triangle").toggleClass("plan-triangle-open"),t.push(["_trackEvent",RRC.pageName+"_底部浮层_后续计划","click",""])}),n("#sell_info_plan").on("click",".plan-list",function(e){e.stopPropagation(),n(".sell-footer-plan .sell-info-buy-car").html(n(this).html()).css("color","black"),n(".sell-footer-plan .buy-car-plan").toggleClass("sell-info-buy-car-hide"),n(".sell-footer-plan .plan-sell-triangle").removeClass("plan-triangle-open"),t.push(["_trackEvent",RRC.pageName+"_底部浮层_"+n(this).html(),"click",""])}))}function r(){require(["jquery.throttle"],function(){var e=n("#js-sales-footer");n(window).scroll(n.throttle(200,function(){e.is(":hidden")&&n(window).scrollTop()>500&&e.show()}))})}function c(){function t(e){var t=n(e).find(".seller-pic img"),i=t.attr("data-src");i&&(t.attr("src",i),t.removeAttr("data-src"))}function i(){d.hide(),h.show()}function a(e,n){e.css("transform",n),e.css("webkitTransform",n),e.css("mozTransition",n),e.css("msTransition",n)}function l(){a(d,"translate(136px,146px) scale(0)"),a(h,"scale(1)"),a(m,"scale(1)")}function s(e){a(d.eq(e),"translate(0px,0px) scale(1)"),a(h.eq(e),"scale(0)"),a(m.eq(e),"scale(3)")}function o(e){d.eq(e).show(),h.eq(e).hide()}function r(){_?l():i()}function c(e){var i=n(this).attr("data-num")||e;t(d.eq(i)),r(),_?s(i):o(i)}function u(){navigator.userAgent.indexOf("iPad")>-1?n(".sales-circle-map").on("click",".city",function(){c.call(this)}):n(".sales-circle-map").on("mouseenter",".city",function(){c.call(this)}).on("mouseleave",function(){r()})}function f(){a(d,"none"),n(".sales-circle-map").on("mouseover",".city",function(){c.call(this)}).on("mouseout",".city",function(){r()})}function p(){d.show(),c(22),_?u():f()}var d=n(".city-content-1"),h=n(".city .landmark-2"),m=n(".city .landmark-bg"),_=e.isStyleAttributeSupported("transform",!0);p()}function u(){require(["jquery.lazyload"],function(){n(".history-sales-cars .img-lazy").lazyload({threshold:100,data_attribute:"src"})})}function f(){if(!n.cookie("rrc_login_token"))return!1;var e=n.cookie("rrc_login_phone");n("#sell_mobile_number").val(e),n("#telInput").val(e)}function p(){function e(e,n){for(var t=e.toString().length;t<n;)e="0"+e,t++;return e+=""}for(var t=Number(n(".sale-num").data("num")),i=e(t,6),a=i.split(""),l=0;l<6;l++)n(".sale-num").children("div").eq(l).append("<span>"+a[l]+"</span>")}function d(){n(".server-for-more").on("click",function(){n(".mengceng").show()}),n(".server-close-btn").on("click",function(){n(".mengceng").hide()}),n(".mengceng").on("click",function(e){e.currentTarget===e.target&&n(this).hide()})}function h(){var e=new Date(2017,6,9,24),t=new Date;if(!(t-e>=0)){var i=RRC.fr,a=["1052","1293","bd_jzbk","bd_jzsp","bd_jztp","bd_jzxw","bd_jzzd","bd_other","bd_pz","bd_sem","hs_sem","sg_pz","sg_sem","sm_pz","sm_sem"],l=!!n.cookie("rrc_detail_survey_dialog"),s=parseInt(n.cookie("rrc_detail_survey_dialog_total"),10)||0;a.indexOf(i)!==-1&&!l&&s<2&&setTimeout(function(){var e=n("#survey-dialog");e.fullscreen({backdrop:"static",show:!0}).on("click",function(){e.fullscreen("hide")}),e.find(".close-btn").on("click",function(){e.fullscreen("hide")}),n.cookie("rrc_detail_survey_dialog",1,{expires:1}),n.cookie("rrc_detail_survey_dialog_total",s+1,{expires:7})},1e4)}}function m(){e.intentLawHandle(n("#js-sales-provision-select"),n("#sales_submit"))}function _(){m(),o(),l(),s(),r(),c(),u(),f(),p(),d(),i.init(n("#sales_submit,#telButton1")),e.isLegacyBrowser()&&n("#telInput").css("height","65%"),h()}return n(function(){a.replaceAppointment("2654")}),{init:_,initSellerStory:l,changeFieldFromAppraisement:s,initTuanche:o,showBottomInput:r,initHistorySales:c,initImageLazyLoading:u,initTelephone:f,initSaleNum:p,initSeeMoreServerInfo:d}}),"undefined"==typeof window.__karma__&&require(["page/sales"],function(e){e.init()});
//# sourceMappingURL=sales-7693ef4b.js.map
