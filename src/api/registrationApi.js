import axios from "axios";

const registerApi = async (formData)=>{
    const backend = import.meta.env.VITE_BACKEND;
    try {
        const data = await axios.post(`${backend}/user/api/register`, formData)
        return data;
    } catch (error) {
        console.log(error)
        throw Error(error)
        
    }

}
export default registerApi;