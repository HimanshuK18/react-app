import { axiosInstance as AxiosInstance } from '../interceptor/intercept';

export class CatService {
    public async getCatData(): Promise<any> {
        try {
            
            return await AxiosInstance.get('/breeds')
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
}