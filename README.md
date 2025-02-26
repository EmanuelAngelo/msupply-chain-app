# 📦 Backend - Sistema de Gestão de Mercadorias

Bem-vindo ao backend do sistema de gestão de mercadorias da **MStarSupply**! Este serviço foi desenvolvido com **Flask**, utilizando **SQLite** para armazenamento dos dados e um conjunto de APIs para gerenciamento de mercadorias, entradas e saídas. 🏗️🚀

## 🚀 Tecnologias Utilizadas

- **Python 3.12**
- **Flask** (Framework Web)
- **Flask-SQLAlchemy** (ORM para manipulação do banco de dados)
- **Flask-Migrate** (Gerenciamento de migrações do banco)
- **Flask-CORS** (Permitir comunicação com o frontend)
- **Flask-Marshmallow** (Validação de dados)
- **SQLite** (Banco de dados leve e embutido)

### 📜 Instalação das Dependências

Antes de rodar a aplicação, instale os pacotes necessários com:

```bash
pip install -r requirements.txt
```

O arquivo `requirements.txt` contém:

```txt
flask
flask-sqlalchemy
flask-migrate
flask-cors
flask-marshmallow
marshmallow-sqlalchemy
```

## 🏗️ Estrutura do Backend

```
/backend
│── app/
│   ├── __init__.py  # Configuração principal do Flask
│   ├── models/       # Modelos do banco de dados
│   ├── routes/       # Rotas da API
│   ├── schemas/      # Validações e serialização de dados
│── wsgi.py           # Ponto de entrada do servidor Flask
│── config.py         # Configurações do app (banco de dados, CORS, etc.)
│── migrations/       # Migrações do banco de dados
│── database.db       # Arquivo SQLite gerado
```

## 📊 Modelos do Banco de Dados

A aplicação utiliza **SQLite** para armazenar informações sobre mercadorias, entradas e saídas.

### **Mercadoria**

```python
class Mercadoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    numero_registro = db.Column(db.String(50), unique=True, nullable=False)
    fabricante = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
```

### **Entrada de Mercadoria**

```python
class Entrada(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey("mercadoria.id"), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, nullable=False)
    local = db.Column(db.String(100), nullable=False)
```

### **Saída de Mercadoria**

```python
class Saida(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey("mercadoria.id"), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, nullable=False)
    local = db.Column(db.String(100), nullable=False)
```

## 🌍 Rotas da API

A API disponibiliza endpoints para o gerenciamento de mercadorias, entradas e saídas.

### 📌 **Mercadorias**

#### ➕ Criar uma nova mercadoria

**POST** `/mercadorias-criar`

📤 **Body (JSON):**

```json
{
  "nome": "Notebook Dell XPS",
  "numero_registro": "ABC123",
  "fabricante": "Dell",
  "tipo": "Eletrônico",
  "descricao": "Laptop de alta performance"
}
```

📥 **Resposta (JSON):**

```json
{ "message": "Mercadoria cadastrada com sucesso!" }
```

#### 🔍 Listar todas as mercadorias

**GET** `/mercadorias-listar`

📥 **Resposta (JSON):**

```json
[
  { "id": 1, "nome": "Notebook Dell XPS" },
  { "id": 2, "nome": "Mouse Logitech" }
]
```

#### 🔍 Buscar mercadoria por ID

**GET** `/mercadorias-listar/<int:id>`

📥 **Resposta (JSON):**

```json
{
  "id": 1,
  "nome": "Notebook Dell XPS",
  "fabricante": "Dell",
  "tipo": "Eletrônico"
}
```

---

### 📌 **Entradas**

#### ➕ Criar entrada de mercadoria

**POST** `/entradas-criar`

📤 **Body (JSON):**

```json
{
  "mercadoria_id": 1,
  "quantidade": 50,
  "data_hora": "2025-02-24T12:30:00",
  "local": "Armazém RJ"
}
```

📥 **Resposta (JSON):**

```json
{ "message": "Entrada registrada com sucesso!" }
```

#### 📋 Listar todas as entradas

**GET** `/entradas-listar`

📥 **Resposta (JSON):**

```json
[
  {
    "id": 1,
    "mercadoria_id": 1,
    "quantidade": 50,
    "data_hora": "2025-02-24T12:30:00",
    "local": "Armazém RJ"
  }
]
```

---

### 📌 **Saídas**

#### ➖ Registrar saída de mercadoria

**POST** `/saidas-criar`

📤 **Body (JSON):**

```json
{
  "mercadoria_id": 1,
  "quantidade": 10,
  "data_hora": "2025-02-24T15:00:00",
  "local": "Loja Centro"
}
```

📥 **Resposta (JSON):**

```json
{ "message": "Saída registrada com sucesso!" }
```

#### 📋 Listar todas as saídas

**GET** `/saidas-listar`

📥 **Resposta (JSON):**

```json
[
  {
    "id": 1,
    "mercadoria_id": 1,
    "quantidade": 10,
    "data_hora": "2025-02-24T15:00:00",
    "local": "Loja Centro"
  }
]
```

---

## 🏁 Como Rodar o Backend

1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-repositorio/msupply-chain-app.git
cd msupply-chain-app/backend
```

2️⃣ **Crie e ative o ambiente virtual**

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
```

3️⃣ **Instale as dependências**

```bash
pip install -r requirements.txt
```

4️⃣ **Crie e aplique as migrações do banco**

```bash
flask db init
flask db migrate -m "Criando tabelas iniciais"
flask db upgrade
```

5️⃣ **Execute o servidor**

```bash
flask run
```

Agora sua API estará rodando em `http://127.0.0.1:5000/` 🚀
