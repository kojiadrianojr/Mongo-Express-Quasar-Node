import axios from 'axios';


const API = 'http://localhost:3000'

class Controller{
    constructor(){
        this.API = axios.create({
            baseURL: API
        });
        this.DATA = [];
    }

    async fetch_data() {
        const response = await this.API.get('/task/list');
        const data = response.data;
        return data;
    }

    async post_data({name, desc, status}) {
        try {
            const response = await this.API.post('/task', {
                name: name,
                desc:desc,
                status:status
            });
            return response;
        }catch (e) {
            throw new Error(e);
        } 
    }

    async delete_data(id){
        try {
            const response = await this.API.delete(`/task/list/${id}`);
            return response
        } catch (e){
            throw new Error(e);
        }
    }
}


export default new Controller();