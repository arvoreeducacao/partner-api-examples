const crypto = require("crypto");
const moment = require("moment");
const http = require("http");

// Setup do access_key e access_key_id
let access_key = "access_key";
let access_key_id = "access_key_id";
let reference_id = "reference_id";
let entity_reference_id = "entity_reference_id";

// 1. HTTP Verb
let http_verb = "POST";

// 2. Content Type
let content_type = "application/json";

// 3. Body Hash
let body = JSON.stringify({
  name: "Aluno",
  reference_id: reference_id,
  entity_reference_id: entity_reference_id,
});
let content = crypto.createHash("md5").update(body).digest("base64");

// 4. Request URI
let path = "/api/v2/partners/readers";

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
  method: "POST",
  headers: {
    "Content-Type": content_type,
    "Content-MD5": content,
    DATE: date,
    Authorization: auth_token,
    "Content-Length": Buffer.byteLength(body),
  },
};

const request = http.request(options, (resp) => {
  let data = "";

  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.write(body);

request.end();

request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`,
  );
});
