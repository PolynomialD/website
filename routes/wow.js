var express = require('express');
var router = express.Router();
var Weapon = require('../models/Weapon')

module.exports = (api) => {
  router.get('/', (_, res) => {
    res.render('wow', { title: 'The Wow Page' });
  });
  
  router.get('/getweapon/:weaponId', async (req, res) => {
    const weaponId = req.params.weaponId
    console.log(weaponId)
    try {
      const weaponData = await api.getWeapon(weaponId)
      const weapon = new Weapon(weaponData)
      const viewData = {
        name: weapon.getName(),
        stats: weapon.getStats()
      }
      console.log(weapon.getStats())
      res.render('weapon', viewData)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  });

  router.get('/search', async (req, res) => {
    if(req.query.quality) {
      const searchData = await api.search(req.query.quality)
      //res.send(searchData)
      res.render('search', searchData)
    } else {
      res.render('search', {})
    }
  })

  return router
}
