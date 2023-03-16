import { API_RM } from '../constants/Api.Constants';

class RickAndMortyService {


    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        //Intercepto
        return response.json();
    }

    async getCharactersById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //Intercepto
        return response.json();
    }
}

export default new RickAndMortyService();