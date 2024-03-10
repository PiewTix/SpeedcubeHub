import {findAll, findById} from "../dao/OrganisatorDAO";
import { NextFunction, Request, Response } from "express"


export class OrganisatorController{

    static async findAllOrganisatoren(request: Request, response: Response, next: NextFunction) {
        try {
            let organisators = await findAll();
            response.json(organisators);
        } catch (error) {
            next(error);
        }
    }

    static async findOrganisatorById(request: Request, response: Response, next: NextFunction) {
        try {
            const organisatorId = parseInt(request.params.id);
            const organisator = await findById(organisatorId);

            if (organisator) {
                response.json(organisator);
            } else {
                response.status(404).json({ message: "Organisator not found" });
            }
        } catch (error) {
            next(error);
        }
    }

}