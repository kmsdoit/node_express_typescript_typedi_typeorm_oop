import {UserService} from "../services/user.service";
import {Request, Response} from "express";
import {CreateUserDto} from "../dtos/user/create-user.dto";
import {Body, HttpCode, JsonController, Post} from "routing-controllers";
import {Inject, Service} from "typedi";


@JsonController('/api/v1/users')
@Service()
export class UserController {
    constructor(private userService : UserService) {
    }

    @HttpCode(201)
    @Post('/save')
    async save(@Body() createUserDto : CreateUserDto) {
        try {
            const created_user = await this.userService.save(createUserDto)
            return {
                status_code : 201,
                message : "유저 생성 성공",
                data : created_user
            }
        }catch (err) {
            return {
                status_code : 400,
                message : "유저 생성 실패"
            }
        }
    }
}
