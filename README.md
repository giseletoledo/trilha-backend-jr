# API To-Do List

![](https://github.com/giseletoledo/trilhaBackendJR/blob/main/todoapp/printtelas/get-todos.png)

## Descrição

API para gerenciar uma lista de tarefas, com autenticação de usuários.

## Endpoints

| Método | Rota          | Descrição                              | Autenticação |
|--------|---------------|----------------------------------------|--------------|
| POST   | /users/signup | Cria um novo usuário                   | Não          |
| POST   | /users/signin | Autentica um usuário e retorna um token| Não          |
| GET    | /todos        | Retorna todas as tarefas               | Não          |
| GET    | /todos/:id    | Retorna uma tarefa específica          | Sim          |
| POST   | /todos        | Cria uma nova tarefa                   | Sim          |
| PUT    | /todos/:id    | Atualiza uma tarefa existente          | Sim          |
| DELETE | /todos/:id    | Remove uma tarefa                      | Sim          |


## Instruções

1. Instale as dependências:
    ```
    npm install
    ```

2. Crie um arquivo `.env` com as seguintes variáveis:
    ```
    PORT=3000
    JWT_SECRET=sua_chave_secreta
    ```

3. Inicie o servidor em modo de desenvolvimento:
    ```
    npm run dev
    ```

4. Acesse a API em `http://localhost:3000`.

## Autenticação

Para acessar rotas protegidas, adicione o token JWT ao header da requisição:
```
Authorization: Bearer <seu_token_jwt>
```