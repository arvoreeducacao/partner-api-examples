const crypto = require("crypto");
const moment = require("moment");
const http = require("http");

// Setup do access_key e access_key_id
let access_key = "access_key";
let access_key_id = "access_key_id";
let reference_id = "reference_id";

// 1. HTTP Verb
let http_verb = "GET";

// 2. Content Type
let content_type = "application/json";

// 3. Body Hash
let body = "";
let content = crypto.createHash("md5").update(body).digest("base64");

// 4. Request URI
let path = `/api/v2/partners/readers/${reference_id}`;

// 5. Current Date/Time
let date = moment().utc().format("ddd, DD MMM YYYY HH:mm:ss") + " GMT";

// 6. Canonical String generation
let canonical_string = [http_verb, content_type, content, path, date].join();

// 7. Signature generation
let signature = crypto
  .createHmac("sha1", access_key)
  .update(canonical_string)
  .digest("base64");

// 8. Token generation
let auth_token = "APIAuth " + access_key_id + ":" + signature;

const options = {
  host: "localhost",
  port: 5000,
  path: path,
  headers: {
    "Content-Type": content_type,
    "Content-MD5": content,
    DATE: date,
    Authorization: auth_token,
  },
};

const request = http.get(options, (resp) => {
  if (resp.statusCode !== 200) {
    console.error(
      `Did not get an OK from the server. Code: ${resp.statusCode}`,
    );
    console.error(`Response headers: ${resp.headers}`);
    resp.resume();
    return;
  }

  let data = "";

  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.end();

request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`,
  );
});
