const axios = require('axios');


export class CatService {
    public async getCatData(): Promise<any> {
        try {
            return await axios.get('https://api.thecatapi.com/v1/breeds')
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
}