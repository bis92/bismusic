"use strict";

import db from "../config/db.js";

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id=?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            })
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            })
        });
    }
}

export default UserStorage;