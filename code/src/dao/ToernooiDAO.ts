import {AppDataSource} from "../data-source";
import { Toernooi } from '../entity/Toernooi';
import {FindOneOptions} from "typeorm";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";



const toernooiRepository = AppDataSource.getRepository(Toernooi)


export async function findAll() {
    return await toernooiRepository
        .createQueryBuilder('toernooi')
        .leftJoinAndSelect('toernooi.organisatoren', 'organisatoren')
        .getMany();
}

/*
export async function findById(id: number) {
    const options: FindOneOptions<Toernooi> = {
        where: { id: id },
    };

    return toernooiRepository.findOne(options);
}

*/


export async function create(toernooi: Toernooi): Promise<Toernooi> {
    return toernooiRepository.save(toernooi);
}

export async function createMultiple(toernooien: Toernooi[]){
    return toernooiRepository.save(toernooien)
}
/*
export async function update(id: number, updatedToernooi: Toernooi) {
    await toernooiRepository.update(id, updatedToernooi);
    return findById(id);
}
*/
export async function deleteWithId(id: number) {
    await toernooiRepository.delete(id);
}

export async function updateDeelnameprijs(toernooiName: string, newDeelnameprijs: number){
    try {

        const toernooi= await toernooiRepository.findOne({
            where: { naam: toernooiName },
        });

        const partialEntity: QueryDeepPartialEntity<Toernooi> = {
            deelnamePrijs: newDeelnameprijs
            // Add other properties you want to update...
        };

        return await toernooiRepository.update(toernooi, partialEntity)


    } catch (error) {
        throw error;
    }

}