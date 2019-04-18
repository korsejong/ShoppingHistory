/**
 * @swagger
 * tags:
 *   name: User
 *   description: user controller api
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *     properties:
 *       _id:
 *         type: String
 *         description: ObjectId
 *       email:
 *         type: String
 *         description: 유저 이메일
 *       deleted:
 *         type: Boolean
 *         description: 삭제 status
 */
/**
 * @swagger
 * /api/user:
 *   get:
 *     description: 
 *     tags: [User]
 *     responses:
 *       200:
 *         description:
 *   post:
 *     description:  
 *     tags: [User]
 *     responses:
 *       200:
 *         description:
 *   put:
 *     description: 
 *     tags: [User]
 *     responses:
 *       200:
 *         description:
 *   delete:
 *     description: 
 *     tags: [User]
 *     responses:
 *       200:
 *         description:
 */

const router = require('express').Router();
const service = require('../service/userService');

router.get('/', service.readAllUsers);
router.get('/:id', service.readUserById);
router.get('/email/:email', service.readUserByEmail);
router.post('/', service.createUser);
router.put('/:id', service.updateUser);
router.delete('/:id', service.deleteUser);

module.exports = router;
