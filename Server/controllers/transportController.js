const Transport = require('../models/transportModels/transportModel');

const testController = (req, res) => {
  res.send('transport controller is working!');
}

const createTransport = async (req, res) => {
  try {
    const { transportID, vehicleNumber, address, transportStatus } = req.body;

    const newTransport = new Transport({
      transportID,
      vehicleNumber,
      address,
      transportStatus
    
    });

    await newTransport.save();
    res.status(201).json(newTransport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllTransports = async (req, res) => {
  try {
    const transports = await Transport.find();
    res.status(200).json(transports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getTransportByID = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const updateTransport = async (req, res) => {
  const _id = req.params.id;
  const { vehicleNumber, address, transportStatus } = req.body;
  const updatedTransport = { vehicleNumber, address, transportStatus };
  try {
    const updatedTransportDocument = await Transport.findByIdAndUpdate(_id, updatedTransport, { new: true });
    if (!updatedTransportDocument) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.status(200).json(updatedTransportDocument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteTransport = async (req, res) => {
  try {
    const transport = await Transport.findByIdAndDelete(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.status(200).json({ message: 'Transport deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {testController, createTransport, getAllTransports, getTransportByID, updateTransport, deleteTransport}