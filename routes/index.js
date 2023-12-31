module.exports = app => {
 
  const productRoutes = require('./product')
  
  var router = require("express").Router();

  router.use("/product", productRoutes);

  app.use('/api/', router);
};