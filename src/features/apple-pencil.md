# Apple Pencil

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

Apple Pencil command detects touch events in Start tab (same as Touch command).
Note that it only works on Apple Pencil compatible devices, that are some of iPad models.

This command works based on Touch command, and it supports multi-touch.
The data for each finger (including Apple Pencil) is accessible with the index.
In this document we call this index `TOUCH_ID`.

## Outputs

### Touch

- OSC Address
  - x position: `/(deviceUUID)/penciltouch(TOUCH_ID)1`,
  - y position: `/(deviceUUID)/penciltouch(TOUCH_ID)2`
- JSON key
  - x position: `pencil[(TOUCH_ID)].x`
  - y position: `pencil[(TOUCH_ID)].y`

The relative position of touches from the center of the screen.
The range of values is [-1, -1] to [1, 1].

### Altitude

- OSC Address: `/(deviceUUID)/pencilaltitude(TOUCH_ID)`
- JSON key: `pencil[(TOUCH_ID)].altitude`

The altitude (in radians) of the stylus. A value of 0 indicates that the stylus is parallel to the surface. The value is Pi/2 when the stylus is perpendicular to the surface.

### Azimuth

- OSC Address: `/(deviceUUID)/pencilazimuth(TOUCH_ID)`
- JSON key: `pencil[(TOUCH_ID)].azimuth`

The azimuth angle (in radians) of the stylus. In the plane of the screen, the azimuth angle is the direction in which the stylus is pointing. It increases as the user swings the cap end of the stylus in a clockwise direction around the tip.

### Force

- OSC Address: `/(deviceUUID)/pencilforce(TOUCH_ID)`
- JSON key: `pencil[(TOUCH_ID)].force`

The force of 3D Touch, where a value of 1.0 represents the force of an average touch.
