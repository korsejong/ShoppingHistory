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
router.get('/:email', service.readUserByEmail);
router.post('/', service.createUser);
router.put('/:email', service.updateUser);
router.delete('/:email', service.deleteUser);


router.get('/:email/order/:itemId', service.readOrderById);
router.post('/:email/order', service.createOrder);
router.put('/:email/order/:itemId', service.updateOrder);
router.delete('/:email/order/:itemId', service.deleteOrder);

router.get('/:email/order/all', service.readAllOrders);

module.exports = router;
