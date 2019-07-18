(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(e,t,i){"use strict";i.r(t);var a=i(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"image-detection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#image-detection","aria-hidden":"true"}},[e._v("#")]),e._v(" Image Detection")]),e._v(" "),i("p",[e._v("Image Detection command identifies notable features (such as faces and barcodes) from a camera."),i("br"),e._v("\nMax frame rate is 30fps, so if you set 60fps it works on 30fps. Note that at the higher the frame rate and resolution, computational cost gets higher. You cannot use NDI, ARKit and Image Detection simultaneously.")]),e._v(" "),i("p",[e._v("This command has 4 modes: "),i("strong",[e._v("FACE")]),e._v(", "),i("strong",[e._v("QR")]),e._v(", "),i("strong",[e._v("RECT")]),e._v(", "),i("strong",[e._v("TEXT")]),e._v(".")]),e._v(" "),i("p",[e._v("This command can detect multiple features."),i("br"),e._v("\nThe data for each feature is accessible with the index."),i("br"),e._v("\nIn this document we call this index "),i("code",[e._v("FEATURE_ID")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"outputs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),i("h3",{attrs:{id:"outputs-for-detection-type-face"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs-for-detection-type-face","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs for Detection Type "),i("code",[e._v("FACE")])]),e._v(" "),i("h4",{attrs:{id:"position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[e._v("#")]),e._v(" Position")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("Left x: "),i("code",[e._v("/(deviceUUID)/leftx(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Right x: "),i("code",[e._v("/(deviceUUID)/rightx(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Top y: "),i("code",[e._v("/(deviceUUID)/topy(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Bottom y: "),i("code",[e._v("/(deviceUUID)/bottomy(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Left Eye x: "),i("code",[e._v("/(deviceUUID)/lefteye(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Left Eye y: "),i("code",[e._v("/(deviceUUID)/lefteye(FEATURE_ID)2")])]),e._v(" "),i("li",[e._v("Right Eye x: "),i("code",[e._v("/(deviceUUID)/righteye(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Right Eye y: "),i("code",[e._v("/(deviceUUID)/righteye(FEATURE_ID)2")])]),e._v(" "),i("li",[e._v("Mouth x: "),i("code",[e._v("/(deviceUUID)/mouth(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Mouth y: "),i("code",[e._v("/(deviceUUID)/mouth(FEATURE_ID)2")])])])]),e._v(" "),i("li",[e._v("JSON key\n"),i("ul",[i("li",[e._v("Left x: "),i("code",[e._v("imagedetect[FEATURE_ID].leftx")])]),e._v(" "),i("li",[e._v("Right x: "),i("code",[e._v("imagedetect[FEATURE_ID].rightx")])]),e._v(" "),i("li",[e._v("Top y: "),i("code",[e._v("imagedetect[FEATURE_ID].topy")])]),e._v(" "),i("li",[e._v("Bottom y: "),i("code",[e._v("imagedetect[FEATURE_ID].bottomy")])]),e._v(" "),i("li",[e._v("Left Eye x: "),i("code",[e._v("imagedetect[FEATURE_ID].lefteye.x")])]),e._v(" "),i("li",[e._v("Left Eye y: "),i("code",[e._v("imagedetect[FEATURE_ID].lefteye.y")])]),e._v(" "),i("li",[e._v("Right Eye x: "),i("code",[e._v("imagedetect[FEATURE_ID].righteye.x")])]),e._v(" "),i("li",[e._v("Right Eye y: "),i("code",[e._v("imagedetect[FEATURE_ID].righteye.y")])]),e._v(" "),i("li",[e._v("Mouth x: "),i("code",[e._v("imagedetect[FEATURE_ID].mouth.x")])]),e._v(" "),i("li",[e._v("Mouth y: "),i("code",[e._v("imagedetect[FEATURE_ID].mouth.y")])])])])]),e._v(" "),i("p",[e._v("Coordinate(point) in the video frame. Bottom left is (0, 0), top right is determined by the dimension of the video.")]),e._v(" "),i("h4",{attrs:{id:"true-or-false"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#true-or-false","aria-hidden":"true"}},[e._v("#")]),e._v(" True or False")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("Has Smile: "),i("code",[e._v("/(deviceUUID)/hassmile(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Left Eye Closed: "),i("code",[e._v("/(deviceUUID)/lefteyeclosed(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("Right Eye Closed: "),i("code",[e._v("/(deviceUUID)/righteyeclosed(FEATURE_ID)")])])])]),e._v(" "),i("li",[e._v("JSON key\n"),i("ul",[i("li",[e._v("Has Smile: "),i("code",[e._v("imagedetect[FEATURE_ID].hassmile")])]),e._v(" "),i("li",[e._v("Left Eye Closed: "),i("code",[e._v("imagedetect[FEATURE_ID].lefteye-closed")])]),e._v(" "),i("li",[e._v("Right Eye Closed: "),i("code",[e._v("imagedetect[FEATURE_ID].righteye-closed")])])])])]),e._v(" "),i("h4",{attrs:{id:"face-angle"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#face-angle","aria-hidden":"true"}},[e._v("#")]),e._v(" Face Angle")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/faceangle(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].faceangle")])])]),e._v(" "),i("p",[e._v("The rotation of the face. Rotation is measured counterclockwise in degrees, with zero indicating that a line drawn between the eyes is horizontal relative to the image orientation.")]),e._v(" "),i("h4",{attrs:{id:"tracking-id"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tracking-id","aria-hidden":"true"}},[e._v("#")]),e._v(" Tracking ID")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/trackingID(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].trackingID")])])]),e._v(" "),i("p",[e._v("The tracking identifier of the face object. This identifier persists only as long as a face is in the video frame and is not associated with a specific face. In other words, if a face moves out of the video frame and comes back into the frame later, another ID is assigned.")]),e._v(" "),i("h3",{attrs:{id:"outputs-for-other-detection-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#outputs-for-other-detection-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs for other Detection Types")]),e._v(" "),i("h4",{attrs:{id:"position-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Position")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("Top Left x: "),i("code",[e._v("/(deviceUUID)/topleft(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Top Left y: "),i("code",[e._v("/(deviceUUID)/topleft(FEATURE_ID)2")])]),e._v(" "),i("li",[e._v("Top Right x: "),i("code",[e._v("/(deviceUUID)/topright(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Top Right y: "),i("code",[e._v("/(deviceUUID)/topright(FEATURE_ID)2")])]),e._v(" "),i("li",[e._v("Bottom Left x: "),i("code",[e._v("/(deviceUUID)/bottomleft(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Bottom Left y: "),i("code",[e._v("/(deviceUUID)/bottomleft(FEATURE_ID)2")])]),e._v(" "),i("li",[e._v("Bottom Right x: "),i("code",[e._v("/(deviceUUID)/bottomright(FEATURE_ID)1")])]),e._v(" "),i("li",[e._v("Bottom Right y: "),i("code",[e._v("/(deviceUUID)/bottomright(FEATURE_ID)2")])])])]),e._v(" "),i("li",[e._v("JSON key\n"),i("ul",[i("li",[e._v("Top Left x: "),i("code",[e._v("imagedetect[FEATURE_ID].topleft.x")])]),e._v(" "),i("li",[e._v("Top Left y: "),i("code",[e._v("imagedetect[FEATURE_ID].topleft.y")])]),e._v(" "),i("li",[e._v("Top Right x: "),i("code",[e._v("imagedetect[FEATURE_ID].topright.x")])]),e._v(" "),i("li",[e._v("Top Right y: "),i("code",[e._v("imagedetect[FEATURE_ID].topright.y")])]),e._v(" "),i("li",[e._v("Bottom Left x: "),i("code",[e._v("imagedetect[FEATURE_ID].bottomleft.x")])]),e._v(" "),i("li",[e._v("Bottom Left y: "),i("code",[e._v("imagedetect[FEATURE_ID].bottomleft.y")])]),e._v(" "),i("li",[e._v("Bottom Right x: "),i("code",[e._v("imagedetect[FEATURE_ID].bottomright.x")])]),e._v(" "),i("li",[e._v("Bottom Right y: "),i("code",[e._v("imagedetect[FEATURE_ID].bottomright.y")])])])])]),e._v(" "),i("p",[e._v("Coordinate in the video frame. Bottom left is (0, 0), top right is determined by the dimension of the video.")]),e._v(" "),i("h4",{attrs:{id:"qr-message"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qr-message","aria-hidden":"true"}},[e._v("#")]),e._v(" QR Message")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address: "),i("code",[e._v("/(deviceUUID)/qrmessage(FEATURE_ID)")])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].qrmessage")])])]),e._v(" "),i("p",[e._v("The string decoded from the detected barcode."),i("br"),e._v("\nOutput only when Detection Type is "),i("code",[e._v("QR")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"qr-version"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qr-version","aria-hidden":"true"}},[e._v("#")]),e._v(" QR Version")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("QR Message: "),i("code",[e._v("/(deviceUUID)/qrversion(FEATURE_ID)")])])])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].qrversion")])])]),e._v(" "),i("p",[e._v("The version of the QR code. ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity."),i("br"),e._v("\nOutput only when Detection Type is "),i("code",[e._v("QR")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"qr-mask-pattern"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qr-mask-pattern","aria-hidden":"true"}},[e._v("#")]),e._v(" QR Mask Pattern")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("QR Message: "),i("code",[e._v("/(deviceUUID)/qrmaskpattern(FEATURE_ID)")])])])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].qrmaskpattern")])])]),e._v(" "),i("p",[e._v("The QR code's mask pattern."),i("br"),e._v("\nOutput only when Detection Type is "),i("code",[e._v("QR")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"error-correction-level"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#error-correction-level","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Correction Level")]),e._v(" "),i("ul",[i("li",[e._v("OSC Address\n"),i("ul",[i("li",[e._v("QR Message: "),i("code",[e._v("/(deviceUUID)/qrerrorcorrectionlevel(FEATURE_ID)")])])])]),e._v(" "),i("li",[e._v("JSON key: "),i("code",[e._v("imagedetect[FEATURE_ID].qrerrorcorrectionlevel")])])]),e._v(" "),i("p",[e._v("The QR code error correction level, which has following options: "),i("strong",[e._v("levelL")]),e._v(",  "),i("strong",[e._v("levelM")]),e._v(", "),i("strong",[e._v("levelQ")]),e._v(", "),i("strong",[e._v("levelH")]),e._v("."),i("br"),e._v("\nOutput only when Detection Type is "),i("code",[e._v("QR")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"detail-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detail-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Detail Settings")]),e._v(" "),i("h3",{attrs:{id:"detection-type"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detection-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Detection Type")]),e._v(" "),i("p",[e._v("Object type to detect.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("FACE")]),e._v(": faces")]),e._v(" "),i("li",[i("code",[e._v("QR")]),e._v(": Quick Response codes (a type of 2D barcode)")]),e._v(" "),i("li",[i("code",[e._v("RECT")]),e._v(": rectangular areas")]),e._v(" "),i("li",[i("code",[e._v("TEXT")]),e._v(": texts")])]),e._v(" "),i("h3",{attrs:{id:"camera"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#camera","aria-hidden":"true"}},[e._v("#")]),e._v(" Camera")]),e._v(" "),i("p",[e._v("Which camera to use, "),i("code",[e._v("REAR")]),e._v(" or "),i("code",[e._v("FRONT")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"resolution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resolution","aria-hidden":"true"}},[e._v("#")]),e._v(" Resolution")]),e._v(" "),i("p",[e._v("Resolution of output images to send from the following:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("VGA")]),e._v(": 640x480")]),e._v(" "),i("li",[i("code",[e._v("HD")]),e._v(": 1280x720")]),e._v(" "),i("li",[i("code",[e._v("FHD")]),e._v(": 1920x1080")])]),e._v(" "),i("h3",{attrs:{id:"accuracy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accuracy","aria-hidden":"true"}},[e._v("#")]),e._v(" Accuracy")]),e._v(" "),i("p",[e._v("Accuracy of detection. When set "),i("code",[e._v("HIGH")]),e._v(", it requires more processing time.")]),e._v(" "),i("h3",{attrs:{id:"tracking"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tracking","aria-hidden":"true"}},[e._v("#")]),e._v(" Tracking")]),e._v(" "),i("p",[e._v("Enable or disable face tracking across frames in the video. Valid only when Detection Type is FACE. When turned "),i("code",[e._v("ON")]),e._v(", line color around detected faces varies depending on tracking IDs.")]),e._v(" "),i("h3",{attrs:{id:"number-of-face-angles"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#number-of-face-angles","aria-hidden":"true"}},[e._v("#")]),e._v(" Number of Face Angles")]),e._v(" "),i("p",[e._v("The number of perspectives to use for detecting a face. At higher numbers of angles, it becomes more accurate, but at a higher computational cost. Valid only when Detection Type is "),i("code",[e._v("FACE")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"detect-eye-blink"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detect-eye-blink","aria-hidden":"true"}},[e._v("#")]),e._v(" Detect Eye Blink")]),e._v(" "),i("p",[e._v("Whether to perform additional processing to recognize closed eyes in detected faces. Valid only when Detection Type is "),i("code",[e._v("FACE")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"detect-smile"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detect-smile","aria-hidden":"true"}},[e._v("#")]),e._v(" Detect Smile")]),e._v(" "),i("p",[e._v("Whether to perform additional processing to recognize smiles in detected faces. Valid only when Detection Type is "),i("code",[e._v("FACE")]),e._v(".")])])},[],!1,null,null,null);t.default=o.exports}}]);