# Touch

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android supported](https://img.shields.io/badge/Android-supported-brightgreen.svg)

Touch command detects touch events in Start tab and outputs following values:

- Position
- Radius
- Force

Touch command supports multi-touch.
The data for each finger (including Apple Pencil) is accessible with the index.
In this document we call this index `TOUCH_ID`.

## Outputs

### Position

- OSC Address
  - x position: `/(deviceUUID)/touch(TOUCH_ID)1`,
  - y position: `/(deviceUUID)/touch(TOUCH_ID)2`
- JSON key
  - x position: `touches[(TOUCH_ID)].x`
  - y position: `touches[(TOUCH_ID)].y`

`Position` is the relative position of touches from the center of the screen.
The range of values is [-1, -1] to [1, 1].

### Radius

- OSC Address: `/(deviceUUID)/touchradius(TOUCH_ID)`
- JSON key: `touches[(TOUCH_ID)].radius`

`Radius` is the radius of touch event in pixel size.

### Force

- OSC Address: `/(deviceUUID)/touchforce(TOUCH_ID)`
- JSON key: `touches[(TOUCH_ID)].force`

`Force` is the force of 3D Touch, where a value of 1.0 represents the force of an average touch.
