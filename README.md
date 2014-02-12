# azimuth [![Build Status](https://secure.travis-ci.org/vxtindia/azimuth.png?branch=master)](http://travis-ci.org/vxtindia/azimuth)

Determines azimuth (compass direction) & distance of the second point (B) as seen from the first point (A), given latitude, longitude & elevation of two points on the Earth

## Original Author
Moulded from [Don Cross](http://cosinekitty.com/)'s [Azimuth/Distance Calculator](http://cosinekitty.com/compass.html)

## Getting Started
Install the module with: `npm install azimuth`

```javascript
var calculate = require('azimuth');
calculate.azimuth({
  lat: 18.513929,
  lng: 73.924475,
  elv: 561.9
}, {
  lat: 18.513964,
  lng: 73.924471,
  elv: 562
}); // "{ distance: 3.9191090699705464, azimuth: 353.8149364508667, altitude: 1.3478271564744548 }"
```

## Tests
To run tests

````
npm test
````

or

````
grunt nodeunit
````

## License
Copyright (c) 2014 Debjeet Biswas
Licensed under the MIT license.