import React, { useEffect, useState } from 'react';
import "./Admin.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { FaPencilAlt, FaTrashAlt, FaEye, FaPlusCircle, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function GalleryItems() {
    const [service_name_en, setService_name_en] = useState('');
    const [service_name_fr, setService_name_fr] = useState('');
    const [before_img, setBefore_img] = useState('');
    const [after_img, setAfter_img] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [updateService_name_en, setUpdateService_name_en] = useState('');
    const [updateService_name_fr, setUpdateService_name_fr] = useState('');
    const [updateBefore_img, setUpdateBefore_img] = useState('');
    const [updateAfter_img, setUpdateAfter_img] = useState('');
    const [id, setId] = useState('');
    const [itemsState, setItemsState] = useState({});
    
    const handleOpenModal = () => {
        setModalVisible(true);
      };
    
    const handleCloseModal = () => {
        setModalVisible(false);
      };

      const handleOpenModal1 = (id) => {
        const newItemsState = { ...itemsState };
        newItemsState[id] = { modalVisible1: true };
        setItemsState(newItemsState);
      };

    const handleCloseModal1 = (id) => {
        const newItemsState = { ...itemsState };
        newItemsState[id] = { modalVisible1: false };
        setItemsState(newItemsState);
      };
    
    
    const handleSubmit = (event) => {
      event.preventDefault();

        axios.post('https://signatureauto-backend.herokuapp.com/gallery', { service_name_en, service_name_fr, before_img, after_img})
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
    
      setModalVisible(false);
      window.location.reload()
    }

    const handleOpenUpdateModal = (galleryItem) => {
      setUpdateModalVisible(true);
      setUpdateService_name_en(galleryItem.service_name_en);
      setUpdateService_name_fr(galleryItem.service_name_fr);
      setUpdateBefore_img(galleryItem.before_img);
      setUpdateAfter_img(galleryItem.after_img);
      setId(galleryItem._id);
    };
  
    const handleCloseUpdateModal = () => {
        setUpdateModalVisible(false);
    };

    const handleUpdateChange = (event) => {
      if(event.target.name === 'service_name_en'){
          setUpdateService_name_en(event.target.value)
      }
      if(event.target.name === 'service_name_fr'){
          setUpdateService_name_fr(event.target.value)
      }
      if(event.target.name === 'before_img'){
          setUpdateBefore_img(event.target.value)
      }
      if(event.target.name === 'after_img'){
          setUpdateAfter_img(event.target.value)
      }
      if(event.target.name === 'id'){
        setId(event.target.value)
    }
    }
    
    const [galleryItems, setGalleryItems] = useState([]);


    const getGalleryItems = async () => {
        const response = await fetch('https://signatureauto-backend.herokuapp.com/gallery');
        const FinalData = await response.json();
        setGalleryItems(FinalData)
    }

    useEffect(() => {
        getGalleryItems();
    }, [])

    const handleDeleteClick = galleryId => {
      axios.delete(`https://signatureauto-backend.herokuapp.com/gallery/${galleryId}`)
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

    const handleUpdate = (event) => {
      event.preventDefault();
      axios.put(`https://signatureauto-backend.herokuapp.com/gallery/${id}`, {
        service_name_en: updateService_name_en, 
        service_name_fr: updateService_name_fr, 
        before_img: updateBefore_img, 
        after_img: updateAfter_img 
      })
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
              console.error(error);
          });
  
      setUpdateModalVisible(false);
      window.location.reload();
  };

    const DeleteButton = ({ galleryId, onDeleteClick }) => {
      return (
        <button onClick={() => onDeleteClick(galleryId)} className="deletebtn"><FaTrashAlt /></button>
      );
    };

    const UpdateButton = ({ galleryItem, onUpdateClick }) => {
      return (
          <button onClick={() => onUpdateClick(galleryItem)} className="updatebtn"><FaPencilAlt /></button>
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
                <h3 className='adminTitle'>Gallery</h3>
                </div>
                <div className='col-2'>
                    <div className='insertbtn' onClick={handleOpenModal}> 
                    <span>ADD ITEM</span>
                    <span className='mx-2'><FaPlusCircle/></span></div>
                </div>
            </div>

        <Modal show={modalVisible} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className='adminTitlepopup'>Gallery Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <form>
      <label className='row my-1'>
        <span className="col-4">Service Name EN: </span>
        <span className="col-1"><input type="text" value={service_name_en} onChange={(event) => setService_name_en(event.target.value)} /></span>
        </label>
        <label className='row my-1'>
        <span className="col-4 ">Service Name FR: </span>
        <span className="col-1"><input type="text" value={service_name_fr} onChange={(event) => setService_name_fr(event.target.value)} /></span>
        </label>
      <label className='row my-1'>
      <span className="col-4">Before Image URI:</span>
      <span className="col-1"><input type="text" value={before_img} onChange={(event) => setBefore_img(event.target.value)} /></span>
      </label>
      <label className='row my-1'>
      <span className="col-4">After Image URI:</span>
      <span className="col-1"><input type="text" value={after_img} onChange={(event) => setAfter_img(event.target.value)} /> </span>
      </label>
      
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-link" onClick={handleSubmit}><FaPlus/></Button>
        </Modal.Footer>
      </Modal>

      <Modal show={updateModalVisible} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='adminTitlepopup'>Update Gallery Item</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form>
                        <label className='row my-1'>
                            <span className="col-4">Service Name EN: </span>
                            <span className="col-1">
                                <input type="text" value={updateService_name_en} onChange={handleUpdateChange} name="service_name_en"  />
                            </span>
                        </label>
                        <label className='row my-1'>
                            <span className="col-4 ">Service Name FR: </span>
                            <span className="col-1">
                                <input type="text" value={updateService_name_fr} onChange={handleUpdateChange} name="service_name_fr"  />
                            </span>
                        </label>
                        <label className='row my-1'>
                            <span className="col-4">Before Image URI:</span>
                            <span className="col-1">
                                <input type="text" value={updateBefore_img} onChange={handleUpdateChange} name="before_img"  />
                            </span>
                        </label>
                        <label className='row my-1'>
                            <span className="col-4">After Image URI:</span>
                            <span className="col-1">
                                <input type="text" value={updateAfter_img} onChange={handleUpdateChange} name="after_img"  />
                            </span>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
          <Button variant="btn btn-link" onClick={handleUpdate} className="updatebtn"><FaPencilAlt /></Button>
        </Modal.Footer>
            </Modal>


                {galleryItems.map((item) => (
                    <div className='serviceList'>
                        <div className="list-group">
                            <ul>
                                <li className="list-group-item list-group-item-action">
                                    <span className='admin-icons'>
                                    <span className='admin-icon'><Link className="iconLink" to={`/admin/gallery/${item._id}`}><FaEye /></Link></span>
                                        <span className='admin-icon'><UpdateButton galleryItem={item} onUpdateClick={handleOpenUpdateModal} /></span>
                                        <span className='admin-icon'><DeleteButton galleryId={item._id} onDeleteClick={handleOpenModal1} /></span>
                                    </span>
                                    <span className='adminlist'>{item.service_name_en}</span>
                                    <Modal show={itemsState[item._id]?.modalVisible1} onHide={() => handleCloseModal1(item._id)} >
                                             <Modal.Header closeButton>
                                               <Modal.Title className='adminTitlepopup'>Gallery Item Details</Modal.Title>
                                             </Modal.Header>
                                             <Modal.Body >
                                             <form>
                                           <label className='row my-1'>
                                             <span className="">Are you sure you want to delete this item?</span>
                                             </label>

                                               </form>
                                             </Modal.Body>
                                             <Modal.Footer>
                                               <DeleteButton galleryId={item._id} onDeleteClick={handleDeleteClick} />
                                             </Modal.Footer>
                                       </Modal>

                                </li>
                            </ul>
                        </div>
                    </div>

                ))} </div>

        </div>
    )

};


export default GalleryItems;
