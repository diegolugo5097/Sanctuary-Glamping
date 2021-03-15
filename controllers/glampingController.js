const Glamping = require("../models/Glamping");
const mongoose = require("mongoose");

exports.getGlampings = async (req, res) => {
  try {
    const glamping = await Glamping.find();
    res.status(200).json(glamping);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.createGlamping = async (req, res) => {
  const glamping = req.body;
  const newGlamping = new Glamping(glamping);
  try {
    await newGlamping.save();
    res.status(201).json(newGlamping);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

exports.updateGlamping = async (req, res) => {
  const { id: _id } = req.params;
  const glamping = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Hubó un problema al actualizar el glamping");

  const updatedGlamping = await Glamping.findByIdAndUpdate(
    _id,
    { ...glamping, _id },
    {
      new: true,
    }
  );
  res.json(updatedGlamping);
};

exports.deleteGlamping = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Hubó un problema al eliminar el glamping");

  await Glamping.findByIdAndDelete(id);

  res.json({ message: "El producto ha sido eliminado" });
};
