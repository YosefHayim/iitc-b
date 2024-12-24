import mongoose from "mongoose";
import faker from "faker";
import { User } from "./models/userModel";
import { Business } from "./models/businessModel";
import connectDB from "./config/connectDb";

const seedDatabase = async (): Promise<void> => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Business.deleteMany();

    // Seed users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        plan: faker.random.arrayElement(["Standard", "Gold", "Platinum"]),
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
    const createdBusinesses = await Business.insertMany(businesses);
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
