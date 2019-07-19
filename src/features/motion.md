# Motion Data

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android supported](https://img.shields.io/badge/Android-supported-brightgreen.svg)

There are 4 commands related to motion data: **Acceleration**, **Gravity**, **Gyro**, **Quaternion**.

## Acceleration

Acceleration command detects acceleration that the user is giving to the device.
Values are in G's (gravitational force) for X, Y and Z axis.

### Outputs

- OSC Address:`/(deviceUUID)/accel`  
  Values are in the order of x, y, z.
- JSON key
  - x value: `accel.x`
  - y value: `accel.y`
  - z value: `accel.z`

## Gravity

Gravity command detects gravity acceleration vector expressed in the device's reference frame.
Values are in G's (gravitational force) for X, Y and Z axis.

### Outputs

- OSC Address:`/(deviceUUID)/gravity`  
  Values are in the order of x, y, z.
- JSON key
  - x value: `gravity.x`
  - y value: `gravity.y`
  - z value: `gravity.z`

## Gyro

Gyro command detects rotation rate of the device.
Values contain a measurement of gyroscope data whose bias has been removed by Core Motion algorithms.
Values are in radians per second around X, Y and Z axis.

### Outputs

- OSC Address:`/(deviceUUID)/gyro`  
  Values are in the order of x, y, z.
- JSON key
  - x value: `gyro.x`
  - y value: `gyro.y`
  - z value: `gyro.z`

## Quaternion

Quaternion command detects attitude of the device, that is, the orientation of a body relative to a given frame of reference.
Values are quaternion for X, Y, Z and W axis.

### Outputs

- OSC Address:`/(deviceUUID)/quaternion`  
  Values are in the order of x, y, z, w.
- JSON key
  - x value: `quaternion.x`
  - y value: `quaternion.y`
  - z value: `quaternion.z`
  - z value: `quaternion.w`
