import { observer } from "mobx-react-lite";
import AuthStore from "../../mobx/auth";
function CheckAuth(){
   if(AuthStore?.user?.token  &&  AuthStore?.user?.user?.isVerified  &&  AuthStore?.user?.user?.institute  && AuthStore?.user?.user?.course )
   //if(AuthStore?.user?.token)
   {
    return true
   }
}
export default CheckAuth