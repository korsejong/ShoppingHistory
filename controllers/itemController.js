/**
 * @swagger
 * /api/item:
 *   get:
 *     description: 
 *     responses:
 *       200:
 *         description:
 *   post:
 *     description: 
 *       responses:
 *       200:
 *         description:
 *   put:
 *     description:
 *       responses:
 *       200:
 *         description:
 *   delete:
 *     description:
 *       responses:
 *       200:
 *         description:
 */

const router = require('express').Router();
const service = require('../service/itemService');
const upload = require('../utils/fileUpload');

router.get('/:id', service.readItemById);
router.post('/', upload.single('thumbnail'), service.createItem);
router.put('/:id', service.updateItem);
router.delete('/:id', service.deleteItem);

router.get('/', service.readAllItem);
router.get('/search/:name', service.readItemByName);

module.exports = router;
