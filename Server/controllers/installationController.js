const Project = require('../models/installationModels/project');

//http://localhost:3000/api/v1/installation/test
const testController = (req, res) => {
  res.send('installation controller is working!');
}


// get all projects
// http://localhost:3000/api/v1/installation/projects/get
const getProjects = async (req, res) => {
  try {
      const projects = await Project.find();
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

      const get = await Project.findById(id).then((project) => {
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

      const newProject = new Project({
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
          res.json("Project Added!")
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

      const update = await Project.findByIdAndUpdate(id, updatedProject).then(() => {
          res.status(200).send({status: "Project Updated!"});
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

      await Project.findByIdAndDelete(id).then(() => {
          res.status(200).send({status: "Project Deleted!"});
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
  deleteProject
};