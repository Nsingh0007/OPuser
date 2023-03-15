import AuthStore from "../../mobx/auth";
function CheckAuth(){
   if(AuthStore?.user?.token  &&  AuthStore?.user?.user?.isVerified  &&  AuthStore?.user?.user?.instituteId  && AuthStore?.user?.user?.subcourseid )
   //if(AuthStore?.user?.token)
   {
    return true
   }
}
export default CheckAuth