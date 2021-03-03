import HttpClient from './HttpClient';
import { serviceType } from '../types/service';
import { userType, responseUserType } from './../types/user';

class ServiceService extends HttpClient{
  private entityName: string;

  public constructor() {
    super(process.env.REACT_APP_API_DOMAIN);
    this.entityName = 'service';
  }

  getAll(){
    
    return this.instance.get<serviceType[]>('/'+this.entityName);

  }

  setStatus(id:number){
    return this.instance.put<serviceType>('/'+this.entityName+'/'+id+'/setStatus');
  }

  saveUserData(id:number, useData: userType){
    return this.instance.put<responseUserType>('/'+this.entityName+'/'+id+'/saveUserData', useData);
  }

}

export default ServiceService;