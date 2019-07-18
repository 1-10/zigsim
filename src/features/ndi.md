# NDI™

NDI command transmits video and audio captured by the device over NDI protocol.
Unlike other features, NDI does not output any data over TCP/UDP.
Video and audio are transmitted over NDI protocol, so you can receive the data with NDI client apps like [NewTek NDI Video Monitor](https://www.newtek.com/ndi/tools/), [TouchDesigner](https://www.derivative.ca/), etc.

The framerate follows the message rate in general settings.

You cannot use NDI, ARKit and Image Detection simultaneously.

## Outputs

No outputs.

## Detail Settings

### Image Type

- `CAMERA`: send images captured by camera.
- `DEPTH`: send depth maps captured by camera.

### Camera

Toggle camera between `REAR` and `FRONT`.

### Depth Type

- `DEPTH`: capture depth map.
- `DISPARITY`: capture disparity map.

### Resolution

Choose the resolution of output images to send from the following:

- `VGA`: 640x480
- `HD`: 1280x720
- `FHD`: 1920x1080

### Audio

If `ON`, ZIG SIM will capture the audio from the microphone and send it over NDI protocol.

### Audio Latency

Choose the audio latency from `LOW`, `MEDIUM` and `HIGH`.
This setting changes the size of audio buffer used to store the audio data.

In `LOW` mode the latency of the received audio will be small, but may cause audio glitch.
In `HIGH` mode the audio will latency gets longer, but the quality will be more stable.

## Acknowledgement

NDI™ is a trademark of NewTek, Inc.
For more detail of NDI, See [http://NDI.NewTek.com/](http://NDI.NewTek.com/)
