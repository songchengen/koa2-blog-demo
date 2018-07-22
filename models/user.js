/**
 * @author songchengen
 * @date 2018/7/20
 * @description user models
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String },
  login_name: { type: String },
  password: { type: String },
  email: { type: String },
  url: { type: String },
  profile: { type: String },
  weibo: { type: String },
  avatar: { type: String },
  githubUsername: { type: String },
  last_login: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

mongoose.model('User', UserSchema);
