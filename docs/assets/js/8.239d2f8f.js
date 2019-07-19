(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"apple-pencil"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#apple-pencil","aria-hidden":"true"}},[e._v("#")]),e._v(" Apple Pencil")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://img.shields.io/badge/Premium%20Feature-yellow.svg",alt:"Premium Feature"}}),e._v(" "),i("img",{attrs:{src:"https://img.shields.io/badge/iOS-supported-brightgreen.svg",alt:"iOS supported"}}),e._v(" "),i("img",{attrs:{src:"https://img.shields.io/badge/Android-not%20supported-red.svg",alt:"Android not supported"}})]),e._v(" "),i("p",[e._v("Apple Pencil command detects touch events in Start tab (same as Touch command)."),i("br"),e._v("\nNote that it only works on Apple Pencil compatible devices, that are some of iPad models.")]),e._v(" "),i("p",[e._v("This command works based on Touch command, and it supports multi-touch."),i("br"),e._v("\nThe data for each finger (including Apple Pencil) is accessible with the index."),i("br"),e._v("\nIn this document we call this index "),i("code",[e._v("TOUCH_ID")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"outputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),i("h3",{attrs:{id:"touch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#touch","aria-hidden":"true"}},[e._v("#")]),e._v(" Touch")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("x position: "),i("code",[e._v("/(deviceUUID)/penciltouch(TOUCH_ID)1")]),e._v(",")]),e._v(" "),i("li",[e._v("y position: "),i("code",[e._v("/(deviceUUID)/penciltouch(TOUCH_ID)2")])])])]),e._v(" "),i("li",[e._v("JSON key\n"),i("ul",[i("li",[e._v("x position: "),i("code",[e._v("pencil[(TOUCH_ID)].x")])]),e._v(" "),i("li",[e._v("y position: "),i("code",[e._v("pencil[(TOUCH_ID)].y")])])])])]),e._v(" "),i("p",[e._v("The relative position of touches from the center of the screen."),i("br"),e._v("\nThe range of values is [-1, -1] to [1, 1].")]),e._v(" "),i("h3",{attrs:{id:"altitude"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude","aria-hidden":"true"}},[e._v("#")]),e._v(" Altitude")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/pencilaltitude(TOUCH_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("pencil[(TOUCH_ID)].altitude")])])]),e._v(" "),i("p",[e._v("The altitude (in radians) of the stylus. A value of 0 indicates that the stylus is parallel to the surface. The value is Pi/2 when the stylus is perpendicular to the surface.")]),e._v(" "),i("h3",{attrs:{id:"azimuth"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#azimuth","aria-hidden":"true"}},[e._v("#")]),e._v(" Azimuth")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/pencilazimuth(TOUCH_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("pencil[(TOUCH_ID)].azimuth")])])]),e._v(" "),i("p",[e._v("The azimuth angle (in radians) of the stylus. In the plane of the screen, the azimuth angle is the direction in which the stylus is pointing. It increases as the user swings the cap end of the stylus in a clockwise direction around the tip.")]),e._v(" "),i("h3",{attrs:{id:"force"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#force","aria-hidden":"true"}},[e._v("#")]),e._v(" Force")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/pencilforce(TOUCH_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("pencil[(TOUCH_ID)].force")])])]),e._v(" "),i("p",[e._v("The force of 3D Touch, where a value of 1.0 represents the force of an average touch.")])])},[],!1,null,null,null);t.default=s.exports}}]);