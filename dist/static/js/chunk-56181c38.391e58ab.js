(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56181c38"],{"0219":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.user?a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,xs:24}},[a("user-card",{attrs:{user:e.user}})],1),e._v(" "),a("el-col",{attrs:{span:18,xs:24}},[a("el-card",[a("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"个人图片",name:"activity"}},[a("activity",{attrs:{user:e.user}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"动态",name:"timeline"}},[a("timeline",{attrs:{user:e.user}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"认证视频",name:"account"}},[a("account",{attrs:{user:e.user}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"五维图",name:"five"}},[a("five",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},s=[],n=a("52c1"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("个人资料")])]),e._v(" "),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",[e._v(e._s(e.user.nick_name))]),e._v(" "),a("svg-icon",{attrs:{"icon-class":e.user.gender}})],1)],1),e._v(" "),a("div",{staticClass:"box-center"},[a("div",{staticClass:"user-name text-center"},[e._v("颜值："+e._s(e.user.face))]),e._v(" "),a("div",{staticClass:"user-role text-muted"},[e._v(e._s(e.user.birthday)+"|"+e._s(e.user.constellation))]),e._v(" "),a("div",{staticClass:"user-role text-muted"})])]),e._v(" "),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"profile"}}),a("span",[e._v("个人详情")])],1),e._v(" "),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[a("p",[e._v("uid: "+e._s(e.user.ID)+" 邀请人： "+e._s(e.user.be_guided))]),e._v(" "),a("p",[e._v("微信号: "+e._s(e.user.wechat))]),e._v(" "),a("p",[e._v("签名: "+e._s(e.user.signature))]),e._v(" "),a("p",[e._v("认证状态: "+e._s(e._f("statusFilter")(e.user.progress)))])])])])])])},l=[],u=a("3cbc"),c={components:{PanThumb:u["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",roles:""}}}},filters:{statusFilter:function(e){var t={audit:"待审核",finish:"完成",certify:"待认证"};return t[e]}}},o=c,d=(a("94a2"),a("e90a")),m=Object(d["a"])(o,i,l,!1,null,"4fa24352",null),v=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-activity"},[a("div",{staticClass:"post"},[a("div",{staticClass:"user-block"},[a("img",{staticClass:"img-circle",attrs:{src:e.user.avatar}}),e._v(" "),a("span",{staticClass:"username"},[e._v(e._s(e.user.nick_name))])]),e._v(" "),a("div",{staticClass:"user-images"},[a("el-carousel",{attrs:{interval:6e3,type:"card",height:"200px"}},e._l(e.user.images,(function(e){return a("el-carousel-item",[a("img",{staticClass:"image",attrs:{src:e.image}})])})),1)],1)])])},p=[],b={props:{user:{type:Object,default:function(){return{nick_name:"",images:[],avatar:""}}}}},h=b,_=(a("b422"),Object(d["a"])(h,f,p,!1,null,"398a23ca",null)),g=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},[a("el-timeline",e._l(e.user.moments,(function(t,r){return a("el-timeline-item",{key:r,attrs:{timestamp:e._f("moment")(t.create_time),placement:"top"}},[a("el-card",[a("h4",[e._v(e._s(t.content))]),e._v(" "),e._l(t.images,(function(e){return a("div",[a("img",{attrs:{src:e.thumbnail_url}})])}))],2)],1)})),1)],1)},O=[],x={props:{user:{type:Object,default:function(){return{nick_name:"",images:[],avatar:""}}}}},j=x,w=Object(d["a"])(j,y,O,!1,null,null,null),C=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user.playerOptions?a("div",[a("div",{staticClass:"text-center",attrs:{span:13,xs:24}},[e._v("code："+e._s(e.user.video_code))]),e._v(" "),a("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.user.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"}})],1):a("div",[a("p",[e._v("用户未上传视频")]),e._v(" "),a("p",[e._v("邀请人："+e._s(e.user.be_guided))])])},$=[],P=(a("cf82"),a("e248")),S={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},components:{videoPlayer:P["videoPlayer"]},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},E=S,T=Object(d["a"])(E,k,$,!1,null,null,null),I=T.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"male"===e.user.gender?"帅气":"美丽"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"数值"},model:{value:e.user.five.cool,callback:function(t){e.$set(e.user.five,"cool",t)},expression:"user.five.cool"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"性感"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"数值"},model:{value:e.user.five.sexy,callback:function(t){e.$set(e.user.five,"sexy",t)},expression:"user.five.sexy"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"male"===e.user.gender?"阳光":"可爱"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"数值"},model:{value:e.user.five.character,callback:function(t){e.$set(e.user.five,"character",t)},expression:"user.five.character"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"智慧"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"数值"},model:{value:e.user.five.wisdom,callback:function(t){e.$set(e.user.five,"wisdom",t)},expression:"user.five.wisdom"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"male"===e.user.gender?"多金":"高贵"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"数值"},model:{value:e.user.five.wealth,callback:function(t){e.$set(e.user.five,"wealth",t)},expression:"user.five.wealth"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)},D=[],z=a("2423"),F={props:{user:{type:Object,default:function(){return{_id:"",email:"",five:{cool:0,sexy:0,character:0,wisdom:0,wealth:0}}}}},data:function(){return{options:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5}],listLoading:!1,formInline:{cool:0,sexy:0,character:0,wisdom:0,wealth:0}}},methods:{onSubmit:function(){var e=this;this.listLoading=!0,Object(z["l"])(this.user.user_id,this.user.five).then((function(t){setTimeout((function(){e.$message({message:"操作成功",type:"success"}),e.listLoading=!1}),500),e.$router.push("/users/".concat(e.user.user_id))}))}}},N=F,U=Object(d["a"])(N,L,D,!1,null,null,null),A=U.exports;function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){R(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function R(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var B={name:"Profile",components:{UserCard:v,Activity:g,Timeline:C,Account:I,Five:A},data:function(){return{user:{},playerOptions:{},activeTab:"activity"}},computed:q({},Object(n["b"])(["nick_name","avatar","images"])),created:function(){this.$route.params||this.$message({message:"参数错误",type:"error"}),this.user_id=this.$route.params.id,this.get_details()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}},get_details:function(){var e=this;Object(z["m"])(this.user_id).then((function(t){e.user=t.data,e.user.video_path&&(e.user.playerOptions={muted:!0,height:"360",width:"500",language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:e.user.video_path}]}),e.user.user_id=e.user_id,setTimeout((function(){e.listLoading=!1}),500)}))}}},G=B,H=Object(d["a"])(G,r,s,!1,null,null,null);t["default"]=H.exports},"0cfe":function(e,t,a){},2378:function(e,t,a){},2423:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"l",(function(){return u})),a.d(t,"m",(function(){return c})),a.d(t,"j",(function(){return o})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return v})),a.d(t,"g",(function(){return f})),a.d(t,"i",(function(){return p})),a.d(t,"k",(function(){return b}));var r=a("b775");function s(e){return Object(r["a"])({url:"/management/users",method:"get",params:e})}function n(){return Object(r["a"])({url:"/management/dashboard_char",method:"get"})}function i(){return Object(r["a"])({url:"/management/get_statistical",method:"get"})}function l(e){return Object(r["a"])({url:"/management/users",method:"delete",params:{user_id:e}})}function u(e,t){return Object(r["a"])({url:"/management/users/"+e,method:"post",data:t})}function c(e){return Object(r["a"])({url:"/management/users/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/management/discover",method:"get",params:e})}function d(e){return Object(r["a"])({url:"/management/discover",method:"delete",data:{id:e}})}function m(e){return Object(r["a"])({url:"/management/comments",method:"get",params:e})}function v(e){return Object(r["a"])({url:"/management/comments",method:"delete",data:{id:e}})}function f(e){return Object(r["a"])({url:"/management/reports",method:"get",params:e})}function p(e,t){return Object(r["a"])({url:"/management/reports",method:"post",data:{id:e,result:t}})}function b(e,t){return Object(r["a"])({url:"/management/rating",method:"post",data:{user_id:t,level:e}})}},"3cbc":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),e._v(" "),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},s=[],n={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},i=n,l=(a("f86f"),a("e90a")),u=Object(l["a"])(i,r,s,!1,null,"72e02616",null);t["a"]=u.exports},"94a2":function(e,t,a){"use strict";var r=a("2378"),s=a.n(r);s.a},b422:function(e,t,a){"use strict";var r=a("cf82b"),s=a.n(r);s.a},cf82b:function(e,t,a){},f86f:function(e,t,a){"use strict";var r=a("0cfe"),s=a.n(r);s.a}}]);