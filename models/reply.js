/**
 * @author songchengen
 * @date 2018/7/21
 * @description reply models
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = Schema;

const ReplySchema = new Schema({
  content: { type: String },
  article_id: { type: ObjectId },
  user_id: { type: ObjectId },
  reply_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  be_deleted: { type: Boolean, default: false },
});

mongoose.model('Reply', ReplySchema);
