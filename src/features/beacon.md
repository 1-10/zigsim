# Beacon

Beacon command detects iBeacons around the device.

ZIG SIM detects all beacons with specified beacon UUID as long as the device can track.
The data for each beacon is accessible with the index from 0.
In this document we call this index `BEACON_ID`.

## Outputs

### BeaconUUID

- OSC Address: `/(deviceUUID)/beacon(BEACON_ID)` (1st value)
- JSON key: `beacon[(BEACON_ID)].uuid`

The UUID of the beacon.
This is always same as the beacon UUID specified in the detail settings.

### Major

- OSC Address: `/(deviceUUID)/beacon(BEACON_ID)` (2st value)
- JSON key: `beacon[(BEACON_ID)].major`

The identifier to differentiate groups of beacons with the same UUID.

### Minor

- OSC Address: `/(deviceUUID)/beacon(BEACON_ID)` (3rd value)
- JSON key: `beacon[(BEACON_ID)].minor`

The identifier to differentiate groups of beacons with the same UUID and major value.

### RSSI

- OSC Address: `/(deviceUUID)/beacon(BEACON_ID)` (4th value)
- JSON key: `beacon[(BEACON_ID)].rssi`

The strength of the signal from the beacon.
The value is always negative (larger is stronger).

## Detail Settings

### Beacon UUID

Specify the beacon uuid to track.

UUID must be in the format: `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`.
All characters must be alphabetical letters (A-Z) or numbers (0-9).
