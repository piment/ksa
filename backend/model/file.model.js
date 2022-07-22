const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class FileModel {
  static async getFileById(id) {
    return new Promise(async (resolve, reject) => {
      const file = await prisma.file.findUnique({
        where: { id },
        include: {
          categories: true,
        },
      });
      if (file) {
        return resolve(file);
      }
      return reject('error');
    });
  }
}

module.exports = FileModel;
