/**
 * @swagger
 * tags:
 *   name: Item
 *   description: item controller api
 * definitions:
 *   Item:
 *     type: object
 *     required:
 *       - name
 *       - price
 *     properties:
 *       _id:
 *         type: String
 *         description: ObjectId
 *       price:
 *         type: Number
 *         description: 상품 가격
 *       thumbnail:
 *         type: String
 *         description: 상품 썸네일 이미지 url
 *       deleted:
 *         type: Boolean
 *         description: 삭제 status
 */
/**
 * @swagger
 * /api/item:
 *   get:
 *     description: 
 *     tags: [Item]
 *     responses:
 *       200:
 *         description:
 *   post:
 *     description: 
 *     tags: [Item]
 *     responses:
 *       200:
 *         description:
 *   put:
 *     description:
 *     tags: [Item]
 *     responses:
 *       200:
 *         description:
 *   delete:
 *     description:
 *     tags: [Item]
 *     responses:
 *       200:
 *         description:
 */

const router = require('express').Router();
const service = require('../service/itemService');
const upload = require('../utils/fileUpload');

router.get('/', service.readAllItems);
router.get('/:id', service.readItemById);
router.get('/name/:name', service.readItemsByName);
router.post('/', upload.single('thumbnail'), service.createItem);
router.put('/:id', service.updateItem);
router.delete('/:id', service.deleteItem);

module.exports = router;
