
# UIUX Solutions

REST API for Product Module

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.
requires [xampp.js](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/) v10+ to run.

 Create the Database in localhost with empty password database name ```uiux``` 
 
 Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```




## API Details

#### Product All List

```http
  GET /api/product/findAll

  Response:
  {
    "status": true,
    "data": [
        {
            "id": 1,
            "name": "Motor2 Oil Level",
            "sku": "573-49386-C",
            "review": 2,
            "price": 500,
            "old_price": 500,
            "currency_type": null,
            "type": 1,
            "category": 1,
            "image": "http://localhost:8085/uploads/img_1704034916940.jpg",
            "is_active": 0,
            "createdAt": "2023-12-31T15:01:56.000Z",
            "updatedAt": "2023-12-31T15:01:56.000Z"
        },
        {
            "id": 2,
            "name": "Engine Oil",
            "sku": "573-49386-C",
            "review": 2,
            "price": 500,
            "old_price": 500,
            "currency_type": 1,
            "type": 1,
            "category": 1,
            "image": "http://localhost:8085/uploads/img_1704035003656.jpg",
            "is_active": 0,
            "createdAt": "2023-12-31T15:03:23.000Z",
            "updatedAt": "2023-12-31T15:03:23.000Z"
        }
    ]
}
```

#### Product Type Based filter List
```http
  GET /api/product/findAll/1

  Response:
  {
    "status": true,
    "data": [
        {
            "id": 1,
            "name": "Motor2 Oil Level",
            "sku": "573-49386-C",
            "review": 2,
            "price": 500,
            "old_price": 500,
            "currency_type": null,
            "type": 1,
            "category": 1,
            "image": "http://localhost:8085/uploads/img_1704034916940.jpg",
            "is_active": 0,
            "createdAt": "2023-12-31T15:01:56.000Z",
            "updatedAt": "2023-12-31T15:01:56.000Z"
        }
    ]
}
```
#### Create Product
```http
  POST /api/product/create

  Request JSON

  {
    "name":"Engine Oil",
    "sku":"573-49386-C",
    "review":2,
    "price":500,
    "old_price":500,
    "currency_type":1, //"0 - $, 1 - RS"
    "type":1 //"0 - Power Tools,1-Hand Tools,2-Plumbing",
    "category":1, //"0 - Top Rated,1-SpecialOffers,2-BestSellers"
    "image":"" // send Base64   
  }

  Response JSON
  {
    "status": true,
    "message": "Product is successfully stored"
  }
```
#### Update Product 

```http
  PUT /api/product/update/${id}

  Request JSON
  {
    "name":"Engine Oil",
    "sku":"573-49386-C",
    "review":2,
    "price":500,
    "old_price":500,
    "currency_type":1,
    "type":1,
    "category":1,
    "image":"" // send Base64 
  }

  Response JSON
  {
    "status": true,
    "message": "Product is successfully Updated"
  }
```

#### Delete Product

```http
DELETE /api/product/delete/${id}

Response JSON
{
    "status": true,
    "message": "Product is successfully Deleted"
}