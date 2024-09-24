Mix.install([
  :req
])

access_key = "access_key"
access_key_id = "access_key_id"
reference_id = "reference_id"
entity_reference_id = "entity_reference_id"
host = "http://localhost:5000"

# 1. HTTP Verb
http_verb = "POST"

# 2. Content Type
content_type = "application/json"

# 3. Body Hash
body = """
{
  "name": "Aluno",
  "reference_id": "#{reference_id}",
  "entity_reference_id": "#{entity_reference_id}"
}
"""

content_md5 = :crypto.hash(:md5, body) |> Base.encode64()

# 4. Request URI
path = "/api/v2/partners/readers"

# 5. Current Date/Time
datetime = Calendar.strftime(DateTime.utc_now(), "%a, %d %b %Y %H:%M:%S GMT")

# 6. Canonical String generation
canonical_string = "#{http_verb},#{content_type},#{content_md5},#{path},#{datetime}"

# 7. Signature generation
sha1_signature = :crypto.mac(:hmac, :sha, access_key, canonical_string)
signature = Base.encode64(sha1_signature)

# 8. Token generation
auth_token = "APIAuth #{access_key_id}:#{signature}"

headers = [
  {"Authorization", auth_token},
  {"Content-Type", content_type},
  {"Content-MD5", content_md5},
  {"DATE", datetime}
]

response =
  Req.new(base_url: host)
  |> Req.merge(method: "POST")
  |> Req.merge(headers: headers)
  |> Req.merge(url: path)
  |> Req.merge(body: body)
  |> Req.request!()

IO.inspect(response, pretty: true)
