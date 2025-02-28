# 🚀 MStarSupply - Sistema de Gestão de Mercadorias

Bem-vindo ao **MStarSupply**, um sistema completo para gerenciamento de mercadorias, entradas e saídas! Este projeto foi desenvolvido utilizando **Flask** no backend e **React.js** no frontend, garantindo uma aplicação robusta e moderna. 🏗️✨

## 📌 Tecnologias Utilizadas

### 🔹 Backend (API)

- **Python 3.12** + **Flask** (Servidor web)
- **Flask-SQLAlchemy** (Banco de dados com ORM)
- **Flask-Migrate** (Migrações de banco)
- **SQLite** (Banco de dados leve e embutido)
- **Flask-CORS** (Comunicação com o frontend)
- **Flask-Marshmallow** (Validação de dados)

### 🔹 Frontend (Interface do Usuário)

- **React.js** (Framework frontend)
- **Axios** (Requisições HTTP para comunicação com o backend)
- **React Router** (Navegação entre páginas)
- **Tailwind CSS / Material-UI** (Estilização)
- **Chart.js / Recharts** (Gráficos interativos)

## 🏗️ Estrutura do Projeto

```
/msupply-chain-app
│── backend/        # API Flask (gerenciamento de mercadorias, entradas e saídas)
│── frontend/       # Interface do usuário React.js
│── README.md       # Documentação geral
```

## 🔄 Funcionalidades Principais

✅ Cadastro e listagem de mercadorias 📦
✅ Registro de entradas e saídas 📊
✅ Dashboard com gráficos 📈
✅ Exportação de relatórios 📑
✅ Interface responsiva e intuitiva 💻

## 🏁 Como Rodar o Projeto

### 🔹 Backend (Flask API)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
pip install -r requirements.txt
flask db upgrade
flask run
```

API disponível em: `http://127.0.0.1:5000/`

### 🔹 Frontend (React.js UI)

```bash
cd frontend
npm install
npm start
```

Aplicação disponível em: `http://localhost:3000/`

---

# 🐳 Docker - MStarSupply

Este projeto utiliza **Docker** para facilitar o deploy e a execução dos serviços do backend e frontend. Com apenas alguns comandos, você pode rodar toda a aplicação em containers isolados. 🚀

## 📌 Pré-requisitos

Certifique-se de ter o **Docker** e o **Docker Compose** instalados:

🔹 [Instalar Docker](https://docs.docker.com/get-docker/)
🔹 [Instalar Docker Compose](https://docs.docker.com/compose/install/)

Para verificar se está tudo instalado corretamente, execute:

```bash
docker --version
docker-compose --version
```

## 🚀 Como Inicializar a Aplicação com Docker

1️⃣ **Clone o repositório**:

```bash
git clone https://github.com/seu-repositorio/msupply-chain-app.git
cd msupply-chain-app
```

2️⃣ **Construa e inicie os containers**:

```bash
docker-compose up --build
```

Isso irá:

- Criar e subir o backend em Flask na porta **5000**
- Criar e subir o frontend React.js na porta **3000**

3️⃣ **Acesse a aplicação**:

- 🌍 **Frontend:** `http://localhost:3000/`
- 🔗 **Backend API:** `http://localhost:5000/`

## 🔄 Comandos Úteis

🛑 **Parar os containers**:

```bash
docker-compose down
```

♻️ **Reiniciar os containers**:

```bash
docker-compose restart
```

📜 **Ver logs dos containers**:

```bash
docker-compose logs -f
```

## 📦 Estrutura dos Containers

### **Backend (Flask API)**

Arquivo: `backend/Dockerfile`

- Usa **Python 3.9-slim**
- Instala dependências do `requirements.txt`
- Expõe a porta **5000**
- Comando de execução: `flask run --host=0.0.0.0`

### **Frontend (React.js)**

Arquivo: `frontend/Dockerfile`

- Usa **Node 18-alpine** para construir o projeto
- Instala dependências e gera o **build**
- Usa **Nginx** para servir os arquivos estáticos
- Expõe a porta **80**

## 🎯 Conclusão

Agora seu ambiente Docker está pronto! Sempre que precisar rodar o projeto, basta executar:

```bash
docker-compose up
```

## 📜 Licença

Este projeto é de código aberto e pode ser utilizado livremente. 📄

🚀 **Desenvolvido por Emanuel**
