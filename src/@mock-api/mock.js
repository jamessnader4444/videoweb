const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');

const mock = new MockAdapter(axios, { delayResponse: 0 });
// mock.restore();
export default mock;
