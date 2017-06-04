var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: { type: String, required: true },
  author String,
  upvotes: { type: Number, default: 0 },
  post: { type:mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

CommentSchema.method.upvote =function(callback) {
  this.upvotes += 1;
  this.save(callback);
};

CommentSchema.method.downvote = function(callback) {
  this.upvotes -= 1;
  this.save(callback);
}

mongoose.model('Comment', CommentSchema);
