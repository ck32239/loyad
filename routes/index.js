module.exports = (app) => {
  app.post('/teapi', (req, res) => {
    if (req.body.name) {
      let str = req.body.name
      let output = {
          name:str
        }
        res.send(output)
    } else {
      res.status(400).send({ error: 'Input is missing.' })
    }
  })
}

