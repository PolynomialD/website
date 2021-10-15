class Api {
  constructor (repository) {
    this.wowApiRepository = repository
  }

  async getWeapon(weaponId) {
    return await this.wowApiRepository.get(`item/${weaponId}`)
  }
}

module.exports = Api