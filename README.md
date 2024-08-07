# SoftUni-React-Project

### How to install the dependencies and start the project:
```
cd client
npm install -D tailwindcss postcss autoprefixer
npm install flowbite
npm run dev
```


### Start the server by open a new terminal and do this:
```
cd server
node server.js
```

# How it works

**Welcome page**

Every ```guest``` can see a Welcome page with the latest products.

**Catalog page**

Whether you are logged in or not you can see all products with details for every product, but if you not logged in, You do not have permission for functionality.

**Details page**

If you are logged in, you have permission to ```buy product``` if you are not the author of product, and to ```edit/delete``` if you are the author of product.

**Create page**

If you are logged in, you can ```create``` your own product with ```title```, ```category```, ```price```, ```desc```, and ```image```.

**Profile page**

If you are logged in, in profile page you can see all your created products.