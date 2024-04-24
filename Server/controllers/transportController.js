const Transport = require('../models/transportModels/transport');


// Transport
//http://localhost:3000/api/v1/transport/test
const testController = (req, res) => {
  res.send('transport controller is working!');
}


// get all projects
// http://localhost:3000/api/v1/transport/transports/get
const getProjects = async (req, res) => {
  try {
      const projects = await Transport.find();
      res.status(200).json(projects);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};


// get single project
// http://localhost:3000/api/v1/installation/projects/get/:id
const getProject = async (req, res) => {
  try {
      const {id} = req.params;

      const get = await Transport.findById(id).then((project) => {
          res.status(200).send({project})
      }).catch((err) => {
          res.status(500).send({status: "Error with fetching project!"})
      })
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};

// add project
// http://localhost:3000/api/v1/installation/projects/add
const addProject = async (req, res) => {
  try {
      const customerID = req.body.customerID;
      const customerName = req.body.customerName;
      const projectID = req.body.projectID;
      const date = req.body.date;
      const projectType = req.body.projectType;
      const projectSize = req.body.projectSize;
      const status = req.body.status;
      const estimatedCost = Number(req.body.estimatedCost);
      const estimatedDuration = Number(req.body.estimatedDuration);
      const comments = req.body.comments;

      const newProject = new Transport({
          customerID,
          customerName,
          projectID,
          date,
          projectType,
          projectSize,
          status,
          estimatedCost,
          estimatedDuration,
          comments
      });

      newProject.save().then(() => {
          res.json("Transport Added!")
      }).catch((err) => {
          console.log(err);
      });

  } catch (error) {
      res.status(500).json({message: error.message});
  }
};

// update project
// http://localhost:3000/api/v1/installation/projects/update/:id
const updateProject = async (req, res) => {
  try {
      const {id} = req.params;
      const customerID = req.body.customerID;
      const customerName = req.body.customerName;
      const projectID = req.body.projectID;
      const date = req.body.date;
      const projectType = req.body.projectType;
      const projectSize = req.body.projectSize;
      const status = req.body.status;
      const estimatedCost = Number(req.body.estimatedCost);
      const estimatedDuration = Number(req.body.estimatedDuration);
      const comments = req.body.comments;
      
      const updatedProject = {
          customerID,
          customerName,
          projectID,
          date,
          projectType,
          projectSize,
          status,
          estimatedCost,
          estimatedDuration,
          comments
      }

      const update = await Transport.findByIdAndUpdate(id, updatedProject).then(() => {
          res.status(200).send({status: "Transport Updated!"});
      }).catch((err) => {
          res.status(500).send({status: "Error with updating project!"});
      })

  } catch (error) {
      res.status(500).json({message: error.message});
  }
};

// delete project
// http://localhost:3000/api/v1/installation/projects/delete/:id
const deleteProject = async (req, res) => {
  try {
      const {id} = req.params;

      await Transport.findByIdAndDelete(id).then(() => {
          res.status(200).send({status: "Transport Deleted!"});
      }).catch((err) => {
          res.status(500).send({status: "Error with deleting project!"});
      })

  } catch (error) {
      res.status(500).json({message: error.message});
  }
};



// Temporary Customer

// get all customers
// http://localhost:3000/api/v1/installation/customers/get
const getCustomers = async (req, res) => {
    try {
        const customers = await TempCustomer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// get single customer
// http://localhost:3000/api/v1/installation/customers/get/:id
const getCustomer = async (req, res) => {
    try {
        const {id} = req.params;

        const get = await TempCustomer.findById(id).then((customer) => {
            res.status(200).send({customer})
        }).catch((err) => {
            res.status(500).send({status: "Error with fetching customer!"})
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// add customer
// http://localhost:3000/api/v1/installation/customers/add
const addCustomer = async (req, res) => {
    try {
        const customerID = req.body.customerID;
        const customerName = req.body.customerName;



        const newCustomer = new TempCustomer({
            customerID,
            customerName
        });

        newCustomer.save().then(() => {
            res.json("Customer Added!")
        }).catch((err) => {
            console.log(err);
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// delete customer
// http://localhost:3000/api/v1/installation/customers/delete/:id
const deleteCustomer= async (req, res) => {
    try {
        const {id} = req.params;

        await TempCustomer.findByIdAndDelete(id).then(() => {
            res.status(200).send({status: "Customer Deleted!"});
        }).catch((err) => {
            res.status(500).send({status: "Error with deleting project!"});
        })

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


module.exports = {
    testController, 
    getProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject,
    getCustomers,
    getCustomer,
    addCustomer,
    deleteCustomer
};