import React from 'react';
import {
  List,
  ListItem,
  Collapse,
  Grid,
  Avatar
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { infoSectionProps } from '../../types/service';


function InfoSection({description, image, maintenance, user, km, open} : infoSectionProps) {
  return (
    <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  FullName: { user.fullName}
                </Grid>
                <Grid item xs={6}>
                  Phone Number: { user.phonenumber}
                </Grid>
                <Grid item xs={6}>
                  Email: { user.email}
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
