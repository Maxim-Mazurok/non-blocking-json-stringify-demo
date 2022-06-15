const { faker } = require("@faker-js/faker");

const usersNumber = 1000000;
const users = [];
for (let i = 0; i < usersNumber; i++) {
  users.push({ name: faker.name.findName(), email: faker.internet.email() });
}

process.stdin.resume();
process.stdin.on("data", (data) => console.warn(">>> STDIN data: " + data));
setInterval(() => {
  process.stdin.emit("data", faker.phone.phoneNumber());
}, 0);

const string = JSON.stringify(users);
console.log(string.substring(0, 100));
process.exit();
