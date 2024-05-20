import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true  },
    name: { type: String, required: true },    // Assuming 'name' as a String directly. Adjust if it's a reference.
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],  
    date: { type: Date, default: Date.now }    // 'date' will automatically set to current date/time if not provided.
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
 