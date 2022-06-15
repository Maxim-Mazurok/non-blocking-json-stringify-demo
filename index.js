const JsonStreamStringify = require("json-stream-stringify");
const { faker } = require("@faker-js/faker");

const usersNumber = 100;
const users = [];
for (let i = 0; i < usersNumber; i++) {
  users.push({ name: faker.name.findName(), email: faker.internet.email() });
}

process.stdin.resume();
process.stdin.on("data", (data) => console.warn(">>> STDIN data: " + data));
setInterval(() => {
  process.stdin.emit("data", faker.phone.phoneNumber());
}, 0);

const jsonStream = new JsonStreamStringify(users);

jsonStream.on("data", (data) => console.log(`JSON data: ${data}`));
jsonStream.on("end", () => process.exit());
