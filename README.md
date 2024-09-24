# Exemplos de uso da API de Parceiros

[![Elixir](https://img.shields.io/badge/Elixir-%234B275F.svg?&logo=elixir&logoColor=white)](#) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#) [![PHP](https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white)](#)

Aqui você encontra exemplos de chamadas para a [API de Parceiros da Árvore](https://arvoreeducacao.docs.apiary.io/) para diversas linguagens. O objetivo destes exemplos é facilitar a descoberta e uso da API.

Abaixo seguem as instruções para rodar os exemplos.

Observação: nenhum exemplo contém dados de produção, como por exemplo, `access_key` ou `access_key_id`. É necessário alterar o código para refletir os dados que foram passados pelo time da Árvore.

## Elixir

Para rodar os exemplos de Elixir, altere as informações necessárias nos arquivos e então execute localmente em um shell:

```shell
elixir get_entity.exs

elixir get_reader.exs
```

Caso não deseje instalar Elixir/Erlang localmente, pode-se também rodar os exemplos usando um container docker.

Por exemplo:

```shell
docker container run --rm -v $(pwd):/app/ hexpm/elixir:1.17.3-erlang-27.1-alpine-3.20.3 elixir get_entity.exs
```

## PHP

Para os exemplos de PHP, você pode igualmente usar um container docker, como abaixo:

```shell
docker container run --rm -v $(pwd):/app/ php:7.4-cli php /app/create_reader.php
```

## Javascript

Para os exemplos de Javascript, instale os pacotes necessários com `npm install`, por exemplo, e então execute os arquivos com o node.

Por exemplo, em um shell:

```shell
node get_entity.js
```
