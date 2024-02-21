"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllEntities = exports.UpdateUsersDto = exports.UserDto = exports.GetUserByIdDto = exports.CreateUsersDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUsersDto {
}
exports.CreateUsersDto = CreateUsersDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.MinLength)(3, { message: 'Name must be at least 3 characters long' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.MinLength)(3, { message: 'Email must be at least 3 characters long' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Birth is required' }),
    __metadata("design:type", Date)
], CreateUsersDto.prototype, "birth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(3, { message: 'Password must be at least 3 characters long' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
class GetUserByIdDto {
}
exports.GetUserByIdDto = GetUserByIdDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'ID is required' }),
    (0, class_validator_1.IsInt)({ message: 'ID must be an integer' }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], GetUserByIdDto.prototype, "id", void 0);
class UserDto {
}
exports.UserDto = UserDto;
class UpdateUsersDto {
}
exports.UpdateUsersDto = UpdateUsersDto;
class ListAllEntities {
}
exports.ListAllEntities = ListAllEntities;
//# sourceMappingURL=users.dto.js.map