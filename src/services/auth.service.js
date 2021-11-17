import axios from "axios";

const API_URL = "http://localhost:4000/user";

class AuthService {
    login(username, password) {
      return axios
        .post(API_URL + "/login", { username, password })
        .then((response) => {
          console.log(response.data)
  
          return response.data;
        });
    }
  
    register(username, email, password) {
      return axios.post(API_URL + "signup", {
        username,
        email,
        password,
      });
    }
  }
  
  export default new AuthService();