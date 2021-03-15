const Carousel = require("../models/Carousel");
const mongoose = require("mongoose");

/**
 * Get all the table records carousel
 * @param {*} req
 * @param {*} res
 */
exports.getCarousel = async (req, res) => {
  try {
    const carousel = await Carousel.find();
    res.status(200).json(carousel);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

/**
 * create a new carousel
 * @param {*} req
 * @param {*} res
 */
exports.createCarousel = async (req, res) => {
  const carousel = req.body;
  const newCarousel = new Carousel(carousel);
  try {
    await newCarousel.save();
    res.status(201).json(newCarousel);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
/**
 * Update an existing record
 * @param {*} req
 * @param {*} res
 */
exports.updateCarousel = async (req, res) => {
  const { id: _id } = req.params;
  const carousel = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Hubó un problema al actualizar");

  const updatedCarousel = await Carousel.findByIdAndUpdate(
    _id,
    { ...carousel, _id },
    {
      new: true,
    }
  );
  res.json(updatedCarousel);
};

/**
 * delete an existing record
 * @param {*} req
 * @param {*} res
 */
exports.deleteCarousel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Hubó un problema al eliminar");

  await Carousel.findByIdAndDelete(id);

  res.json({ message: "Ha sido eliminado" });
};
