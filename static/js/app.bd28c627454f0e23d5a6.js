webpackJsonp([1],{"+kmB":function(t,e,i){t.exports=i.p+"static/img/huangzhong.2ce4be3.svg"},"0zQ4":function(t,e,i){i("7M+g")},"3rlS":function(t,e,i){t.exports=i.p+"static/img/zhaoyun.b82de04.svg"},"7HhG":function(t,e,i){t.exports=i.p+"static/img/guanyu.84a87db.svg"},"7M+g":function(t,e,i){i("zNUS").mock("/rj/frontend/src/3rdparty/common.js","get",{data:{cur_page:"这是mock的数据"}})},"7y2U":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={name:"App",mounted:function(){document.addEventListener("touchmove",function(){event.preventDefault()},{passive:!1})}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("podM")},null,null).exports,h=i("Gu7T"),r=i.n(h),c=i("/ocq"),u=i("d7EF"),d=i.n(u),l={props:{width:Number,height:Number,name:{type:String,default:"blank"},active:Boolean,uid:String,x0:Number,y0:Number,isEmpty:Boolean,action:Array},data:function(){return{x:this.x0,y:this.y0,animateOver:!1,isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),isIphoneWechatEmbed:(/iPhone/.test(navigator.userAgent)||/iPad/.test(navigator.userAgent))&&/MicroMessenger/.test(navigator.userAgent),clientX:0,clientY:0}},computed:{isSVGAvail:function(){return!this.isSafari&&!this.isIphoneWechatEmbed},styleObj:function(){return{left:25*this.x+"%",top:20*this.y+"%",width:25*this.width+"%",height:20*this.height+"%",transitionProperty:"left,top",transitionDuration:this.isEmpty?0:"0.8s"}},classObj:function(){return{active:this.active,isEmpty:this.isEmpty}}},methods:{reset:function(){this.x=this.x0,this.y=this.y0},getX:function(){return this.x},getY:function(){return this.y},setX:function(t){this.x=t},setY:function(t){this.y=t},move:function(t){switch(t){case"left":this.x-=this.width;break;case"right":this.x+=this.width;break;case"top":this.y-=this.height;break;case"bottom":this.y+=this.height}},handleClick:function(){this.isEmpty?this.movAction():this.reqAction()},handleDragStart:function(t){return this.clientX=t.clientX,this.clientY=t.clientY,console.log(11,t,22),this.isEmpty||this.handleClick(),!1},handleDrop:function(t){console.log(this.x,this.y),this.isEmpty&&this.handleClick()},handleTouchStart:function(t){if(!this.isEmpty)return t.changedTouches&&t.changedTouches.length>0?(this.clientX=t.changedTouches[0].clientX,this.clientY=t.changedTouches[0].clientY):this.clientX=this.clientY=void 0,console.log(77,t,88),this.handleClick(),!1},handleTouchend:function(t){if(!this.isEmpty){console.log(111,t,222);var e=void 0,i=void 0;if(t.changedTouches&&t.changedTouches.length>0?(e=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY):e=i=void 0,this.clientX!=e||this.clientY!=i){var n=this.calPoint(e,i),s=d()(n,2),a=s[0],o=s[1];console.log("a",a,o,"b"),this.judAction(a,o)}}},calPoint:function(t,e){var i=window.innerWidth,n=window.innerHeight;return[parseInt((t-.05*i)/(.25*i)),parseInt((e+0)/(.16*n))]},reqAction:function(){this.$emit("reqAction",this.uid,this.x,this.y,this.width,this.height)},movAction:function(){this.$emit("movAction",this.uid,this.x,this.y)},judAction:function(t,e){this.$emit("judAction",t,e)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"person",class:t.classObj,style:t.styleObj,on:{click:t.handleClick,dragstart:t.handleDragStart,dragover:function(t){t.preventDefault()},drop:t.handleDrop,touchstart:t.handleTouchStart,touchend:t.handleTouchend}},[t.isEmpty?t._e():n("i",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"banner"}),t._v(" "),!t.isEmpty&&t.isSVGAvail?n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("UKcq")("./"+t.name+".svg")}}):t.isEmpty||t.isSVGAvail?t._e():n("i",{class:"person--"+t.name}),t._v(" "),1==t.x&&4==t.y&&t.isEmpty?n("strong",[t._v("出")]):2==t.x&&4==t.y&&t.isEmpty?n("strong",[t._v("口")]):t._e()])},staticRenderFns:[]},g={data:function(){return{playList:["static/mp3/04-AudioTrack 04.mp3","static/mp3/06-AudioTrack 06.mp3","static/mp3/15-AudioTrack 15.mp3","static/mp3/17-AudioTrack 17.mp3","static/mp3/18-AudioTrack 18.mp3","static/mp3/20-AudioTrack 20.mp3","static/mp3/24-AudioTrack 24.mp3","static/mp3/32-AudioTrack 32.mp3","static/mp3/33-AudioTrack 33.mp3","static/mp3/34-AudioTrack 34.mp3","static/mp3/35-AudioTrack 35.mp3"],myAudio:new Audio,index:0,opertion:"列"}},methods:{playEndedHandler:function(){this.index=this.nextIndex(),this.myAudio.src=this.playList[this.index],this.myAudio.play()},play:function(){this.myAudio.controls=!0,this.myAudio.src=this.playList[this.index],this.myAudio.addEventListener("ended",this.playEndedHandler,!1),document.getElementById("audioBox").appendChild(this.myAudio),this.myAudio.autoplay=!0,this.myAudio.loop=!1},nextIndex:function(){return"单"==this.opertion?this.index:(this.index+1)%this.playList.length},handleClick:function(){this.opertion="单"==this.opertion?"列":"单","列"==this.opertion?this.myAudio.loop=!1:this.myAudio.loop=!0}},mounted:function(){this.play()}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AudioPlay"},[e("el-button",{attrs:{round:"",size:"small"},on:{click:this.handleClick}},[this._v(this._s(this.opertion))]),this._v(" "),e("div",{attrs:{id:"audioBox"}})],1)},staticRenderFns:[]};var y={data:function(){return{clientX:0,clientY:0}},methods:{handleTouchStart:function(t){t.changedTouches&&t.changedTouches.length>0?(this.clientX=t.changedTouches[0].clientX,this.clientY=t.changedTouches[0].clientY):this.clientX=this.clientY=void 0,console.log(9,this.clientX,this.clientY,10)},handleTouchmove:function(t){console.log(99,t,100);var e=void 0,i=void 0;t.changedTouches&&t.changedTouches.length>0?(e=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY):e=i=void 0,this.clientX==e&&this.clientY==i||(i<this.clientY?document.getElementsByClassName("dialog-about")[0].scrollTop+=this.clientY-i:document.getElementsByClassName("dialog-about")[0].scrollTop-=i-this.clientY,this.clientX=e,this.clientY=i)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"about",on:{touchstart:this.handleTouchStart,touchmove:this.handleTouchmove}},[e("h1",{staticClass:"about__header"},[this._v("华容道")]),this._v(" "),this._m(0),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about__instruction"},[i("p",{staticClass:"about__instruction--1"},[t._v("玩法： 通过两个小空格移动棋子，将曹操移出华容道（也就是把最大的方块移到最下方中央位置）。")]),t._v(" "),i("p",{staticClass:"about__instruction--2"},[t._v("下面这首诗中隐藏了华容道游戏的策略和思路")]),t._v(" "),i("p",{staticClass:"about__instruction--3"},[t._v("华容小径")]),t._v(" "),i("p",{staticClass:"about__instruction--4"},[t._v("兵不在多，四个则行。")]),t._v(" "),i("p",{staticClass:"about__instruction--4"},[t._v("将不在广，五虎则灵。")]),t._v(" "),i("p",{staticClass:"about__instruction--4"},[t._v("斯是游戏，唯吾闲情。")]),t._v(" "),i("p",{staticClass:"about__instruction--4"},[t._v("曹操跑的快，小兵追的勤。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about__resource"},[i("p",{staticClass:"about__resource--1"},[t._v("\n      设计：界面参考4399小游戏华容道：\n      "),i("a",[t._v("http://www.4399.com/flash/14016_3.htm。")])]),t._v(" "),i("p",{staticClass:"about__resource--1"},[t._v("\n      源码：采用H5+vue编写:\n      "),i("a",[t._v("https://github.com/feiniao111/klotski-source。")])]),t._v(" "),i("p",{staticClass:"about__resource--1"},[t._v("图片：新浪某微博（找不到出处了），非商用，侵删。")]),t._v(" "),i("p",{staticClass:"about__resource--1"},[t._v("音乐：三国志刘备传mod，非商用，侵删。")]),t._v(" "),i("p",{staticClass:"about__resource--1"},[t._v("反馈：不足之处，还请海涵，欢迎提建议~")])])}]},v=[{value:[{uid:"zhangfei",name:"zhangfei",width:1,height:2,x0:0,y0:0},{uid:"caocao",name:"caocao",width:2,height:2,x0:1,y0:0},{uid:"zhaoyun",name:"zhaoyun",width:1,height:2,x0:3,y0:0},{uid:"machao",name:"machao",width:1,height:2,x0:0,y0:2},{uid:"guanyu",name:"guanyu",width:2,height:1,x0:1,y0:2},{uid:"xb1",name:"xiaobing",width:1,height:1,x0:1,y0:3},{uid:"xb2",name:"xiaobing",width:1,height:1,x0:2,y0:3},{uid:"xb3",name:"xiaobing",width:1,height:1,x0:0,y0:4},{uid:"xb4",name:"xiaobing",width:1,height:1,x0:3,y0:4},{uid:"huangzhong",name:"huangzhong",width:1,height:2,x0:3,y0:2},{uid:"empty1",name:"empty",width:1,height:1,x0:1,y0:4,isEmpty:!0},{uid:"empty2",name:"empty",width:1,height:1,x0:2,y0:4,isEmpty:!0}],label:"横刀立马"},{value:[{uid:"zhangfei",name:"zhangfei",width:1,height:2,x0:0,y0:0},{uid:"caocao",name:"caocao",width:2,height:2,x0:1,y0:0},{uid:"zhaoyun",name:"zhaoyun",width:1,height:2,x0:3,y0:0},{uid:"machao",name:"machao",width:1,height:2,x0:0,y0:3},{uid:"guanyu",name:"guanyu",width:2,height:1,x0:1,y0:2},{uid:"xb1",name:"xiaobing",width:1,height:1,x0:1,y0:3},{uid:"xb2",name:"xiaobing",width:1,height:1,x0:2,y0:3},{uid:"xb3",name:"xiaobing",width:1,height:1,x0:0,y0:2},{uid:"xb4",name:"xiaobing",width:1,height:1,x0:3,y0:2},{uid:"huangzhong",name:"huangzhong",width:1,height:2,x0:3,y0:3},{uid:"empty1",name:"empty",width:1,height:1,x0:1,y0:4,isEmpty:!0},{uid:"empty2",name:"empty",width:1,height:1,x0:2,y0:4,isEmpty:!0}],label:"横刀立马2"},{value:[{uid:"zhangfei",name:"zhangfei",width:1,height:2,x0:0,y0:0},{uid:"caocao",name:"caocao",width:2,height:2,x0:1,y0:0},{uid:"zhaoyun",name:"zhaoyun",width:1,height:2,x0:3,y0:0},{uid:"machao",name:"machao",width:1,height:2,x0:0,y0:3},{uid:"guanyu",name:"guanyu",width:2,height:1,x0:1,y0:3},{uid:"xb1",name:"xiaobing",width:1,height:1,x0:1,y0:2},{uid:"xb2",name:"xiaobing",width:1,height:1,x0:2,y0:2},{uid:"xb3",name:"xiaobing",width:1,height:1,x0:0,y0:2},{uid:"xb4",name:"xiaobing",width:1,height:1,x0:3,y0:2},{uid:"huangzhong",name:"huangzhong",width:1,height:2,x0:3,y0:3},{uid:"empty1",name:"empty",width:1,height:1,x0:1,y0:4,isEmpty:!0},{uid:"empty2",name:"empty",width:1,height:1,x0:2,y0:4,isEmpty:!0}],label:"齐头并进"},{value:[{uid:"zhangfei",name:"zhangfei",width:1,height:2,x0:0,y0:1},{uid:"caocao",name:"caocao",width:2,height:2,x0:1,y0:0},{uid:"zhaoyun",name:"zhaoyun",width:1,height:2,x0:3,y0:1},{uid:"machao",name:"machao",width:1,height:2,x0:0,y0:3},{uid:"guanyu",name:"guanyu",width:2,height:1,x0:1,y0:2},{uid:"xb1",name:"xiaobing",width:1,height:1,x0:1,y0:3},{uid:"xb2",name:"xiaobing",width:1,height:1,x0:2,y0:3},{uid:"xb3",name:"xiaobing",width:1,height:1,x0:0,y0:0},{uid:"xb4",name:"xiaobing",width:1,height:1,x0:3,y0:0},{uid:"huangzhong",name:"huangzhong",width:1,height:2,x0:3,y0:3},{uid:"empty1",name:"empty",width:1,height:1,x0:1,y0:4,isEmpty:!0},{uid:"empty2",name:"empty",width:1,height:1,x0:2,y0:4,isEmpty:!0}],label:"兵分三路"},{value:[{uid:"zhangfei",name:"zhangfei",width:1,height:2,x0:2,y0:0},{uid:"caocao",name:"caocao",width:2,height:2,x0:0,y0:0},{uid:"zhaoyun",name:"zhaoyun",width:1,height:2,x0:3,y0:0},{uid:"machao",name:"machao",width:1,height:2,x0:0,y0:3},{uid:"guanyu",name:"guanyu",width:2,height:1,x0:0,y0:2},{uid:"xb1",name:"xiaobing",width:1,height:1,x0:2,y0:2},{uid:"xb2",name:"xiaobing",width:1,height:1,x0:2,y0:3},{uid:"xb3",name:"xiaobing",width:1,height:1,x0:3,y0:3},{uid:"xb4",name:"xiaobing",width:1,height:1,x0:3,y0:2},{uid:"huangzhong",name:"huangzhong",width:1,height:2,x0:1,y0:3},{uid:"empty1",name:"empty",width:1,height:1,x0:3,y0:4,isEmpty:!0},{uid:"empty2",name:"empty",width:1,height:1,x0:2,y0:4,isEmpty:!0}],label:"屯兵东路"}],x={data:function(){return{activeUid:"",personX:"",personY:"",personWidth:"",personHeight:"",screenHeight:window.innerHeight,count:0,options:v,datas:[],oldDatas:[],dialogVisible:!1,dialogWidth:"95%"}},components:{fig:i("VU/8")(l,p,!1,null,null,null).exports,autoplay:i("VU/8")(g,m,!1,function(t){i("7y2U")},null,null).exports,about:i("VU/8")(y,f,!1,null,null,null).exports},computed:{styleObj:function(){return{height:this.screenHeight+"px"}}},watch:{datas:{handler:function(t,e){this.oldDatas=e},deep:!0}},methods:{handleChangeLayout:function(t){var e=this;this.$confirm("更换布局将重新开始游戏！是否确定更换?","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.count=0,e.activeUid="",e.$nextTick(function(){for(var t=0;t<value.length;t++){var i=value[t].uid;e.$refs[i]&&e.$refs[i][0].reset()}})}).catch(function(){e.datas=e.oldDatas})},movePlay:function(){document.getElementById("moveSound").play()},handleTips:function(){this.$createElement;this.dialogVisible=!0},handleReset:function(){var t=this;this.$confirm("<div><p>是否要重新开始?</p><i style='font-size: 10px; color: #999'>(作者很菜但从不点，别轻易放弃，加油！)</i></div>","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.count=0,t.activeUid="";for(var e=0;e<t.datas.length;e++){var i=t.datas[e].uid;t.$refs[i][0].reset()}})},handleReq:function(t,e,i,n,s){this.activeUid=t,this.personX=e,this.personY=i,this.personWidth=n,this.personHeight=s},handleMov:function(t,e,i){var n=!1;if(""!=this.activeUid){var s="empty1"==t?"empty2":"empty1",a=this.$refs[t][0],o=this.$refs[s][0],h=this.$refs[this.activeUid][0],r=o.getX(),c=o.getY();if(this.personX=h.getX(),this.personY=h.getY(),this.personX==e)if(this.personY+this.personHeight==i||this.personY-1==i){if(1==this.personWidth){var u=this.personY>i?i+this.personHeight:this.personY,d=this.personY>i?i:this.personY+1;a.setY(u),h.setY(d),n=!0}else if(2==this.personWidth&&e+1==r&&i==c){var l=this.personY>i?i+this.personHeight:i-this.personHeight,p=this.personY>i?i:this.personY+1;a.setY(l),o.setY(l),h.setY(p),n=!0}}else 1!=this.personWidth||this.personY+this.personHeight+1!=i&&this.personY-2!=i||e!=r||c+1!=i&&c-1!=i||(1==this.personHeight?(a.setY(this.personY),h.setY(i),n=!0):2==this.personHeight&&(a.setY(this.personY+1),o.setY(this.personY),h.setY(c>i?i:c),n=!0));else if(this.personY==i)if(this.personX+this.personWidth==e||this.personX-1==e){if(1==this.personHeight){var g=this.personX>e?e+this.personWidth:e-this.personWidth,m=this.personX>e?e:this.personX+1;a.setX(g),h.setX(m),n=!0}else if(2==this.personHeight&&i+1==c&&e==r){var y=this.personX>e?e+this.personWidth:e-this.personWidth,f=this.personX>e?e:this.personX+1;a.setX(y),o.setX(y),h.setX(f),n=!0}}else 1!=this.personHeight||this.personX+this.personWidth+1!=e&&this.personX-2!=e||i!=c||r+1!=e&&r-1!=e||(1==this.personWidth?(a.setX(this.personX),h.setX(e),n=!0):2==this.personWidth&&(a.setX(this.personX+1),o.setX(this.personX),h.setX(r>e?e:r),n=!0));else if(this.personX+1==e||this.personX-1==e)if(2!=this.personWidth||r+1!=e||i!=c||this.personY+this.personHeight!=i&&this.personY-1!=i){if(this.personY+1==i&&2==this.personHeight&&c+1==i&&e==r){var v=this.personX>e?e+this.personWidth:this.personX,x=this.personX>e?e:this.personX+1;a.setX(v),o.setX(v),h.setX(x),n=!0}}else{var w=this.personY>i?i+this.personHeight:this.personY,b=this.personY>i?i:this.personY+1;a.setY(w),o.setY(w),h.setY(b),n=!0}else this.personX+2!=e&&this.personX-2!=e||e==r&&c+1==i&&(a.setX(this.personX),o.setX(this.personX),h.setX(this.personX+1),n=!0);if(n&&(this.count++,this.movePlay()),"caocao"==this.activeUid){var _=h.getX(),S=h.getY();_+2==3&&S+2==5&&this.$alert("曹操已经成功逃到出口，恭喜您通关！请截图给作者获取打赏(#^.^#)","",{confirmButtonText:"确定",callback:function(t){}})}}},handleJud:function(t,e){var i=this.$refs.empty1[0],n=this.$refs.empty2[0],s=[i.getX(),i.getY()],a=s[0],o=s[1],h=[n.getX(),n.getY()],r=h[0],c=h[1];t==a&&e==o?i.handleClick():t==r&&e==c&&n.handleClick()}},mounted:function(){var t=this;this.datas=this.options[0].value,window.innerWidth>500&&(this.dialogWidth="50%"),window.onresize=function(){t.screenHeight=window.innerHeight,window.innerWidth>500&&(this.dialogWidth="50%")}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"walkway",style:t.styleObj},[i("section",{staticClass:"walkway__content"},t._l(t.datas,function(e){return i("fig",{key:e.uid,ref:e.uid,refInFor:!0,attrs:{uid:e.uid,name:e.name,width:e.width,height:e.height,x0:e.x0,y0:e.y0,isEmpty:e.isEmpty,active:t.activeUid==e.uid},on:{reqAction:t.handleReq,movAction:t.handleMov,judAction:t.handleJud}})}),1),t._v(" "),i("footer",{staticClass:"walkway__footer"},[i("div",{staticClass:"walkway__footer--operation"},[i("span",{staticClass:"count"},[t._v("第"+t._s(t.count)+"步")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.handleReset}},[t._v("重新开始")]),t._v(" "),i("el-select",{staticClass:"select",attrs:{placeholder:"请选择"},on:{change:t.handleChangeLayout},model:{value:t.datas,callback:function(e){t.datas=e},expression:"datas"}},t._l(t.options,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.handleTips}},[t._v("游戏说明")]),t._v(" "),i("autoplay")],1)]),t._v(" "),i("el-dialog",{attrs:{"custom-class":"dialog-about",title:"游戏说明",width:t.dialogWidth,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("about"),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{staticClass:"walkway--sound",attrs:{id:"moveSound"}},[e("source",{attrs:{src:"static/mp3/Se23.wav",id:"houseMoving",type:"audio/wav"}})])}]},b=[{path:"/",name:"klotski",component:i("VU/8")(x,w,!1,null,null,null).exports}];n.default.use(c.a);var _=[].concat(r()(b)),S=new c.a({mode:"hash",routes:_,scrollBehavior:function(t,e,i){return{x:0,y:0}}}),E=i("NYxO"),X=i("bOdI"),T=i.n(X),Y=i("//Fk"),A=i.n(Y),k=i("vUsP"),C=i.n(k),z={requestUser:function(t,e){var i=C.a.filePath("files","ajax","user.php");jsonRequestByPost(e,t,!1,i)}},$={state:{pageDemo1Value:0},getters:{getPageDemo1Value:function(t){return t.pageDemo1Value}},actions:{ACCOUNT_GET_ALL_TEACHER_OF_CLASS:function(t,e){var i=t.commit;return new A.a(function(t,n){var s={method:10,pageno:1,pagesize:20,key:e};z.requestUserAsync(function(e){var s=JSON.parse(e);if("error"==s.status)return n&&n(),void alert("获取教师列表失败！");i("pageDemo1/SET_VAL",s.data),t()},s)})}},mutations:T()({},"pageDemo1/SET_VAL",function(t,e){t.pageDemo1Value=e})};n.default.use(E.a);var H=new E.a.Store({modules:{pageDemo1:$},strict:!1}),P=(i("Z5gD"),i("tvR6"),i("zL8q")),R=i("TXmL");n.default.use(P.Button),n.default.use(P.Select),n.default.use(P.Option),n.default.use(P.OptionGroup),n.default.use(P.Dialog),n.default.prototype.$msgbox=P.MessageBox,n.default.prototype.$alert=P.MessageBox.alert,n.default.prototype.$confirm=P.MessageBox.confirm,n.default.prototype.$prompt=P.MessageBox.prompt,n.default.use(R.a);var U=new R.a({locale:"chn",messages:{en:{comp:{HelloWorld:{msg:"welcome to the vue template of CM web"}},page:{}},chn:{comp:{HelloWorld:{msg:"欢迎来到CM web的vue项模板"}},page:{}}}});n.default.config.productionTip=!1,new n.default({el:"#app",router:S,store:H,i18n:U,components:{App:o},template:"<App/>"})},RB20:function(t,e,i){t.exports=i.p+"static/img/zhangfei.6487b6c.svg"},UKcq:function(t,e,i){var n={"./caocao.svg":"odJ+","./guanyu.svg":"7HhG","./huangzhong.svg":"+kmB","./machao.svg":"a+T7","./xiaobing.svg":"idzP","./zhangfei.svg":"RB20","./zhaoyun.svg":"3rlS"};function s(t){return i(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="UKcq"},Z5gD:function(t,e){},"a+T7":function(t,e,i){t.exports=i.p+"static/img/machao.ed6161a.svg"},idzP:function(t,e,i){t.exports=i.p+"static/img/xiaobing.b4e179c.svg"},"odJ+":function(t,e,i){t.exports=i.p+"static/img/caocao.a2002b0.svg"},podM:function(t,e){},tvR6:function(t,e){},vUsP:function(e,i){var n={PERMISSION_CREATE:4,PERMISSION_READ:1,PERMISSION_UPDATE:2,PERMISSION_DELETE:8,PERMISSION_SHARE:16,PERMISSION_ALL:31,webroot:"/rj",oc_requesttoken:"",appswebroots:"undefined"!=typeof oc_appswebroots&&oc_appswebroots,currentUser:"undefined"!=typeof oc_current_user&&oc_current_user,coreApps:["","admin","log","search","settings","core","3rdparty"],linkTo:function(t,e){return n.filePath(t,"",e)},linkToRemoteBase:function(t){return n.webroot+"/remote.php/"+t},linkToRemote:function(t){return window.location.protocol+"//"+window.location.host+n.linkToRemoteBase(t)},filePath:function(t,e,i){var s=-1!==n.coreApps.indexOf(t),a=n.webroot;return"php"!==i.substring(i.length-3)&&"css"!==i.substring(i.length-3)||s?"php"===i.substring(i.length-3)||s?(a+="settings"!=t&&"core"!=t&&"search"!=t||"ajax"!=e?"/":"/index.php/",s||(a+="apps/"),""!==t&&(a+=t+="/"),e&&(a+=e+"/"),a+=i):(a=n.appswebroots[t],e&&(a+="/"+e+"/"),"/"!==a.substring(a.length-1)&&(a+="/"),a+=i):(a+="/index.php/apps/"+t,"index.php"!=i&&(a+="/",e&&(a+=encodeURI(e+"/")),a+=i)),a},imagePath:function(t,e){return-1==e.indexOf(".")&&(e+=SVGSupport()?".svg":".png"),n.filePath(t,"img",e)},addScript:function(t,e,i,s){var a,o=n.filePath(t,"js",e+".js");return n.addScript.loaded[o]?i&&i(s):(a=i?$.getScript(o,i,s):$.getScript(o),n.addScript.loaded[o]=a),n.addScript.loaded[o]},addStyle:function(t,e){var i=n.filePath(t,"css",e+".css");-1===n.addStyle.loaded.indexOf(i)&&(n.addStyle.loaded.push(i),document.createStyleSheet?document.createStyleSheet(i):(e=$('<link rel="stylesheet" type="text/css" href="'+i+'"/>'),$("head").append(e)))},basename:function(t){return t.replace(/\\/g,"/").replace(/.*\//,"")},dirname:function(t){return t.replace(/\\/g,"/").replace(/\/[^\/]*$/,"")},search:function(t){t&&(n.addStyle("search","results"),$.getJSON(n.filePath("search","ajax","search.php")+"?query="+encodeURIComponent(t),function(t){n.search.lastResults=t,n.search.showResults(t)}))},dialogs:null,mtime2date:function(t){t=parseInt(t,10);var e=new Date(1e3*t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()+", "+e.getHours()+":"+e.getMinutes()},parseQueryString:function(t){var e,i,n,s,a={};if(!t)return null;"?"===t[0]&&(t=t.substr(1)),e=t.split("&");for(var o=0;o<e.length;o++)(i=e[o].split("=")).length&&(n=decodeURIComponent(i[0]))&&(s=i[1],a[n]=s&&decodeURIComponent(s));return a},appSettings:function(e){if(void 0===e||void 0===e.appid)throw{name:"MissingParameter",message:"The parameter appid is missing"};var i={scriptName:"settings.php",cache:!0};$.extend(i,e);var s=$("#appsettings");if(0==s.length)throw{name:"MissingDOMElement",message:'There has be be an element with id "appsettings" for the popup to show.'};var a=$("#appsettings_popup");if(0==a.length&&($("body").prepend('<div class="popup hidden" id="appsettings_popup"></div>'),(a=$("#appsettings_popup")).addClass(s.hasClass("topright")?"topright":"bottomleft")),a.is(":visible"))a.hide().remove();else{var o=s.hasClass("topright")?"up":"left";$.get(n.filePath(i.appid,"",i.scriptName),function(e){a.html(e).ready(function(){if(a.prepend('<span class="arrow '+o+'"></span><h2>'+t("core","Settings")+'</h2><a class="close svg"></a>').show(),a.find(".close").bind("click",function(){a.remove()}),void 0!==i.loadJS){var e;if(!0===i.loadJS)e="settings.js";else{if("string"!=typeof i.loadJS)throw{name:"InvalidParameter",message:'The "loadJS" parameter must be either boolean or a string.'};e=i.loadJS}i.cache&&$.ajaxSetup({cache:!0}),$.getScript(n.filePath(i.appid,"js",e)).fail(function(t,e,i){throw i})}}).show()},"html")}},getFileExtension:function(t){var e=t.split(".");return e[e.length-1].toLowerCase()}};n.router_base_url=n.webroot+"/index.php",e.exports=n}},["NHnr"]);