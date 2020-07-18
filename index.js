const express = require("express");
const bodyParser = require("body-parser");

//data
const comments = require('./data/comments')
const contacts = require('./data/contacts')
const products = require('./data/products')
const vehicles = require('./data/vehicles')

const contactsRoutes = require('./routes/contacts');
const commentsRoutes = require('./routes/comments');
const productsRoutes = require('./routes/products');
const vehiclesRoutes = require('./routes/vehicles')

//counter for id numbers
const commentsCount = comments.length;
const contactsCount = contacts.length;
const productsCount = products.length;
const vehiclesCount = vehicles.length;

const app = express();

const port = process.env.PORT || 4001;

//middleware for static assets
app.use(express.static('public'));
//init body parser
app.use(bodyParser.json());

//routes
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

// app.get('/comments', (req, res)=>{
//     return res.json(comments)
// });
// app.get('/contacts', (req, res)=>{
//     return res.json(contacts)
// });
// app.get('/products', (req, res)=>{
//     return res.json(products)
// });
// app.get('/vehicles', (req, res)=>{
//     return res.json(vehicles)
// });

//just getting one
// app.get('/comments/:commentsId', (req, res)=>{
//     const id = req.params.commentsId;
//     const filteredComment = comments.find(comment => comment._id === Number(id)); 
//     return res.json(filteredComment)
// });
// app.get('/contacts/:contactsId', (req, res)=>{
//     const id = req.params.contactsId;
//     const filteredContact = contacts.find(contact => contact._id === Number(id)); 
//     return res.json(filteredContact)
// });
// app.get('/products/:productsId', (req, res)=>{
//     const id = req.params.productsId;
//     const filteredProduct = products.find(product => product._id === Number(id)); 
//     return res.json(filteredProduct)
    
// });
// app.get('/vehicles/:vehiclesId', (req, res)=>{
//     const id = req.params.vehiclesId;
//     const filteredVehicle = vehicles.find(vehicle => vehicle._id === Number(id)); 
//     return res.json(filteredVehicle)
// });

//new post 
// app.post('/comments', (req, res)=>{
//     const newComments = {
//     _id: commentsCount + 1,
//     ...req.body
//     };
//     comments.push(newComments);
//     res.json(newComments);
// });
// app.post('/contacts', (req, res)=>{
//     const newUser = {
//     _id: contactsCount + 1,
//     ...req.body
//     };
//     contacts.push(newUser);
//     res.json(newUser);
// });
// app.post('/products', (req, res)=>{
//     const newProduct = {
//     _id: productsCount + 1,
//     ...req.body
//     };
//     products.push(newProduct);
//     res.json(newProduct);
    
// });
// app.post('/vehicles', (req, res)=>{
//     const newRide = {
//     _id: vehiclesCount + 1,
//     ...req.body
//     };
//     vehicles.push(newRide);
//     res.json(newRide);
// });


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
