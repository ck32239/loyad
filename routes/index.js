const getUser = require('./mock').getUser;

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

  //calls third party API, process data and returns output
  app.get('/coffeeapi/:user', (req, res) => {

    if(req.params.user) {

      //call function that uses third part API.
      getUser(req.params.user)
      .then(function (response) {

        //process data
        let output = {
          login: response.login,
          id: response.id
        }
        //return output
        res.status(200).send(output);
      })
      .catch(function (error) {
        res.status(400).send(error);
      });
    }
    else {
      res.status(400).send({ error: 'Input is missing.' });
    }
  });
}

