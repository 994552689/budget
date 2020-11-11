const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

// Create global connection 
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/bugeting';
const db = pgp(connectionString);

// Query functions

module.exports = {
  getAllEnvelopes: getAllEnvelopes,
  getSingleEnvelopes: getSingleEnvelopes,
  createEnvelopes: createEnvelopes,
  updateEnvelopes: updateEnvelopes,
  removeEnvelopes: removeEnvelopes
};

const getAllEnvelopes = (req, res, next) => {
  db.any('select * from envelopes')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Envelopes'
        });
    })
    .catch((err) => {
      return next(err);
    });
}

const getSingleEnvelopes = (req, res, next) => {
  let envelopeID = parseInt(req.params.id);
  db.one('select * from envelopes where id = $1', envelopeID)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved'
        });
    })
    .catch((err) => {
      return next(err);
    });
}
// TODO: function createPuppy(req, res, next){};
// TODO: function updatePuppy(req, res, next) {};
// TODO: function removePuppy(req, res, next) {};