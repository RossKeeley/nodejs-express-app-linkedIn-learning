const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('Feeback page'));

  router.post('/', (req, res) => res.send('Feedback form posted'));

  return router;
};

// const express = require('express');
//
// const router = express.Router();
//
// module.exports = () => {
//   router.get('/', (req, res) => {
//     return response.send('Feeback page');
//   });
//
//   router.post('/', (req, res) => {
//     return res.send('Feedback form posted');
//   });
//
//   return router;
// };
