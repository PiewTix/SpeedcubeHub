import { NextFunction, Request, Response } from "express"
import {findAll, findByIdWithStatistics, create} from "../dao/SpelerDAO";
import {Speler} from "../entity/Speler";

export class SpelerController {
    static async findAllUsers(request: Request, response: Response, next: NextFunction) {
        try {
            let users = await findAll();
            response.json(users);
        } catch (error) {
            next(error);
        }
    }

    static async findUserById(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = parseInt(request.params.id);
            const user = await findByIdWithStatistics(userId);

            if (user) {
                response.json(user);
            } else {
                response.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            next(error);
        }
    }


    static async createPlayer(request: Request, response: Response, next: NextFunction) {
        try {
            const { voornaam, achternaam, geslacht, land } = request.body;


            const newPlayer: Speler = new Speler();
            newPlayer.voornaam = voornaam;
            newPlayer.achternaam = achternaam;
            newPlayer.geslacht = geslacht;
            newPlayer.land = land;

            const savedPlayer = await create(newPlayer);

            response.json(savedPlayer);
        } catch (error) {
            next(error);
        }
    }

    static async createPlayers(request: Request, response: Response, next: NextFunction) {
        try {
            let gegevens = request.body;
            let storedSpelers = []

            for(let data of gegevens){
                const { voornaam, achternaam, geslacht, land } = data
                const newPlayer: Speler = new Speler();
                newPlayer.voornaam = voornaam;
                newPlayer.achternaam = achternaam;
                newPlayer.geslacht = geslacht;
                newPlayer.land = land;
                const createdPlayer = await create(newPlayer);
                storedSpelers.push(createdPlayer)

            }


            response.json(JSON.stringify(storedSpelers));


        } catch (error) {
            next(error);
        }
    }


}
