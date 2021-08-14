const WowApiRepository = require('./repositories/WowApiRepository')

async function getWeapon(weaponId) {
  const wowApiRepository = new WowApiRepository()
  const response = await wowApiRepository.get(`item/${weaponId}`)
  const weapon = await response.json()
  return weapon
}

module.exports = getWeapon