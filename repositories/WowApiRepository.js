const fetch = require('node-fetch');

class WowApiRepository {
  constructor () {
    this.accessToken = ''
    this.baseUrl = 'https://us.api.blizzard.com/data/wow/'
    this.queryParams = `?namespace=static-classic-us&locale=en_US&access_token=`
  }

  async get (path) {
    const url = `${this.baseUrl}${path}${this.queryParams}${this.accessToken}`
    const response = await fetch(url)
    console.log(`url: ${url}, response: ${response.status}`)
    if (response.ok) {
      return response.json()
    } else if (response.status === 401) {
      await this.setAccessToken()
      console.log(this.accessToken)
    } else {
      return {}
    }
  }

  async setAccessToken () {
    const url = 'https://us.battle.net/oauth/token'
    const request = {
      method: 'post',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`9b89270d9d3b4409affd96cb000bc895:Q4nDCUMJfgbYxsOyyPW41eHRgBWzpDPp`, 'binary').toString('base64')
      }
    }
    const response = await fetch(url, request)
    const token = await response.json()
    this.accessToken = token.access_token
  }
}

module.exports = WowApiRepository