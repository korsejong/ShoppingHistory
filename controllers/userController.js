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
 * paths:
 *   /api/users:
 *     get:
 *       description: "read all users"
 *       tags: [User]
 *       responses:
 *         200:
 *           description:
 *     post:
 *       description: "create user"
 *       tags: [User]
 *       responses:
 *         202:
 *           description:
 *     put:
 *       description: "update user"
 *       tags: [User]
 *       responses:
 *         202:
 *           description:
 *     delete:
 *       description: "delete user"
 *       tags: [User]
 *       responses:
 *         202:
 *           description: 
 *   /api/users/{id}:
 *     get:
 *       description: "read user by id"
 *       tags: [User]
 *       responses:
 *         200:
 *           description:
 *   /api/users/email/{email}:
 *     get:
 *       description: "read user by email"
 *       tags: [User]
 *       responses:
 *         200:
 *           description:
 */

const router = require('express').Router();
const service = require('../service/userService');
const logger = require('../utils/customLogger');

router.get('/', logger, service.readAllUsers);
router.get('/:id', logger, service.readUserById);
router.get('/email/:email', logger, service.readUserByEmail);
router.post('/', logger, service.createUser);
router.put('/:id', logger, service.updateUser);
router.delete('/:id', logger, service.deleteUser);

module.exports = router;
