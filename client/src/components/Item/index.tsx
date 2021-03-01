import React, { useState } from 'react';

import ItemSection from '../ItemSection'
import InfoSection from '../InfoSection';

import { itemProps } from '../../types/service';

function Item({ data }: itemProps) {
  const [open, setOpen] = useState(false);

  const handleInfoSectionClick = () => {
    setOpen(!open);
  };

  let userData = data.user? 
    data.user : 
    {
      fullName: '',
      phonenumber: '',
      email: ''
    };
  
  return (
  <>
    <ItemSection make={data.make} 
      model={data.model} 
      userFullName={userData.fullName}
      handleInfoSectionClick={handleInfoSectionClick}
    />
    <InfoSection description={data.description} 
      image={data.image}
      maintenance={data.maintenance}
      user={userData}
      km={data.km}
      open={open}
    />
  </>
  )
}

export default Item;
