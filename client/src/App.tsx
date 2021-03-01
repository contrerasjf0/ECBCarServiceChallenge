import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';

import ItemList from './components/ItemList';

import ServiceService from './services/ServiceService';

import './App.css';
import { serviceType } from './types/service';


const serviceService: ServiceService = new ServiceService();

function App() {
  const [services, setServices] = useState<serviceType[]>([]);
  useEffect(() => {
    const promise = async () => {
      let data: serviceType[] =  await serviceService.getAll();
      setServices(data);
    }
    promise(); 
  }, []);

  return (
    <div className="App">
      <Grid container justify="center" alignItems="center">
        <Grid component={Paper} variant="outlined" item xs={5}>
          <ItemList items={services}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
