const axios = require('axios');

const baseLink = 'http://localhost:8082/';

const actions = {
  keygen: 'keygen',
  delta: 'delta',
  token: 'token',
  adjust: 'adjust',
};

const argsToFormData = (args) => {
  const formData = new FormData();

  Object.keys(args).forEach((arg) => {
    formData.append(arg, args[arg]);
  });

  return formData;
};

const baseRequest = async (args) => {
  const result = await axios.get(baseLink, argsToFormData(args));
  return result.data;
};

const keygen = async () => baseRequest({ action: actions.keygen });

const delta = async (k1, k2) => baseRequest({ action: actions.delta, k1, k2 });

const token = async (k, word) =>
  baseRequest({ action: actions.token, k, word });

const adjust = async (tok, delta) =>
  baseRequest({ action: actions.adjust, tok, delta });

export { actions, keygen, delta, token, adjust };
