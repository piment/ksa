const { PrismaClient } = require('@prisma/client');
const { use } = require('../router/file.router');
const prisma = new PrismaClient();

class UserModel {
  static async getByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        files: { include: { categories: true } },
        affiliate: true,
        refferal: true,
      },
    });
    return user;
  }

  static async getById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        files: true,
        affiliate: true,
        refferal: true,
      },
    });
    return user;
  }

  static async create(user) {
    return new Promise((resolve, reject) => {
      prisma.user
        .create({
          data: {
            email: user.email,
            nickname: user.nickname,
            password: user.password,
          },
        })
        .then((newUser) => resolve(newUser))
        .catch((error) => resolve(error));
    });
  }
}

module.exports = UserModel;
