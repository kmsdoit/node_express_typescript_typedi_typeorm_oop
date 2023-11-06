import {Service} from "typedi";
import {AppDataSource} from "../database/data-source";
import {User} from "../entities/user.entity";
import {CreateUserDto} from "../dtos/user/create-user.dto";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Repository} from "typeorm";
@Service()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async save(createUserDto : CreateUserDto) {
        return await this.userRepository.save(createUserDto)
    }
}
