'use strict';
import UserStorage from './UserStorage.js';

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, password } = UserStorage.getUserInfo(body.id);
        if (id){
            if (id === body.id && password === body.password) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
}

export default User;