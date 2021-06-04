(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{207:function(e,t,i){"use strict";i.r(t);var s=i(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"touch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#touch","aria-hidden":"true"}},[e._v("#")]),e._v(" Touch")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://img.shields.io/badge/iOS-supported-brightgreen.svg",alt:"iOS supported"}}),e._v(" "),i("img",{attrs:{src:"https://img.shields.io/badge/Android-supported-brightgreen.svg",alt:"Android supported"}})]),e._v(" "),i("p",[e._v("Touch command detects touch events in Start tab and outputs following values:")]),e._v(" "),i("ul",[i("li",[e._v("Position")]),e._v(" "),i("li",[e._v("Radius")]),e._v(" "),i("li",[e._v("Force")])]),e._v(" "),i("p",[e._v("Touch command supports multi-touch."),i("br"),e._v("\nThe data for each finger (including Apple Pencil) is accessible with the index."),i("br"),e._v("\nIn this document we call this index "),i("code",[e._v("TOUCH_ID")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"outputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),i("h3",{attrs:{id:"position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[e._v("#")]),e._v(" Position")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("x position: "),i("code",[e._v("/(deviceUUID)/touch(TOUCH_ID)1")]),e._v(",")]),e._v(" "),i("li",[e._v("y position: "),i("code",[e._v("/(deviceUUID)/touch(TOUCH_ID)2")])])])]),e._v(" "),i("li",[e._v("JSON key\n"),i("ul",[i("li",[e._v("x position: "),i("code",[e._v("touches[(TOUCH_ID)].x")])]),e._v(" "),i("li",[e._v("y position: "),i("code",[e._v("touches[(TOUCH_ID)].y")])])])])]),e._v(" "),i("p",[i("code",[e._v("Position")]),e._v(" is the relative position of touches from the center of the screen."),i("br"),e._v("\nThe range of values is [-1, -1] to [1, 1].")]),e._v(" "),i("h3",{attrs:{id:"radius"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#radius","aria-hidden":"true"}},[e._v("#")]),e._v(" Radius")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/touchradius(TOUCH_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("touches[(TOUCH_ID)].radius")])])]),e._v(" "),i("p",[i("code",[e._v("Radius")]),e._v(" is the radius of touch event in pixel size.")]),e._v(" "),i("h3",{attrs:{id:"force"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#force","aria-hidden":"true"}},[e._v("#")]),e._v(" Force")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/touchforce(TOUCH_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("touches[(TOUCH_ID)].force")])])]),e._v(" "),i("p",[i("code",[e._v("Force")]),e._v(" is the force of 3D Touch, where a value of 1.0 represents the force of an average touch.")])])},[],!1,null,null,null);t.default=o.exports}}]);