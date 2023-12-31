const productService = require('../services/productServices');
const helpers = require("../../../config/helper");
const fs = require('fs').promises;

async function findAll(req, res) {
    try {
    
        let result = await productService.findAll(req);
        if (result) {
            return res.status(200).
                send(helpers.APIResponse(true, '', result));
        }
    }
    catch (err) {
        return res.status(500).
            send(helpers.APIResponse(false, err.message));
    }
}
async function create(req, res) {
    try {
        if (!req.body.name) {
            return res.status(400).send(helpers.APIResponse(false, 'Name can not empty'));
        }

        if(req.body.image){
            const imageName = "img_"+Date.now()+'.jpg';
            // Decode base64 image data and save to file
            const imagePath = 'uploads/'+imageName;
            const imageBuffer = Buffer.from(req.body.image, 'base64');
            await fs.writeFile(imagePath, imageBuffer);
            // to set imageName to save into DB
            req.body.image = `${req.protocol}://${req.get('host')}/uploads/`+imageName;
        }
        let result = await productService.create(req);
        if (result) {
            return res.status(200).
                send(helpers.APIResponse(true, 'Product is successfully stored'));
        }
    }
    catch (err) {
        return res.status(500).
            send(helpers.APIResponse(false, err.message));
    }
}
async function update(req, res) {
    try {
        if (!req.params.id) {
            return res.status(400).send(helpers.APIResponse(false, 'Product can not be empty!'));
        }

        if (!req.body.name) {
            return res.status(400).send(helpers.APIResponse(false, 'Name can not be empty!'));
        }

        if(req.body.image){
            const imageName = "img_"+Date.now()+'.jpg';
            // Decode base64 image data and save to file
            const imagePath = 'uploads/'+imageName;
            const imageBuffer = Buffer.from(req.body.image, 'base64');
            await fs.writeFile(imagePath, imageBuffer);
            // to set imageName to save into DB
            req.body.image = `${req.protocol}://${req.get('host')}/uploads/`+imageName;
        }

        let result = await productService.update(req);
        if (result) {
            return res.status(200).
                send(helpers.APIResponse(true, 'Product is successfully updated'));
        }
    }
    catch (err) {
        return res.status(500).
            send(helpers.APIResponse(false, err.message));
    }
}
async function deleteProduct(req, res) {
    try {
        if (!req.params.id) {
            return res.status(400).send(helpers.APIResponse(false, 'Product can not be empty!'));
        }
        let result = await productService.deleteProduct(req.params.id);
        if (result) {
            return res.status(200).
                send(helpers.APIResponse(true, 'Product is successfully Deleted'));
        }
    }
    catch (err) {
        return res.status(500).
            send(helpers.APIResponse(false, err.message));
    }
}



module.exports = {
 
    findAll,
    create,
    update,
    deleteProduct

};