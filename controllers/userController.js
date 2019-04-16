/**
 * @swagger
 * /api/user:
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
const service = require('../service/userService');

router.get('/', service.readAllUser);
router.post('/', service.createUser);
router.put('/:id', service.updateUser);
router.delete('/:id', service.deleteUser);

router.get('/:id/orders', service.readAllOrders);
router.post('/:id/orders', service.createOrder);
router.put('/:id/orders/:itemId', service.updateOrder);
router.delete('/:id/orders/:itemId', service.deleteOrder);

// search
router.get('/:email', service.readUserByEmail);


module.exports = router;
