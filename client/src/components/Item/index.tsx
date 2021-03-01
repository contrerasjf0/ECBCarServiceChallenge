import React, { useState } from 'react';

import ItemSection from '../ItemSection'
import InfoSection from '../InfoSection';

import { itemProps } from '../../types/service';
import ServiceService from '../../services/ServiceService';

const serviceService: ServiceService = new ServiceService();

function Item({ data }: itemProps) {
  const [dataItem, setDataItem] = useState(data);
  const [open, setOpen] = useState(false);
  
  let userData = data.user? 
    data.user : 
    {
      fullName: '',
      phonenumber: '',
      email: ''
    };

  const handleInfoSectionClick = () => {
    setOpen(!open);
  };
  
  const handleActiveChange = async () => {
    const document = await serviceService.setStatus(dataItem.id);
    setDataItem(document);
  }
  
  return (
  <>
    <ItemSection make={dataItem.make} 
      model={dataItem.model} 
      userFullName={userData.fullName}
      handleInfoSectionClick={handleInfoSectionClick}
      activeMaintenance={dataItem.maintenance}
      handleActiveChange={handleActiveChange}
    />
    <InfoSection 
      id={dataItem.id}
      description={dataItem.description} 
      image={dataItem.image}
      maintenance={dataItem.maintenance}
      user={userData}
      km={dataItem.km}
      open={open}
    />
  </>
  )
}

export default Item;
