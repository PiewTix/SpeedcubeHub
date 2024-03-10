import {AppDataSource} from "../data-source";
import { Speler } from '../entity/Speler';
import {FindOneOptions} from "typeorm";
import {Statistiek} from "../entity/Statistiek";
import {Organisator} from "../entity/Organisator";

const userRepository = AppDataSource.getRepository(Speler)
const statistiekRepository = AppDataSource.getRepository(Statistiek)




export async function findAll(){
        return userRepository.find();
}


export async function findByIdWithStatistics(id: number) {


    try {
        const speler = await statistiekRepository
            .createQueryBuilder('statistiek')
            .leftJoinAndSelect('statistiek.speler', 'speler')
            .where('statistiek.spelerId = :id', { id: id })
            .getOne();

        return speler;
    } catch (error) {
        // Handle any potential errors
        console.error(error);
        return null;
    }
}
    export async function create(user: Speler): Promise<Speler> {
        return userRepository.save(user);
    }

    export async function update(id: number, updatedUser: Speler){
        await userRepository.update(id, updatedUser);
        return this.findById(id);
    }

    export async function deleteWithId(id: number) {
        await userRepository.delete(id);
    }
