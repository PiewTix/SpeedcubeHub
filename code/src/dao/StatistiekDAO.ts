import {AppDataSource} from "../data-source";
import {Statistiek} from "../entity/Statistiek";

const statistiekRepository = AppDataSource.getRepository(Statistiek)

export async function findTopStatistieken() {
    try {
        const top10Statistieken = await statistiekRepository
            .createQueryBuilder('statistiek')
            .innerJoinAndSelect('statistiek.speler', 'speler')
            .orderBy('statistiek.recordTijd', 'ASC')
            .limit(10)
            .getMany();

        return top10Statistieken;
    } catch (error) {
        console.error(error);
        return null;
    }
}