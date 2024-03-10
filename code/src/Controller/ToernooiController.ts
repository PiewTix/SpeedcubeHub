import { NextFunction, Request, Response } from "express"
import {findAll, updateDeelnameprijs} from "../dao/ToernooiDAO";

export class ToernooiController {
    static async findAllToernooien(request: Request, response: Response, next: NextFunction) {
        try {
            let users = await findAll();
            response.json(users);
        } catch (error) {
            next(error);
        }
    }



    static async updateDeelnameprijs(request: Request, response: Response, next: NextFunction) {
        try {
            const { name, newDeelnameprijs } = request.body;



            const updatedToernooi = await updateDeelnameprijs(name, parseFloat(newDeelnameprijs));

            if (updatedToernooi) {
                response.json(updatedToernooi);
            } else {
                response.status(404).json({ message: 'Tournament not found' });
            }
        } catch (error) {
            next(error);
        }
    }


/*
    static async findUserById(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = parseInt(request.params.id); // Assuming the ID is passed as a URL parameter
            const user = await findById(userId);

            if (user) {
                response.json(user); // Return the user if found
            } else {
                response.status(404).json({ message: "User not found" }); // Return a 404 response if user is not found
            }
        } catch (error) {
            next(error); // Handle errors
        }
    }
*/
}
