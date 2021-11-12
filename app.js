const { response, json } = require("express");
const request = require("request");

// const url =
//   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune/today?unitGroup=metric&key=LVMVBW74SDGZLZQBXVWELSRGW&include=hours%2Calerts%2Ccurrent%2Cevents";

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body);
//   //   console.log(data);

//   console.log(response.body);

//   //   console.log(
//   //     `It is currently ${response.body.currentConditions.temp} degress and there is  ${response.body.currentConditions.precip}% chance of rain`
//   //   );
// });

// const geoBody =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoiZ2hvc3Rpc21lIiwiYSI6ImNrdmI3bmJrdjA5NWgydXFuczFzcXJwOXgifQ._jo_PtgFk1r0hpFZPN921w&limit=1";

// request({ url: geoBody, json: true }, (error, response) => {
//   const longitude = response.body.features[0].center[0];
//   const lattitude = response.body.features[0].center[1];

//   console.log(`longitude= ${longitude}, lattitude= ${lattitude}`);
// });

// const url =
//   "https://api.weatherapi.com/v1/current.json?key=e107891fa3a6448abf5181645212810 &q=pune&aqi=yes";

// const geocode = (location, callback) => {
//   const url = `https://api.weatherapi.com/v1/current.json?key=e107891fa3a6448abf5181645212810 &q=${location}&aqi=yes`;

//   request({ url, json: true }, function (error, response, body) {
//     console.log(error, typeof body);
//     if (body.error) {
//       callback(body.error);
//     } else {
//       callback(undefined, body);
//     }
// console.log("body:", body); // Print the HTML for the Google homepage.
//   });
// };

// geocode("pune", (error, data) => {
//   console.log("error: ", error);
//   console.log("data: ", data);
// });
