# Touch

Touch command detects touch events in Start tab and outputs following values:

- Position
- Radius
- Force

Touch command supports multi-touch up to 4 fingers.
The data for each finger is accessible with the index from 0 to 3.
In this document we call this index `FINGER_ID`.

## Outputs

### Position

- OSC Address
  - x position: `/(deviceUUID)/touch(FINGER_ID)1`,
  - y position: `/(deviceUUID)/touch(FINGER_ID)2`
- JSON key
  - x position: `touches[(FINGER_ID)].x`
  - y position: `touches[(FINGER_ID)].y`

`Position` is the relative position of touches from the center of the screen.
The range of values is [-1, -1] to [1, 1].

### Radius

- OSC Address: `/(deviceUUID)/touchradius(FINGER_ID)`
- JSON key: `touches[(FINGER_ID)].radius`

`Radius` is the radius of touch event in pixel size.

### Force

- OSC Address: `/(deviceUUID)/touchforce(FINGER_ID)`
- JSON key: `touches[(FINGER_ID)].force`

`Force` is the force of 3D Touch.
