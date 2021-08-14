const fetch = require('node-fetch');

class WowApiRepository {
  constructor () {
    this.accessToken = 'US1dRezfHX1ayROScO75V7huiBnHNpZAIZ'
    this.baseUrl = 'https://us.api.blizzard.com/data/wow/'
    this.queryParams = `?namespace=static-classic-us&locale=en_US&access_token=${this.accessToken}`
  }

  async get (path) {
    const url = `${this.baseUrl}${path}${this.queryParams}`
    const response = await fetch(url)
    console.log(`url: ${url}, response: ${response.status}`)
    return response
  }

}

module.exports = WowApiRepository