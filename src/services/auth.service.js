import axios from "axios";

const API_URL = "http://localhost:4000/user";

class AuthService {
    login(username, password) {
      return axios
        .post(API_URL + "/login", { username, password })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
  
    logout() {
      localStorage.removeItem("user");
    }

    register(username, password, phoneNumber) {
      return axios.post(API_URL + "signup", {
        username,
        password,
        phoneNumber,
      });
    }
  }
  
  export default new AuthService();