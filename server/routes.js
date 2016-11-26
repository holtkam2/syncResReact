const router = require('express').Router();

const calculate = () => {
  console.log("calculate function called!")
}

router.get('/');

router.post('/api/state', calculate);

module.exports = router;