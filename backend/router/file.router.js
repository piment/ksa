const fs = require('fs');
const Express = require('express');

const router = Express.Router();
const multer = require('multer');
const upload = multer({ dest: './ebooks/' });
const fileController = require('../controller/file.controller');

router.get('/:id', (req, res) => {
  fileController.getFiles(req.params.id).then(data => {
    console.log(data)
    let datatemp = fs.readFileSync('' + data.url + '.pdf');
    res.attachment(data.url);
    res.contentType('application/pdf');
  //res.send(`Page GET File with id: ${req.params.id} is OK!`);
  res.send(datatemp);
  });
  
})

router.post('/', upload.single('ebook'), async (req, res) => {
  const {file, body} = req;
  const correctTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, '_') + '.pdf';
  }

  //fs.rename(file.path, file.destination + correctTitle(body.title), error => {if(error){console.log(error)}});
  fs.rename(file.path, file.path + '.pdf', error => {if(error){console.log(error)}});
  file['user'] = 'ab1ce03a-011d-41ef-9ec0-3cff40ee163d';
  file.title = correctTitle(body.title);
  const newFile = await fileController.create(file);
  res.send(newFile)
})

module.exports = router;