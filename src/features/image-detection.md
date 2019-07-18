# Image Detection

Image Detection command identifies notable features (such as faces and barcodes) from a camera.
Max frame rate is 30fps, so if you set 60fps it works on 30fps. Note that at the higher the frame rate and resolution, computational cost gets higher. You cannot use NDI, ARKit and Image Detection simultaneously.

This command has 4 modes: **FACE**, **QR**, **RECT**, **TEXT**.

This command can detect multiple features.
The data for each feature is accessible with the index.
In this document we call this index `FEATURE_ID`.

## Outputs

### Outputs for Detection Type `FACE`

#### Position

- OSC Address
  - Left x: `/(deviceUUID)/leftx(FEATURE_ID)`
  - Right x: `/(deviceUUID)/rightx(FEATURE_ID)`
  - Top y: `/(deviceUUID)/topy(FEATURE_ID)`
  - Bottom y: `/(deviceUUID)/bottomy(FEATURE_ID)`
  - Left Eye x: `/(deviceUUID)/lefteye(FEATURE_ID)1`
  - Left Eye y: `/(deviceUUID)/lefteye(FEATURE_ID)2`
  - Right Eye x: `/(deviceUUID)/righteye(FEATURE_ID)1`
  - Right Eye y: `/(deviceUUID)/righteye(FEATURE_ID)2`
  - Mouth x: `/(deviceUUID)/mouth(FEATURE_ID)1`
  - Mouth y: `/(deviceUUID)/mouth(FEATURE_ID)2`
- JSON key
  - Left x: `imagedetect[FEATURE_ID].leftx`
  - Right x: `imagedetect[FEATURE_ID].rightx`
  - Top y: `imagedetect[FEATURE_ID].topy`
  - Bottom y: `imagedetect[FEATURE_ID].bottomy`
  - Left Eye x: `imagedetect[FEATURE_ID].lefteye.x`
  - Left Eye y: `imagedetect[FEATURE_ID].lefteye.y`
  - Right Eye x: `imagedetect[FEATURE_ID].righteye.x`
  - Right Eye y: `imagedetect[FEATURE_ID].righteye.y`
  - Mouth x: `imagedetect[FEATURE_ID].mouth.x`
  - Mouth y: `imagedetect[FEATURE_ID].mouth.y`

Coordinate(point) in the video frame. Bottom left is (0, 0), top right is determined by the dimension of the video.

#### True or False

- OSC Address
  - Has Smile: `/(deviceUUID)/hassmile(FEATURE_ID)`
  - Left Eye Closed: `/(deviceUUID)/lefteyeclosed(FEATURE_ID)`
  - Right Eye Closed: `/(deviceUUID)/righteyeclosed(FEATURE_ID)`
- JSON key
  - Has Smile: `imagedetect[FEATURE_ID].hassmile`
  - Left Eye Closed: `imagedetect[FEATURE_ID].lefteye-closed`
  - Right Eye Closed: `imagedetect[FEATURE_ID].righteye-closed`

#### Face Angle

- OSC Address: `/(deviceUUID)/faceangle(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].faceangle`

The rotation of the face. Rotation is measured counterclockwise in degrees, with zero indicating that a line drawn between the eyes is horizontal relative to the image orientation.

#### Tracking ID

- OSC Address: `/(deviceUUID)/trackingID(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].trackingID`

The tracking identifier of the face object. This identifier persists only as long as a face is in the video frame and is not associated with a specific face. In other words, if a face moves out of the video frame and comes back into the frame later, another ID is assigned.

### Outputs for other Detection Types

#### Position

- OSC Address
  - Top Left x: `/(deviceUUID)/topleft(FEATURE_ID)1`
  - Top Left y: `/(deviceUUID)/topleft(FEATURE_ID)2`
  - Top Right x: `/(deviceUUID)/topright(FEATURE_ID)1`
  - Top Right y: `/(deviceUUID)/topright(FEATURE_ID)2`
  - Bottom Left x: `/(deviceUUID)/bottomleft(FEATURE_ID)1`
  - Bottom Left y: `/(deviceUUID)/bottomleft(FEATURE_ID)2`
  - Bottom Right x: `/(deviceUUID)/bottomright(FEATURE_ID)1`
  - Bottom Right y: `/(deviceUUID)/bottomright(FEATURE_ID)2`
- JSON key
  - Top Left x: `imagedetect[FEATURE_ID].topleft.x`
  - Top Left y: `imagedetect[FEATURE_ID].topleft.y`
  - Top Right x: `imagedetect[FEATURE_ID].topright.x`
  - Top Right y: `imagedetect[FEATURE_ID].topright.y`
  - Bottom Left x: `imagedetect[FEATURE_ID].bottomleft.x`
  - Bottom Left y: `imagedetect[FEATURE_ID].bottomleft.y`
  - Bottom Right x: `imagedetect[FEATURE_ID].bottomright.x`
  - Bottom Right y: `imagedetect[FEATURE_ID].bottomright.y`

Coordinate in the video frame. Bottom left is (0, 0), top right is determined by the dimension of the video.

#### QR Message

- OSC Address: `/(deviceUUID)/qrmessage(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].qrmessage`

The string decoded from the detected barcode.
Output only when Detection Type is `QR`.

#### QR Version

- OSC Address
  - QR Message: `/(deviceUUID)/qrversion(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].qrversion`

The version of the QR code. ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity.
Output only when Detection Type is `QR`.

#### QR Mask Pattern

- OSC Address
  - QR Message: `/(deviceUUID)/qrmaskpattern(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].qrmaskpattern`

The QR code's mask pattern.
Output only when Detection Type is `QR`.

#### Error Correction Level

- OSC Address
  - QR Message: `/(deviceUUID)/qrerrorcorrectionlevel(FEATURE_ID)`
- JSON key: `imagedetect[FEATURE_ID].qrerrorcorrectionlevel`


The QR code error correction level, which has following options: **levelL**,  **levelM**, **levelQ**, **levelH**.
Output only when Detection Type is `QR`.


## Detail Settings

### Detection Type

Object type to detect.

- `FACE`: faces
- `QR`: Quick Response codes (a type of 2D barcode)
- `RECT`: rectangular areas
- `TEXT`: texts

### Camera

Which camera to use, `REAR` or `FRONT`.

### Resolution

Resolution of output images to send from the following:

- `VGA`: 640x480
- `HD`: 1280x720
- `FHD`: 1920x1080

### Accuracy

Accuracy of detection. When set `HIGH`, it requires more processing time.

### Tracking

Enable or disable face tracking across frames in the video. Valid only when Detection Type is FACE. When turned `ON`, line color around detected faces varies depending on tracking IDs.

### Number of Face Angles

The number of perspectives to use for detecting a face. At higher numbers of angles, it becomes more accurate, but at a higher computational cost. Valid only when Detection Type is `FACE`.

### Detect Eye Blink

Whether to perform additional processing to recognize closed eyes in detected faces. Valid only when Detection Type is `FACE`.

### Detect Smile

Whether to perform additional processing to recognize smiles in detected faces. Valid only when Detection Type is `FACE`.
