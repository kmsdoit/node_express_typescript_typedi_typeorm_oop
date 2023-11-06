import "reflect-metadata"
import express, { Request, Response } from "express";
import { useExpressServer, useContainer as useRoutingContainer } from 'routing-controllers';
import {Container} from "typedi";
import {createConnection, useContainer as ormUseContainer} from "typeorm";
import {User} from "./entities/user.entity";



class App {
    public app : express.Application

    constructor() {
        this.app = express()
    }

    private async init() {
        useRoutingContainer(Container)
        useExpressServer(this.app, {
            controllers : [`${__dirname}/controllers/*.{ts,js}`]
        })
        ormUseContainer(Container)
        await this.typeOrmCreateConnection()

    }

    private async typeOrmCreateConnection() {
        try {
            await createConnection({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "supernova",
                password: "supernova",
                database: "supernova",
                synchronize: true,
                logging: true,
                entities: [User],
            })
        }catch (err) {
            console.log('Caught! Cannot connect to database: ', err);
        }
    }

    public async start() {
        await this.init()
        this.app.listen(5901, () => {
            console.log(`API Server is running: http://localhost:${5901}`);
        });
    }

}

const app = new App();
app.start()

export default app
