
import HttpClient from './HttpClient';
import { serviceType } from '../types/service';

class ServiceService extends HttpClient{
  private entityName: string;

  public constructor() {
    super('http://localhost:3001/api');
    this.entityName = 'service';
  }

  getAll(){
    
    return this.instance.get<serviceType[]>('/'+this.entityName);

  }

  setStatus(id:number){
    return this.instance.put<serviceType>('/'+this.entityName+'/'+id+'/setStatus');
  }

}

export default ServiceService;