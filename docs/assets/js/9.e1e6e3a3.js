(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,o){"use strict";o.r(t);var i=o(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"arkit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arkit","aria-hidden":"true"}},[e._v("#")]),e._v(" ARKit")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://img.shields.io/badge/Pro-yellow.svg",alt:"Pro"}}),e._v(" "),o("img",{attrs:{src:"https://img.shields.io/badge/iOS-supported-brightgreen.svg",alt:"iOS supported"}}),e._v(" "),o("img",{attrs:{src:"https://img.shields.io/badge/Android-not%20supported-red.svg",alt:"Android not supported"}})]),e._v(" "),o("p",[e._v("ARKit command tracks the position and the rotation for various objects.")]),e._v(" "),o("p",[e._v("This command has 4 mode: "),o("strong",[e._v("DEVICE")]),e._v(", "),o("strong",[e._v("FACE")]),e._v(" ,"),o("strong",[e._v("MARKER")]),e._v(" and "),o("strong",[e._v("BODY")]),e._v("."),o("br"),e._v("\nThese modes correspond to diffrent features of ARKit.")]),e._v(" "),o("p",[e._v("In "),o("strong",[e._v("DEVICE")]),e._v(" mode, ZIG SIM will track the 6DoF position of the device.")]),e._v(" "),o("p",[e._v("In "),o("strong",[e._v("FACE")]),e._v(" mode, ZIG SIM does face tracking.")]),e._v(" "),o("p",[e._v("In "),o("strong",[e._v("MARKER")]),e._v(" mode, ZIG SIM tracks pre-defined markers."),o("br"),e._v("\nThe markers can be obtained here: "),o("em",[o("a",{attrs:{href:"../zigsim-markers.zip"}},[e._v("zigsim-markers.zip")])])]),e._v(" "),o("p",[e._v("In "),o("strong",[e._v("BODY")]),e._v(" mode, ZIG SIM tracks human body position and the 6DoF position of the device.")]),e._v(" "),o("p",[e._v("ARKit command is only available in ZIG SIM Pro."),o("br"),e._v("\nAlso, you cannot use NDI, ARKit and Image Detection simultaneously.")]),e._v(" "),o("h2",{attrs:{id:"outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),o("h3",{attrs:{id:"device-position-and-rotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#device-position-and-rotation","aria-hidden":"true"}},[e._v("#")]),e._v(" Device Position and Rotation")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("/(deviceUUID)/arkitposition")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("/(deviceUUID)/arkitrotation")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("arkit.position")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("arkit.rotation")])])])])]),e._v(" "),o("p",[e._v("This data is only available in "),o("strong",[e._v("DEVICE")]),e._v(" mode, "),o("strong",[e._v("MARKER")]),e._v(" mode and "),o("strong",[e._v("BODY")]),e._v(" mode.")]),e._v(" "),o("p",[e._v("In "),o("code",[e._v("MARKER")]),e._v(" mode the device position is always (0.0, 0.0, 0.0)."),o("br"),e._v("\nThis means the marker position is relative position from the device.")]),e._v(" "),o("h3",{attrs:{id:"feature-points"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#feature-points","aria-hidden":"true"}},[e._v("#")]),e._v(" Feature Points")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address: "),o("code",[e._v("/(deviceUUID)/featurepoints")])]),e._v(" "),o("li",[e._v("JSON key: "),o("code",[e._v("arkit.featurePoints")])])]),e._v(" "),o("p",[e._v("This data is only available in "),o("strong",[e._v("DEVICE")]),e._v(" mode and "),o("strong",[e._v("BODY")]),e._v(" mode.")]),e._v(" "),o("h3",{attrs:{id:"face-position-and-rotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#face-position-and-rotation","aria-hidden":"true"}},[e._v("#")]),e._v(" Face Position and Rotation")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("/(deviceUUID)/faceposition")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("/(deviceUUID)/facerotation")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("faceTracking.position")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("faceTracking.rotation")])])])])]),e._v(" "),o("p",[e._v("For "),o("code",[e._v("Face Position and Rotation")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/arfaceanchor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, ARFaceAnchor"),o("OutboundLink")],1)]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"look-at-position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#look-at-position","aria-hidden":"true"}},[e._v("#")]),e._v(" Look At Position")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address: "),o("code",[e._v("/(deviceUUID)/(facelookatposition)")])]),e._v(" "),o("li",[e._v("JSON key: "),o("code",[e._v("faceTracking.(lookAtPosition)")])])]),e._v(" "),o("p",[e._v("For "),o("code",[e._v("lookAtPosition")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/arfaceanchor/2968192-lookatpoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, lookAtPoint"),o("OutboundLink")],1)]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"left-and-right-eye-position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#left-and-right-eye-position","aria-hidden":"true"}},[e._v("#")]),e._v(" Left And Right Eye Position")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("Left Position: "),o("code",[e._v("/(deviceUUID)/facelefteyeposition")])]),e._v(" "),o("li",[e._v("Right Position: "),o("code",[e._v("/(deviceUUID)/facerighteyeposition")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("Left Position: "),o("code",[e._v("faceTracking.leftEyePosition")])]),e._v(" "),o("li",[e._v("Right Position: "),o("code",[e._v("faceTracking.rightEyePosition")])])])])]),e._v(" "),o("p",[e._v("For "),o("code",[e._v("leftEyePosition")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/arfaceanchor/2968193-righteyetransform",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, leftEyeTransform"),o("OutboundLink")],1)]),e._v("."),o("br"),e._v("\nFor "),o("code",[e._v("rightEyePosition")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/arfaceanchor/2968191-lefteyetransform",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, rightEyeTransform"),o("OutboundLink")],1)]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"specific-facial-features-position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specific-facial-features-position","aria-hidden":"true"}},[e._v("#")]),e._v(" Specific Facial Features Position")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address: "),o("code",[e._v("/(deviceUUID)/face(FEATURES_NAME)")])]),e._v(" "),o("li",[e._v("JSON key: "),o("code",[e._v("faceTracking.(FEATURES_NAME)")])])]),e._v(" "),o("p",[e._v("For "),o("code",[e._v("FEATURES_NAME")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, ARFaceAnchor.BlendShapeLocation"),o("OutboundLink")],1)]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"marker-position-and-rotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#marker-position-and-rotation","aria-hidden":"true"}},[e._v("#")]),e._v(" Marker Position and Rotation")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("/(deviceUUID)/imageposition(MARKER_ID)")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("/(deviceUUID)/imagerotation(MARKER_ID)")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("imageTracking.images[(MARKER_ID)].position")])]),e._v(" "),o("li",[e._v("Rotation: "),o("code",[e._v("imageTracking.images[(MARKER_ID)].rotation")])])])])]),e._v(" "),o("h3",{attrs:{id:"body-joint-position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#body-joint-position","aria-hidden":"true"}},[e._v("#")]),e._v(" Body Joint' Position")]),e._v(" "),o("ul",[o("li",[e._v("OSC Address\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("/(deviceUUID)/body_(JOINT_NAME)")])])])]),e._v(" "),o("li",[e._v("JSON key\n"),o("ul",[o("li",[e._v("Position: "),o("code",[e._v("bodyTracking.(JOINT_NAME)")])])])])]),e._v(" "),o("p",[e._v("This position data is in the world coordinate system.(same as device position)")]),e._v(" "),o("p",[e._v("For "),o("code",[e._v("JOINT_NAME")]),e._v(" and the details, see "),o("em",[o("a",{attrs:{href:"https://developer.apple.com/documentation/arkit/content_anchors/validating_a_model_for_motion_capture",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Documentation, Validating a Model for Motion Capture"),o("OutboundLink")],1)]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"detail-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detail-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Detail Settings")]),e._v(" "),o("h3",{attrs:{id:"tracking-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tracking-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Tracking Type")]),e._v(" "),o("p",[e._v("Users can choose objects to detect.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("DEVICE")]),e._v(": device position, device rotation, feature points' positions.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("FACE")]),e._v(": face position, face rotation, eye position, look at position, left and right rye position, specific facial features position.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("MARKER")]),e._v(": device position, device rotation, marker position, marker rotation.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("BODY")]),e._v(": device position, device rotation, body joint' position, feature points' positions.")]),e._v(" "),o("p",[e._v("※ "),o("strong",[e._v("BODY")]),e._v(" can be used on device equipped with A12 chip or higher.")])])]),e._v(" "),o("h3",{attrs:{id:"feature-points-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#feature-points-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Feature Points")]),e._v(" "),o("p",[e._v("Toggle feature points tracking in device tracking mode."),o("br"),e._v("\nIf "),o("code",[e._v("On")]),e._v(", ZIG SIM outputs the positions of the feature points over the network.")])])},[],!1,null,null,null);t.default=a.exports}}]);