# Utiliza una imagen base de Node.js
# La versión 18 es una buena opción estable y reciente.
FROM node:18.20.2-alpine3.19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Instala las dependencias del sistema necesarias
RUN apk add --no-cache git

# Expone el puerto en el que se ejecutará tu servidor
EXPOSE 4000