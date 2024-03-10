import {AppDataSource} from "../data-source";
import {Organisator} from "../entity/Organisator";
import {FindOneOptions} from "typeorm";


const organisatorRepository = AppDataSource.getRepository(Organisator)

export async function findAll(){
    return organisatorRepository.find();
}

export async function findById(id: number) {
    const options: FindOneOptions<Organisator> = {
        where: { id: id }, // Specify the condition to find a user by their ID
    };

    return organisatorRepository.findOne(options);
}

export async function create(user: Organisator): Promise<Organisator> {
    return organisatorRepository.save(user);
}

export async function update(id: number, updatedUser: Organisator){
    await organisatorRepository.update(id, updatedUser);
    return this.findById(id);
}

export async function deleteWithId(id: number) {
    await organisatorRepository.delete(id);
}
