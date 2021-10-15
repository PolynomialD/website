var express = require('express');
var router = express.Router();

module.exports = (api) => {
  router.get('/', (_, res) => {
    res.render('wow', { title: 'The Wow Page' });
  });
  
  router.get('/getweapon/:weaponId', async (req, res) => {
    const weaponId = req.params.weaponId
    console.log(weaponId)
    try {
      const weapon = await api.getWeapon(weaponId)
      res.send(weapon)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  });

  return router
}

