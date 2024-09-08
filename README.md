# Ecowitt Soil Moisture

A [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) Module to display your hungry plants using [soil moisture meter](https://shop.ecowitt.com/en-de/products/wh51) via [ecowitt wifi gateway](https://shop.ecowitt.com/en-de/products/gw1100).

## Installation

1. Clone the Repo into your MagicMirror modules folder `git clone git@github.com:jakobgoerke/MMM-ecowitt-soil-moisture.git`
2. Install dependencies & build `cd MMM-ecowitt-soil-moisture && npm install`
3. [Configure](#configuration) and enjoy

## Configuration

| Property         | Type     | Required | Default | Description                      |
| ---------------- | -------- | :------: | ------- | -------------------------------- |
| `url`            | `string` |    ✔︎    |         | Url of your ecowitt wifi gateway |
| `updateInterval` | `number` |    ✔︎    | 60000   | Interval to fetch data in ms.    |
