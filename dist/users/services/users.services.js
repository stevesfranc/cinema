"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users_dto_1 = require("../dto/users.dto");
class UserService {
    userRegister(userData) {
        return userData;
    }
    findUsersById(userId) {
        return;
    }
    getAllUsers() {
        return [];
    }
    deleteUser(userId) {
        return false;
    }
    updateUser(userId, data) {
        return users_dto_1.UserDto;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=users.services.js.map