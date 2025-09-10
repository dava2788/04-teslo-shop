# Descripcion

## Correr en Dev

1. Clonar el Repo
2. Crear un copia del archivo `.env.template` renombrarlo a `.env` y actualizar valores de las variables de entorno.
3. Instalar dependencias `npm instal`
4. Levantar la DB `docker compose up -d`
5. Correr Migraciones de Primsa `npx prisma migrate dev`
6. Ejecutar seed `npm run seed`
7. Correr el Proyecto con `npm run dev`

## Correr en Prod
