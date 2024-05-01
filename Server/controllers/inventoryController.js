const Inventory = require('../models/inventoryModels/inventory.model');


// Inventory
//http://localhost:3000/api/v1/inventory/test
const testController = (req, res) => {
  res.send('inventory controller is working!');
}


// get all inventories
// http://localhost:3000/api/v1/inventory/inventories/get
const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get single inventory
// http://localhost:3000/api/v1/inventory/inventories/get/:id
const getInventory = async (req, res) => {
  try {
    const { id } = req.params;

    const get = await Inventory.findById(id).then((inventory) => {
      res.status(200).send({ inventory })
    }).catch((err) => {
      res.status(500).send({ status: "Error with fetching inventory!" })
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add inventory
// http://localhost:3000/api/v1/inventory/inventories/add
const addInventory = async (req, res) => {
  try {
    const inventoryID = req.body.inventoryID;
    const inventoryName = req.body.inventoryName;
    const price = req.body.price;
    const noOfItems = req.body.noOfItems;


    const newInventory = new Inventory({
      inventoryID,
      inventoryName,
      price,
      noOfItems,
    });

    newInventory.save().then(() => {
      res.json("Inventory Added!")
    }).catch((err) => {
      console.log(err);
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update inventory
// http://localhost:3000/api/v1/inventory/inventories/update/:id
const updateInventory = async (req, res) => {
  try {
    const inventoryID = req.body.inventoryID;
    const inventoryName = req.body.inventoryName;
    const price = req.body.price;
    const noOfItems = req.body.noOfItems;

    const updatedInventory = {
      inventoryID,
      inventoryName,
      price,
      noOfItems,
    }

    const update = await Inventory.findByIdAndUpdate(id, updatedInventory).then(() => {
      res.status(200).send({ status: "Inventory Updated!" });
    }).catch((err) => {
      res.status(500).send({ status: "Error with updating inventory!" });
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete inventory
// http://localhost:3000/api/v1/inventory/inventories/delete/:id
const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;

    await Inventory.findByIdAndDelete(id).then(() => {
      res.status(200).send({ status: "Inventory Deleted!" });
    }).catch((err) => {
      res.status(500).send({ status: "Error with deleting inventory!" });
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  testController,
  getInventories,
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
};