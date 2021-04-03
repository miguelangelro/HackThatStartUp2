# HackThatStartUp2
Virtual Hackathon Nuwe x Demium | Tech job connections
---
[Demium](https://demium.com) 
</br>

[Nuwe](http://nuwe.io/)

## Enunciado
En el siguiente enlace podeis encontrar detalladamente lo que se pide.

- [Individual Challenge](./HTS2_Individual_english.pdf)

## Instalación

Pasos para instalar el proyecto:

Git clone de este repositorio --> git clone https://github.com/miguelangelro/HackThatStartUp2.git
cd HackThatStartUp2
npm install
Arrancar la base de datos. (Mongodb)
<b>npm start</b> para arrancar la aplicación 
Para atacar a la API hace falta usar Insomnia u otra interfaz de Restclient.

## Explicación

Al arrancar la aplicación, la base de datos "DatabaseNEA" se inicializa creando una colección de asteroides con los datos que proporciona el [fichero](./OrbitalParameters_PHAs.csv) CSV.

A continuación, un usuario previamente registrado puede gestionar la base de datos, es decir, el usuario es capaz de  visualizar, crear, eliminar y actualizar un documento de las colecciones "users" y "asteroids". Cuando el usuario se registra por primera vez o inicia sesión, se genera un token que guarda el <b>id</b> asociado a él y <b>se envía en el header de la petición</b> al servidor cada vez que quiera acceder a una ruta protegida. Estas rutas protegidas són las que permiten modificar la base de datos o visualizar datos privados (<b>datos de los usuarios</b>). No obstante, cualquier persona puede ver los datos de los asteroides debido que són datos públicos.

Un usuario autenticado puede introducir a mas de un usuario a la vez en la base de datos enviando un array de objetos JSON de tipo usuario o asteroides.

He hecho testing con Insomnia, resultados en la carpeta testing. Mas adelante actualizare con test unitario.

## 
</br>

## Dependecias

- [Miguel Ángel Rincón](https://github.com/miguelangelro)