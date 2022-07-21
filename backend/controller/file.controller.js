const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

class File {
  static async getFiles(id) {
    console.log("GET FILES METHOD")
    const file = await prisma.file.findUnique({where: {id}});
    return file;
  }

  static async create(file) {
    const newFile = await prisma.file.create({
      data: {
        title: file.title,
        shared: false,
        url: file.path,
        ownerId: file.user
      }
    })
    return newFile;
  }
} 

module.exports = File;