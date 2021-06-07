"use strict";

import fs from 'fs';
const fs1 = fs.promises;

class UserStorage {

    static getUser(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) {
        return fs1.readFile("./src/databases/users.json")
        .then((data) => {
            return this.getUser(data, id);
        })
        .catch(console.error())
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id)
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true }
    }
}

export default UserStorage;