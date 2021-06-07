'use strict';
import express from 'express';
const router = express.Router();

import ctrl from "./home.ctrl.js";

router.get('/', ctrl.output.home);

router.get('/login', ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post("/register", ctrl.process.register);

export default router;