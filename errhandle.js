const { response } = require("express");
const request = require("request");

const myurl =
  "https://api.weatherapi.com/v1/current.json?key=e107891fa3a6448abf5181645212810 &q=pune&aqi=yes";

request({ url: myurl, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body);
  //   console.log(data);
  //   console.log(
  //     `It is currently ${response.body.currentConditions.temp} degress and there is  ${response.body.currentConditions.precip}% chance of rain`
  //   );

  if (error) {
    console.log("Unable to connect please check internet connection");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      `It is currently ${response.body.current.temp_c} degress and there is  ${response.body.current.precip_mm}% chance of rain`
    );
  }

  //   console.log();
});
