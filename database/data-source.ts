import {User} from "../entities/user.entity";
import {Container} from "typedi";


export const AppDataSource = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "supernova",
    password: "supernova",
    database: "supernova",
    synchronize: true,
    logging: true,
    entities: [User],
}
