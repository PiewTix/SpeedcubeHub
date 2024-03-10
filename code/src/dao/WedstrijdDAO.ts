import {AppDataSource} from "../data-source";
import {Wedstrijd} from "../entity/Wedstrijd";
import {Toernooi} from "../entity/Toernooi";
import {FindManyOptions, FindOneOptions, FindOptions} from "typeorm";
import {Speler} from "../entity/Speler";



const wedstrijdRepository = AppDataSource.getRepository(Wedstrijd);
const toernooiRepository = AppDataSource.getRepository(Toernooi);

export async function findAllWedstrijden() {
    return wedstrijdRepository.find();
}




export async function findWedstrijdenForToernooi(toernooinaam: string) {
    try {

        const toernooiFK = await toernooiRepository.findOne({
            where: { naam: toernooinaam },
        });

        if (!toernooiFK) {
            throw new Error(`Toernooi with naam ${toernooinaam} not found`);
        }



        const manyOptions: FindManyOptions<Wedstrijd> = {
            where: { toernooi: toernooiFK },
            relations: ['speler1', 'speler2'],
        };
        const wedstrijden = await wedstrijdRepository.find(manyOptions);

        return wedstrijden;
    } catch (error) {
        // Handle the error
        console.error('Error:', error);
        throw error;
    }
}

export async function create(wedstrijd: Wedstrijd): Promise<Wedstrijd> {
    return wedstrijdRepository.save(wedstrijd);
}
/*
export async function update(id: number, updatedToernooi: Toernooi) {
    await toernooiRepository.update(id, updatedToernooi);
    return findById(id);
}
*/
export async function deleteWithId(id: number) {
    await wedstrijdRepository.delete(id);
}