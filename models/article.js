/**
 * @author songchengen
 * @date 2018/7/21
 * @description article models
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  user_id: { type: Schema.ObjectId },
  is_top: { type: Boolean, default: false },
  is_lock: { type: Boolean, default: false },
  reply_count: { type: Number, default: 0 },
  visit_count: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  last_reply: { type: Schema.ObjectId },
  last_reply_at: { type: Date, default: Date.now },
  tab: { type: String },
  is_deleted: { type: Boolean, default: false },
});

mongoose.model('Article', ArticleSchema);
