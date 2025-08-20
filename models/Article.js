import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  tags: [String]
}, { timestamps: true });

export default mongoose.model('Article', articleSchema);