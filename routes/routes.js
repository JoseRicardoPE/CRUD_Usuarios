const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// * Listar todos los usuarios de la base de datos.
router.get("/", userController.getAllUsers);

// * Retorna la vista HTML para crear un nuevo usuario en la base de datos.
router.get("/create", userController.getCreateData);

// * Crear un nuevo registro en la base de datos.
router.post("/", userController.postCreateData);

// * Retorno la vista HTML para editar un usuario de la base de datos, se obtiene por el parámetro id.
router.get("/edit/:id", userController.getEditData);

// * Actualizar un registro de la base de datos.
router.put("/edit/:id", userController.putUser);

// * Eliminar un registro de la base de datos.
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
