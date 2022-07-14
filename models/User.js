module.exports = function (sequelize, Model, DataTypes) {
  class User extends Model {}

  User.init(
    {
      Nombre: {
        type: DataTypes.STRING(100),
      },
      Telefono: {
        type: DataTypes.STRING(50),
      },
      FechaDeNacimiento: {
        type: DataTypes.DATE,
      },
      Direccion: {
        type: DataTypes.STRING(100),
      },
      CorreoElectronico: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
