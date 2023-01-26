import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaArrowLeft} from 'react-icons/fa';


let GalleryItem= () =>
{

    const params = useParams();
        

    const [gallery, setGallery] = useState([]);
    



    const getGallery = async () => {
        const response = await fetch(`https://signatureauto-backend.herokuapp.com/gallery/${params.id}`);
        const FinalData = await response.json();
        setGallery(FinalData)
    }



    getGallery();



    return (
        <div className='admin-panel'> 
        <Topbar />  
        <div className='sidebar-container'>
         <Sidebar/>
        </div>
        <div className='admin-panel-main'>
            <div className='mb-5'>
            <Link to="/admin/gallery"><FaArrowLeft/></Link>
            </div>
        <React.Fragment>
            { gallery &&
            <section className="serviceList">
                <div className="list-group">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Name EN: </span><span>{gallery.service_name_en}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <span className="fw-bold">Name FR: </span> <span>{gallery.service_name_fr}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <img className="serviceimg" alt="before" src={gallery.before_img}/>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                <img className="serviceimg" alt="after" src={gallery.after_img}/>
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
export default GalleryItem;