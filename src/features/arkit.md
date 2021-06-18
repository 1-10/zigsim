# ARKit

![Pro](https://img.shields.io/badge/Pro-yellow.svg) ![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

ARKit command tracks the position and the rotation for various objects.

This command has 4 mode: **DEVICE**, **FACE** ,**MARKER** and **BODY**.
These modes correspond to diffrent features of ARKit.

In **DEVICE** mode, ZIG SIM will track the 6DoF position of the device.

In **FACE** mode, ZIG SIM does face tracking.

In **MARKER** mode, ZIG SIM tracks pre-defined markers.
The markers can be obtained here: *[zigsim-markers.zip](../zigsim-markers.zip)*

In **BODY** mode, ZIG SIM tracks human body position and the 6DoF position of the device.

ARKit command is only available in ZIG SIM Pro.
Also, you cannot use NDI, ARKit and Image Detection simultaneously.

## Outputs

### Device Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/arkitposition`
  - Rotation: `/(deviceUUID)/arkitrotation`
- JSON key
  - Position: `arkit.position`
  - Rotation: `arkit.rotation`

This data is only available in **DEVICE** mode, **MARKER** mode and **BODY** mode.  

In `MARKER` mode the device position is always (0.0, 0.0, 0.0).
This means the marker position is relative position from the device.

### Feature Points

- OSC Address: `/(deviceUUID)/featurepoints`
- JSON key: `arkit.featurePoints`

This data is only available in **DEVICE** mode and **BODY** mode.

### Face Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/faceposition`
  - Rotation: `/(deviceUUID)/facerotation`
- JSON key
  - Position: `faceTracking.position`
  - Rotation: `faceTracking.rotation`

For `Face Position and Rotation` and the details, see *[Apple Developer Documentation, ARFaceAnchor](https://developer.apple.com/documentation/arkit/arfaceanchor)*.
  
### Look At Position
- OSC Address: `/(deviceUUID)/(facelookatposition)`
- JSON key: `faceTracking.(lookAtPosition)`

For `lookAtPosition` and the details, see *[Apple Developer Documentation, lookAtPoint](https://developer.apple.com/documentation/arkit/arfaceanchor/2968192-lookatpoint)*.

### Left And Right Eye Position
- OSC Address
  - Left Position: `/(deviceUUID)/facelefteyeposition`
  - Right Position: `/(deviceUUID)/facerighteyeposition`
- JSON key
  - Left Position: `faceTracking.leftEyePosition`
  - Right Position: `faceTracking.rightEyePosition`

For `leftEyePosition` and the details, see *[Apple Developer Documentation, leftEyeTransform](https://developer.apple.com/documentation/arkit/arfaceanchor/2968193-righteyetransform)*.
For `rightEyePosition` and the details, see *[Apple Developer Documentation, rightEyeTransform](https://developer.apple.com/documentation/arkit/arfaceanchor/2968191-lefteyetransform)*.

### Specific Facial Features Position

- OSC Address: `/(deviceUUID)/face(FEATURES_NAME)`
- JSON key: `faceTracking.(FEATURES_NAME)`

For `FEATURES_NAME` and the details, see *[Apple Developer Documentation, ARFaceAnchor.BlendShapeLocation](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation)*.

### Marker Position and Rotation

- OSC Address
  - Position: `/(deviceUUID)/imageposition(MARKER_ID)`
  - Rotation: `/(deviceUUID)/imagerotation(MARKER_ID)`
- JSON key
  - Position: `imageTracking.images[(MARKER_ID)].position`
  - Rotation: `imageTracking.images[(MARKER_ID)].rotation`

### Body Joint' Position

- OSC Address
  - Position: `/(deviceUUID)/body_(JOINT_NAME)`
- JSON key
  - Position: `bodyTracking.(JOINT_NAME)`

This position data is in the world coordinate system.(same as device position)

For `JOINT_NAME` and the details, see *[Apple Developer Documentation, Validating a Model for Motion Capture](https://developer.apple.com/documentation/arkit/content_anchors/validating_a_model_for_motion_capture)*.

## Detail Settings

### Tracking Type

Users can choose objects to detect.

- **DEVICE**: device position, device rotation, feature points' positions.
- **FACE**: face position, face rotation, eye position, look at position, left and right rye position, specific facial features position.
- **MARKER**: device position, device rotation, marker position, marker rotation.
- **BODY**: device position, device rotation, body joint' position, feature points' positions.

  ※ **BODY** can be used on device equipped with A12 chip or higher.

### Feature Points

Toggle feature points tracking in device tracking mode.
If `On`, ZIG SIM outputs the positions of the feature points over the network.
