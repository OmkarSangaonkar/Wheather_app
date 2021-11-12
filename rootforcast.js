const request = require("request");
const forecast = require("./forcast");

forecast("pune", (error, data) => {
  console.log("error: ", error);
  console.log("data: ", data);
});
