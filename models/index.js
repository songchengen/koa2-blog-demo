/**
 * @author songchengen
 * @date 2018/7/20
 * @description models
 */

const mongoose = require('mongoose');
const { db } = require('./../config');

mongoose.connect(`mongodb://${db.url}:${db.port}/${db.database}`, {
  poolSize: 10,
  useMongoClient: true,
}, (err) => {
  if (err) process.exit(1);
});

require('./user');
require('./article');
require('./reply');

exports.User = mongoose.model('User');
exports.Article = mongoose.model('Article');
exports.Reply = mongoose.model('Reply');
