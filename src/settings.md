# General Settings

## Data Destination

Choose the protocol to serve data between `LOCAL FILE` or `OTHER APP`.
If `LOCAL FILE` is chosen, the output data is written to a file in the device file system..
In `OTHER APP` is chosen, the output data is sent to the destination IP address set in `IP Address` setting.

## Protocol

Choose the protocol to serve data between `TCP` or `UDP`.

## IP Address

Set the destination ip address to send data.

## Port Number

Set the destination port number to send data.

## Message Format

Choose the format of data between `JSON` or `OSC`.

In `JSON` mode, the output data is serialized to a JSON string.
The JSON string contains output data of enabled features and device information.

In `OSC` mode, the output data is serialized to a OSC bundle.
The output data of enabled features and device information are converted to OSC messages respectively and bundled into a OSC bundle.

## Massage Rate

Choose the message rate from `1`, `10`, `30` and `60`.
The default value is 10 (10 messages per second).

## Device UUID

Set the UUID to discriminate the output messages from other device.
