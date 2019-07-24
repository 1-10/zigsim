(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{207:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nfc-reader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfc-reader","aria-hidden":"true"}},[e._v("#")]),e._v(" NFC Reader")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/badge/Premium%20Feature-yellow.svg",alt:"Premium Feature"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/iOS-supported-brightgreen.svg",alt:"iOS supported"}}),e._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/Android-not%20supported-red.svg",alt:"Android not supported"}})]),e._v(" "),a("p",[e._v("NFC Reader command detects NFC tags and read messages that contain NDEF data."),a("br"),e._v("\nOutput values are defined by the NDEF specification.")]),e._v(" "),a("p",[e._v("One NFC tag can contain multiple messages, and one message can contain multiple records."),a("br"),e._v("\nEach message is accessible with the index in tag, and each record is accessible with the message."),a("br"),e._v("\nIn this document we call these indexes "),a("code",[e._v("MESSAGE_ID")]),e._v(" and "),a("code",[e._v("RECORD_ID")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id","aria-hidden":"true"}},[e._v("#")]),e._v(" ID")]),e._v(" "),a("ul",[a("li",[e._v("OSC Address: "),a("code",[e._v("/(deviceUUID)/nfcid(MESSAGE_ID)-(RECORD_ID)")])]),e._v(" "),a("li",[e._v("JSON key: "),a("code",[e._v("nfc[(MESSAGE_ID)][(RECORD_ID)].id")])])]),e._v(" "),a("p",[e._v("The identifier of the payload, as defined by the NDEF specification.")]),e._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[e._v("#")]),e._v(" Data")]),e._v(" "),a("ul",[a("li",[e._v("OSC Address: "),a("code",[e._v("/(deviceUUID)/nfcdata(MESSAGE_ID)-(RECORD_ID)")])]),e._v(" "),a("li",[e._v("JSON key: "),a("code",[e._v("nfc[(MESSAGE_ID)][(RECORD_ID)].data")])])]),e._v(" "),a("p",[e._v("Data of the payload, as defined by the NDEF specification. Trimming header for the first several bytes is not supported.")]),e._v(" "),a("h3",{attrs:{id:"type-name-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-name-format","aria-hidden":"true"}},[e._v("#")]),e._v(" Type Name Format")]),e._v(" "),a("ul",[a("li",[e._v("OSC Address: "),a("code",[e._v("/(deviceUUID)/nfctypenameformat(MESSAGE_ID)-(RECORD_ID)")])]),e._v(" "),a("li",[e._v("JSON key: "),a("code",[e._v("nfc[(MESSAGE_ID)][(RECORD_ID)].typenameformat")])])]),e._v(" "),a("p",[e._v("Type Name Format field of the payload, as defined by the NDEF specification.")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(" Type")]),e._v(" "),a("ul",[a("li",[e._v("OSC Address: "),a("code",[e._v("/(deviceUUID)/nfctype(MESSAGE_ID)-(RECORD_ID)")])]),e._v(" "),a("li",[e._v("JSON key: "),a("code",[e._v("nfc[(MESSAGE_ID)][(RECORD_ID)].type")])])]),e._v(" "),a("p",[e._v("Type of the payload, as defined by the NDEF specification.")])])},[],!1,null,null,null);t.default=i.exports}}]);