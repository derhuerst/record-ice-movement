# record-ice-movement

**Record the movement of any [ICE](https://en.wikipedia.org/wiki/Intercity-Express) using the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/record-ice-movement.svg)](https://www.npmjs.com/package/record-ice-movement)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/record-ice-movement.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


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
Options:
    --continue-on-train-change  Stop recording as soon as the Triebzugnummer
                                 reported by the on-board WiFi changes, e.g.
                                 when your client accidentally connects to
                                 the WiFi of a different train.
                                 Default: false
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


## Related

- [*Was das neue Bahn-Wifi über seine Nutzer ausplaudert*](https://hannover.ccc.de/~nexus/dbwifi/)
- [`wifi-on-ice-position-stream`](https://github.com/derhuerst/wifi-on-ice-position-stream) – A stream of ICE positions, taken from the on-board WiFi.
- [`wifi-on-ice-portal-client`](https://github.com/derhuerst/wifi-on-ice-portal-client) – Query information from the WifiOnICE portal in German ICE trains.
- [`record-tgv-movement`](https://github.com/derhuerst/record-tgv-movement) – Record the movement of any [TGV](https://en.wikipedia.org/wiki/TGV) using the on-board WiFi.
- [`record-flixbus-movement`](htttps://github.com/derhuerst/record-flixbus-movement) – Command-line tool to record the movement of a [Flixbus](https://flixbus.de) coach using the on-board WiFi.


## Contributing

If you have a question or have difficulties using `record-ice-movement`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/record-ice-movement/issues).
