import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaPencilAlt, FaEye, FaPlusCircle} from 'react-icons/fa';
import {FaTrashAlt} from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import withAdminAccess from './withAdminAccess';

function AdminServices() {
const [service_name_en, setService_name_en] = useState('');
const [service_name_fr, setService_name_fr] = useState('');
const [p_small_2seater, setP_small_2seater] = useState('');
const [p_coupe, setP_coupe] = useState('');
const [p_small_4d_car, setP_small_4d_car] = useState('');
const [p_4d_sedan, setP_4d_sedan] = useState('');
const [p_small_suv, setP_small_suv] = useState('');
const [reg_suv, setReg_suv] = useState('');
const [p_big_suv, setP_big_suv] = useState('');
const [p_small_pickup, setP_small_pickup] = useState('');
const [p_mid_pickup, setP_mid_pickup] = useState('');
const [p_big_pickup, setP_big_pickup] = useState('');
const [image, setImage] = useState('');
const [service_description_en, setService_description_en] = useState('');
const [service_description_fr, setService_description_fr] = useState('');
const [type, setType] = useState('');
const [modalVisible, setModalVisible] = useState(false);

const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://signatureauto-backend.herokuapp.com/services/add', { service_name_en,service_name_fr, p_small_2seater,p_coupe, p_small_4d_car,p_4d_sedan,p_small_suv,reg_suv,p_big_suv,p_small_pickup,p_mid_pickup,p_big_pickup,image,service_description_en,service_description_fr,type})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    setModalVisible(false);
    window.location.reload()
  }

    const [services, setServices] = useState([]);


    const getServices = async () => {
        const response = await fetch('https://signatureauto-backend.herokuapp.com/services');
        const FinalData = await response.json();
        setServices(FinalData)
    }

    useEffect(() => {
        getServices();
    }, [])


    const handleDeleteClick = serviceId => {
      axios.delete(`https://signatureauto-backend.herokuapp.com/services/${serviceId}`)
        .then(response => {
          // The delete request was successful
          console.log(response);
        })
        .catch(error => {
          // There was an error
          console.error(error);
        });
        window.location.reload()
    };

    const DeleteButton = ({ serviceId, onDeleteClick }) => {
      return (
        <button onClick={() => onDeleteClick(serviceId)} className="deletebtn"><FaTrashAlt /></button>
      );
    };

    return (


        <div className='admin-panel'>
            <Topbar />
            <div className='sidebar-container'>
                <Sidebar />
            </div>
            <div className='admin-panel-main'>
              <div className='row mb-4'>
                <div className='col-10'>
                <h3 className='adminTitle'>Services</h3>
                </div>
                <div className='col-2'>
                    <div className='insertbtn' onClick={handleOpenModal}> 
                    <span>ADD ITEM</span>
                    <span className='mx-2'><FaPlusCircle/></span></div>
                </div>
            </div>
            <Modal show={modalVisible} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Service Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <form>
      <label>
        Service Name EN:
        <input type="text" value={service_name_en} onChange={(event) => setService_name_en(event.target.value)} />
        </label>
        <label>
        Service Name FR:
        <input type="text" value={service_name_fr} onChange={(event) => setService_name_fr(event.target.value)} />
      </label>
      <label>
        Price Small 2 Seater:
        <input type="number" value={p_small_2seater} onChange={(event) => setP_small_2seater(event.target.value)} />
      </label>
      <label>
        Price Coupe:
        <input type="number" value={p_coupe} onChange={(event) => setP_coupe(event.target.value)} />
      </label>
      <label>
        Price Small 4 Door Sedan:
        <input type="number" value={p_small_4d_car} onChange={(event) => setP_small_4d_car(event.target.value)} />
      </label>
      <label>
        Price 4 Door Sedan:
        <input type="number" value={p_4d_sedan} onChange={(event) => setP_4d_sedan(event.target.value)} />
      </label>
      <label>
        Price Small SUV:
        <input type="number" value={p_small_suv} onChange={(event) => setP_small_suv(event.target.value)} />
      </label>
      <label>
        Price Regular SUV:
        <input type="number" value={reg_suv} onChange={(event) => setReg_suv(event.target.value)} />
      </label>
      <label>
        Price Big SUV:
        <input type="number" value={p_big_suv} onChange={(event) => setP_big_suv(event.target.value)} />
      </label>
      <label>
        Price Small Pickup:
        <input type="number" value={p_small_pickup} onChange={(event) => setP_small_pickup(event.target.value)} />
      </label>
      <label>
        Price Mid Pickup:
        <input type="number" value={p_mid_pickup} onChange={(event) => setP_mid_pickup(event.target.value)} />
      </label>
      <label>
        Price Big Pickup:
        <input type="number" value={p_big_pickup} onChange={(event) => setP_big_pickup(event.target.value)} />
      </label>
      <label>
        Image Link:
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </label>
      <label>
        Description EN:
        <input type="text" value={service_description_en} onChange={(event) => setService_description_en(event.target.value)} />
      </label>
      <label>
        Description FR:
        <input type="text" value={service_description_fr} onChange={(event) => setService_description_fr(event.target.value)} />
      </label>
      <label>
      type:
        <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
      </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Insert Service</Button>
        </Modal.Footer>
      </Modal>
                {services.map((service) => (
                    <div className='servicelist'>
                        <div className="list-group">
                            <ul>
                                <li className="list-group-item list-group-item-action">
                                    <span className='admin-icons'>
                                    <span className='admin-icon'><Link className="iconLink" to={`/admin/service/${service._id}`}><FaEye /></Link></span>
                                        <span className='admin-icon'><FaPencilAlt /></span>
                                        <span className='admin-icon'><DeleteButton serviceId={service._id} onDeleteClick={handleDeleteClick} /></span>
                                    </span>
                                    <span className='adminlist'>{service.service_name_en}</span>

                                </li>
                            </ul>
                        </div>
                    </div>

                ))} </div>

        </div>
    )

};


export default withAdminAccess(AdminServices);