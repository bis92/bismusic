'use strict';
// 모듈
import express from 'express'
const app = express();
import path from 'path';
const __dirname = path.resolve();

// 라우팅
import home from './src/routes/home/index.js';

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

export default app;

