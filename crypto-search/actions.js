const axios = require('axios');

const baseLink = 'http://localhost:8082/';

const actions = {
  delta: 'delta',
  keygen: 'keygen',
};

const delta = async (k1, k2) => {
  const formData = new FormData();

  formData.append('action', actions.delta);
  formData.append('k1', k1);
  formData.append('k2', k2);

  const result = await axios.get(baseLink, formData);
  return result.data;
};
