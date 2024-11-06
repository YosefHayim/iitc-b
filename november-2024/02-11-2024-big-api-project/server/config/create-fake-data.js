import { faker } from "@faker-js/faker";
import { userModelSchema } from "../models/user-schema-creation.js";
import { projectModelSchema } from "../models/project-schema-creation.js";
import { taskModelSchema } from "../models/task-schema-creation.js";
import { encryptedPw } from "../utils/encrypt-pw.js";
import { commentModelSchema } from "../models/comment-schema-creation.js";

const injectData = async () => {
  const users = await userModelSchema.insertMany(
    await Promise.all(
      Array.from({ length: 10 }).map(async () => ({
        profileImg: faker.image.avatar(),
        fName: faker.person.firstName(),
        lName: faker.person.lastName(),
        email: faker.internet.email(),
        password: await encryptedPw(
          faker.internet.password(6),
          process.env.SECRET_KEY
        ),
        role: faker.helpers.arrayElement(["Member"]),
      }))
    )
  );

  const projects = await projectModelSchema.insertMany(
    Array.from({ length: 10 }).map(() => ({
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

  const tasks = await taskModelSchema.insertMany(
    Array.from({ length: 10 }).map(() => ({
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      status: faker.helpers.arrayElement(["To Do", "In progress", "Done"]),
      dueDate: faker.date.future(),
      user: faker.helpers.arrayElement(users)._id,
      project: faker.helpers.arrayElement(projects)._id,
    }))
  );

  // const comments = await commentModelSchema.insertMany(
  //   Array.from({ length: })
  // )
};

export { injectData };
