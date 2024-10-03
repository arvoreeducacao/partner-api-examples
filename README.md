# Exemplos de uso da API de Parceiros

[![Static Badge](https://img.shields.io/badge/API_de_Parceiros-%C3%81rvore-blue?logoColor=ff44aa&color=26cab9)](https://arvoreeducacao.docs.apiary.io/)

Aqui você encontra exemplos de chamadas para a [API de Parceiros da Árvore](https://arvoreeducacao.docs.apiary.io/) para diversas linguagens. O objetivo destes exemplos é facilitar a descoberta e uso da API.

**Observação: nenhum exemplo contém dados de produção, como por exemplo, `access_key` ou `access_key_id`. É necessário alterar o código para refletir os dados que foram passados pelo time da Árvore.**

## Elixir

Para rodar os exemplos de Elixir, altere as informações necessárias nos arquivos e então execute localmente em um shell:

```shell
elixir get_entity.exs
```

Caso não deseje instalar Elixir/Erlang localmente, pode-se também rodar os exemplos usando um container docker.

Por exemplo, em um shell no diretório `/elixir`, execute:

```shell
docker container run \
    --rm -v $(pwd):/app/ \
    hexpm/elixir:1.17.3-erlang-27.1-alpine-3.20.3 \
    elixir /app/get_entity.exs
```

## PHP

Para os exemplos de PHP, você pode igualmente usar um container docker, como abaixo:

```shell
docker container run \
    --rm -v $(pwd):/app/ \
    php:7.4-cli \
    php /app/create_reader.php
```

## Javascript

Para os exemplos de Javascript, instale os pacotes necessários com `npm install`, e então execute os arquivos com o `node`:

```shell
npm install
node get_entity.js
```

# Utilização da collection via Postman

Para utilizar os arquivos armazenados na pasta `collection_files`, recomendamos o uso do Postman, pois eles foram construídos utilizando essa aplicação.

1 - Comece clicando no botão superior esquerdo `Import` e selecione os arquivos presentes na pasta `collection_files`.
2 - Clique no botão `Import` para finalizar o processo.
3 - Após importar, clique na pasta `Árvore` que foi criada e vá para a aba `Scripts` e então em `Pre-request`.
4 - Nesta aba será necessário inserir a `access_key` e a `access_key_id` da conta desejada.
5 - Salve as alterações.

Pronto, agora você poderá utilizar os endpoints normalmente.
