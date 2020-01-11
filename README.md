# Vendeste

NEXT.JS - Plataforma de compra e vendas.

# Inicialização

Para levantar o servidor tenha certeza de que todas as variáveis de ambiente foram devidamente preenchidas, vide [Arquivo ENV](#arquivo-env)
Após checarmos isso podemos utilizar o [yarn](https://yarnpkg.com/pt-BR/) para instalar nossas dependências, para isso execute o seguinte comandono terminal:

```console
yarn install
```

Apos instalar todas as dependências já podemos estar levantando nosso servidor em modo de desenvolvimento, para isso execute o seguinte comandono terminal:

```console
yarn dev
```

Por padrão nosso servidor estará rodando na porta `3333` (http://localhost:3333).

# Servidor

O servidor roda em Node com o [express](https://www.npmjs.com/package/express) sendo responsável pelo gerenciamento de rotas.
[Next.js](https://nextjs.org/) acaba ficando responsável por gerenciar e renderizar as páginas realizando a compilacao de `js` para `html, css, json, etc...`.

## Rotas

As rotas são dividas em 2 partes:

### Api

Rotas que geralmente tem acesso à um determinado controlador (vide `./backend/controllers/`), essas rotas servem para realizar operações dentro do servidor/banco de dados.

### App

Todas as rotas descendentes da rota app (ou da raiz `"/"`, exceto pela `"/api"`) são rotas do tipo `GET`, cujo o objetivo é realizar o render da aplicação.

# Banco de dados

O banco de dados utilizado no projeto é o MongoDB sendo conectado com o servidor node/express através do [mongoose](https://www.npmjs.com/package/mongoose).

# Arquivo ENV

Tanto no ambiente de desenvolvimento quanto no de produção será necessário ter variáveis de ambiente, no caso do ambiente de desenvolvimento é necessário que haja um arquivo chamado `.env.development.local` na raiz do projeto contendo os seguintes campos

```env
# o padrao eh 3333
PORT=3333

# complementos para URI de conexao do mongoose
DB_USERNAME=nomedobancomongo
DB_PASSWORD=senhadobancomongo

# hash's aleatorios para seguranca de dados
APP_SECRET=hashsecretodaaplicao
MONGO_SESSION_SECRET=hashsecretodoexpresssession

# ms
COOKIE_MAX_AGE=idademaximadoscookiesqueseraosalvosnoclient
# secs
TOKEN_EXPIRATION_TIME=idademaximadostokens
```
