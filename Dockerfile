FROM node:14.16.1

WORKDIR /app
#директория в которой всё будет храниться

# Установка зависимостей
COPY package*.json ./
RUN npm install
# Для использования в продакшне
# RUN npm install --production

# Копирование файлов проекта
COPY . .

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
RUN npm run build
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
# CMD ["npm", "run dev"]