(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(t,e,i){"use strict";i.r(e);var o=i(0),a=Object(o.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"arkit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#arkit","aria-hidden":"true"}},[t._v("#")]),t._v(" ARKit")]),t._v(" "),i("p",[t._v("ARKit command tracks the position and the rotation for various objects.")]),t._v(" "),i("p",[t._v("This command has 3 mode: "),i("strong",[t._v("DEVICE")]),t._v(", "),i("strong",[t._v("FACE")]),t._v(" and "),i("strong",[t._v("MARKER")]),t._v(".\nThese modes correspond to diffrent features of ARKit.")]),t._v(" "),i("p",[t._v("In "),i("code",[t._v("DEVICE")]),t._v(" mode, ZIG SIM will track the 6DoF position of the device.")]),t._v(" "),i("p",[t._v("In "),i("code",[t._v("FACE")]),t._v(" mode, ZIG SIM does face tracking.")]),t._v(" "),i("p",[t._v("In "),i("code",[t._v("MARKER")]),t._v(" mode, ZIG SIM tracks pre-defined markers.\nThe markers can be obtained here:")]),t._v(" "),i("p",[t._v("(TBD)")]),t._v(" "),i("h2",{attrs:{id:"outputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),i("h3",{attrs:{id:"device-position-and-rotation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-position-and-rotation","aria-hidden":"true"}},[t._v("#")]),t._v(" Device Position and Rotation")]),t._v(" "),i("ul",[i("li",[t._v("OSC Address\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("/(deviceUUID)/arkitposition")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("/(deviceUUID)/arkitrotation")])])])]),t._v(" "),i("li",[t._v("JSON key\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("arkit.position")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("arkit.rotation")])])])])]),t._v(" "),i("p",[t._v("This data is only avalable in "),i("code",[t._v("DEVICE")]),t._v(" mode and "),i("code",[t._v("MARKER")]),t._v(" mode.")]),t._v(" "),i("p",[t._v("In "),i("code",[t._v("MARKER")]),t._v(" mode the device position is always (0.0, 0.0, 0.0).\nThis means the marker position is relative position from the device.")]),t._v(" "),i("h3",{attrs:{id:"feature-points"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feature-points","aria-hidden":"true"}},[t._v("#")]),t._v(" Feature Points")]),t._v(" "),i("ul",[i("li",[t._v("OSC Address: "),i("code",[t._v("/(deviceUUID)/featurepoints")])]),t._v(" "),i("li",[t._v("JSON key: "),i("code",[t._v("arkit.featurePoints")])])]),t._v(" "),i("p",[t._v("This data is only available in "),i("code",[t._v("DEVICE")]),t._v(" mode.")]),t._v(" "),i("h3",{attrs:{id:"marker-position-and-rotation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#marker-position-and-rotation","aria-hidden":"true"}},[t._v("#")]),t._v(" Marker Position and Rotation")]),t._v(" "),i("ul",[i("li",[t._v("OSC Address\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("/(deviceUUID)/imageposition(MARKER_ID)")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("/(deviceUUID)/imagerotation(MARKER_ID)")])])])]),t._v(" "),i("li",[t._v("JSON key\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("arkit.images[(MARKER_ID)].position")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("arkit.images[(MARKER_ID)].rotation")])])])])]),t._v(" "),i("h3",{attrs:{id:"feature-points-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feature-points-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Feature Points")]),t._v(" "),i("ul",[i("li",[t._v("OSC Address: "),i("code",[t._v("/(deviceUUID)/arkitrotation")])]),t._v(" "),i("li",[t._v("JSON key: "),i("code",[t._v("arkit.rotation")])])]),t._v(" "),i("h3",{attrs:{id:"marker-position-and-rotation-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#marker-position-and-rotation-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Marker Position and Rotation")]),t._v(" "),i("ul",[i("li",[t._v("OSC Address\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("/(deviceUUID)/imageposition(MARKER_ID)")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("/(deviceUUID)/imagerotation(MARKER_ID)")])])])]),t._v(" "),i("li",[t._v("JSON key\n"),i("ul",[i("li",[t._v("Position: "),i("code",[t._v("arkit.images[(MARKER_ID)].position")])]),t._v(" "),i("li",[t._v("Rotation: "),i("code",[t._v("arkit.images[(MARKER_ID)].rotation")])])])])]),t._v(" "),i("p",[t._v("This data is only avalable in "),i("code",[t._v("DEVICE")]),t._v(" mode and "),i("code",[t._v("MARKER")]),t._v(" mode.")]),t._v(" "),i("h2",{attrs:{id:"detail-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detail-settings","aria-hidden":"true"}},[t._v("#")]),t._v(" Detail Settings")]),t._v(" "),i("h3",{attrs:{id:"tracking-type"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tracking-type","aria-hidden":"true"}},[t._v("#")]),t._v(" Tracking Type")]),t._v(" "),i("p",[t._v("Users can choose objects to detect.")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("DEVICE")]),t._v(": device position, device rotation, feature points' positions.")]),t._v(" "),i("li",[i("code",[t._v("FACE")]),t._v(": device rotation, face position, face rotation, eye position.")]),t._v(" "),i("li",[i("code",[t._v("MARKER")]),t._v(": device rotation, marker position, marker rotation.")])]),t._v(" "),i("h3",{attrs:{id:"feature-points-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feature-points-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Feature Points")]),t._v(" "),i("p",[t._v("Toggle feature points tracking in device tracking mode.\nIf "),i("code",[t._v("On")]),t._v(", ZIG SIM outputs the positions of the feature points over the network.")])])},[],!1,null,null,null);e.default=a.exports}}]);