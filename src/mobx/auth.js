import { makeAutoObservable } from "mobx";
class Auth {
  user = {};
  isLoading = false;
  
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (data) => {
    this.user = data;
  };

  updateUser = (updatedData) => {
    let updatedUser = updatedData?.user
    let data = {}
    if (updatedData?.token) {
      data.token = updatedData?.token
    }
    else {
      data.token = this.user.token
    }
    data.user = { ...this.user?.user, ...updatedUser }
    this.setUser(data)
  };

  clear = () => {
    this.user = {}
  };
  setLoading = (value) => {
    this.isLoading = value;
  };
  
}
const AuthStore = new Auth();
export default AuthStore;
