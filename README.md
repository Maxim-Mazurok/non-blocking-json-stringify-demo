# Non-blocking JSON Stringify Demo

This is a demo for the [Async stringify (serialize) to JSON in javascript](https://stackoverflow.com/q/40368425/4536543) question on StackOverflow, using [json-stream-stringify](https://www.npmjs.com/package/json-stream-stringify)

## Getting started

1. `git clone https://github.com/Maxim-Mazurok/non-blocking-json-stringify-demo`
2. `cd non-blocking-json-stringify-demo`
3. `npm ci`
4. `npm start`
5. Observe:
   ```text
   JSON data: [
   JSON data: {
   >>> STDIN data: 476.645.4153 x07857
   JSON data: "name":
   >>> STDIN data: 1-574-350-3925 x771
   JSON data: "Alejandro Stamm"
   JSON data: ,
   JSON data: "email":
   JSON data: "Polly_Bechtelar@yahoo.com"
   JSON data: }
   >>> STDIN data: (571) 564-3794 x4844
   ```

If you're still not convinced that it's non-blocking, provide input yourself:

1. `node actual-input.js`
2. Follow prompts
3. Observe:

   ```text
   Please wait while we generate a big JS object, we'll let you know when to start typing
   Type something and press enter:
   test
   >>> STDIN data: test

   still stringifying....

   123
   >>> STDIN data: 123

   still stringifying....

   still stringifying....

   really?
   >>> STDIN data: really?

   still stringifying....

   Done stringifying! [{"name":"Dr. Monique Parisian","email":"Skyla.West@gmail.com"},{"name":"Raul Mohr","email":"Delpha.
   ```

## Troubleshooting

If something doesn't work - make sure you're using node/npm versions specified in the `engines` section of `package.json`
