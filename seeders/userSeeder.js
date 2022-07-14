const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const user = [];

  for (let i = 0; i < 10; i++) {
    user.push({
      Nombre: faker.name.findName(),
      Telefono: faker.phone.phoneNumber(),
      FechaDeNacimiento: faker.date.birthdate(),
      Direccion: faker.address.city(),
      CorreoElectronico: faker.internet.email(),
    });
  }
  await User.bulkCreate(user);
};
