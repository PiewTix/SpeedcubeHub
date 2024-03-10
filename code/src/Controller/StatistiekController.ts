import { NextFunction, Request, Response } from "express"
import {findTopStatistieken} from "../dao/StatistiekDAO";


export class StatistiekController{

    static async findStatistieken(request: Request, response: Response, next: NextFunction) {
        try {
            let stats = await findTopStatistieken();
            response.json(stats);
        } catch (error) {
            next(error);
        }
    }
}