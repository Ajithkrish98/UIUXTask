const db = require("../../../models");
const Product = db.product;


async function findAll(req) {
  try {

    let condtions = {
        is_active: 0
    }
    if(req.params.type){
      condtions.type = req.params.type;
    }
    let query = {
      where: condtions
    }
    let response = await Product.findAll(query);
    return response;

  } catch (error) {
    return error;
  }

}
async function create(req) {
  try {
    let response = await Product.create(req.body);
    return response;
  } catch (error) {
    return error;
  }

}
async function update(req) {
  try {
    let response = await Product.update(req.body, { where: { id: req.params.id } });
    return response;
  } catch (error) {
    return error;
  }

}

async function deleteProduct(id) {
  try {
    let response = await Product.update({
      "is_active": 1
    }, { where: { id: id } });
    return response;
  } catch (error) {
    return error;
  }

}


module.exports = {
  findAll,
  create,
  update,
  deleteProduct
};