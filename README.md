# geolocation
#### Author: Steve Haskins

### Description

This fantastic little code will allow you to see your current location using the [google static maps api](https://developers.google.com/maps/documentation/staticmaps/ "Google static maps"). 


### Usage
Simply go to the index page and you will be presented with a static map, with your location indicated with a blue marker. It will also indicate your current latitude and longitude. *Incredibly easy to use or place on your own website!*

### How it works
Primarily using Javascript, the code first detects whether or not you are using a device with location services enabled. If you are not you will receive a notification that you do not have that setting enabled. If you are, it will attempt to determine your location with as high accuracy as possible at first, and if GPS is unavailable it will use less accurate methods until it can find your general area. The coordinates are then fed into a dynamically created [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial "Mozilla Canvas Tutorial") tag, with your coordinates inserted into a [static maps](https://developers.google.com/maps/documentation/staticmaps/ "Google static maps") link.

The key functionalities used are:
- navigator.geolocation
- [Google Static Maps](https://developers.google.com/maps/documentation/staticmaps/ "Google static maps").
- Dynamically created html