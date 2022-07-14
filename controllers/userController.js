const db = require("../models");
const { User } = require("../models");

const userController = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll({});
    res.render("index", { users });
  },

  getCreateData: async (req, res) => {
    await res.render("newUser");
  },

  postCreateData: async (req, res) => {
    const userCreate = req.body;
    await User.create(userCreate);
    res.status(200).redirect("/users");
  },

  getEditData: async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.render("editUser", { user });
  },

  putUser: async (req, res) => {
    const id = req.params.id;
    await User.update(req.body, { where: { id } });
    res.status(200).redirect("/users");
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id } })
    res.status(200).redirect("/users");
  }
};

module.exports = userController;
