import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaArrowLeft} from 'react-icons/fa';


let Service= () =>
{

    const params = useParams();
        

    const [service, setService] = useState([]);
    



    const getService = async () => {
        const response = await fetch(`https://signatureauto-backend.herokuapp.com/services/${params.id}`);
        const FinalData = await response.json();
        setService(FinalData)
    }



    getService();



    return (
        <div className='admin-panel'> 
        <Topbar />  
        <div className='sidebar-container'>
         <Sidebar/>
        </div>
        <div className='admin-panel-main'>
            <div className='mb-5'>
            <Link to="/admin/services" ><FaArrowLeft/></Link>
            </div>
        <React.Fragment>
            { service &&
            <section className="serviceList">
                <div className="list-group">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                    <span ><img src={service.image} className="serviceimg" alt=""/></span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Name EN: </span><span>{service.service_name_en}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Name FR: </span> <span>{service.service_name_fr}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Small, 2 seater price: </span><span>{service.p_small_2seater}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Coupe price: </span><span>{service.p_coupe}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Small 4 door car price: </span><span>{service.p_small_4d_car}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">4 door sedan price: </span><span>{service.p_4d_sedan}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Small SUV price: </span><span>{service.p_small_suv}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Regular SUV price: </span><span>{service.reg_suv}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Big SUV price: </span><span>{service.p_big_suv}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Small pickup price: </span><span>{service.p_small_pickup}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Medium pick price: </span><span>{service.p_mid_pickup}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Big pickup price: </span><span>{service.p_big_pickup}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Description EN: </span><span >{service.service_description_en}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Description FR: </span><span >{service.service_description_fr}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            }


        </React.Fragment>
        </div>
        </div>
    )
};
export default Service;