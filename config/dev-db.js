const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  'uri': 'mongodb://localhost:27017/' + this.db,
  //{useNewUrlParser: true, useUnifiedTopology: true},
  secret: crypto,
  db: 'mean-ng'
}
