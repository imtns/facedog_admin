(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9653934a"],{"137c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"link--mallki",class:e.className,attrs:{href:"#"}},[e._v("\n  "+e._s(e.text)+"\n  "),n("span",{attrs:{"data-letters":e.text}}),e._v(" "),n("span",{attrs:{"data-letters":e.text}})])},i=[],o={props:{className:{type:String,default:""},text:{type:String,default:"vue-element-admin"}}},r=o,l=(n("8c05"),n("e90a")),s=Object(l["a"])(r,a,i,!1,null,null,null);t["a"]=s.exports},"1a97":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"举报原因内容",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("span")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"举报人",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{staticClass:"link-type",attrs:{to:"/users/"+t.row.report_user_id}},[n("span",[e._v(e._s(t.row.nickname))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"举报内容",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{staticClass:"link-type",attrs:{to:"/moments/details/"+t.row.moment_id}},[n("span",[e._v(e._s(t.row.content))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"举报时间",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.create_time))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.reply_user_id?n("router-link",{staticClass:"link-type",attrs:{to:"/users/"+t.row.reply_user_id}},[n("span",[e._v(e._s(t.row.reply_user_nickname))])]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作/处理结果",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[1===a.status?n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.showDialog(a)}}},[e._v("\n          处理\n        ")]):n("span",[n("span",[e._v(e._s(a.result))])])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{visible:e.dialogTableVisible,title:e.dialogTitle},on:{"update:visible":function(t){e.dialogTableVisible=t},dragDialog:e.handleDrag}},[n("el-form",[e.status?e._e():n("el-form-item",{attrs:{label:"处理意见"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:""},model:{value:e.opinion,callback:function(t){e.opinion=t},expression:"opinion"}}),e._v(" "),n("el-row",{staticClass:"row-bg",staticStyle:{"padding-top":"20px"},attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.handelReports}},[e._v("提交")])],1)],1)],1)],1)],1)],1)},i=[],o=n("2423"),r=n("6724"),l=(n("ed08"),n("137c"),n("333d")),s=n("a8889"),u={name:"Comments",components:{Pagination:l["a"]},directives:{waves:r["a"],elDragDialog:s["a"]},filters:{},data:function(){return{dialogTableVisible:!1,dialogTitle:"",page:1,tableKey:0,list:null,opinion:null,status:!0,select_id:"",listLoading:!0,total:0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(o["g"])(this.listQuery).then((function(t){e.list=t.data.reports,e.total=t.data.count,setTimeout((function(){e.listLoading=!1}),500)}))},showDialog:function(e){this.select_id=e._id,this.status=null===e.result,this.opinion=e.result,this.dialogTableVisible=!0},handelReports:function(){var e=this;this.listLoading=!0,Object(o["i"])(this.select_id,this.opinion).then((function(t){setTimeout((function(){e.$message({message:"操作成功",type:"success"})}),500),e.dialogTableVisible=!1,e.getList()})),this.listLoading=!1},handleDrag:function(){}}},c=u,d=n("e90a"),p=Object(d["a"])(c,a,i,!1,null,null,null);t["default"]=p.exports},"1cc6":function(e,t,n){"use strict";var a=n("5f00"),i=n.n(a);i.a},2423:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"j",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"k",(function(){return h}));var a=n("b775");function i(e){return Object(a["a"])({url:"/management/users",method:"get",params:e})}function o(){return Object(a["a"])({url:"/management/dashboard_char",method:"get"})}function r(){return Object(a["a"])({url:"/management/get_statistical",method:"get"})}function l(e){return Object(a["a"])({url:"/management/users",method:"delete",params:{user_id:e}})}function s(e,t){return Object(a["a"])({url:"/management/users/"+e,method:"post",data:t})}function u(e){return Object(a["a"])({url:"/management/users/"+e,method:"get"})}function c(e){return Object(a["a"])({url:"/management/discover",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/management/discover",method:"delete",data:{id:e}})}function p(e){return Object(a["a"])({url:"/management/comments",method:"get",params:e})}function m(e){return Object(a["a"])({url:"/management/comments",method:"delete",data:{id:e}})}function f(e){return Object(a["a"])({url:"/management/reports",method:"get",params:e})}function g(e,t){return Object(a["a"])({url:"/management/reports",method:"post",data:{id:e,result:t}})}function h(e,t){return Object(a["a"])({url:"/management/rating",method:"post",data:{user_id:t,level:e}})}},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var a=l(),i=e-a,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,a,i,t);r(l),u<t?o(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(n("1cc6"),n("e90a")),p=Object(d["a"])(c,a,i,!1,null,"f3b72548",null);t["a"]=p.exports},"5f00":function(e,t,n){},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8c05":function(e,t,n){"use strict";var a=n("fc43"),i=n.n(a);i.a},"8d41":function(e,t,n){},a8889:function(e,t,n){"use strict";var a={bind:function(e,t,n){var a=e.querySelector(".el-dialog__header"),i=e.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",i.style.cssText+=";top:0px;";var o=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();a.onmousedown=function(e){var t=e.clientX-a.offsetLeft,r=e.clientY-a.offsetTop,l=i.offsetWidth,s=i.offsetHeight,u=document.body.clientWidth,c=document.body.clientHeight,d=i.offsetLeft,p=u-i.offsetLeft-l,m=i.offsetTop,f=c-i.offsetTop-s,g=o(i,"left"),h=o(i,"top");g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(g=+g.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(e){var a=e.clientX-t,o=e.clientY-r;-a>d?a=-d:a>p&&(a=p),-o>m?o=-m:o>f&&(o=f),i.style.cssText+=";left:".concat(a+g,"px;top:").concat(o+h,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},i=function(e){e.directive("el-drag-dialog",a)};window.Vue&&(window["el-drag-dialog"]=a,Vue.use(i)),a.install=i;t["a"]=a},fc43:function(e,t,n){}}]);