import React, { useState, ChangeEvent } from 'react';
import {
  List,
  ListItem,
  Collapse,
  Grid,
  Avatar,
  TextField,
  IconButton,
  Button
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';

import { infoSectionProps, editInputProps} from '../../types/service';
import { userType } from '../../types/user';

import ServiceService from '../../services/ServiceService';

const serviceService = new ServiceService();

function EditInput({edit, name, labText, labelValue, onChange}: editInputProps){

  const handleSaveOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange( name, event.target.value);
  }
  return edit? (
    <TextField label={labText} name={name} value={labelValue} onChange={handleSaveOnchange}/>
  ) 
  :
  ( <span>{labText} : {labelValue}</span>)
}

function InfoSection({id, description, image, maintenance, user, km, open} : infoSectionProps) {
  const [userData, setUserData] = useState<userType>({...user});
  const [edit, setEdit] = useState(false);
  
  const handleEditClick = () =>{
    setEdit(!edit);
  }

  const handleSaveClick = async () =>{
    
    await serviceService.saveUserData( id ,userData);
    setEdit(!edit);
  }

  const handleChange = (name: string, value: string | undefined) => {
    setUserData(
      {
        ...userData,
        [name]: value
      }
    );
  }

  return (
    <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <EditInput edit={edit} name='fullName' labText='FullName' labelValue={userData.fullName} onChange={handleChange}/>
                </Grid>
                <Grid item xs={6}>
                  <EditInput edit={edit} name='phonenumber' labText='Phone Number' labelValue={userData.phonenumber} onChange={handleChange}/>
                </Grid>
                <Grid item xs={6}>
                  <EditInput edit={edit} name='email' labText='Email' labelValue={userData.email} onChange={handleChange}/>
                </Grid> 
                <Grid item xs={12} container justify="flex-end">
                  {
                    !edit && (
                      <Grid item xs={1} >
                        <IconButton aria-label="edit" onClick={handleEditClick}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Grid>
                    )
                  }
                  {
                    edit && (
                      <Grid item xs={2} >
                        <Button variant="outlined" size="small" color="primary" onClick={handleSaveClick}>
                          Save
                        </Button>
                      </Grid>
                    )
                  }
                </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container>
                <Grid item xs={6}>
                  <Avatar variant="rounded" src={ image} />
                </Grid>
                <Grid item xs={6}>
                  Description: { description }
                </Grid>
                <Grid item xs={6}>
                  Km: { km }
                </Grid>
                <Grid item xs={6}>
                  Maintenance: { maintenance ? <CheckCircleOutlineIcon className={(maintenance)? 'maintenanceHighlight' : ''}/> : <RadioButtonUncheckedIcon /> }
                </Grid> 
            </Grid>
          </ListItem>
        </List>
      </Collapse>
  );
}

export default InfoSection;
