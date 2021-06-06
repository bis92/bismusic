'use strict';
// 모듈
import express from 'express'
const app = express();

// 라우팅
import home from './src/routes/home/index.js';

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

export default app;

