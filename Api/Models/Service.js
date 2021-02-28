const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  id: Number,
  description: String,
  make: String,
  model: String,
  estimatedate: Date,
  km: Number,
  image: String,
  maintenance: Boolean,
  user: {
    fullName: String,
    phonenumber: String,
    email: String
  }
  
}); 

class Service {

  constructor() {
    this.model = mongoose.model('service', ServiceSchema);
  }

  async getAll(){
    let documents = [];

    try {
      documents = await this.model.find();
    } catch (err) {
      
    }
    
    return  documents;
  }

  async setStatus(id){
    let document = {}

    try {
      
      document = await this.model.findOne({ id });
      document.maintenance = !document.maintenance;
      
      await document.save();

    } catch (err) {}

    return document;
  }

  async saveUserData(id, userData){
    let document = {};

    try {
      document = await this.model.findOneAndUpdate({ id }, {user: userData} , {new: true});
    } catch (err) {}

    return document.user;
  }
}

module.exports = {
  ServiceModel: Service
}
