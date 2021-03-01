import React from 'react';
import { List, ListSubheader} from '@material-ui/core';

import Item from '../Item';

import { itemListProps } from '../../types/service';

function ItemList(p: itemListProps) {
  console.log(p)
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div'>
          Car service
        </ListSubheader>
      }
    >
      {
        p.items.map((serviceItem, i) => (
          <Item key={`L-${ i }`} data={serviceItem} />
        ))
      }
    </List>
  );
}

export default ItemList;
