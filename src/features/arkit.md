# ARKit

![Premium Feature](https://img.shields.io/badge/Premium%20Feature-yellow.svg) ![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

ARKit command tracks the position and the rotation for various objects.

This command has 3 mode: **DEVICE**, **FACE** and **MARKER**.
These modes correspond to diffrent features of ARKit.

In **DEVICE** mode, ZIG SIM will track the 6DoF position of the device.

In **FACE** mode, ZIG SIM does face tracking.

In **MARKER** mode, ZIG SIM tracks pre-defined markers.
The markers can be obtained here: *[zigsim-markers.zip](./zigsim-markers.zip)*

You cannot use NDI, ARKit and Image Detection simultaneously.

## Outputs

### Device Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/arkitposition`
  - Rotation: `/(deviceUUID)/arkitrotation`
- JSON key
  - Position: `arkit.position`
  - Rotation: `arkit.rotation`

This data is only avalable in **DEVICE** mode and **MARKER** mode.  

In `MARKER` mode the device position is always (0.0, 0.0, 0.0).
This means the marker position is relative position from the device.

### Feature Points

- OSC Address: `/(deviceUUID)/featurepoints`
- JSON key: `arkit.featurePoints`

This data is only available in **DEVICE** mode.

### Marker Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/imageposition(MARKER_ID)`
  - Rotation: `/(deviceUUID)/imagerotation(MARKER_ID)`
- JSON key
  - Position: `arkit.images[(MARKER_ID)].position`
  - Rotation: `arkit.images[(MARKER_ID)].rotation`

### Feature Points

- OSC Address: `/(deviceUUID)/arkitrotation`
- JSON key: `arkit.rotation`

### Marker Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/imageposition(MARKER_ID)`
  - Rotation: `/(deviceUUID)/imagerotation(MARKER_ID)`
- JSON key
  - Position: `arkit.images[(MARKER_ID)].position`
  - Rotation: `arkit.images[(MARKER_ID)].rotation`

This data is only avalable in **DEVICE** mode and **MARKER** mode.

## Detail Settings

### Tracking Type

Users can choose objects to detect.

- **DEVICE**: device position, device rotation, feature points' positions.
- **FACE**: device rotation, face position, face rotation, eye position.
- **MARKER**: device rotation, marker position, marker rotation.

### Feature Points

Toggle feature points tracking in device tracking mode.
If `On`, ZIG SIM outputs the positions of the feature points over the network.
