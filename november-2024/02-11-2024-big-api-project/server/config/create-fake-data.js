import { faker } from "@faker-js/faker";
import { userModelSchema } from "../models/user-schema-creation.js";
import { projectModelSchema } from "../models/project-schema-creation.js";
import { taskModelSchema } from "../models/task-schema-creation.js";

const injectData = async () => {
  const users = await userModelSchema.insertMany(
    Array.from({ length: 3 }).map(() => ({
      fName: faker.person.firstName(),
      lName: faker.person.lastName(),
      age: faker.number.int({ min: 1, max: 65 }),
      birthDate: faker.date.past(30, new Date("2003-01-01")),
      location: {
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
      },
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(["Admin", "Member"]),
    }))
  );

  const projects = await projectModelSchema.insertMany(
    Array.from({ length: 3 }).map(() => ({
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(2),
      status: faker.helpers.arrayElement([
        "Not Started",
        "In Progress",
        "Completed",
      ]), // Updated line
      user: faker.helpers.arrayElement(users)._id, 
    }))
  );

  await taskModelSchema.insertMany(
    Array.from({ length: 20 }).map(() => ({
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      status: faker.helpers.arrayElement(["To Do", "In progress", "Done"]),
      dueDate: faker.date.future(),
      user: faker.helpers.arrayElement(users)._id, 
      project: faker.helpers.arrayElement(projects)._id,
    }))
  );
};

export { injectData };
