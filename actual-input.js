const JsonStreamStringify = require("json-stream-stringify");
const { faker } = require("@faker-js/faker");

const usersNumber = 1000000;
const users = [];

console.log(
  "Please wait while we generate a big JS object, we'll let you know when to start typing"
);
for (let i = 0; i < usersNumber; i++) {
  users.push({ name: faker.name.findName(), email: faker.internet.email() });
}

process.stdin.resume();
process.stdin.on("data", (data) => console.warn(">>> STDIN data: " + data));

console.log("Type something and press enter:");

const jsonStream = new JsonStreamStringify(users);

setInterval(() => console.log("still stringifying....\n"), 5000);

let string = "";

jsonStream.on("data", (data) => (string += data));
jsonStream.on("end", () => {
  console.log("Done stringifying!", string.substring(0, 100));
  process.exit();
});
