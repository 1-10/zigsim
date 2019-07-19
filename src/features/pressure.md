# Pressure

![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android supported](https://img.shields.io/badge/Android-supported-brightgreen.svg)

Pressure command detects altitude events and outputs following values:

- **pressure** [hPa]
- **altitude** [meter]

## Outputs

- OSC Address:`/(deviceUUID)/pressure`  
Values are in the order of **pressure** and **altitude**.
- JSON key:
  - pressure:`pressure.pressure`  
  - altitude:`pressure.altitude`
