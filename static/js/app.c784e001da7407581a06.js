webpackJsonp([1],{"+kmB":function(e,t,i){e.exports=i.p+"static/img/huangzhong.2ce4be3.svg"},"0zQ4":function(e,t,i){i("7M+g")},"2CLW":function(e,t){},"3rlS":function(e,t,i){e.exports=i.p+"static/img/zhaoyun.b82de04.svg"},"7HhG":function(e,t,i){e.exports=i.p+"static/img/guanyu.84a87db.svg"},"7M+g":function(e,t,i){i("zNUS").mock("/rj/frontend/src/3rdparty/common.js","get",{data:{cur_page:"这是mock的数据"}})},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},n,!1,function(e){i("2CLW")},null,null).exports,o=i("Gu7T"),a=i.n(o),h=i("/ocq"),c={props:{width:Number,height:Number,name:{type:String,default:"blank"},active:Boolean,uid:String,x0:Number,y0:Number,isEmpty:Boolean,action:Array},data:function(){return{x:this.x0,y:this.y0}},computed:{styleObj:function(){return{left:22.5*this.x+"%",top:18*this.y+"%",width:22.5*this.width+"%",height:18*this.height+"%"}},classObj:function(){return{active:this.active,isEmpty:this.isEmpty}}},methods:{getX:function(){return this.x},getY:function(){return this.y},setX:function(e){this.x=e},setY:function(e){this.y=e},move:function(e){switch(e){case"left":this.x-=this.width;break;case"right":this.x+=this.width;break;case"top":this.y-=this.height;break;case"bottom":this.y+=this.height}},handleClick:function(){this.isEmpty?this.movAction():this.reqAction()},reqAction:function(){this.$emit("reqAction",this.uid,this.x,this.y,this.width,this.height)},movAction:function(){this.$emit("movAction",this.uid,this.x,this.y)}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticClass:"person",class:e.classObj,style:e.styleObj,on:{click:e.handleClick}},[e.isEmpty?[1==e.x&&4==e.y?s("strong",[e._v("出")]):2==e.x&&4==e.y?s("strong",[e._v("口")]):e._e()]:[s("i",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"banner"}),e._v(" "),s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("UKcq")("./"+e.name+".svg")}})]],2)},staticRenderFns:[]},d={data:function(){return{activeUid:"",personX:"",personY:"",personWidth:"",personHeight:"",screenHeight:window.innerHeight}},components:{fig:i("VU/8")(c,p,!1,null,null,null).exports},computed:{styleObj:function(){return{height:this.screenHeight+"px"}}},methods:{handleReq:function(e,t,i,s,n){this.activeUid=e,this.personX=t,this.personY=i,this.personWidth=s,this.personHeight=n},handleMov:function(e,t,i){if(""!=this.activeUid){var s="empty1"==e?"empty2":"empty1",n=this.$refs[s].getX(),r=this.$refs[s].getY();if(this.personX=this.$refs[this.activeUid].getX(),this.personY=this.$refs[this.activeUid].getY(),this.personX==t)if(this.personY+this.personHeight==i||this.personY-1==i){if(1==this.personWidth){var o=this.personY>i?i+this.personHeight:this.personY,a=this.personY>i?i:this.personY+1;this.$refs[e].setY(o),this.$refs[this.activeUid].setY(a)}else if(2==this.personWidth&&t+1==n&&i==r){var h=this.personY>i?i+this.personHeight:i-this.personHeight,c=this.personY>i?i:this.personY+1;this.$refs[e].setY(h),this.$refs[s].setY(h),this.$refs[this.activeUid].setY(c)}}else 1!=this.personWidth||this.personY+this.personHeight+1!=i&&this.personY-2!=i||t!=n||r+1!=i&&r-1!=i||(1==this.personHeight?(this.$refs[e].setY(this.personY),this.$refs[this.activeUid].setY(i)):2==this.personHeight&&(this.$refs[e].setY(this.personY+1),this.$refs[s].setY(this.personY),this.$refs[this.activeUid].setY(r>i?i:r)));else if(this.personY==i)if(this.personX+this.personWidth==t||this.personX-1==t){if(1==this.personHeight){var p=this.personX>t?t+this.personWidth:t-this.personWidth,d=this.personX>t?t:this.personX+1;this.$refs[e].setX(p),this.$refs[this.activeUid].setX(d)}else if(2==this.personHeight&&i+1==r&&t==n){var u=this.personX>t?t+this.personWidth:t-this.personWidth,g=this.personX>t?t:this.personX+1;this.$refs[e].setX(u),this.$refs[s].setX(u),this.$refs[this.activeUid].setX(g)}}else 1!=this.personHeight||this.personX+this.personWidth+1!=t&&this.personX-2!=t||i!=r||n+1!=t&&n-1!=t||(1==this.personWidth?(this.$refs[e].setX(this.personX),this.$refs[this.activeUid].setX(t)):2==this.personWidth&&(this.$refs[e].setX(this.personX+1),this.$refs[s].setX(this.personX),this.$refs[this.activeUid].setX(n>t?t:n)));else if(this.personX+1==t||this.personX-1==t){if(2==this.personWidth&&n+1==t&&i==r){var f=this.personY>i?i+this.personHeight:this.personY,l=this.personY>i?i:this.personY+1;this.$refs[e].setY(f),this.$refs[s].setY(f),this.$refs[this.activeUid].setY(l)}else if(this.personY+1==i&&2==this.personHeight&&r+1==i&&t==n){var v=this.personX>t?t+this.personWidth:this.personX,m=this.personX>t?t:this.personX+1;this.$refs[e].setX(v),this.$refs[s].setX(v),this.$refs[this.activeUid].setX(m)}}else personX+2!=t&&personX-2!=t||t==n&&r-1==i&&(this.$refs[e].setX(this.personX),this.$refs[s].setX(this.personX),this.$refs[this.activeUid].setX(this.personX+1));if("caocao"==this.activeUid){var y=this.$refs[this.activeUid].getX(),x=this.$refs[this.activeUid].getY();y+2==3&&x+2==5&&alert("曹操已经成功逃到出口，小琼琼你好棒")}}}},mounted:function(){var e=this;window.onresize=function(){e.screenHeight=window.innerHeight}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"walkway",style:e.styleObj},[i("fig",{ref:"zhangfei",attrs:{name:"zhangfei",uid:"zhangfei",width:1,height:2,x0:0,y0:0,active:"zhangfei"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"caocao",attrs:{name:"caocao",uid:"caocao",width:2,height:2,x0:1,y0:0,active:"caocao"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"zhaoyun",attrs:{name:"zhaoyun",uid:"zhaoyun",width:1,height:2,x0:3,y0:0,active:"zhaoyun"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"machao",attrs:{name:"machao",uid:"machao",width:1,height:2,x0:0,y0:2,active:"machao"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"guanyu",attrs:{name:"guanyu",uid:"guanyu",width:2,height:1,x0:1,y0:2,active:"guanyu"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"xb1",attrs:{name:"xiaobing",uid:"xb1",width:1,height:1,x0:1,y0:3,active:"xb1"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"xb2",attrs:{name:"xiaobing",uid:"xb2",width:1,height:1,x0:2,y0:3,active:"xb2"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"xb3",attrs:{name:"xiaobing",uid:"xb3",width:1,height:1,x0:0,y0:4,active:"xb3"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"xb4",attrs:{name:"xiaobing",uid:"xb4",width:1,height:1,x0:3,y0:4,active:"xb4"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"huangzhong",attrs:{name:"huangzhong",uid:"huangzhong",width:1,height:2,x0:3,y0:2,active:"huangzhong"==e.activeUid},on:{reqAction:e.handleReq}}),e._v(" "),i("fig",{ref:"empty1",attrs:{name:"empty",uid:"empty1",isEmpty:"",width:1,height:1,x0:1,y0:4},on:{movAction:e.handleMov}}),e._v(" "),i("fig",{ref:"empty2",attrs:{name:"empty",isEmpty:"",uid:"empty2",width:1,height:1,x0:2,y0:4},on:{movAction:e.handleMov}})],1)},staticRenderFns:[]},g=[{path:"/",name:"klotski",component:i("VU/8")(d,u,!1,null,null,null).exports}];s.default.use(h.a);var f=[].concat(a()(g)),l=new h.a({mode:"hash",routes:f,scrollBehavior:function(e,t,i){return{x:0,y:0}}}),v=i("NYxO"),m=i("bOdI"),y=i.n(m),x=i("//Fk"),b=i.n(x),w=i("vUsP"),$=i.n(w),S={requestUser:function(e,t){var i=$.a.filePath("files","ajax","user.php");jsonRequestByPost(t,e,!1,i)}},X={state:{pageDemo1Value:0},getters:{getPageDemo1Value:function(e){return e.pageDemo1Value}},actions:{ACCOUNT_GET_ALL_TEACHER_OF_CLASS:function(e,t){var i=e.commit;return new b.a(function(e,s){var n={method:10,pageno:1,pagesize:20,key:t};S.requestUserAsync(function(t){var n=JSON.parse(t);if("error"==n.status)return s&&s(),void alert("获取教师列表失败！");i("pageDemo1/SET_VAL",n.data),e()},n)})}},mutations:y()({},"pageDemo1/SET_VAL",function(e,t){e.pageDemo1Value=t})};s.default.use(v.a);var _=new v.a.Store({modules:{pageDemo1:X},strict:!1}),U=(i("Z5gD"),i("zL8q")),Y=i("TXmL");s.default.use(U.Card),s.default.use(Y.a);var A=new Y.a({locale:"chn",messages:{en:{comp:{HelloWorld:{msg:"welcome to the vue template of CM web"}},page:{}},chn:{comp:{HelloWorld:{msg:"欢迎来到CM web的vue项模板"}},page:{}}}});s.default.config.productionTip=!1,new s.default({el:"#app",router:l,store:_,i18n:A,components:{App:r},template:"<App/>"})},RB20:function(e,t,i){e.exports=i.p+"static/img/zhangfei.6487b6c.svg"},UKcq:function(e,t,i){var s={"./caocao.svg":"odJ+","./guanyu.svg":"7HhG","./huangzhong.svg":"+kmB","./machao.svg":"a+T7","./xiaobing.svg":"idzP","./zhangfei.svg":"RB20","./zhaoyun.svg":"3rlS"};function n(e){return i(r(e))}function r(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="UKcq"},Z5gD:function(e,t){},"a+T7":function(e,t,i){e.exports=i.p+"static/img/machao.ed6161a.svg"},idzP:function(e,t,i){e.exports=i.p+"static/img/xiaobing.b4e179c.svg"},"odJ+":function(e,t,i){e.exports=i.p+"static/img/caocao.a2002b0.svg"},vUsP:function(e,i){var s={PERMISSION_CREATE:4,PERMISSION_READ:1,PERMISSION_UPDATE:2,PERMISSION_DELETE:8,PERMISSION_SHARE:16,PERMISSION_ALL:31,webroot:"/rj",oc_requesttoken:"",appswebroots:"undefined"!=typeof oc_appswebroots&&oc_appswebroots,currentUser:"undefined"!=typeof oc_current_user&&oc_current_user,coreApps:["","admin","log","search","settings","core","3rdparty"],linkTo:function(e,t){return s.filePath(e,"",t)},linkToRemoteBase:function(e){return s.webroot+"/remote.php/"+e},linkToRemote:function(e){return window.location.protocol+"//"+window.location.host+s.linkToRemoteBase(e)},filePath:function(e,t,i){var n=-1!==s.coreApps.indexOf(e),r=s.webroot;return"php"!==i.substring(i.length-3)&&"css"!==i.substring(i.length-3)||n?"php"===i.substring(i.length-3)||n?(r+="settings"!=e&&"core"!=e&&"search"!=e||"ajax"!=t?"/":"/index.php/",n||(r+="apps/"),""!==e&&(r+=e+="/"),t&&(r+=t+"/"),r+=i):(r=s.appswebroots[e],t&&(r+="/"+t+"/"),"/"!==r.substring(r.length-1)&&(r+="/"),r+=i):(r+="/index.php/apps/"+e,"index.php"!=i&&(r+="/",t&&(r+=encodeURI(t+"/")),r+=i)),r},imagePath:function(e,t){return-1==t.indexOf(".")&&(t+=SVGSupport()?".svg":".png"),s.filePath(e,"img",t)},addScript:function(e,t,i,n){var r,o=s.filePath(e,"js",t+".js");return s.addScript.loaded[o]?i&&i(n):(r=i?$.getScript(o,i,n):$.getScript(o),s.addScript.loaded[o]=r),s.addScript.loaded[o]},addStyle:function(e,t){var i=s.filePath(e,"css",t+".css");-1===s.addStyle.loaded.indexOf(i)&&(s.addStyle.loaded.push(i),document.createStyleSheet?document.createStyleSheet(i):(t=$('<link rel="stylesheet" type="text/css" href="'+i+'"/>'),$("head").append(t)))},basename:function(e){return e.replace(/\\/g,"/").replace(/.*\//,"")},dirname:function(e){return e.replace(/\\/g,"/").replace(/\/[^\/]*$/,"")},search:function(e){e&&(s.addStyle("search","results"),$.getJSON(s.filePath("search","ajax","search.php")+"?query="+encodeURIComponent(e),function(e){s.search.lastResults=e,s.search.showResults(e)}))},dialogs:null,mtime2date:function(e){e=parseInt(e,10);var t=new Date(1e3*e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()+", "+t.getHours()+":"+t.getMinutes()},parseQueryString:function(e){var t,i,s,n,r={};if(!e)return null;"?"===e[0]&&(e=e.substr(1)),t=e.split("&");for(var o=0;o<t.length;o++)(i=t[o].split("=")).length&&(s=decodeURIComponent(i[0]))&&(n=i[1],r[s]=n&&decodeURIComponent(n));return r},appSettings:function(e){if(void 0===e||void 0===e.appid)throw{name:"MissingParameter",message:"The parameter appid is missing"};var i={scriptName:"settings.php",cache:!0};$.extend(i,e);var n=$("#appsettings");if(0==n.length)throw{name:"MissingDOMElement",message:'There has be be an element with id "appsettings" for the popup to show.'};var r=$("#appsettings_popup");if(0==r.length&&($("body").prepend('<div class="popup hidden" id="appsettings_popup"></div>'),(r=$("#appsettings_popup")).addClass(n.hasClass("topright")?"topright":"bottomleft")),r.is(":visible"))r.hide().remove();else{var o=n.hasClass("topright")?"up":"left";$.get(s.filePath(i.appid,"",i.scriptName),function(e){r.html(e).ready(function(){if(r.prepend('<span class="arrow '+o+'"></span><h2>'+t("core","Settings")+'</h2><a class="close svg"></a>').show(),r.find(".close").bind("click",function(){r.remove()}),void 0!==i.loadJS){var e;if(!0===i.loadJS)e="settings.js";else{if("string"!=typeof i.loadJS)throw{name:"InvalidParameter",message:'The "loadJS" parameter must be either boolean or a string.'};e=i.loadJS}i.cache&&$.ajaxSetup({cache:!0}),$.getScript(s.filePath(i.appid,"js",e)).fail(function(e,t,i){throw i})}}).show()},"html")}},getFileExtension:function(e){var t=e.split(".");return t[t.length-1].toLowerCase()}};s.router_base_url=s.webroot+"/index.php",e.exports=s}},["NHnr"]);