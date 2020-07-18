const products = require('../data/products');
const productsCount = products.length;

const listAll = (req, res) => {
    return res.json(products);
}
const showOne = (req, res) =>{
    const id = req.params.productsId;
    const filteredProduct = products.find(product => product._id === Number(id)); 
    return res.json(filteredProduct)
}

const createNewEntry = (req, res) =>{
    const newProduct = {
        _id: productsCount + 1,
        ...req.body
        };
        products.push(newProduct);
        res.json(newProduct);    
}

module.exports = {
    listAll, 
    showOne, 
    createNewEntry
}