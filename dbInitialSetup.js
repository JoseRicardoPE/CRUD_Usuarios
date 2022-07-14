const db = require("./models");

module.exports = async() => {
    // Crear Tablas
    await db.sequelize.sync({ force: true });
    console.log("[Database] ¡Las tablas fueron creadas!");

    // Ejecutar seeders 
    await require("./seeders/userSeeder")();
    console.log("[Database] ¡Los usuarios fueron insertados!");
}
