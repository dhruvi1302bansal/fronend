
import axios from 'axios'

const SubmitPatientDetails = async (details)=>{
    const Backend = import.meta.env.VITE_BACKEND;

    try {
        const data = await axios.post(`${Backend}/patientDetails`, details )
        console.log("data", data);
        
    } catch (error) {
        console.log(error)
        
    }
}
 export default SubmitPatientDetails;