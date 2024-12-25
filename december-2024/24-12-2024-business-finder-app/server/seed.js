const mongoose = require("mongoose");
const faker = require("faker");
const { User } = require("./models/userModel");
const { business: Business } = require("./models/businessModel");
const connectDB = require("./config/connectDb");

const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Business.deleteMany();
    console.log("Deleted users and businesses...");

    // Seed users
    const users = [];
    for (let i = 0; i < 100; i++) {
      users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        profileImg:
          "https://cdn.vectorstock.com/i/2000v/95/56/user-profile-icon-avatar-or-person-vector-45089556.avif",
        plan: faker.random.arrayElement(["Standard", "Gold", "Platinum"]),
        role: faker.random.arrayElement(["user", "businessOwner", "guest"]),
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users added`);

    // Seed businesses
    const businesses = [];
    for (let i = 0; i < 100; i++) {
      const randomOwner = faker.random.arrayElement(createdUsers);
      const randomReviewers = Array.from({ length: 3 }, () =>
        faker.random.arrayElement(createdUsers)
      );
      businesses.push({
        name: faker.company.companyName(),
        businessImg:
          "https://as2.ftcdn.net/v2/jpg/03/84/55/29/1000_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg",
        description: faker.lorem.paragraph(),
        category: faker.commerce.department(),
        owner: randomOwner._id,
        subscribers: [],
        reviews: randomReviewers.map((reviewer) => ({
          userId: reviewer._id,
          comment: faker.lorem.sentence(),
          createdAt: faker.date.recent(),
        })),
      });
    }
    const createdBusinesses = await Business.insertMany(businesses);
    console.log(`${createdBusinesses.length} businesses added`);

    // Close the database connection
    await mongoose.connection.close();
    console.log("Database seeding completed and connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDatabase();
