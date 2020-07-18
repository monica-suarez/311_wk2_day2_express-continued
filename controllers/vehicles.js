const vehicles = require('../data/vehicles');
const vehiclesCount = vehicles.length;

const listAll = (req, res) => {
    return res.json(vehicles);
}
const showOne = (req, res) =>{
    const id = req.params.vehiclesId;
    const filteredVehicle = vehicles.find(vehicle => vehicle._id === Number(id)); 
    return res.json(filteredVehicle)
}

const createNewEntry = (req, res) =>{
    const newRide = {
        _id: vehiclesCount + 1,
        ...req.body
        };
        vehicles.push(newRide);
        res.json(newRide);
}

module.exports = {
    listAll, 
    showOne, 
    createNewEntry
}