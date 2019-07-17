(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{207:function(e,t,o){"use strict";o.r(t);var i=o(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"touch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#touch","aria-hidden":"true"}},[e._v("#")]),e._v(" Touch")]),e._v(" "),o("p",[e._v("Touch command detects touch events in Start tab and outputs following values:")]),e._v(" "),o("ul",[o("li",[e._v("Position")]),e._v(" "),o("li",[e._v("Radius")]),e._v(" "),o("li",[e._v("Force")])]),e._v(" "),o("p",[e._v("Touch command supports multi-touch up to 4 fingers."),o("br"),e._v("\nThe data for each finger is accessible with the index from 0 to 3."),o("br"),e._v("\nIn this document we call this index "),o("code",[e._v("FINGER_ID")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),o("h3",{attrs:{id:"position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[e._v("#")]),e._v(" Position")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("x position: "),o("code",[e._v("/(deviceUUID)/touch(FINGER_ID)1")]),e._v(",")]),e._v(" "),o("li",[e._v("y position: "),o("code",[e._v("/(deviceUUID)/touch(FINGER_ID)2")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("x position: "),o("code",[e._v("touches[(FINGER_ID)].x")])]),e._v(" "),o("li",[e._v("y position: "),o("code",[e._v("touches[(FINGER_ID)].y")])])])])]),e._v(" "),o("p",[o("code",[e._v("Position")]),e._v(" is the relative position of touches from the center of the screen."),o("br"),e._v("\nThe range of values is [-1, -1] to [1, 1].")]),e._v(" "),o("h3",{attrs:{id:"radius"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#radius","aria-hidden":"true"}},[e._v("#")]),e._v(" Radius")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address: "),o("code",[e._v("/(deviceUUID)/touchradius(FINGER_ID)")])]),e._v(" "),o("li",[e._v("JSON key: "),o("code",[e._v("touches[(FINGER_ID)].radius")])])]),e._v(" "),o("p",[o("code",[e._v("Radius")]),e._v(" is the radius of touch event in pixel size.")]),e._v(" "),o("h3",{attrs:{id:"force"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#force","aria-hidden":"true"}},[e._v("#")]),e._v(" Force")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address: "),o("code",[e._v("/(deviceUUID)/touchforce(FINGER_ID)")])]),e._v(" "),o("li",[e._v("JSON key: "),o("code",[e._v("touches[(FINGER_ID)].force")])])]),e._v(" "),o("p",[o("code",[e._v("Force")]),e._v(" is the force of 3D Touch.")])])},[],!1,null,null,null);t.default=s.exports}}]);