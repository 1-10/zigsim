# Compass

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android supported](https://img.shields.io/badge/Android-supported-brightgreen.svg)

Compass command detects azimuth angle and outputs following values:  
- **compass**:  
  Azimuth angle. North is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. A negative value indicates an invalid direction.  
- **orientation**:  
The orientation of device. This can be set in the detail settings.

## Outputs

- OSC Address:`/(deviceUUID)/compass`  
  Values are in the order of **compass** and **orientation**.  
  The orientation value is **1** for FACEUP and **0** for PORTRAIT.
- JSON key:
  - compass:`compass.compass`
  - orientation:`compass.orientation`  
  The orientation value is **true** for FACEUP and **false** for PORTRAIT.
## Detail Settings

Users can switch the orientation of device in detail settings:

- **PORTRAIT**: The device is held upright and the home button at the bottom.
- **FACEUP** : The device is held parallel to the ground with the screen facing upwards.
