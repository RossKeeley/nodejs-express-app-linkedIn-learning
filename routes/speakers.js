const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    res.json(speakers);
  });

  router.get('/:shortname', (req, res) => res.send(`Detail page of ${req.params.shortname}`));

  return router;
};

// const express = require('express');
//
// const router = express.Router();
//
// module.exports = () => {
//   router.get('/', (req, res) => {
//     return response.send('Speakers list');
//   });
//
//   router.get('/:shortname', (req, res) => {
//     return res.send(`Detail page of ${req.params.shortname}`);
//   });
//
//   return router;
// };
