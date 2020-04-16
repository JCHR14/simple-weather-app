const axios = require("axios");

const getClima =  async (lat, lng) => {
    const apikey = "7d4f88121360feb5d946d33e46077b68";
    const resp = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric`
    );
    return resp
}


module.exports = {
  getClima,
};