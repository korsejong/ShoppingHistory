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
 * paths:
 *   /api/items:
 *     get:
 *       description: "read all items"
 *       tags: [Item]
 *       responses:
 *         200:
 *           description:
 *     post:
 *       description: "create item"
 *       tags: [Item]
 *       responses:
 *         202:
 *           description:
 *     put:
 *       description: "update item"
 *       tags: [Item]
 *       responses:
 *         202:
 *           description:
 *     delete:
 *       description: "delete item"
 *       tags: [Item]
 *       responses:
 *         202:
 *           description: 
 *   /api/items/{id}:
 *     get:
 *       description: "read item by id"
 *       tags: [Item]
 *       responses:
 *         200:
 *           description:
 *   /api/items/name/{name}:
 *     get:
 *       description: "read items by name"
 *       tags: [Item]
 *       responses:
 *         200:
 *           description:
 */

const router = require('express').Router();
const service = require('../service/itemService');
const upload = require('../utils/fileUpload');
const logger = require('../utils/customLogger');

router.get('/', logger, service.readAllItems);
router.get('/:id', logger, service.readItemById);
router.get('/name/:name', logger, service.readItemsByName);
router.post('/', upload.single('thumbnail'), logger, service.createItem);
router.put('/:id', logger, service.updateItem);
router.delete('/:id', logger, service.deleteItem);

module.exports = router;
