const axios = require("axios");

const getLugarLatLng = async (dir) => {
  const direccionUlr = encodeURI(dir);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionUlr}`,
    headers: {
      "x-rapidapi-key": "f3dabead8dmsh97de5c51658f528p13f0aajsncb9012ddd80f",
    },
  });

  const resp = await instance.get()
  if (resp.data.Results.length === 0){
      throw new Error(`No hay resultados para este cuidad ${dir}`)
  }
  const data = resp.data.Results[0]
  const direccion = data.name
  const lat = data.lat
  const lng = data.lon

  return {
      direccion,
      lat,
      lng
  }
};

module.exports = {
  getLugarLatLng,
};

