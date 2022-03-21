### npm install
### Add uri mongo atlas on a .env file like .env.example
### npm run start:dev

#### Create product
  - http://localhost:8080/product/create
  
  - `{
    "title":" ",
    "price": 1,
    "stock": 4
    }`
  
  ![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-otro-fw/blob/main/assets/nest-1.JPG?raw=true)
  
  #### Get all products
  - http://localhost:8080/product/
  
  ![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-otro-fw/blob/main/assets/nest-2.JPG?raw=true)

  #### Get product by id
  - http://localhost:8080/product/{ id del producto }
  
  ![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-otro-fw/blob/main/assets/nest-3.JPG?raw=true)
  
   #### Delete product
  - http://localhost:8080/product/delete/{ id del producto }
  
  ![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-otro-fw/blob/main/assets/nest-4.JPG?raw=true)
  
  #### Update product
  - http://localhost:8080/product/update?productID={ id del producto }
  
  - `{
    "title":"Producto a update ",
    "price": 1
    }`
  
  ![alt text](https://github.com/Martin-J-Larre/desafio-reformar-para-usar-otro-fw/blob/main/assets/nest-5.JPG?raw=true)

  

