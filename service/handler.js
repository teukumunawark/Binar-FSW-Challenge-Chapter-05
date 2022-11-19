const { Car } = require('../models');

const createCarHandler = async (req, res) => {
  const {
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
  } = req.body;

  
  const car = await Car.create({
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
  });
  
  if (!car) {
    return res.status(400).json({
      status: "Failed",
      message: "Error Can't Create Data",
      data: "Error",
    });
  } else {
    return res.status(201).json({
      status: "OK",
      message: "Success",
      data: car
    });
  }
}

const getCarsListHandler = async (req, res) => {
  const cars = await Car.findAll();
  return res.status(200).json({
    status: "OK",
    message: "Success",
    data: cars,
  });
}

const getCarByIdHandler = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findOne({ where: { id } });
  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: "Error can't find car",
      data: "Error",
    });
  } else {
    return res.status(200).json({
      status: "OK",
      message: "Success",
      data: car,
    });
  }
}

const updateCarByIdHandler = async (req, res) => {
  const { id } = req.params;
  await Car.update({ ...req.body }, { where: { id } });
  const updateCar = await Car.findByPk(id);
  if (!updateCar) {
    return res.status(404).json({
      status: "Failed",
      message: "Error can't update car",
      data: "Error",
    });
  } else {
    return res.status(200).json({
      status: "OK",
      message: "Success",
      data: updateCar,
    });
  }
}

const deleteCarByIdHandler = async (req, res) => {
  const { id } = req.params;
  const deleteCar = await Car.destroy({ where: { id } });
  if (!deleteCar) {
    return res.status(404).json({
      status: "Failed",
      message: "Error Id Not Found",
      data: "Error",
    });
  } else {
    return res.status(200).json({
      status: "OK",
      message: "Success",
      data: deleteCar,
    });
  }
}

module.exports = {
  createCarHandler,
  getCarsListHandler,
  getCarByIdHandler,
  updateCarByIdHandler,
  deleteCarByIdHandler,
};