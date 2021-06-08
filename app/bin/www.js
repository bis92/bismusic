'use strict';

import app from '../app.js';
import logger from "../src/config/logger.js";

const PORT = 5000;
app.listen(PORT, () => {
    logger.info(`${PORT}번 PORT에서 서버를 연결하였습니다.`);
})