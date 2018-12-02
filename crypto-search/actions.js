const axios = require('axios');

const baseLink = 'http://localhost:8082/';

const actions = {
  keygen: 'keygen',
  delta: 'delta',
  token: 'token',
  adjust: 'adjust',
};

const keygen = async () => {
  const formData = new FormData();
  formData.append('action', actions.keygen);
  const result = await axios.get(baseLink, formData);
  return result.data;
};

const delta = async (k1, k2) => {
  const formData = new FormData();

  formData.append('action', actions.delta);
  formData.append('k1', k1);
  formData.append('k2', k2);

  const result = await axios.get(baseLink, formData);
  return result.data;
};

const token = async (k, word) => {
  const formData = new FormData();

  formData.append('action', actions.token);
  formData.append('k1', k);
  formData.append('k2', word);

  const result = await axios.get(baseLink, formData);
  return result.data;
};

const adjust = async (tok, delta) => {
  const formData = new FormData();

  formData.append('action', actions.adjust);
  formData.append('tok', tok);
  formData.append('delta', delta);

  const result = await axios.get(baseLink, formData);
  return result.data;
};
