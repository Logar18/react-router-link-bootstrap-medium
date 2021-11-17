import axios from "axios";
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/user';

class UserService {
    getPublicContext() {
        return axios.get(AXIOS_URL + "/me")
    }
}