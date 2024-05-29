# Documentação para instalação do sistema

## Passo 1 - Istalação de dependências

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd api
npm install
```

## Passo 2 - criar arquivo de variáveis do ambiente ( .env )

### Frontend
.env
```bash
REACT_APP_API = http://localhost:5000
```

### Backend
.env
```bash
MONGO_URI="mongodb+srv://albertoortizmedeiros:B300612a@vendinha.2c332xy.mongodb.net/?retryWrites=true&w=majority&appName=vendinha"
JWT_SECRET_KEY="albertomedeiros"
DEV_MODE=development
```

## Passo 3 - execução

<h4>Para execução do sistema, abra um terminal para o frontend e outra para o backend.</h4>

### No terminal frontend
```bash
cd client
```
### `npm start`
### No terminal backend
```bash
cd api
```
### `npm run dev`

# Instrução para uso do sistema.
### Cadastro e login no sistema
- Na aba fixa superior direita existe dois links, entrar e cadastrar.
- Cadastre um login com nome, email e senha.
- Em seguida entre no sistema com email e senha.
### Usabilidade do sistema
- Os links VENDINHA DA VÓ e SAUDAÇÃO com o seu nome, navegam para a página de abertura.
- Na aba fixa superior direita existe dois links, PAINEL e SAIR.
- No PAINEL temos um menu lateral com dois links, CADASTRAR PRODUTO e LISTAR PRODUTOS.
- Ao entrar na lista de produtos estarão listados todos os produtos cadastrados no sistema em uma tabela.
- A tabela possui paginação, sendo possivel ajustar quantos produtos serão apresentados para o usuário.
- Na tabela, existem dois botões, ATUALIZAR e APAGAR. Um de atualização do produto e outro para apagar o produto.

- No menu CADASTRAR PRODUTO entra na página de cadastramento de um produto.
obs: Ao cadastrar um produto, o sistema irá voltar com os espaços para cadastrar outro produto. Só vai sair dessa tela, quando clicado no botão sair ou ir direto no menu LISTAR PRODUTOS.
- TOTAL DE PRODUTOS indica quantos produtos existem cadastrado no sistema.
