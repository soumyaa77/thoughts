const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    postedDate: String,
    image: String,
    imageFile: {
      data: Buffer,
      contentType: String
    }
})

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
