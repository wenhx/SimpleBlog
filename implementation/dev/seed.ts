import { createConnection } from "typeorm";
import { User } from "../src/entities/User";
import { sha1, log } from "../src/util";

createConnection().then(async connection => {
    log("Start seeding");
    const created = new Date().toISOString();
    const name1 = "admin";
    const name2 = "user2";
    const password = sha1("1234abcd" + created);

    const user1 = createUser({ name: name1, displayName: "Administrator", password: password, isAdmin: true, created: created });
    const user2 = createUser({ name: name2, displayName: "User1", password: password, isAdmin: false, created: created });
    await connection.manager.save([user1, user2])
    log("Users created.");
}).catch(error => console.log("Error: ", error));

function createUser(user : object) : User {
    const entity = new User();
    Object.assign(entity, user);
    return entity;
}