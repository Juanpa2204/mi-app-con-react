import { API_RM } from '../constants/Api.Constants';

class RickAndMortyService {


    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        //Intercepto
        return await response.json();
    }

    async getCharactersById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //Intercepto
        const data=await response.json()
        return data ;
    }
}

export default new RickAndMortyService();