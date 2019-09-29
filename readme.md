# record-ice-movement

**Record the movement of any [ICE](https://en.wikipedia.org/wiki/Intercity-Express) using the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/record-ice-movement.svg)](https://www.npmjs.com/package/record-ice-movement)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/record-ice-movement.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install -g record-ice-movement
```

Or just use [`npx`](https://npmjs.com/package/npx):

```shell
npx record-ice-movement >file.ndjson
```


## Usage

```shell
Usage:
    record-ice-movement >file.ndjson
```

The JSON format matches [`record-tgv-movement`](https://npmjs.com/package/record-tgv-movement) where possible:

```json
{
	"ok": true,
	"servicelevel": "AVAILABLE_SERVICE",
	"internet": "HIGH",
	"gpsOk": true,
	"speed": 193,
	"latitude": 52.208488,
	"longitude": 13.22468,
	"wagonClass": "SECOND",
	"navigationChange": "2019-09-14-03-45-10",
	"series": "415",
	"tzn": "Tz1505",
	"serverTime": 1568445967225,
	"clientTime": 1568445967156
}
```


## Contributing

If you have a question or have difficulties using `record-ice-movement`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/record-ice-movement/issues).
