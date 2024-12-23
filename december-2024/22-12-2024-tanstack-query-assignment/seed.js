const mongoose = require("mongoose");
const faker = require("faker");
const User = require("./models/userModel"); // Adjust path as needed
const Post = require("./models/postModel"); // Adjust path as needed

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await User.deleteMany();
    await Post.deleteMany();
    console.log("Existing data cleared");

    // Seed users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
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
      });
    }
    const createdPosts = await Post.insertMany(posts);
    console.log(`${createdPosts.length} posts added`);

    // Close connection
    mongoose.connection.close();
    console.log("Database seeding completed and connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
