const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const FileModel = require('../model/file.model');

class File {
  static async getFiles(id) {
    return new Promise((resolve, reject) => {
      FileModel.getFileById(id)
        .then((file) => resolve(file))
        .catch((error) => reject(error));
    });
  }

  static async create(file) {
    const newFile = await prisma.file.create({
      data: {
        title: file.title,
        shared: false,
        url: file.path,
        ownerId: file.user,
      },
    });
    return newFile;
  }
}

module.exports = File;
