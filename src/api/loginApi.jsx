import axios from "axios";

const loginApi = async (formData)=>{
    const backend = import.meta.env.VITE_BACKEND;
    try {
        const data = await axios.post(`${backend}/user/api/login`, formData)
        return data;
    } catch (error) {
        console.log(error)
        throw Error(error)
        
    }

}
export default loginApi;