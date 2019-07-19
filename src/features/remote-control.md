# Remote Control

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

Remote Control command monitors the state of remote controllers of headphones connected to the device.

## Outputs

### PlayPause

- OSC Address: `/(deviceUUID)/remotecontrol` (1st value)
- JSON key: `remotecontrol.playpause`

The play/pause button is pressed or not.

### VolumeUp

- OSC Address: `/(deviceUUID)/remotecontrol` (2nd value)
- JSON key: `remotecontrol.volumeup`

The volume up button is pressed or not.

### VolumeDown

- OSC Address: `/(deviceUUID)/remotecontrol` (3rd value)
- JSON key: `remotecontrol.volumedown`

The volume down button is pressed or not.

### isPlaying

- OSC Address: `/(deviceUUID)/remotecontrol` (4th value)
- JSON key: `remotecontrol.isPlaying`

The value toggles by play/pause buttons.

Note: this value does not correspond to the states of any other apps like music, video apps.

### Volume

- OSC Address: `/(deviceUUID)/remotecontrol` (5th value)
- JSON key: `remotecontrol.volume`

The volume of the device which can be updeted by volume up/down buttons.
