<?php

# Importante: a data deve ser formatada com o timezone UTC/GMT
date_default_timezone_set("GMT");

$access_key = "access_key";
$access_key_id = "access_key_id";
$reference_id = "reference_id";
$entity_reference_id = "entity_reference_id";
$host = "http://host";

# 1. HTTP Verb
$http_verb = "POST";

# 2. Content Type
$content_type = "application/json";

# 3. Body Hash
$data = [
  "name" => "Aluno",
  "reference_id" => $reference_id,
  "entity_reference_id" => $entity_reference_id,
];
$body = json_encode($data);
$content = base64_encode(md5($body, true));

# 4. Request URI
$path = "/api/v2/partners/readers";

# 5. Current Date/Time
$date = strftime("%a, %d %b %Y %H:%M:%S GMT");

# 6. Canonical String generation
$canonical_string = [$http_verb, $content_type, $content, $path, $date];
$canonical_string = implode(",", $canonical_string);

# 7. Signature generation
$signature = base64_encode(
  hash_hmac("sha1", $canonical_string, $access_key, true)
);

# 8. Token generation
$auth_token = "APIAuth " . $access_key_id . ":" . $signature;

# Setup do curl
$ch = curl_init($host . $path);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Content-Type: application/json",
  "Content-MD5: " . $content,
  "DATE: " . $date,
  "Authorization: " . $auth_token,
  "Content-Length: " . strlen($body),
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$return = curl_exec($ch);
var_dump($return);
curl_close($ch);

die();

?>
