import mongoose from "mongoose";

var blogSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    thumbnail: String,
    cost: Number,
    duration: Number,
    contents: [{ contentType: String, content: String }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    itinerary: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: "Itinerary",
    },
  },
  { timestamps: true }
);

export default mongoose.model("blogs", blogSchema);
