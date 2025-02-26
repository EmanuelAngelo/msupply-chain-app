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

## 📜 Licença

Este projeto é de código aberto e pode ser utilizado livremente. 📄

🚀 **Desenvolvido por Emanuel**
