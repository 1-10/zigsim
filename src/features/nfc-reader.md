# NFC Reader

![Premium Feature](https://img.shields.io/badge/Premium%20Feature-yellow.svg) ![iOS supported](https://img.shields.io/badge/iOS-supported-brightgreen.svg) ![Android not supported](https://img.shields.io/badge/Android-not%20supported-red.svg)

NFC Reader command detects NFC tags and read messages that contain NDEF data.
Output values are defined by the NDEF specification.

One NFC tag can contain multiple messages, and one message can contain multiple records.
Each message is accessible with the index in tag, and each record is accessible with the message.
In this document we call these indexes `MESSAGE_ID` and `RECORD_ID`.

## Outputs

### ID
- OSC Address: `/(deviceUUID)/nfcid(MESSAGE_ID)-(RECORD_ID)`
- JSON key: `nfc[(MESSAGE_ID)][(RECORD_ID)].id`

The identifier of the payload, as defined by the NDEF specification.

### Data
- OSC Address: `/(deviceUUID)/nfcdata(MESSAGE_ID)-(RECORD_ID)`
- JSON key: `nfc[(MESSAGE_ID)][(RECORD_ID)].data`

Data of the payload, as defined by the NDEF specification. Trimming header for the first several bytes is not supported.

### Type Name Format
- OSC Address: `/(deviceUUID)/nfctypenameformat(MESSAGE_ID)-(RECORD_ID)`
- JSON key: `nfc[(MESSAGE_ID)][(RECORD_ID)].typenameformat`

Type Name Format field of the payload, as defined by the NDEF specification.

### Type
- OSC Address: `/(deviceUUID)/nfctype(MESSAGE_ID)-(RECORD_ID)`
- JSON key: `nfc[(MESSAGE_ID)][(RECORD_ID)].type`

Type of the payload, as defined by the NDEF specification.
