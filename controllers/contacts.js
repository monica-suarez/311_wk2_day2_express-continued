const contacts = require('../data/contacts');
const contactsCount = contacts.length;

const listAll = (req, res) => {
    return res.json(contacts);
}
const showOne = (req, res) =>{
    const id = req.params.contactsId;
    const filteredContact = contacts.find(contact => contact._id === Number(id)); 
    return res.json(filteredContact)
}

const createNewEntry = (req, res) =>{
    const newUser = {
        _id: contactsCount + 1,
        ...req.body
        };
        contacts.push(newUser);
        res.json(newUser);     
}

module.exports = {
    listAll, 
    showOne, 
    createNewEntry
}