# RETO 3 CICLO 3 DEL GRUPO 100 MISIONTIC 2022 - BACKEND PARA UN LOGIN, CONEXIÓN CON BASE DE DATOS REMOTA

Este proyecto corresponde al reto 3 del ciclo 3 de la MisiónTIC 2022, en el cual nos encomendaron realizar el backend para un login con conexión a base de datos remota, empleando express y sequelize-cli.

## Descripción del reto

La estructura base link github: `https://github.com/Tecnalia-Cilco-3/semana-3`

Se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:

`'/api/auth/signin'`

Cuando esta ruta es consumida desde el frontend la api debe responder en tres casos diferentes:

1. Cuando el usuario se loguea exitosamente ,debe responder con un status 200 y propiedad accessToken de la siguiente manera: 

`res.status(200).send({ accessToken:token});`

2. El usuario no existe en la base de datos, debe responder con un status 404 de la siguiente manera:

`res.status(404);`

Esta respuesta se puede complementar con un mensaje como por ejemplo:

`res.status(404).send('User Not Found.');`

3. El usuario ingresa una contraseña inválida, debe responder con un status 401 de la siguiente manera:

`res.status(401);`

Esta respuesta se puede complementar con un mensaje y propiedades dependiendo de lo que espera recibir en el fontend como por ejemplo:

`res.status(401).send({ auth:false, accessToken:null, reason:"Invalid Password!"});`

### Base de datos

En el directorio config/config.json encontrarán las credenciales para la conexión de las bases de datos de la siguiente manera:

{
    "development": {
      "dialect": "sqlite",
      "storage": "./database.sqlite3"
    },
  
    "test": {
      "dialect": "sqlite",
      "storage": "./database.sqlite3"
    },
  
    "production": {
      "dialect": "sqlite",
      "storage": "./database.sqlite3"
    } 
  }

Queda de elección de cada grupo utilizar la base de datoss localmente que deseen ya sea la predeterminada en el archivo o utilizar mysql como se explicó, esta modificacion sólo se deben realizar en el objeto “development”, las otras por ningún motivo deben ser modificadas esto podría alterar el resultado de la prueba y por ende su calificación.

### Modelo 

Se debe crear un modelo con el nombre usercomo se explicó en la sesión ,por medio de sequelize cli con los atributos obligatorios :name,email , passwordde tipo string.Finalmente, como todos los proyectos, deben ser subidos a un repositorio en Github.

## Instalación

Para instalar el proyecto realizado se puede descargar como zip o clonarlo así: 

`git clone https://github.com/nicolas-garcess/semana-1-100.git`

## Colaboradores

### Juan Sebastián Prado
### Julián García
### Nicolás Garcés
### Raúl Amaya
### Jorge Quintero