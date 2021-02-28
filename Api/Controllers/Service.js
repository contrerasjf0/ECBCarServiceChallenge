const { ServiceModel } = require('../Models/Service');

async function services(req, res, next){
  const service = new ServiceModel();

  const serviceList =  await service.getAll();

  res.status(200).json({ 
    data: serviceList
  });
}


async function setStatus(req, res, next){
  const service = new ServiceModel();

  const document = await service.setStatus(req.params.id);

  res.status(200).json({
    data: document
  });
}

async function saveUserData(req, res, next){
  const serviceId = req.params.id;
  const userData = req.body;
  const service = new ServiceModel();

  const userInfo = await service.saveUserData(serviceId, userData);
  
  res.status(200).json({
    data: {
      serviceId,
      userInfo
    }
  });
}

module.exports = {
  services,
  setStatus,
  saveUserData
};
