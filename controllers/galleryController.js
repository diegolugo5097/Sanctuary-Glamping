const Gallery = require("../models/Gallery");
const mongoose = require("mongoose");

exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.createGallery = async (req, res) => {
  const gallery = req.body;
  const newGallery = new Gallery(gallery);
  try {
    await newGallery.save();
    res.status(201).json(newGallery);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

exports.updateGallery = async (req, res) => {
  const { id: _id } = req.params;
  const gallery = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Hubó un problema al actualizar");

  const updatedGallery = await Gallery.findByIdAndUpdate(
    _id,
    { ...gallery, _id },
    {
      new: true,
    }
  );
  res.json(updatedGallery);
};

exports.deleteGallery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Hubó un problema al eliminar");

  await Gallery.findByIdAndDelete(id);

  res.json({ message: "Ha sido eliminado" });
};
