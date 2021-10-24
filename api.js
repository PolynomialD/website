class Api {
  constructor (repository) {
    this.wowApiRepository = repository
  }

  async getWeapon(weaponId) {
    return await this.wowApiRepository.get(`item/${weaponId}`)
  }

  async search (quality) {
    return await this.wowApiRepository.get('search/item', `&quality.type=${quality}&is_equippable=true`)
  }
}

module.exports = Api