# 💳 Desafio de Lógica: Sistema de Pagamentos

Projeto desenvolvido em **JavaScript** para simular um sistema de pagamentos, permitindo registrar pagamentos e consultar o último pagamento realizado.

## 🚀 Funcionalidades

- ✅ Realizar pagamentos
- 📄 Armazenar pagamentos numa lista
- 🔍 Consultar o último pagamento
- 💰 Classificar pagamentos automaticamente

### Regra de Categoria

- **cara** → valor maior que `100.00`
- **padrão** → valor menor ou igual a `100.00`

---

## ⚙️ Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar testes

```bash
npm test
```

---

## 🧪 Testes Implementados

- ✅ Pagamento categoria **cara**
- ✅ Pagamento categoria **padrão**
- ✅ Consulta do último pagamento

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- Mocha
- Node Assert

---

# 🔄 Pipeline de Integração Contínua (CI)

Este projeto utiliza GitHub Actions para automatizar a execução dos testes e garantir a validação contínua da aplicação a cada alteração no código.

---

# ⚙️ Eventos de Execução da Pipeline

A pipeline foi configurada para ser executada de três formas:

## 📌 Execução por Push
A pipeline é disparada automaticamente sempre que um novo commit é enviado para a branch principal (`main`).

## ▶️ Execução Manual
Também é possível executar a pipeline manualmente através da opção **Run workflow**, disponível na aba Actions do GitHub.

## ⏰ Execução Agendada (Schedule)
Foi configurada uma execução automática utilizando cron, permitindo validações periódicas mesmo sem alterações no código (ex: `*/30 * * * *` ou similar).

---

# 🧪 Etapas da Pipeline

Durante a execução, a pipeline realiza as seguintes etapas:

- Checkout do código-fonte  
- Configuração do ambiente Node.js  
- Instalação das dependências do projeto  
- Execução dos testes automatizados com Mocha  
- Geração do relatório de execução  
- Armazenamento do relatório como artifact (GitHub Actions)

---

# 📊 Relatório de Testes

Após a execução dos testes, um relatório é gerado automaticamente em formato `.txt` e armazenado como artifact na pipeline.

Esse relatório pode ser baixado na aba **Actions → Artifacts**, permitindo análise posterior da execução e rastreabilidade de falhas.

---

# 🛠️ Ferramentas Utilizadas

- GitHub Actions — Orquestração da pipeline CI  
- Node.js — Ambiente de execução da aplicação  
- Mocha — Framework de testes automatizados  
- GitHub Artifacts — Armazenamento de relatórios  

---

# 📎 Evidência de Execução

A pipeline foi executada com sucesso, validando todos os testes automatizados e gerando o relatório de execução.

A evidência pode ser consultada diretamente na aba **Actions** do repositório GitHub.

A pipeline foi executada com sucesso, validando todos os testes automatizados e gerando o relatório de execução conforme os requisitos da atividade.
