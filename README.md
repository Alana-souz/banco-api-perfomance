# Testes de Performance da API do Banco com K6  

Repositório com scripts de testes de performance automatizado utilizando **k6** e escritos em **JavaScript**, voltado para validação de cenários da API do Banco.

📂 Repositório: [banco-api-perfomance](https://github.com/Alana-souz/banco-api-perfomance)

---

## 📖 Introdução

Este projeto tem como objetivo simular diferentes cargas e cenários de uso para API do banco, avaliar o desempenho em diferentes cenários de carga e estresse.  
Os testes são escritos com foco na modularidade, organizacão por contexto e reutilizacão de modelos de dadosforam desenvolvidos em **JavaScript** utilizando a ferramenta **k6** e fornece métricas em tempo real.  

Para garantir flexibilidade, foi configurada a variável de ambiente **`BASE_URL`**, que define a URL base utilizada nos testes.  

---

## 🛠 Tecnologias utilizadas

- [k6](https://k6.io/) - Ferramenta de testes de performance e carga.  
- **JavaScript (ES6)** - Linguagem utilizada na escrita dos testes.  
- **[GJSON** - Para extracão de dados em respostas JSO
- Variáveis de ambiente para configuracão dinâmica (ex: 'BASE_ÙRL') 

---

## 📂 Estrutura do repositório

```
banco-api-perfomance/
├── fixtures/               # Arquivos JSON com dados de entrada para os testes
├── helpers/                # Funções utilitarias reutilizaveis
├── tests/                       # Scripts de teste de performance
│   ├── login.test.js            # Cenários relacionados à autenticação
│   ├── transferencias.test.js   # Cenários relacionados a transferências
├── config/                      #Arquivos de configuracao de variaveis de ambiente                  
├── utils/                  # Funções utilitarias reutilizaveis para interacao com API
└── README.md               # Documentação do projeto
```

---

## 🎯 Objetivo de cada grupo de arquivos

- **`tests/`** → Contém os arquivos principais de teste, cada um representando um conjunto de cenários de performance.  
- **`fixtures/`** → Armazena dados estáticos (payloads JSON, dados de usuários etc.) usados nos testes.  
- **`utils/`** → Funções auxiliares para reaproveitamento de código e organização dos testes.
- **`helpers/`** → Funções utilitarias reutilizaveis 
- **`config/`** → Arquivos de configuracao de variaveis de ambiente                  
---

## ⚙️ Modo de instalação e execução do projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (recomendado versão LTS)  
- [k6](https://k6.io/docs/get-started/installation/) instalado na máquina  

### Instalação
Clone o repositório e instale as dependências:  
```bash
git clone https://github.com/Alana-souz/banco-api-perfomance.git
cd banco-api-perfomance
npm install
```

### Configuração
Defina a variável de ambiente **`BASE_URL`** com a URL da API a ser testada.  
Exemplo (Linux/Mac):
```bash
export BASE_URL=https://sua-api.com
```

No Windows (PowerShell):
```powershell
$env:BASE_URL="https://sua-api.com"
```

---

## 🚀 Execução dos testes

Para executar os testes com acompanhamento em tempo real via dashboard do **k6** e exportação do relatório em HTML:  

```bash

K6_WEB_DASHBOARD=true 
K6_WEB_DASHBOARD_EXPORT=html-report.html 
k6 run tests/login.test.js
-e BASE_URL=https://sua-api.com 
```

- **`BASE_URL`** → Define a URL base da API sob teste.  
- **`K6_WEB_DASHBOARD=true`** → Ativa o dashboard interativo em tempo real.  
- **`K6_WEB_DASHBOARD_EXPORT=html-report.html`** → Exporta os resultados em um arquivo HTML.  
- **`tests/login.test.js`** → Caminho do arquivo de teste a ser executado.  

Para rodar outros cenários, basta trocar o arquivo no final do comando, por exemplo:  

```bash
k6 run tests/transferencias.test.js
```
