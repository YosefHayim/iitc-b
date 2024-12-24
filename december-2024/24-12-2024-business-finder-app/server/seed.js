const mongoose = require("mongoose");
const faker = require("faker");
const { User } = require("./models/userModel");
const { business } = require("./models/businessModel");
const connectDB = require("./config/connectDb");

const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await business.deleteMany();

    // Seed users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        plan: faker.random.arrayElement(["Standard", "Gold", "Platinum"]),
        role: faker.random.arrayElement(["user", "businessOwner", "guest"]),
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users added`);

    // Seed businesses
    const businesses = [];
    for (let i = 0; i < 15; i++) {
      const randomOwner = faker.random.arrayElement(createdUsers);
      businesses.push({
        name: faker.company.companyName(),
        description: faker.lorem.paragraph(),
        category: faker.commerce.department(),
        owner: randomOwner._id,
        subscribers: [],
        reviews: [
          {
            userId: randomOwner._id,
            comment: faker.lorem.sentence(),
            createdAt: faker.date.recent(),
          },
        ],
      });
    }
    const createdBusinesses = await business.insertMany(businesses);
    console.log(`${createdBusinesses.length} businesses added`);

    await mongoose.connection.close();
    console.log("Database seeding completed and connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDatabase();
