(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(260)},154:function(e,t,a){},155:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(8),r=a.n(c),i=(a(154),a(19)),s=a(20),o=a(23),m=a(21),u=a(24),d=a(263),p=(a(56),a(155),a(18)),f=a(52),h=a(268),E=a(261),b=a(86),v=a(54),g=a.n(v);var y=function(e,t,a,l,n,c,r,i,s,o,m){var u,d,p,f,h,E=g()("#"+e),b=g()("#"+t),v=g()("#"+a),y=g()("#"+l),w=0,C=0,j=0,k=new Date;p=E.find("li").length,f=E.find("li").innerHeight(),"left"===c||"right"===c?E.find("ul").width(p*i):"top"===c||"bottom"===c?(E.find("ul").height(p*i),y.hide()):"fade"===c&&(E.find("ul").width(i).height(f),E.find("li").eq(0).show().siblings().hide(),E.find("li").css({position:"absolute",left:0,top:0})),y.empty();for(var N=0;N<p;N++)y.append("<span></span>");function O(){!1===r?(C++,"left"===c&&(E.find("ul").css({left:-C}),parseInt(E.find("ul").css("left"))===-i&&(C=0,E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({left:0}))),"right"===c&&(0===parseInt(E.find("ul").css("left"))&&(C=-i,E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({left:0})),E.find("ul").css({left:C})),"top"===c&&(E.find("ul").css({top:-C}),parseInt(E.find("ul").css("top"))===-i&&(C=0,E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({top:0}))),"bottom"===c&&(0===parseInt(E.find("ul").css("top"))&&(C=-i,E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({top:0})),E.find("ul").css({top:C}))):!0===r&&("left"===c&&(E.find("ul").animate({left:-i},s,function(){E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({left:0})}),w<p-1?(w++,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")):(w=0,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur"))),"right"===c&&(E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({left:-i}),E.find("ul").stop().animate({left:0},s),w>0?(w--,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")):(w=p-1,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur"))),"top"===c&&E.find("ul").animate({top:-i},s,function(){E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({top:0})}),"bottom"===c&&(E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({top:-i}),E.find("ul").stop().animate({top:0},s)),"fade"===c&&(j<p-1?j++:j=0,E.find("li").eq(j).fadeIn(s).siblings().fadeOut(s),y.find("span").eq(j).addClass("cur").siblings().removeClass("cur")))}y.find("span").eq(0).addClass("cur"),!1===r&&(b.hide(),v.hide(),y.hide()),!0===n?p>m?u=setInterval(O,o):(clearInterval(u),b.hide(),v.hide(),y.hide()):clearInterval(u),E.find("li").hover(function(){clearInterval(u)},function(){!0===n?p>m?u=setInterval(O,o):(clearInterval(u),b.hide(),v.hide(),y.hide()):clearInterval(u)}),v.hover(function(){clearInterval(u)},function(){!0===n?p>m?u=setInterval(O,o):(clearInterval(u),b.hide(),v.hide(),y.hide()):clearInterval(u)}).click(function(){new Date-k>500&&(k=new Date,"left"!==c&&"right"!==c||E.find("ul").animate({left:-i},s,function(){E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({left:0})}),"top"!==c&&"bottom"!==c||E.find("ul").animate({top:-i},s,function(){E.find("li:first").insertAfter(E.find("li:last")),E.find("ul").css({top:0})}),"fade"===c&&(j>0?j--:j=p-1,E.find("li").stop(!0,!0).eq(j).fadeIn(s).siblings().fadeOut(s)),w<p-1?(w++,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")):(w=0,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")))}),b.hover(function(){clearInterval(u)},function(){!0===n?p>m?u=setInterval(O,o):(clearInterval(u),b.hide(),v.hide(),y.hide()):clearInterval(u)}).click(function(){new Date-k>500&&(k=new Date,"left"!==c&&"right"!=c||(E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({left:-i}),E.find("ul").stop().animate({left:0},s)),"top"!==c&&"bottom"!=c||(E.find("li:last").insertBefore(E.find("li:first")),E.find("ul").css({top:-i}),E.find("ul").stop().animate({top:0},s)),"fade"===c&&(j<p-1?j++:j=0,E.find("li").stop(!0,!0).eq(j).fadeIn(s).siblings().fadeOut(s)),w>0?(w--,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")):(w=p-1,y.find("span").eq(w).addClass("cur").siblings().removeClass("cur")))}),y.find("span").hover(function(){clearInterval(u)},function(){!0===n?p>m?u=setInterval(O,o):(clearInterval(u),b.hide(),v.hide(),y.hide()):clearInterval(u)}).click(function(){if(new Date-k>500)if(k=new Date,h=g()(this).index(),g()(this).addClass("cur").siblings().removeClass("cur"),"fade"===c)E.find("li").eq(h).fadeIn(s).siblings().fadeOut(s);else if(h>w)d=h-w,w=h,E.find("ul").stop().animate({left:-i*d},s,function(){for(N=0;N<d;N++)E.find("ul").css({left:0}),E.find("li:first").insertAfter(E.find("li:last"))});else for(d=w-h,w=h,E.find("ul").css({left:-i*d}),N=0;N<d;N++)E.find("ul").stop().animate({left:0},s),E.find("li:last").insertBefore(E.find("li:first"))})},w=(a(67),a(26)),C=a.n(w),j=h.a.Meta,k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()({url:"http://localhost:8000/api/demo"}).then(function(t){e.setState({data:t.data.data.lists})}),C()({url:"http://localhost:8000/homelist"}).then(function(t){console.log(t.data.data),e.setState({list:t.data.data})})}},{key:"tap",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(E.a,{autoplay:!0,effect:"fade"},this.state.data.map(function(e,t){return n.a.createElement(p.c,{key:t,to:{pathname:"/detail",state:{id:t}}},n.a.createElement("div",{className:"banner"},n.a.createElement("img",{src:e.imgSrc,alt:"1"})))})),n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,n.a.createElement(p.c,{to:"http://www.ttpcn.com/lines/all/"},"\u300e\u4e0d\u5fd8\u521d\u5fc3,\u8ffd\u5149\u9010\u5f71\u300f")),n.a.createElement("p",null,"\u751f\u6d3b\u4e0d\u6b62\u773c\u524d\u7684\u82df\u4e14\u8fd8\u6709\u8bd7\u548c\u8fdc\u65b9")),n.a.createElement(h.a,{className:"card",hoverable:"true",cover:n.a.createElement("img",{alt:"example",src:"http://www.ttpcn.com/uploads/2018/0925/6cdd477bfe1d4d9bdcb653160f40a5cd.jpg"})},n.a.createElement(j,{title:"\u3010\u7edd\u7f8e\u5c71\u5cf0\u3011",description:"\u610f\u5927\u5229\u591a\u6d1b\u7c73\u8482\u65af\u6d1b\u6587\u5c3c\u4e9a\u5c71\u533a\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"})),n.a.createElement(h.a,{className:"card",hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:"http://www.ttpcn.com/uploads/2019/0115/37db094106c351b528908d779ec27db5.jpg"})},n.a.createElement(j,{title:"\u3010\u51b0\u706b\u73af\u5883\u3011",description:"\u590f\u5b63\u51b0\u5c9b\u5185\u9646\u9ad8\u5730\u53ca\u5357\u5cb8\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"})),n.a.createElement("div",{className:"scard"},this.state.list.map(function(e,t){return n.a.createElement(h.a,{className:"smallcard",key:t,hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:e.imgSrc})},n.a.createElement(j,{title:e.title,description:"\u590f\u5b63\u51b0\u5c9b\u5185\u9646\u9ad8\u5730\u53ca\u5357\u5cb8\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"}))})),n.a.createElement("div",{className:"btn"},n.a.createElement(b.a,{size:"large"},"\u6d4f\u89c8\u66f4\u591a")),n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,n.a.createElement(p.c,{to:"http://www.ttpcn.com/lines/all/"},"\u300e\u8d70\u8fc7\u8fdc\u65b9\uff0c\u7cbe\u5f69\u5178\u85cf\u300f")),n.a.createElement("p",null,"\u4eb2\u4e34\u79d8\u5883\uff0c\u4e0e\u60a8\u5f71\u85cf\u4e16\u754c\u4e4b\u7f8e")),n.a.createElement("div",{class:"Box"},n.a.createElement("div",{class:"content"},n.a.createElement("div",{class:"Box_con clearfix"},n.a.createElement("div",{class:"conbox",id:"BoxUl"},n.a.createElement("ul",null,n.a.createElement("li",{class:"cur"},n.a.createElement("img",{src:"http://www.ttpcn.com/uploads/2019/0115/37db094106c351b528908d779ec27db5.jpg",alt:""})),n.a.createElement("li",{class:"cur"},n.a.createElement("img",{src:"http://www.ttpcn.com/uploads/2018/0903/5de10181c44e479be76e6e78b0144488.jpg",alt:""})),n.a.createElement("li",{class:"cur"},n.a.createElement("img",{src:"http://www.ttpcn.com/uploads/2018/0903/878efd3b8fec5fd8381fae674df4c36a.jpg",alt:""})),n.a.createElement("li",{class:"cur"},n.a.createElement("img",{src:"http://www.ttpcn.com/uploads/2018/0903/3ad9395a24a919efe5b8f387a26e4233.jpg",alt:""})),n.a.createElement("li",{class:"cur"},n.a.createElement("img",{src:"http://www.ttpcn.com/uploads/2018/0903/9506177a9174be57c0f31edd94167020.jpg",alt:""})))),n.a.createElement("p",{class:"BoxSwitch",id:"BoxSwitch"},n.a.createElement("span",{class:"cur"}),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{className:"btn"},n.a.createElement(b.a,{size:"large"},"\u6d4f\u89c8\u66f4\u591a")))),y("BoxUl","btnl","btnr","BoxSwitch",!0,"left",!0,305,1e3,5e3,4),n.a.createElement("footer",null,n.a.createElement("ul",null,n.a.createElement("li",null,"\u5173\u4e8e\u6211\u4eec"),n.a.createElement("li",null,"\u8054\u7cfb\u6211\u4eec"),n.a.createElement("li",null,"\u652f\u4ed8\u65b9\u5f0f")),n.a.createElement("p",{className:"shendu"},"\u6df1\u5ea6\u884c\u6444\u5f71\u65c5\u6e38\u7f51\u7248\u6743\u6240\u6709 \u5907\u6848\u53f7 \u8700ICP\u590713021114\u53f7-1"),n.a.createElement("p",null,"Copyright \xae Chengdu Top Travel Photography Co.,Ltd. All right reserved.")))}}]),t}(l.Component),N=(a(246),a(108)),O=N.a.TabPane,I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).callback=function(e){console.log(e)},a.state={detail:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.id;C()({url:"http://localhost:8000/api/detail",params:{id:t}}).then(function(t){console.log(t.data.data),e.setState({detail:t.data.data})})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"box"},n.a.createElement("h1",null,this.state.detail.title),n.a.createElement("img",{src:this.state.detail.imgSrc,alt:""}),n.a.createElement("div",{className:"content"},n.a.createElement("p",null,this.state.detail.desc),n.a.createElement("p",null,"\u65e5\u7a0b\uff1a\xa0",this.state.detail.date),n.a.createElement("p",null,"\u5929\u6570\uff1a\xa0",this.state.detail.time),n.a.createElement("p",null,"\u8054\u7cfb\u7535\u8bdd\uff1a\xa0",this.state.detail.phone),n.a.createElement("p",null,"\u4f18\u60e0\u4ef7\u683c\uff1a\xa0",n.a.createElement("span",null,"\uffe5",this.state.detail.price)),n.a.createElement(b.a,{type:"primary",size:"large"},n.a.createElement(p.c,{to:{pathname:"/pay",state:{price:this.state.detail.price,title:this.state.detail.title}}},"\u7acb\u5373\u62a5\u540d")))),n.a.createElement(N.a,{onChange:this.callback,type:"card",className:"tabs"},n.a.createElement(O,{tab:"\u884c\u7a0b\u4eae\u70b9",key:"1",className:"tab"},n.a.createElement("p",null,"\u72ec\u5bb6\u884c\u7a0b\uff1a\u6211\u4eec\u4ece\u4e13\u4e1a\u89d2\u5ea6\u6765\u5b89\u6392\u884c\u7a0b\uff0c\u9009\u62e9\u6700\u4f73\u5b63\u8282\u51fa\u884c\uff0c\u6ce8\u91cd\u6bcf\u5929\u65e9\u665a\u9ec4\u91d1\u65f6\u95f4\u7684\u5408\u7406\u5b89\u6392\uff0c\u884c\u7a0b\u5168\u9762\u8986\u76d6\u610f\u5927\u5229\u5317\u90e8\u591a\u6d1b\u7c73\u8482\u5c71\u533a\u548c\u65af\u6d1b\u6587\u5c3c\u4e9a\u5c71\u533a\u5f53\u5b63\u7684\u7cbe\u534e\u666f\u89c2\u3002",n.a.createElement("br",null),"\u7279\u522b\u5b89\u6392\uff1a\u7279\u522b\u5b89\u6392\u5728\u591a\u6d1b\u7c73\u8482\u548c\u65af\u6d1b\u6587\u5c3c\u4e9a\u7684\u590f\u5b63\u6700\u7f8e\u7684\u65f6\u95f4\u6bb5\u51fa\u884c\uff0c\u540c\u65f6\u517c\u987e\u4e86\u590f\u5b63\u94f6\u6cb3\u7684\u6700\u4f73\u62cd\u6444\u65e5\u671f\uff0c\u6211\u4eec\u5206\u522b\u591a\u6d1b\u7c73\u8482\u5c71\u533a\u5b89\u6392\u4e866\u4e2a\u65e9\u665a\u548c\u5728\u65af\u6d1b\u6587\u5c3c\u4e9a\u5b89\u6392\u4e863\u5929\u7684\u62cd\u6444\u65f6\u95f4\uff0c\u6709\u5145\u5206\u7684\u65f6\u95f4\u6765\u62cd\u6444\u8fd9\u4e24\u4e2a\u5730\u533a\u7684\u7f8e\u4e3d\u98ce\u5149\u3002",n.a.createElement("br",null),"\u65b0\u589e\u65af\u6d1b\u6587\u5c3c\u4e9a\u589e\u52a0\u4e00\u5904\u56fd\u5bb6\u5730\u7406\u7f16\u8f91\u63a8\u8350\u7684\u5c71\u9876\u6559\u5802\u62cd\u6444\u5730\u548c\u53e6\u5916\u4e00\u5904\u5c71\u9876\u6559\u5802\uff0c\u7edd\u5bf9\u6df1\u5165\u7684\u6444\u5f71\u884c\u7a0b\uff0c\u53ea\u4e3a\u4f60\u62cd\u51fa\u6781\u4e3a\u5c11\u89c1\u7684\u98ce\u5149\u5927\u7247\u3002\u8d34\u5fc3\u670d\u52a1\uff1a\u674e\u5065\u8001\u5e08\u4eb2\u81ea\u9886\u822a\uff0c\u4ed6\u5c06\u7ed3\u5408\u672c\u5730\u533a\u591a\u6b21\u7684\u62cd\u6444\u7ecf\u9a8c\uff0c\u5e26\u9886\u6211\u4eec\u6df1\u5165\u79d8\u5883\uff0c\u8fdb\u5165\u5e38\u89c4\u56e2\u4e0d\u4f1a\u6df1\u5165\u7684\u5730\u65b9\u8fdb\u884c\u521b\u4f5c\uff0c\u5c06\u8ba9\u4f60\u6ee1\u8f7d\u800c\u5f52\u3002",n.a.createElement("br",null),"\u7cbe\u54c1\u5c0f\u56e2\uff1a6\u4eba\u6210\u884c\uff0c\u5168\u56e2\u6700\u591a12\u4eba\u3002\u4e25\u683c\u63a7\u5236\u4eba\u6570\u3002",n.a.createElement("br",null),"\u8d44\u6df1\u6307\u5bfc\uff1a\u79fb\u52a8\u5f0f\u8bfe\u5802\uff0c\u8d44\u6df1\u6444\u5f71\u5bfc\u5e08\u3001\u6df1\u5ea6\u884c\u521b\u59cb\u4eba\u674e\u5065\u5168\u7a0b\u73b0\u573a\u6559\u5b66\uff0c\u524d\u540e\u671f\u7ed3\u5408\uff0c\u4e8e\u5b9e\u6218\u4e2d\u8fc5\u901f\u63d0\u9ad8\u6444\u5f71\u6280\u80fd\uff0c\u53ca\u65f6\u4e13\u573a\u770b\u7247\u70b9\u8bc4\uff0c\u9002\u65f6\u4f20\u6388\u6444\u5f71\u8981\u9886\u548c\u540e\u671f\u8981\u8bc0\uff0c\u603b\u7ed3\u63d0\u9ad8\u3002",n.a.createElement("br",null),"\u5168\u65f6\u521b\u4f5c\uff1a\u5168\u65f6\u6bb5\u5747\u4e3a\u6444\u5f71\u521b\u4f5c\u65f6\u95f4\uff0c\u884c\u7a0b\u4e0d\u4f1a\u53d7\u5230\u53f8\u673a\u5de5\u4f5c\u65f6\u95f4\u7684\u5f71\u54cd\uff0c\u4fdd\u8bc1\u65e9\u665a\u90fd\u6709\u62cd\u6444\u5185\u5bb9\uff0c\u65e0\u4efb\u4f55\u81ea\u8d39\u5b89\u6392\uff01",n.a.createElement("br",null),"\u54c1\u8d28\u4fdd\u969c\uff1a\u5168\u7a0b\u79bb\u62cd\u6444\u70b9\u6700\u8fd1\u76844-3\u661f\u7ea7\u9152\u5e97\uff0c\u5176\u4e2d\u4e00\u665a\u53ef\u80fd\u80cc\u5305\u5ba2\u6808\u3002\u4e2d\u897f\u9910\u7ed3\u5408\uff0c\u897f\u9910\u5747\u4e3a\u4e24\u9053\u5f0f\u6b63\u9910\u3002",n.a.createElement("br",null),"\u3010\u6444\u5f71\u6307\u5bfc\u3011",n.a.createElement("br",null),"\u674e\u5065\uff0c\u4e00\u76f4\u884c\u8d70\u5728\u4e16\u754c\u8fb9\u7f18\u7684\u8d44\u6df1\u73af\u7403\u65c5\u884c\u6444\u5f71\u5e08\uff0c\u6444\u5f71\u4e66\u7c4d\u300a\u4e0a\u5e1d\u4e4b\u773c2\u300b\u5408\u4f5c\u6444\u5f71\u5e08\uff0c\u4f5c\u54c1\u300a\u661f\u8000\u96ea\u5c71\u300b\u5165\u90092015\u5e74\u7f8e\u56fd\u300a\u56fd\u5bb6\u5730\u7406\u300b\u5168\u7403\u6444\u5f71\u5927\u8d5b\u4e2d\u56fd\u8d5b\u533a\u81ea\u7136\u7c7b50\u4f73\uff0c\u591a\u5e45\u4f5c\u54c1\u520a\u767b\u4e8e\u300a\u53a6\u95e8\u822a\u7a7a\u300b\u3001\u300a\u4e2d\u56fd\u56fd\u5bb6\u65c5\u6e38\u300b\u3001\u300a\u5f71\u50cf\u751f\u6d3b\u300b\u7b49\u6742\u5fd7\uff0c\u5176\u62cd\u6444\u7684\u5df4\u5854\u54e5\u5c3c\u4e9a\u548c\u4f0a\u74dc\u82cf\u7011\u5e03\u4f5c\u54c1\u88ab\u963f\u6839\u5ef7\u4f4f\u4e2d\u56fd\u5927\u4f7f\u9986\u6536\u85cf\u3002\u559c\u6b22\u63a2\u9669\u6444\u5f71\u7684\u4ed6\uff0c30\u4f59\u6b21\u8fdb\u85cf\uff0c10\u591a\u6b21\u524d\u5f80\u65b0\u7586\uff0c8\u6b21\u524d\u5f80\u51b0\u5c9b\uff0c7\u6b21\u524d\u5f80\u7f05\u7538\uff0c5\u6b21\u524d\u5f80\u591a\u6d1b\u7c73\u8482\u548c\u65af\u6d1b\u6587\u5c3c\u4e9a\u5c71\u533a\uff0c4\u6b21\u524d\u5f80\u683c\u9675\u5170\u5c9b\uff0c3\u6b21\u524d\u5f80\u5357\u7f8e\u5df4\u5854\u54e5\u5c3c\u4e9a\u62cd\u6444\uff0c\u8db3\u8ff9\u904d\u5e03\u4e2d\u56fd\u897f\u90e8\u5730\u533a\u548c\u4e16\u754c\u4e94\u5927\u6d3240\u591a\u4e2a\u56fd\u5bb6\u3002")),n.a.createElement(O,{tab:"\u884c\u7a0b\u5b89\u6392",key:"2"},n.a.createElement("p",null,"Day 1\uff086.26\u65e5\uff09\uff1a\u51fa\u53d1\u65e5\uff0c\u4ece\u4e16\u754c\u5404\u5730\u98de\u5f80\u610f\u5927\u5229\u5a01\u5c3c\u65af\u9a6c\u53ef\u6ce2\u7f57\u673a\u573a",n.a.createElement("br",null),"Day 2\uff086.27\u65e5\uff09\uff1a\u96c6\u5408\u65e5\uff0c\u610f\u5927\u5229\u5a01\u5c3c\u65af\u9a6c\u53ef\u6ce2\u7f57\u673a\u573a\u2192\u5e03\u83b1\u5fb7\u6e56",n.a.createElement("br",null),"\u5f53\u5730\u65f6\u95f4\u4e0b\u5348\u4e00\u70b9\u524d\u8fbe\u5230\u610f\u5927\u5229\u5a01\u5c3c\u65af\u9a6c\u53ef\u6ce2\u7f57\u673a\u573a\u3002\u5bfc\u6e38\u5728\u673a\u573a\u4e3e\u724c\u63a5\u673a\u3002\u63a5\u673a\u540e\u9a71\u8f66\u524d\u5f80\u65af\u6d1b\u6587\u5c3c\u4e9a\u5e03\u83b1\u5fb7\u6e56\u3002\u5e03\u83b1\u5fb7\u6e56\uff1a\u963f\u5c14\u5351\u65af\u5c71\u8109\u5357\u9e93\u6700\u6709\u540d\u7684\u65c5\u6e38\u80dc\u5730\u4e4b\u4e00\u3002\u8fdc\u5904\u662f\u591a\u5ea7\u4e91\u906e\u96fe\u7f6e\u8d85\u8fc7\u4e24\u5343\u7c73\u4ee5\u4e0a\u7684\u963f\u5c14\u5351\u65af\u96ea\u5cf0\uff0c\u6e56\u4e2d\u8038\u7acb\u7740\u53e4\u8001\u7684\u5723\u739b\u5229\u4e9a\u6559\u5802\uff0c\u4ee5\u53ca\u6e56\u8fb9\u9661\u5ced\u7684\u5ca9\u58c1\u4e0a\u76d8\u8e1e\u7740\u5341\u4e8c\u4e16\u7eaa\u7684\u5e03\u83b1\u5fb7\u57ce\u5821\uff0c\u81ea\u7531\u81ea\u5728\u7684\u5929\u9e45\u548c\u91ce\u9e2d\u5728\u9759\u5982\u6b62\u6c34\u7684\u6e56\u9762\u4e0a\u6e38\u5f0b\uff0c\u653e\u4f5b\u7ae5\u8bdd\u4e00\u822c\u3002\u5e03\u83b1\u5fb7\u6e56\u65e0\u8bba\u65e5\u51fa\u65e5\u843d\u3001\u6625\u590f\u79cb\u51ac\u3001\u9634\u6674\u96fe\u96ea\uff0c\u90fd\u80fd\u6355\u6349\u5230\u7edd\u7f8e\u7684\u77ac\u95f4\u3002 \u4f4f\u5bbf\uff1a\u5e03\u83b1\u5fb7\u6e56\u56db\u661f\u7ea7\u9152\u5e97\uff08\u542b\u5348\u665a\u9910\uff09Day3-D4\uff086.28-6.29\u65e5\uff09\uff1a\u4e24\u5929\u5c71\u533a\u5c0f\u9547\u62cd\u72ec\u7279\u7684\u5c71\u9876\u6559\u5802 \u65e9\u8d77\u767b\u4e0a\u5236\u9ad8\u70b9\u62cd\u6444\u5e03\u83b1\u5fb7\u6e56\u65e5\u51fa\uff0c\u5e03\u83b1\u5fb7\u6e56\u56e0\u5176\u7279\u6b8a\u7684\u5730\u7406\u4f4d\u7f6e\u548c\u6c14\u5019\u7684\u5f71\u54cd\uff0c\u65e5\u51fa\u524d\u540e\u4f1a\u51fa\u73b0\u68a6\u5e7b\u822c\u7684\u7c89\u8272\uff0c\u4e00\u6bb5\u65f6\u95f4\u4ee5\u540e\u96fe\u6c14\u6162\u6162\u6d88\u6563\u5f00\uff0c\u968f\u7740\u592a\u9633\u5149\u7684\u6e10\u53d8\uff0c\u4fbf\u53c8\u4f1a\u5448\u73b0\u51fa\u8000\u773c\u593a\u76ee\u7684\u91d1\u8272\u3002\u767b\u4e0a\u5236\u9ad8\u70b9\uff0c\u51ed\u680f\u8fdc\u773a\uff0c\u5e03\u83b1\u5fb7\u6e56\u7684\u6fc0\u6edf\u98ce\u5149\u5c3d\u6536\u773c\u5e95\uff0c\u8fdc\u5904\u7684\u963f\u5c14\u5351\u65af\u5c71\u5c42\u5ce6\u53e0\u5cf0\u4e00\u76f4\u6cbf\u5411\u5929\u9645\u3002 \u5348\u9910\u4e4b\u540e\u524d\u5f80\u5c71\u533a\u5c0f\u9547\u3002\u63a5\u4e0b\u6765\u7684\u4e24\u5929\u6211\u4eec\u5c06\u62cd\u6444\u65af\u6d1b\u6587\u5c3c\u4e9a\u72ec\u5177\u7279\u8272\u7684\u5c71\u9876\u6559\u5802\u65e5\u843d\u3002\u521d\u590f\u7684\u5c71\u533a\uff0c\u65e9\u6668\u591a\u6709\u6668\u96fe\uff0c\u5c42\u5ce6\u53e0\u5cf0\u7684\u8fdc\u5c71\uff0c\u82e5\u5f71\u82e5\u73b0\u7684\u6559\u5802\u8ba9\u4eba\u6d41\u8fde\u5fd8\u8fd4\uff0c\u4eff\u4f5b\u7f6e\u8eab\u4e8e\u4ed9\u5883\uff01\u4e3a\u4fdd\u62a4\u884c\u7a0b\u7684\u539f\u521b\u6027\uff0c\u6211\u4eec\u5bf9\u884c\u7a0b\u548c\u5730\u70b9\u4e0d\u505a\u8fc7\u591a\u7684\u63cf\u8ff0\u3002\u62cd\u6444\u5185\u5bb9\u8bf7\u53c2\u770b\u56fe\u7247\u3002 \u4f4f\u5bbf\uff1a\u65af\u6d1b\u6587\u5c3c\u4e9a\u5c71\u533a\u5c0f\u9547\u4e09\u661f\u7ea7\u9152\u5e97 Day5\uff086.30\u65e5\uff09\uff1a\u5e03\u83b1\u5fb7\u6e56\u2192\u591a\u7f57\u7c73\u8482\u5c71\u5c71\u533a",n.a.createElement("br",null),"\u65e9\u4e0a\u518d\u6b21\u524d\u5f80\u5c71\u533a\u5c0f\u9547\u8fdb\u884c\u62cd\u6444\u72ec\u5177\u7279\u8272\u7684\u5c71\u9876\u6559\u5802\u65e5\u51fa\u53ca\u6668\u5149\u4e2d\u7684\u5c71\u533a\u666f\u8272\uff0c\u7136\u540e\u9a71\u8f66\u524d\u5f80\u591a\u6d1b\u7c73\u8482\u5c71\u533a\u3002\u7ecf\u8fc73\u5c0f\u65f6\u7684\u8f66\u7a0b\uff0c\u6211\u4eec\u5c06\u5230\u8fbe\u6211\u4eec\u5728\u591a\u6d1b\u7c73\u8482\u5c71\u533a\u7684\u7b2c\u4e00\u4e2aA\u98ce \u666f\u7edd\u7f8e\uff0c\u5165\u4f4f\u540e\u76f4\u63a5\u53bb\u62cd\u6444\u65e5\u843d\u3002\u5982\u679c\u5929\u6c14\u597d\uff0c\u62cd\u5b8c\u65e5\u843d\u540e\u6211\u4eec\u5c06\u7559\u4e0b\u6765\u7ee7\u7eed\u7b49\u5f85\u62cd\u6444\u94f6\u6cb3\u661f\u7a7a\u3002")),n.a.createElement(O,{tab:"\u56e2\u671f\u548c\u8d39\u7528",key:"3"},n.a.createElement("p",null,"\u3010\u884c\u7a0b\u65f6\u95f4\u30112019.6.26-2019.7.7",n.a.createElement("br",null),"\u3010\u884c\u7a0b\u4ef7\u683c\u3011",n.a.createElement("br",null),"26800\u5143/\u4eba\uff0c\u5355\u623f6000\u5143 \u672c\u4ef7\u683c\u4e0d\u5305\u542b\u53d1\u7968\u548c\u56fd\u9645\u673a\u7968\uff0c\u5f00\u7968\u9700\u53e6\u4ea46%\u7684\u7a0e\u91d1\u3002 \u3010\u8d39\u7528\u8bf4\u660e\u3011",n.a.createElement("br",null),"\u8d39\u7528\u5305\u542b\uff1a \u3010\u4f4f\u5bbf\u3011\u6b64\u6761\u7ebf\u8def\u4e3a\u6444\u5f71\u91cf\u8eab\u8ba2\u4f5c\uff0c\u975e\u5e38\u89c4\u65c5\u6e38\u7ebf\u8def\uff0c\u6211\u4eec\u5c3d\u53ef\u80fd\u5b89\u6392\u8ddd\u79bb\u62cd\u6444\u70b9\u8ddd\u79bb\u8f83\u8fd1\u7684\u9152\u5e97\u3002\u5927\u57ce\u5e02\u90fd\u662f\u5b89\u63924\u661f\u7ea7\u9152\u5e97\uff0c\u5c0f\u9547\u548c\u5c71\u533a\u662f3-4\u661f\u7ea7\u9152\u5e97\u3002\u9152\u5e97\u5747\u63092\u4eba\u4e00\u95f4\u623f\u6838\u7b97\u8d39\u7528\uff0c\u5982\u4e00\u4eba\u4f4f\u4e00\u95f4\uff0c\u9700\u8865\u623f\u5dee\u5dee\u989d\u4eba\u6c11\u5e019000\u5143/\u4eba\u3002",n.a.createElement("br",null),"\u3010\u5bfc\u6e38\u3011\u610f\u5927\u5229\u5f53\u5730\u4e2d\u6587\u53f8\u673a+\u6df1\u5ea6\u884c\u8d44\u6df1\u6444\u5f71\u6307\u5bfc \u3010\u9910\u996e\u3011\u884c\u7a0b\u4e2d\u5168\u7a0b\u9910\u98df\uff0c\u98de\u673a\u4e0a\u4ee5\u98de\u673a\u9910\u4e3a\u51c6\u3002\u5168\u7a0b\u4ee5\u897f\u9910\u548c\u5f53\u5730\u7279\u8272\u9910\u4e3a\u4e3b\uff0c\u5728\u6709\u6761\u4ef6\u7684\u5730\u65b9\u642d\u914d\u4e2d\u9910\u8c03\u8282\u3002",n.a.createElement("br",null),"\u3010\u4ea4\u901a\u3011\u65c5\u6e38\u5c0f\u5df4\uff1b",n.a.createElement("br",null),"\u3010\u95e8\u7968\u3011\u5168\u7a0b\u6240\u5217\u666f\u70b9\u7684\u6240\u6709\u95e8\u7968\u3002",n.a.createElement("br",null),"\u3010\u4fdd\u9669\u3011\u6211\u793e\u5df2\u4e3a\u6bcf\u4f4d\u5ba2\u4eba\u4ee3\u8d2d\u201c\u4fdd\u989d\u4e3a100\u4e07\u5883\u5916\u65c5\u6e38\u9669\u201d\uff0c\u5728\u884c\u7a0b\u671f\u95f4\uff0c\u51fa\u73b0\u975e\u65c5\u884c\u793e\u8d23\u4efb\u9020\u6210\u7684\u610f\u5916\u635f\u5931\uff0c\u7531\u4fdd\u9669\u516c\u53f8\u8fdb\u884c\u9274\u5b9a\u4e0e\u8d54\u4ed8\uff0c\u8d54\u4ed8\u529e\u6cd5\u6309\u7167\u76f8\u5173\u4fdd\u9669\u6761\u4f8b\uff0c")),n.a.createElement(O,{tab:"\u6e29\u99a8\u63d0\u793a",key:"4"},n.a.createElement("p",null,"1\u3001\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c70\u5c81\u4ee5\u4e0a\u7684\u5f71\u53cb\u63d0\u4f9b1\u4e2a\u6708\u4ee5\u5185\u7684\u5065\u5eb7\u8bc1\u660e\u65b9\u53ef\u53c2\u52a0\u3002",n.a.createElement("br",null),"2\u3001\u672c\u884c\u7a0b\u4e2a\u522b\u62cd\u6444\u70b9\u9700\u8981\u5f92\u6b65\u4e00\u5b9a\u7684\u8ddd\u79bb\u624d\u80fd\u5230\u8fbe\uff0c\u4e3a\u786e\u4fdd\u884c\u7a0b\u7684\u987a\u5229\u8fdb\u884c\uff0c\u5efa\u8bae\u4f60\u51fa\u53d1\u4e4b\u524d\u8fdb\u884c\u9002\u5f53\u7684\u953b\u70bc\u3002",n.a.createElement("br",null),"3\u3001\u662f\u5426\u7ed9\u4e88\u7b7e\u8bc1\u3001\u662f\u5426\u51c6\u4e88\u51fa\u3001\u5165\u5883\uff0c\u4e3a\u6709\u5173\u673a\u5173\u7684\u884c\u653f\u6743\u5229\u3002\u5982\u56e0\u6e38\u5ba2\u81ea\u8eab\u539f\u56e0\u6216\u56e0\u63d0\u4f9b\u6750\u6599\u5b58\u5728\u95ee\u9898\u4e0d\u80fd\u53ca\u65f6\u529e\u7406\u7b7e\u8bc1\u800c\u5f71\u54cd\u884c\u7a0b\u7684\uff0c\u4ee5\u53ca\u88ab\u6709\u5173\u673a\u5173\u62d2\u53d1\u7b7e\u8bc1\u6216\u4e0d\u51c6\u51fa\u5165\u5883\u7684\uff0c\u76f8\u5173\u8d23\u4efb\u548c\u8d39\u7528\u7531\u6e38\u5ba2\u81ea\u884c\u627f\u62c5\u3002",n.a.createElement("br",null),"4\u3001\u56e0\u6c47\u7387\u7684\u5927\u5e45\u632f\u8361\u800c\u5bfc\u81f4\u7684\u6210\u672c\u589e\u52a0\uff0c\u6211\u516c\u53f8\u5c06\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fdd\u7559\u8c03\u4ef7\u7684\u6743\u5229\u3002",n.a.createElement("br",null),"5\u3001\u542c\u4ece\u5411\u5bfc\u53ca\u6444\u5f71\u6307\u5bfc\u5e08\u7684\u5b89\u6392\uff0c\u4e0d\u8981\u5355\u72ec\u884c\u52a8\uff0c\u4e0d\u8981\u7ffb\u8d8a\u680f\u6746\u53ca\u5230\u60ac\u5d16\u8fb9\u62cd\u7167\uff0c\u65f6\u523b\u6ce8\u610f\u5b89\u5168\u3002",n.a.createElement("br",null),"6\u3001\u4e3a\u4e86\u4fdd\u969c\u4ee5\u4e0a\u6444\u5f71\u521b\u4f5c\u7684\u5706\u6ee1\u5b8c\u6210\u4ee5\u53ca\u56e2\u53cb\u4eba\u8eab\u5b89\u5168\uff0c\u6211\u4eec\u6709\u6743\u62d2\u7edd\u884c\u7a0b\u4ee5\u5916\u7684\u5176\u5b83\u8981\u6c42\u3002")),n.a.createElement(O,{tab:"\u884c\u7a0b\u6837\u7247",key:"5"})))}}]),t}(l.Component),x=a(80),S=a(266),D=a(66),q=a(35),B=a(265),A=a(264),M=(a(247),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).success=function(){S.a.success("\u62a5\u540d\u6210\u529f")},a.onChange=function(e){console.log(e),a.setState({totalprice:e*a.state.price}),a.setState({persons:e})},a.submit=function(){var e=Object(x.a)(a);console.log(e.refs.type.children),C()({method:"POST",url:"http://localhost:8000/order",data:{name:e.refs.name.state.value,phone:e.refs.phone.state.value,email:e.refs.email.state.value,msg:e.refs.msg.state.value,price:e.state.price,persons:e.state.persons,type:e.state.type}}).then(function(e){200===e.status&&a.success()})},a.state={totalprice:"",price:parseInt(a.props.location.state.price),persons:"",type:a.props.location.state.title},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"paybox"},n.a.createElement("div",{className:"buzhou"},n.a.createElement("img",{src:"http://www.ttpcn.com/templets/smore/images/liucheng.gif",alt:""})),n.a.createElement("div",null,n.a.createElement(h.a,{title:"\u4ea7\u54c1\u7f16\u53f7\uff1aA436",extra:n.a.createElement("a",{href:"#"},"More"),style:{width:880}},n.a.createElement("p",{ref:"type"},"\u4ea7\u54c1\u540d\u79f0\uff1a\u3010\u7edd\u8272\u5c71\u5cf0 \u3011\u610f\u5927\u5229\u591a\u6d1b\u7c73\u8482\u65af\u6d1b\u6587\u5c3c\u4e9a\u5c71\u533a\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5(2019.6.26)"),n.a.createElement("p",null,"\u4ea7\u54c1\u7c7b\u578b\uff1a2019.6.26"),n.a.createElement("p",null,"\u51fa\u53d1\u65e5\u671f\uff1a2019-06-26")),n.a.createElement("div",{style:{background:"#fff",padding:"30px 30px",marginTop:"20px"}},n.a.createElement(D.a,{gutter:20},n.a.createElement(q.a,{span:4},n.a.createElement(h.a,{title:"\u7c7b\u578b",bordered:!1},"\u6210\u4eba")),n.a.createElement(q.a,{span:4},n.a.createElement(h.a,{title:"\u65e5\u671f",bordered:!1},"2019-06-06")),n.a.createElement(q.a,{span:4},n.a.createElement(h.a,{title:"\u5355\u4ef7",bordered:!1},this.state.price)),n.a.createElement(q.a,{span:4},n.a.createElement(h.a,{title:"\u8d2d\u4e70\u6570\u91cf",bordered:!1},n.a.createElement(B.a,{min:1,max:10,defaultValue:3,onChange:this.onChange}))),n.a.createElement(q.a,{span:4},n.a.createElement(h.a,{title:"\u91d1\u989d",bordered:!1},this.state.totalprice)))),",",n.a.createElement(h.a,{title:"\u9884\u5b9a\u4fe1\u606f \xa0\u624b\u673a\u53f7\u7801\u5feb\u901f\u4e0b\u5355\uff0c\u65e0\u9700\u6ce8\u518c\u767b\u5f55\uff01",extra:n.a.createElement("a",{href:"#"},"More"),style:{width:880}},n.a.createElement("p",null,"\u9884\u5b9a\u8054\u7cfb\u4eba\uff1a",n.a.createElement(A.a,{placeholder:"\u59d3\u540d",ref:"name",type:"text"})),n.a.createElement("p",null,"\u8054\u7cfb\u624b\u673a\uff1a",n.a.createElement(A.a,{placeholder:"\u624b\u673a\u53f7",ref:"phone",type:"number"})),n.a.createElement("p",null,"\u90ae\u7bb1\uff1a",n.a.createElement(A.a,{placeholder:"\u90ae\u7bb1\u5730\u5740",ref:"email",type:"text"})),n.a.createElement("p",null,"\u8ba2\u5355\u7559\u8a00\uff1a",n.a.createElement(A.a,{placeholder:"\u6709\u4ec0\u4e48\u9700\u8981\u60f3\u8bf4\u7684\u5417",ref:"msg",type:"text"}))),n.a.createElement("div",null,n.a.createElement(b.a,{type:"primary",block:!0,onClick:this.submit,style:{marginTop:"20px"}},"\u63d0\u4ea4\u4fe1\u606f")))))}}]),t}(l.Component)),P=(a(78),h.a.Meta),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()({url:"http://localhost:8000/api/homelists"}).then(function(t){console.log(t.data.data.lists),e.setState({list:t.data.data.lists})})}},{key:"tap",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"scard"},this.state.list.map(function(e,t){return n.a.createElement(h.a,{className:"smallcard",key:t,hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:e.imgSrc})},n.a.createElement(P,{title:e.title,description:"\u590f\u5b63\u51b0\u5c9b\u5185\u9646\u9ad8\u5730\u53ca\u5357\u5cb8\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"}),n.a.createElement("p",null,"\u51fa\u884c\u65f6\u95f4:",e.date," \xa0 \u884c\u7a0b\u5929\u6570:",e.time,"\u5929"),n.a.createElement("p",null,"\u4f18\u60e0\u4ef7\uff1a",n.a.createElement("span",{className:"price"},e.price)))})),n.a.createElement("div",{className:"btn"},n.a.createElement(b.a,{size:"large"},"\u6d4f\u89c8\u66f4\u591a")),n.a.createElement("footer",null,n.a.createElement("ul",null,n.a.createElement("li",null,"\u5173\u4e8e\u6211\u4eec"),n.a.createElement("li",null,"\u8054\u7cfb\u6211\u4eec"),n.a.createElement("li",null,"\u652f\u4ed8\u65b9\u5f0f")),n.a.createElement("p",{className:"shendu"},"\u6df1\u5ea6\u884c\u6444\u5f71\u65c5\u6e38\u7f51\u7248\u6743\u6240\u6709 \u5907\u6848\u53f7 \u8700ICP\u590713021114\u53f7-1"),n.a.createElement("p",null,"Copyright \xae Chengdu Top Travel Photography Co.,Ltd. All right reserved."))))}}]),t}(l.Component),z=h.a.Meta,L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()({url:"http://localhost:3000/api/homelists"}).then(function(t){console.log(t.data.data.lists),e.setState({list:t.data.data.lists})})}},{key:"tap",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"scard"},this.state.list.map(function(e,t){return n.a.createElement(h.a,{className:"smallcard",key:t,hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:e.imgSrc})},n.a.createElement(z,{title:e.title,description:"\u590f\u5b63\u51b0\u5c9b\u5185\u9646\u9ad8\u5730\u53ca\u5357\u5cb8\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"}),n.a.createElement("p",null,"\u51fa\u884c\u65f6\u95f4:",e.date," \xa0 \u884c\u7a0b\u5929\u6570:",e.time,"\u5929"),n.a.createElement("p",null,"\u4f18\u60e0\u4ef7\uff1a",n.a.createElement("span",{className:"price"},e.price)))})),n.a.createElement("div",{className:"btn"},n.a.createElement(b.a,{size:"large"},"\u6d4f\u89c8\u66f4\u591a")),n.a.createElement("footer",null,n.a.createElement("ul",null,n.a.createElement("li",null,"\u5173\u4e8e\u6211\u4eec"),n.a.createElement("li",null,"\u8054\u7cfb\u6211\u4eec"),n.a.createElement("li",null,"\u652f\u4ed8\u65b9\u5f0f")),n.a.createElement("p",{className:"shendu"},"\u6df1\u5ea6\u884c\u6444\u5f71\u65c5\u6e38\u7f51\u7248\u6743\u6240\u6709 \u5907\u6848\u53f7 \u8700ICP\u590713021114\u53f7-1"),n.a.createElement("p",null,"Copyright \xae Chengdu Top Travel Photography Co.,Ltd. All right reserved."))))}}]),t}(l.Component),W=h.a.Meta,J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()({url:"http://localhost:3000/api/homelists"}).then(function(t){console.log(t.data.data.lists),e.setState({list:t.data.data.lists})})}},{key:"tap",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"scard"},n.a.createElement(h.a,{className:"smallcard",hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:"http://www.ttpcn.com/uploads/2018/0925/3171b67a2ef43f31ca43a78605f92ae3.jpg"})},n.a.createElement(W,{title:"\u3010\u96ea\u5c71\u76db\u5bb4\u3011",description:"\u56db\u59d1\u5a18\u5c71\u8d21\u560e\u5c71\u73af\u7ebf9\u65e5\u6444\u5f71\u4e4b\u65c5\uff08\u5e74\u7ec8\u56de\u9988\uff09"}),n.a.createElement("p",null,"\u51fa\u884c\u65f6\u95f4:2019.5.19-2019.6.19} \xa0 \u884c\u7a0b\u5929\u6570:15\u5929"),n.a.createElement("p",null,"\u4f18\u60e0\u4ef7\uff1a",n.a.createElement("span",{className:"price"},"\u7535\u8be2"))))))}}]),t}(l.Component),U=h.a.Meta,H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()({url:"http://localhost:3000/api/homelists"}).then(function(t){console.log(t.data.data.lists),e.setState({list:t.data.data.lists})})}},{key:"tap",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"scard"},this.state.list.map(function(e,t){return n.a.createElement(h.a,{className:"smallcard",key:t,hoverable:!0,cover:n.a.createElement("img",{alt:"example",src:e.imgSrc})},n.a.createElement(U,{title:e.title,description:"\u590f\u5b63\u51b0\u5c9b\u5185\u9646\u9ad8\u5730\u53ca\u5357\u5cb8\u6df1\u5ea6\u6444\u5f71\u4e4b\u65c5"}),n.a.createElement("p",null,"\u51fa\u884c\u65f6\u95f4:",e.date," \xa0 \u884c\u7a0b\u5929\u6570:",e.time,"\u5929"),n.a.createElement("p",null,"\u4f18\u60e0\u4ef7\uff1a",n.a.createElement("span",{className:"price"},e.price)))})),n.a.createElement("div",{className:"btn"},n.a.createElement(b.a,{size:"large"},"\u6d4f\u89c8\u66f4\u591a")),n.a.createElement("footer",null,n.a.createElement("ul",null,n.a.createElement("li",null,"\u5173\u4e8e\u6211\u4eec"),n.a.createElement("li",null,"\u8054\u7cfb\u6211\u4eec"),n.a.createElement("li",null,"\u652f\u4ed8\u65b9\u5f0f")),n.a.createElement("p",{className:"shendu"},"\u6df1\u5ea6\u884c\u6444\u5f71\u65c5\u6e38\u7f51\u7248\u6743\u6240\u6709 \u5907\u6848\u53f7 \u8700ICP\u590713021114\u53f7-1"),n.a.createElement("p",null,"Copyright \xae Chengdu Top Travel Photography Co.,Ltd. All right reserved."))))}}]),t}(l.Component),R=(a(248),a(267)),V=a(262),$=(V.a.MonthPicker,V.a.RangePicker,V.a.WeekPicker,[{path:"/home",component:k,exact:!0},{path:"/probe",component:T},{path:"/photo",component:L},{path:"/trip",component:J},{path:"/show",component:H},{path:"/person",component:function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onChange=function(e,t){console.log(e,t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("div",null,n.a.createElement(R.a,{className:"timeline"},n.a.createElement(R.a.Item,{className:"item"},"10\u79d2\u63d0\u4ea4\u9700\u6c42"),n.a.createElement(R.a.Item,{className:"item"},"2\u5c0f\u65f6\u4e0e\u60a8\u6c9f\u901a"),n.a.createElement(R.a.Item,{className:"item"},"24\u5c0f\u65f6\u83b7\u5f97\u4e13\u5c5e\u65b9\u6848"))),n.a.createElement("div",null,n.a.createElement("div",{className:"change"},n.a.createElement("h2",null,"\u5f00\u59cb\u5b9a\u5236"),n.a.createElement(V.a,{onChange:this.onChange,className:"date",placeholder:"\u8bf7\u9009\u62e9\u51fa\u53d1\u65f6\u95f4"}),n.a.createElement(A.a,{className:"input",placeholder:"\u8bf7\u8f93\u5165\u76ee\u7684\u5730"}),n.a.createElement(A.a,{className:"input",placeholder:"\u8bf7\u586b\u5199\u4eba\u6570"}),n.a.createElement(A.a,{className:"input",placeholder:"\u8bf7\u586b\u5199\u59d3\u540d"}),n.a.createElement(A.a,{className:"input",placeholder:"\u8054\u7cfb\u624b\u673a"}),n.a.createElement(A.a,{className:"input",placeholder:"\u8054\u7cfbqq"}),n.a.createElement(b.a,{type:"primary",size:"large"},"\u63d0\u4ea4\u5b9a\u5236\u9700\u6c42"),n.a.createElement("div",{class:"pic1"}),n.a.createElement("div",{class:"pic2"}))))}}]),t}(l.Component)},{path:"/detail",component:I},{path:"/pay",component:M}]),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={current:"mail"},a.handleClick=function(e){a.setState({current:e.key})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement(d.b,{theme:"dark",onClick:this.handleClick,mode:"horizontal",className:"navbar"},n.a.createElement(d.b.Item,{key:"logo",className:"navies"},n.a.createElement(p.c,{to:"/home"}," ",n.a.createElement("img",{className:"img",src:"http://www.ttpcn.com/uploads/main/allimg/20151216/20151216144124.png",alt:""}))),n.a.createElement(p.b,{className:"navies",to:"/probe"},"\u6781\u5730\u63a2\u7d22"),n.a.createElement(p.c,{className:"navies",to:"/photo"},"\u5883\u5916\u6444\u5f71"),n.a.createElement(p.c,{className:"navies",to:"/trip"},"\u56fd\u5185\u884c\u7a0b"),n.a.createElement(p.c,{className:"navies",to:"/show"},"\u4f5c\u54c1\u5c55\u793a"),n.a.createElement(p.c,{className:"navies",to:"/person"},"\u79c1\u4eba\u5b9a\u5236")),$.map(function(e,t){return e.exact?n.a.createElement(f.a,{key:t,exact:!0,path:e.path,component:e.component}):n.a.createElement(f.a,{key:t,path:e.path,component:e.component})})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){},78:function(e,t,a){}},[[149,1,2]]]);
//# sourceMappingURL=main.c0f20527.chunk.js.map