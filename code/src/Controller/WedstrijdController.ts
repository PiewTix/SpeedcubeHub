import { NextFunction, Request, Response } from "express"
import { findWedstrijdenForToernooi} from "../dao/WedstrijdDAO";
import {Toernooi} from "../entity/Toernooi";


export class WedstrijdController{

    static async findAllToernooiWedstrijden(request: Request, response: Response, next: NextFunction) {
        try {
            const toernooiNaam = request.params.toernooi; // Assuming the ID is passed as a URL parameter
            const wedstrijden = await findWedstrijdenForToernooi(toernooiNaam);

            if (wedstrijden) {
                response.json(wedstrijden); // Return the user if found
            } else {
                response.status(404).json({ message: "wedstrijden not found" }); // Return a 404 response if user is not found
            }
        } catch (error) {
            response.status(404).json({ message: "wedstrijden not found" });
        }
    }




}