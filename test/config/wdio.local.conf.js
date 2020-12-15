const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],
      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                //headless: true
            }
        },
      ]
    }
}
