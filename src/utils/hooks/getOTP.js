import { toast } from 'react-toastify';
import { axiosInstance } from '../../config/https';
import AuthStore from '../../mobx/auth';
import { ApiPath } from '../routes/constant';

const GetOTP = async (mobileNumber, callingUnit) => {
    try {
        AuthStore.setLoading(true);
        const resp = await axiosInstance.post(`${ApiPath?.getOTP}?mobilenumber=${mobileNumber}&callingunit=${callingUnit}`);
        AuthStore.setLoading(false);
        return resp?.data;
    } catch (error) {
        console.log("Error on GetOTP --> ", error);
        AuthStore.setLoading(false);
        toast.error(error?.response?.data?.data[0]?.message)
        throw new Error(error);
    }
}

export default GetOTP
