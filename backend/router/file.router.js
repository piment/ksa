const fs = require('fs');
const Express = require('express');

const router = Express.Router();
const multer = require('multer');
const upload = multer({ dest: './ebooks/' });
const fileController = require('../controller/file.controller');

router.get('/:id', (req, res) => {
  fileController
    .getFiles(req.params.id)
    .then((data) => {
      res.download(data.url, data.title + '.pdf');
    })
    .catch((error) => res.status(500).send(error));
});

router.post('/', upload.single('ebook'), async (req, res) => {
  const { file, body } = req;
  const correctTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, '_');
  };

  file['user'] = body.user;
  file.title = correctTitle(body.title);
  const newFile = await fileController.create(file);
  res.send(newFile);
});

module.exports = router;
