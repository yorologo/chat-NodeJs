
# Chat-Node.Js
Este proyecto es una aplicación para poner a prueba mis conocimientos adquiridos en el curso básico de Node.Js 

## Poner a funcionar la aplicación
### Requisitos
 - Node.JS

### Instrucciones
 1. Ejecutar el comando `npm install` en la raíz del proyecto 
 2. Ejecutar el comando `npm install` en la de la ruta */public/* del proyecto 
 3. Iniciar la aplicación del servidor utilizando el comando el comando `node server.js` en la raíz del proyecto
 4. En una terminal a parte, para iniciar la aplicación de frontend ejecutar el comando `npm run serve` desde la ruta */public/* 
 5. Acceder desde el navegador a la dirección [http://localhost:8080/](http://localhost:8080/)

## Apuntes del curso

### Qué es Node y cómo instalarlo
Node.js es un entorno en tiempo de ejecución multiplataforma de código abierto para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono y basado en el motor V8 de Google.
Muchos proyectos utilizan Node para funcionar, como:

[Webpack](https://webpack.js.org/)

[Babel](https://babeljs.io/)

[PM2](https://pm2.keymetrics.io/)

[Electron](https://www.electronjs.org/)

### ¿Qué son y cómo se usan las peticiones HTTP?
Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web.
Es el lenguaje común para todas las comunicaciones.

**¿Cómo es una petición?**

    GET /index.html HTTP/1.1
    Host: www.example.com
    Referer: www.google.com
    User-Agent: Mozilla/5.0
    Connection: keep-alive

**Puntos claves a tener en cuenta:**
 - *Métodos:* Qué quieres hacer
 - *Estado:* Cómo ha ido la operación
 - *Cuerpo:* Lo que el servidor devuelve

### Cuerpo y query de la petición
**El cuerpo de la petición** es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

**Las queries** van a permitirte añadir información extra a los datos que queramos enviarle al servidor.

### Tipos de Bases de Datos: Relacionales y No Relacionales
**Bases de Datos Relacionales:** no es una base de datos muy flexible, pero tiene a favor su gran soporte y el enorme desarrollo en herramientas para su uso. Si necesitamos cambiar un valor de un campo debemos hacerlo con todos los campos de nuestra BD, en cambio con NoSQL o No Relacional no es así.

**Bases de Datos No Relacionales:** son de bases de datos sin una tabla fija como las que sí se encuentran en las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Además, es abierta y por lo tanto flexible a diferentes tipos de datos y no necesita tantos recursos para ejecutarse; de hecho, el hardware necesario no cuesta mucho.

### WebSockets: Qué son, por qué son interesantes y cómo usarlos
El protocolo **Websocket** o `wss://` crea un túnel de información entre el usuario y el servidor el cual se quedará abierto hasta que el servidor y/o el cliente cierre la conexión para pedir información en tiempo real.
