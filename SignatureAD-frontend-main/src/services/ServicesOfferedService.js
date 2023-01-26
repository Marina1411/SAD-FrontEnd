import axios from 'axios';


export class ServicesOfferedService {

    static serverURL = 'https://signatureauto-backend.herokuapp.com/';


    static deleteService(id){
        let dataUrl=`${this.serverURL}services/${id}`
        return axios.delete(dataUrl);
    }
}
