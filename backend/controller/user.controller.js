const { prisma } = require('@prisma/client');
const argon = require('argon2');
const UserModel = require('../model/user.model');

class UserController {

  static async get(id) {
    return new Promise((resolve, reject) => {
      UserModel.getById(id).then(user => resolve(user)).catch(error => reject(error));
    })
  }
  static async create(user) {
    return new Promise((resolve, reject) => {
      UserModel.getByEmail(user.email).then(async (findedUser) => {
        if (findedUser !== null) {
          return reject("User already exist!");
        } else {
          const hash_password = await argon.hash(user.password);
          user = { ...user, password: hash_password };
          const newUser = await UserModel.create(user);
          return resolve(newUser);
        }
      });
    })
    
  }
}

module.exports = UserController;
