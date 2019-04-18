/**
 * @swagger
 * tags:
 *   name: Order
 *   description: order controller api
 * definitions:
 *   Order:
 *     type: object
 *     required:
 *       - user
 *       - item
 *       - quantity
 *       - price
 *       - address     
 *     properties:
 *       _id:
 *         type: String
 *         description: ObjectId
 *       user:
 *         type: String
 *         description: 주문한 유저 ObjectId
 *       item:
 *         type: String
 *         description: 상품 ObjectId
 *       quantity:
 *         type: Number
 *         description: 주문한 상품 개수
 *       price:
 *         type: Number
 *         description: 주문한 상품 총 가격
 *       address:
 *         type: String
 *         description: 주문한 유저 주소 정보
 *       deleted:
 *         type: Boolean
 *         description: 삭제 status
 */
/**
 * @swagger
 * /api/order:
 *   get:
 *     description: 
 *     tags: [Order]
 *     responses:
 *       200:
 *         description:
 *   post:
 *     description: 
 *     tags: [Order]
 *     responses:
 *       200:
 *         description:
 *   put:
 *     description:
 *     tags: [Order]
 *     responses:
 *       200:
 *         description:
 *   delete:
 *     description:
 *     tags: [Order]
 *     responses:
 *       200:
 *         description:
 */


const router = require('express').Router();
const service = require('../service/orderService');

router.get('/', service.readAllOrders);
router.get('/:id', service.readOrderById);
router.get('/user-id/:userId', service.readOrdersByUserId);
router.get('/item-id/:itemId', service.readOrdersByItemId);
router.post('/', service.createOrder);
router.put('/:id', service.updateOrder);
router.delete('/:id', service.deleteOrder);

module.exports = router;