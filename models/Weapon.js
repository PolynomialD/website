class Weapon {
  constructor (weaponData) {
    this.weaponData = weaponData
  }
  getName () {
    return this.weaponData.name
  }

  getStats () {
    if(!this.weaponData.preview_item.stats) {
      return []
    }
    return this.weaponData.preview_item.stats.map((stat) => {
      return stat.display.display_string
    })
  }
}

module.exports = Weapon