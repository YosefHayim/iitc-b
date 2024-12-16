const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const followerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: { createdAt: "followedAt", updatedAt: false },
    versionKey: false,
  }
);

module.exports = mongoose.model("Follower", followerSchema);
