const mongoose = require("mongoose");
const faker = require("faker");
const User = require("./models/userModel");
const Post = require("./models/postModel");
const connectDB = require("./config/connectDb");

const seedDatabase = async () => {
  try {
    connectDB();

    await User.deleteMany();
    await Post.deleteMany();

    // Seed users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const firstName = faker.name.firstName();
      users.push({
        firstName: firstName.length >= 5 ? firstName : firstName.padEnd(5, "a"),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        profileImg: faker.image.avatar(),
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users added`);

    // Seed posts
    const posts = [];
    for (let i = 0; i < 30; i++) {
      const randomUser = faker.random.arrayElement(createdUsers);
      posts.push({
        title: faker.lorem.words(5),
        postContent: faker.lorem.paragraphs(2),
        authorName: `${randomUser.firstName} ${randomUser.lastName}`,
        authorId: randomUser._id,
        postImg: faker.image.imageUrl(), // Add post image
      });
    }
    const createdPosts = await Post.insertMany(posts);
    console.log(`${createdPosts.length} posts added`);

    mongoose.connection.close();
    console.log("Database seeding completed and connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
