(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,n,e){var content=e(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(80).default)("6852c67c",content,!0,{sourceMap:!1})},234:function(t,n,e){"use strict";e(229)},235:function(t,n,e){var r=e(79)(!1);r.push([t.i,".test-box[data-v-481d1ddc]{width:800px}",""]),t.exports=r},242:function(t,n,e){"use strict";e.r(n);var r=e(6),o=(e(48),{data:function(){return{count:0}},methods:{addCount:function(){this.count++}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("https://jsonplaceholder.typicode.com/comments");case 2:return e=n.sent,n.abrupt("return",{coments:e.data});case 4:case"end":return n.stop()}}),n)})))()}}),c=(e(234),e(37)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"test-box"},[e("button",{on:{click:t.addCount}},[t._v(t._s(t.count))]),t._v(" "),e("table",[[t._m(0)],t._v(" "),t._l(t.coments,(function(tr,i){return e("tr",{key:i,attrs:{data:tr}},[e("td",[t._v("\n          "+t._s(tr.postId)+"\n        ")]),t._v(" "),e("td",[t._v("\n          "+t._s(tr.id)+"\n        ")]),t._v(" "),e("td",[t._v("\n          "+t._s(tr.name)+"\n        ")]),t._v(" "),e("td",[t._v("\n          "+t._s(tr.email)+"\n        ")]),t._v(" "),e("td",[t._v("\n          "+t._s(tr.body)+"\n        ")])])}))],2)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",[t._v("\n          postId\n        ")]),t._v(" "),e("th",[t._v("\n          id\n        ")]),t._v(" "),e("th",[t._v("\n          name\n        ")]),t._v(" "),e("th",[t._v("\n          email\n        ")]),t._v(" "),e("th",[t._v("\n          body\n        ")])])}],!1,null,"481d1ddc",null);n.default=component.exports}}]);