import {Service} from "typedi";
import {EntityRepository} from "typeorm";
import {User} from "../entities/user.entity";


@Service()
@EntityRepository(User)
export class UserRepository {}
