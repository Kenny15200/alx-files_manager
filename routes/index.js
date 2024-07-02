import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const express = require('express');
const router = express.Router();
const FilesController = require('../controllers/FilesController');

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
// Authentication routes
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
// User management route
router.get('/users/me', UsersController.getMe);
router.post('/files', FilesController.postUpload);

module.exports = router;
export default router;
