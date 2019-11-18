# Getting Started

## Install

We have 2 versions of apps: **ZIG SIM** and **ZIG SIM Pro**.

### ZIG SIM Pro

ZIG SIM Pro is the latest version of ZIG SIM.
It includes more powerful features such as ARKit, NDI, Image Detection etc.
ZIG SIM Pro is currently only available for iOS.

<a
  target="\_blank"
  style="display: inline-block; width: 190px;"
  href="https://apps.apple.com/us/app/zig-sim-pro/id1481556614"><img style="margin: 7%; width: 88%" alt="Download on the App Store" src="ios-badge.svg"/></a>

### ZIG SIM

The old version of ZIG SIM is available for iOS and Android for free.

<div class="badges">
<a
  target="\_blank"
  style="display: inline-block; width: 190px;"
  href="https://apps.apple.com/jp/app/zig-sim/id1112909974"><img style="margin: 7%; width: 88%" alt="Download on the App Store" src="ios-badge.svg"/></a><a
  target="\_blank"
  style="display: inline-block; width: 210px;"
  href="https://play.google.com/store/apps/details?id=com.oneten.drive.zig_sim&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"/></a>
</div>
<!-- Place badges center if width is lower than 419px($MQMobile) -->
<style>
@media (max-width: 419px) {
  .badges {
    margin: 30px;
    text-align: center;
  }
}
</style>


## Send Data to PC

ZIG SIM can send the data to the PCs in local network over TCP or UDP protocol.
You can choose the data format from OSC or JSON.

The most common usecase is using OSC over UDP.
Many apps supports OSC over UDP, for example TouchDesigner, Max, Processing, etc.

If you're not familiar with using OSC, See *[Tutorial](./tutorial)* page.
