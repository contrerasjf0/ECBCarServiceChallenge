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


function ItemSection({make, model, userFullName, handleInfoSectionClick}: itemSectionProps) {
  return (
    <ListItem button onClick={handleInfoSectionClick}>
        <ListItemIcon>
          <DirectionsCarIcon />
        </ListItemIcon>
        <ListItemText primary={`${make} ${model} ${userFullName}`} />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            inputProps={{ 'aria-labelledby': 'car-in-service' }}
          />
        </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ItemSection;
