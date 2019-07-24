(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{214:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-send-motion-data-to-pc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-send-motion-data-to-pc","aria-hidden":"true"}},[t._v("#")]),t._v(" Tutorial: Send motion data to PC")]),t._v(" "),a("p",[t._v("In this page, we will learn how to send motion data from your device to PC."),a("br"),t._v("\nTo receive the data we use ZIG Indicator and TouchDesigner.")]),t._v(" "),a("h2",{attrs:{id:"using-zig-indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-zig-indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" Using ZIG Indicator")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{width:"180",src:"zig-indicator.png"}}),t._v(" "),a("p",[t._v("ZIG Indicator is a desktop app to receive and visualize data sent from ZIG SIM."),a("br"),t._v("\nNote: some features are not supported yet, as ZIG Indicator was developed before ZIG SIM v2.0.0.")]),t._v(" "),a("h3",{attrs:{id:"_1-install-zig-indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-zig-indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Install ZIG Indicator")]),t._v(" "),a("p",[t._v("Download ZIG Indicator from here:")]),t._v(" "),a("ul",[a("li",[t._v("Windows: https://zig-project.com/release/ZIG_indicator_v1.1.0_x64.zip")]),t._v(" "),a("li",[t._v("macOS: https://zig-project.com/release/ZIG_indicator_v1.1.0_osx.zip")])]),t._v(" "),a("h3",{attrs:{id:"_2-run-zig-indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-run-zig-indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Run ZIG Indicator")]),t._v(" "),a("p",[t._v("Unzip the archive and run ZIG Indicator."),a("br"),t._v("\nThe app will look like this:")]),t._v(" "),a("img",{attrs:{src:"zig-indicator-1.png"}}),t._v(" "),a("p",[t._v("The IP address of the PC is displayed in the sidebar on the left."),a("br"),t._v("\nChange the port number to receive the data if you want.")]),t._v(" "),a("h3",{attrs:{id:"_3-run-zig-sim-on-the-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-zig-sim-on-the-device","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Run ZIG SIM on the device")]),t._v(" "),a("p",[t._v("Launch ZIG SIM app on the device."),a("br"),t._v("\nBefore monitoring, we have to update the Settings so that ZIG SIM can send data to the PC."),a("br"),t._v("\nGo to "),a("strong",[t._v("Settings")]),t._v(" and follow these steps:")]),t._v(" "),a("ol",[a("li",[t._v("Set "),a("code",[t._v("Protocol")]),t._v(" to "),a("strong",[t._v("UDP")]),t._v(".")]),t._v(" "),a("li",[t._v("Set "),a("code",[t._v("IP Address")]),t._v(" and "),a("code",[t._v("Port Number")]),t._v(" to the values displayed in ZIG Indicator.")]),t._v(" "),a("li",[t._v("Set "),a("code",[t._v("Message Format")]),t._v(" to "),a("strong",[t._v("JSON")]),t._v(".")])]),t._v(" "),a("p",[t._v("Next, go to "),a("strong",[t._v("Sensor")]),t._v(" tab and select the commands to get data."),a("br"),t._v("\nTap "),a("code",[t._v("Acceleration")]),t._v(", "),a("code",[t._v("Gyro")]),t._v(" and "),a("code",[t._v("Quaternion")]),t._v(" to enable these commands.")]),t._v(" "),a("p",[t._v("After that, go to "),a("strong",[t._v("Start")]),t._v(" tab to start monitoring."),a("br"),t._v("\nYou will see the data being displayed on the screen.")]),t._v(" "),a("h3",{attrs:{id:"_4-press-start-button-in-zig-indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-press-start-button-in-zig-indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Press "),a("code",[t._v("Start")]),t._v(" Button in ZIG Indicator")]),t._v(" "),a("p",[t._v("Finally you can see the result in ZIG Indicator."),a("br"),t._v("\nPress "),a("code",[t._v("Start")]),t._v(" button in the sidebar to start monitoring.")]),t._v(" "),a("p",[t._v("You can see the motion data visualized on the screen."),a("br"),t._v("\nTry shaking the device to make sure the data is updated correctly.")]),t._v(" "),a("img",{attrs:{src:"zig-indicator-result.gif"}}),t._v(" "),a("p",[t._v("🎉🎉🎉 Done! 🎉🎉🎉")]),t._v(" "),a("h2",{attrs:{id:"using-touchdesigner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-touchdesigner","aria-hidden":"true"}},[t._v("#")]),t._v(" Using TouchDesigner")]),t._v(" "),a("p",[t._v("TouchDesigner is a visual programming system developed by Derivative Inc."),a("br"),t._v("\nIt's widely used in the field of interactive art, realtime audio visual performance, etc.")]),t._v(" "),a("h3",{attrs:{id:"_1-install-touchdesigner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-touchdesigner","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Install TouchDesigner")]),t._v(" "),a("p",[t._v("Download the installer from the website:")]),t._v(" "),a("p",[a("em",[a("a",{attrs:{href:"https://www.derivative.ca/099/Downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.derivative.ca/099/Downloads/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Then open the file and follow the instruction."),a("br"),t._v("\nIf no errors, TouchDesigner will be installed to your PC.")]),t._v(" "),a("h3",{attrs:{id:"_2-open-the-sample-project-with-touchdesigner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-open-the-sample-project-with-touchdesigner","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Open the Sample Project with TouchDesigner")]),t._v(" "),a("p",[t._v("Download the sample project from here and open it:"),a("br"),t._v(" "),a("em",[a("a",{attrs:{href:"./zigsim-tutorial.toe"}},[t._v("zigsim-tutorial.toe")])])]),t._v(" "),a("p",[t._v("The app will look like this:")]),t._v(" "),a("img",{attrs:{src:"touchdesigner-launch.png"}}),t._v(" "),a("p",[t._v("The IP address of the PC and the port number to receive data are displayed on the left."),a("br"),t._v("\nYou can change the port number on the parameters panel on the right, iff you want.")]),t._v(" "),a("img",{attrs:{src:"touchdesigner-port.png"}}),t._v(" "),a("h3",{attrs:{id:"_3-run-zig-sim-on-the-device-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-zig-sim-on-the-device-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Run ZIG SIM on the device")]),t._v(" "),a("p",[t._v("Launch ZIG SIM app on the device."),a("br"),t._v("\nBefore monitoring, we have to update the Settings so that ZIG SIM can send data to the PC."),a("br"),t._v("\nGo to "),a("strong",[t._v("Settings")]),t._v(" and follow these steps:")]),t._v(" "),a("ol",[a("li",[t._v("Set "),a("code",[t._v("Protocol")]),t._v(" to "),a("strong",[t._v("UDP")]),t._v(".")]),t._v(" "),a("li",[t._v("Set "),a("code",[t._v("IP Address")]),t._v(" and "),a("code",[t._v("Port Number")]),t._v(" to the values displayed in TouchDesigner.")]),t._v(" "),a("li",[t._v("Set "),a("code",[t._v("Message Format")]),t._v(" to "),a("strong",[t._v("OSC")]),t._v(".")])]),t._v(" "),a("p",[t._v("Next, go to "),a("strong",[t._v("Sensor")]),t._v(" tab and select the commands to get data."),a("br"),t._v("\nTap "),a("code",[t._v("Acceleration")]),t._v(", "),a("code",[t._v("Gyro")]),t._v(" and "),a("code",[t._v("Quaternion")]),t._v(" to enable these commands.")]),t._v(" "),a("p",[t._v("After that, go to "),a("strong",[t._v("Start")]),t._v(" tab to start monitoring."),a("br"),t._v("\nYou will see the data being displayed on the screen.")]),t._v(" "),a("h3",{attrs:{id:"_4-see-the-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-see-the-result","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. See the Result")]),t._v(" "),a("p",[t._v("Finally you can see the result in TouchDesigner."),a("br"),t._v("\nPress the start button at the bottom to start monitoring.")]),t._v(" "),a("img",{attrs:{src:"touchdesigner-result.gif"}}),t._v(" "),a("p",[t._v("🎉🎉🎉 Done! 🎉🎉🎉")])])},[],!1,null,null,null);e.default=o.exports}}]);