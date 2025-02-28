# Usa uma imagem base do Node.js para construir o projeto
FROM node:18-alpine as build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói o projeto React
RUN npm run build

# Usa uma imagem leve do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos de build do React para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80 (porta padrão do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]