# ZemoPay Teste

Dependências para rodar o projeto

- NPM ^ 5.6
- Node ^ 8.9
- ReactJs ^ 0.14.7


### Tecnologias
Tecnologias utilizadas no projeto
  
  - [JavaScript](https://www.javascript.com/) - Linguagem principal
  - [ReactJS](https://reactjs.org/) - Para a estruturação da aplicação 

### Instalação

```git

# Baixe o repositório GitHub

# Instale as dependências
cd app
npm install

# Rode o projeto
npm start 

# Rode o projeto p/ produção
npm run build

```

### Teste número 1

Não entendi muito bem se era pra realizar o SELECT em uma linguagem, mas um select que retornaria os dados conforme solicitado seria: 

SELECT 
    u.full_name, 
    up.number_phone 
FROM user u
JOIN user_has_phone up ON up.id_user = u.id 

