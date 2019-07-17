(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"beacon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beacon","aria-hidden":"true"}},[e._v("#")]),e._v(" Beacon")]),e._v(" "),t("p",[e._v("Beacon command detects iBeacons around the device.")]),e._v(" "),t("p",[e._v("ZIG SIM detects all beacons with specified beacon UUID as long as the device can track."),t("br"),e._v("\nThe data for each beacon is accessible with the index from 0."),t("br"),e._v("\nIn this document we call this index "),t("code",[e._v("BEACON_ID")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"outputs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),t("h3",{attrs:{id:"beaconuuid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beaconuuid","aria-hidden":"true"}},[e._v("#")]),e._v(" BeaconUUID")]),e._v(" "),t("ul",[t("li",[e._v("OSC Address: "),t("code",[e._v("/(deviceUUID)/beacon(BEACON_ID)")]),e._v(" (1st value)")]),e._v(" "),t("li",[e._v("JSON key: "),t("code",[e._v("beacon[(BEACON_ID)].uuid")])])]),e._v(" "),t("p",[e._v("The UUID of the beacon."),t("br"),e._v("\nThis is always same as the beacon UUID specified in the detail settings.")]),e._v(" "),t("h3",{attrs:{id:"major"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major","aria-hidden":"true"}},[e._v("#")]),e._v(" Major")]),e._v(" "),t("ul",[t("li",[e._v("OSC Address: "),t("code",[e._v("/(deviceUUID)/beacon(BEACON_ID)")]),e._v(" (2st value)")]),e._v(" "),t("li",[e._v("JSON key: "),t("code",[e._v("beacon[(BEACON_ID)].major")])])]),e._v(" "),t("p",[e._v("The identifier to differentiate groups of beacons with the same UUID.")]),e._v(" "),t("h3",{attrs:{id:"minor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor")]),e._v(" "),t("ul",[t("li",[e._v("OSC Address: "),t("code",[e._v("/(deviceUUID)/beacon(BEACON_ID)")]),e._v(" (3rd value)")]),e._v(" "),t("li",[e._v("JSON key: "),t("code",[e._v("beacon[(BEACON_ID)].minor")])])]),e._v(" "),t("p",[e._v("The identifier to differentiate groups of beacons with the same UUID and major value.")]),e._v(" "),t("h3",{attrs:{id:"rssi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rssi","aria-hidden":"true"}},[e._v("#")]),e._v(" RSSI")]),e._v(" "),t("ul",[t("li",[e._v("OSC Address: "),t("code",[e._v("/(deviceUUID)/beacon(BEACON_ID)")]),e._v(" (4th value)")]),e._v(" "),t("li",[e._v("JSON key: "),t("code",[e._v("beacon[(BEACON_ID)].rssi")])])]),e._v(" "),t("p",[e._v("The strength of the signal from the beacon."),t("br"),e._v("\nThe value is always negative (larger is stronger).")]),e._v(" "),t("h2",{attrs:{id:"detail-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detail-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Detail Settings")]),e._v(" "),t("h3",{attrs:{id:"beacon-uuid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beacon-uuid","aria-hidden":"true"}},[e._v("#")]),e._v(" Beacon UUID")]),e._v(" "),t("p",[e._v("Specify the beacon uuid to track."),t("br"),e._v("\nUUID must be in the format: "),t("code",[e._v("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX")]),e._v(". All characters must be alphabetical letters (A-Z) or numbers (0-9).")])])},[],!1,null,null,null);a.default=r.exports}}]);