const { response } = require("express");
const request = require("request");

const geoBody =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoiZ2hvc3Rpc21lIiwiYSI6ImNrdmI3bmJrdjA5NWgydXFuczFzcXJwOXgifQ._jo_PtgFk1r0hpFZPN921w&limit=1";

request({ url: geoBody, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect please check internet connection");
  } else if (response.body.features.length == 0) {
    console.log("unable to load page plese check address");
  } else {
    const longitude = response.body.features[0].center[0];
    const lattitude = response.body.features[0].center[1];

    console.log(`longitude= ${longitude}, lattitude= ${lattitude}`);
  }
});
