
import { axiosInstance } from "../config/https";
import AuthStore from "../mobx/auth";
import { ApiPath } from "../utils/routes/constant";

class Student {

  getAllInstitute = async () => {
    AuthStore.setLoading(true);
    const institutedata = await axiosInstance.post(`${ApiPath?.getAllInstitute}`, );
    console.log("institute  data", institutedata);
    if (institutedata?.data.isSuccess && institutedata?.data.responseCode === 200) {
      return institutedata?.data;
    } else {
      AuthStore.setLoading(false);
      return institutedata?.data;
    }

  };
  
  getCourseByInstitute = async (Id) => {
    AuthStore.setLoading(true);
    const institutedata = await axiosInstance.post(`${ApiPath?.getAllInstitute}`,{
      instituteId: Id
    } );
    console.log("institute  data", institutedata);
    if (institutedata?.data.isSuccess && institutedata?.data.responseCode === 200) {
      return institutedata?.data;
    } else {
      AuthStore.setLoading(false);
      return institutedata?.data;
    }

  };

}
const StudentDetail = new Student();
export default StudentDetail;
