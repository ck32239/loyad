/*
* @FileName: test.main.js
* @Author: Konark Uppal
* @Description: Task Runner file for all integration test cases.
* Running from package.json script. Gulp is not required.
*
*/

describe('Starting Integration Tests', () => {
   let app = require('../bin/www')

  before((done) => {
    console.log('\x1b[32m%s\x1b[0m', 'Start the server...')
    app.start((err, serverInstance) => {
      if (err) {
        console.log(err)
        return
      }
      done()
    })
  })

  require('./integra_test.js')
  require('./mock_test.js')


  after((done) => {
    console.log('\x1b[32m%s\x1b[0m', 'Close the server...')
    app.closeServer()
    done()
  })
})
