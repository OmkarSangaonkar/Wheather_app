const request = require("request");

const forecast = (location, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=e107891fa3a6448abf5181645212810 &q=${location}&aqi=yes`;
  request({ url: url, json: true }, function (error, response, body) {
    // console.log(error, typeof body);
    if (error) {
      callback("error while loading page", undefined);
    } else {
      callback(undefined, response.body);
    }
    // console.log("body:", responce.body); // Print the HTML for the Google homepage.
  });
};

module.exports = forecast;
