const { Router } = require('express');
const querys = require('../querys');

const router = Router();

router.get('/', async (req, res) => {
    const query = await querys.getAllActors();
    return res.status(200).json(query);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const query = await querys.getActorsById(id);
    if (query.length === 0) {
      return res.status(400).json({ message: 'actor not found' });
    }
    return res.status(200).json(query);
});

router.post('/', async (req, res) => {
  const { first_name, last_name } = req.body;
  const query = await querys.createActor(first_name, last_name);
    return res.status(200).json(query);
});

router.put('/', async (req, res) => {
  const { id, first_name, last_name } = req.body;
  const query = await querys.updateActor(id, first_name, last_name);
  if (query === null) {
    return res.status(400).json({ message: 'actor not found' });
  }
  return res.status(200).json({ message: 'actor registered successfully'});
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  const query = await querys.deleteActor(id);
  if (query === null) {
    return res.status(400).json({ message: 'actor not found' });
  }
  return res.status(200).json({ message: 'actor deleted successfully'});
});

module.exports = router;