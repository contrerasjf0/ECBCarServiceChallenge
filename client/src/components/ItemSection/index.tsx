import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import { itemSectionProps } from '../../types/service';


function ItemSection({make, model, userFullName, handleInfoSectionClick, activeMaintenance, handleActiveChange}: itemSectionProps) {
  return (
    <ListItem button onClick={handleInfoSectionClick}>
        <ListItemIcon>
          <DirectionsCarIcon className={(activeMaintenance)?'maintenanceHighlight' : ''}/>
        </ListItemIcon>
        <ListItemText primary={`${make} ${model} ${userFullName}`} />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            checked={activeMaintenance}
            onChange={handleActiveChange}
            inputProps={{ 'aria-labelledby': 'car-in-service' }}
          />
        </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ItemSection;
