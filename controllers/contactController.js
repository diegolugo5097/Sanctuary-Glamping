const Contact = require("../models/Contact");
const mongoose = require("mongoose");

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.createContact = async (req, res) => {
  const contact = req.body;
  const newContact = new Contact(contact);
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

exports.updateContact = async (req, res) => {
  const { id: _id } = req.params;
  const contact = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Hubó un problema al actualizar");

  const updatedContact = await Contact.findByIdAndUpdate(
    _id,
    { ...contact, _id },
    {
      new: true,
    }
  );
  res.json(updatedContact);
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Hubó un problema al eliminar");

  await Contact.findByIdAndDelete(id);

  res.json({ message: "Ha sido eliminado" });
};
