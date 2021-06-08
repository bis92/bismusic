"use strict";

import logger from '../../config/logger.js';
import User from '../../models/User.js';

const output = {
    home: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login: (req, res) => {
        logger.info(`GET / 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET / 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
}

const process = {

    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "login",
            status: response.err ? 409 : 200,
        }
        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "register",
            status: response.err ? 400 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    }
}

const log = (response, url) => {
    if (response.err){
        logger.error(`${url.method} /${url.path} ${url.status} Response: ${response.success} ${response.err}`);
    } else {
        logger.info(`${url.method} /${url.path} ${url.status} Response: ${response.success} ${response.msg}`);
    }
}

export default { output, process };