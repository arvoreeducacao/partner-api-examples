Para rodar os exemplos de Elixir, altere as informações necessárias nos arquivos (por exemplo, `access_key`, `access_key_id`, etc) e então execute localmente em um shell:

```shell
elixir get_entity.exs

elixir get_reader.exs
```

Caso não deseje instalar Elixir/Erlang localmente, pode-se também rodar os exemplos usando um container docker.

Por exemplo:

```shell
docker container run --rm -v $(pwd):/app/ hexpm/elixir:1.17.3-erlang-27.1-alpine-3.20.3 elixir get_entity.exs
```
