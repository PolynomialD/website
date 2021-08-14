var express = require('express');
var router = express.Router();
var getWeapon = require('../api')

/* GET users listing. */
router.get('/', (_, res) => {
  res.render('wow', { title: 'The Wow Page' });
});

router.get('/getweapon/:weaponId', async (req, res) => {
  const weaponId = req.params.weaponId
  console.log(weaponId)
  const weapon = await getWeapon(weaponId)
  res.send(weapon)
});

module.exports = router;
