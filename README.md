🛒 Ecommerce Backend API - ShopPlus

💻 Descripción del Proyecto
Este proyecto es un backend funcional para un sistema de e-commerce que permite gestionar productos, usuarios, pedidos y mucho más. Es una API completamente modular y escalable, por lo que puede ser implementada para cualquier tipo de negocio que desee tener una tienda online.

🚀 Características Principales
Gestión completa de productos: creación, actualización, eliminación y consulta.
Sistema de autenticación y autorización para usuarios y administradores.
Gestión de pedidos: creación de órdenes de compra, detalle de pedidos y su estado.
Soporte para múltiples roles de usuarios: Administrador y Cliente.
Arquitectura RESTful que facilita la integración con cualquier frontend.
Documentación completa de la API con Swagger.
🛠️ Tecnologías Utilizadas
Este backend está desarrollado con las siguientes tecnologías:

Backend:



Base de Datos:


TypeORM para la gestión de entidades y relaciones.
Autenticación:

Bcrypt para el hashing de contraseñas.
Documentación:

para la documentación de la API.
📋 Endpoints Principales
🔑 Autenticación y Usuarios
POST /auth/register: Registrar un nuevo usuario.
POST /auth/login: Iniciar sesión.
GET /users/me: Obtener información del usuario autenticado.
🛒 Productos
GET /products: Obtener una lista de productos.
POST /products: Crear un nuevo producto (solo administradores).
PUT /products/:id: Actualizar un producto existente.
DELETE /products/:id: Eliminar un producto (solo administradores).
🛍️ Órdenes
POST /orders: Crear una nueva orden de compra.
GET /orders/:id: Obtener detalles de una orden específica.
PUT /orders/:id/status: Actualizar el estado de una orden (solo administradores).
📦 Carrito de Compras
POST /cart: Añadir productos al carrito.
GET /cart: Ver los productos en el carrito actual.
DELETE /cart/:productId: Eliminar un producto del carrito.
🏗️ Cómo Configurar el Proyecto
1. Clonar el Repositorio
bash
Copiar código
git clone https://github.com/tu-usuario/ecommerce-backend.git
cd ecommerce-backend
2. Instalar Dependencias
bash
Copiar código
npm install
3. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

env
Copiar código
DATABASE_URL=postgres://user:password@localhost:5432/nombre_base_datos
JWT_SECRET=tu_secreto
PORT=3000
4. Ejecutar Migraciones
Ejecuta las migraciones para generar las tablas en la base de datos:

bash
Copiar código
npm run typeorm migration:run
5. Iniciar el Servidor
bash
Copiar código
npm run start:dev
6. Acceder a la Documentación
Dirígete a http://localhost:3000/api para acceder a la documentación Swagger y explorar los endpoints.

🌟 Cómo Contribuir
¡Las contribuciones son bienvenidas! Sigue los siguientes pasos para hacer tus mejoras:

Realiza un fork de este repositorio.
Crea una rama con tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza los cambios y haz un commit (git commit -m 'Añadir nueva funcionalidad').
Sube los cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
🛠️ Mejoras Futuras
Soporte para pagos en línea utilizando Stripe o PayPal.
Implementación de notificaciones por correo para pedidos realizados.
Sistema de valoración y reseñas para los productos.
Sistema de recomendaciones basado en el historial de compras.
📞 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto:

Email: soporte@shopplus.com
Teléfono: +57 123 456 7890

¡Gracias por usar ShopPlus!

(este repositorio esta en construccion y hay alguna info en este readme aun incompleta o confusa)