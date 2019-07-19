# Mic Level

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

Mic Level command detects sound level around the device and outputs following values:

- **max**: Peak RMS power of the mic input. Max value is 0.
- **average**: Average RMS power of the mic input. Max value is 0.

## Outputs

- OSC Address:`/(deviceUUID)/miclevel`  
Values are in the order of **max** and **average**.
- JSON key:
  - max:`miclevel.max`
  - average:`miclevel.average`
