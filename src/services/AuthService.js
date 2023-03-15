import jwt_decode from "jwt-decode";
import { axiosInstance } from "../config/https";
import AuthStore from "../mobx/auth";
import { ApiPath } from "../utils/routes/constant";

class Auth {
  login = async (data) => {
    AuthStore.setLoading(true);
    const loginres = await axiosInstance.post(`${ApiPath?.login}`, data);
    console.log("login data", loginres);
    if (loginres.data.isSuccess && loginres.data.responseCode === 200) {
      if (data?.rememberme) {
        sessionStorage.setItem("Credential", JSON.stringify(data));
      }
      let decoded = jwt_decode(loginres?.data?.data?.token);
      let userToken = {
        token: loginres?.data?.data?.token,
        user: { ...decoded },
      };
      localStorage.setItem("key", JSON.stringify(userToken));
      AuthStore.setUser(userToken);
      AuthStore.setLoading(false);
      return loginres?.data;
    } else {
      AuthStore.setLoading(false);
      return loginres?.data;
    }
  };

  signUp = async (data) => {
    AuthStore.setLoading(true);
    const loginres = await axiosInstance.post(`${ApiPath?.signup}`, data);
    console.log("sign up data", loginres);
    if (loginres?.data.isSuccess && loginres?.data.responseCode === 200) {
      AuthStore.setLoading(false);
      if (data?.rememberme) {
        sessionStorage.setItem("Credential", JSON.stringify(data));
      }
      let decoded = jwt_decode(loginres?.data?.data);
      let userToken = {
        token: loginres?.data?.data,
        user: { ...decoded },
      };
      localStorage.setItem("key", JSON.stringify(userToken));
      AuthStore.setUser(userToken);
      AuthStore.setLoading(false);
      return loginres?.data;
    } else {
      AuthStore.setLoading(false);
      return loginres?.data;
    }
  };

  updateProfile = async (payload) => {
    AuthStore.setLoading(true);
    const userUpdateres = await axiosInstance.post(`${ApiPath?.editUser}`, payload);
    console.log("update Profile data", userUpdateres);
    if (userUpdateres?.data.isSuccess && userUpdateres?.data.responseCode === 200) {
      AuthStore.setLoading(false);
      let decoded = jwt_decode(userUpdateres?.data?.data);
      let userToken = {
        token: userUpdateres?.data?.data,
        user: { ...decoded },
      };
      localStorage.setItem("key", JSON.stringify(userToken));
      AuthStore.setUser(userToken);
      AuthStore.setLoading(false);
      return userUpdateres?.data;
    } else {
      AuthStore.setLoading(false);
      return userUpdateres?.data;
    }

  };

  removeLogin = async () => {
    localStorage.removeItem("key");
  };
}
const AuthServices = new Auth();
export default AuthServices;
