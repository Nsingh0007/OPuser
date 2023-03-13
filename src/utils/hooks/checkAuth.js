import AuthStore from "../../mobx/auth";
const CheckAuth=()=>{
   if(AuthStore?.user?.token  &&  AuthStore?.user?.user?.isVerified  &&  AuthStore?.user?.user?.institute  && AuthStore?.user?.user?.course ){
    return true
   }
}
export default CheckAuth