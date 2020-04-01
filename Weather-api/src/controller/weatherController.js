const axios = require("axios");
const { API_URL, APP_Id } = require("../constants/constans");

const GetByCityName = async (req, res) => {
  const city = req.query.city;
  const url = `${API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${APP_Id}`;

  try {
    const { data } = await axios.get(url);
    return res.send({ ...data });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const GetByZipCode = async (req, res) => {
  const zipcode = req.params.zipcode;
  try {
    const {data}= await axios.get(
      `${API_URL}/data/2.5/weather?zip=${zipcode}&units=metric&appid=${APP_Id}`
    );
    return res.send({ ...data });

  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const GetByCitiesName = async (req, res) => {
  const cities = req.params.cities;
  try {
    const {data}= await axios.get(
      `${API_URL}/data/2.5/weather?q=${cities}&units=metric&appid=${APP_Id}`
    );
    return res.send({ ...data });

  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  GetByZipCode,
  GetByCityName,
  GetByCitiesName
};
