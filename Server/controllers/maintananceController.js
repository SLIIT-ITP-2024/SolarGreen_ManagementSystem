const Schedule = require('../models/maintenanceModels/schedule');

//http://localhost:3000/api/v1/maintenance/test
const testController = (req, res) => {
  res.send('Maintenance controller is working!');
};


// get all schedules
// http://localhost:3000/api/v1/maintenance/schedules/get
const getSchedules= async (req, res) => {
  try {
      const schedules = await Schedule.find()
      res.status(200).json(schedules);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};


// get single schedule
// http://localhost:3000/api/v1/maintenance/schedules/get/:id
const getSchedule = async (req, res) => {
  try {
      const {id} = req.params;

      const get = await Schedule.findById(id).then((schedule) => {
          res.status(200).send({schedule})
      }).catch((err) => {
          res.status(500).send({status: "Error with fetching schedule!"})
      })
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};

// add Schedule
// http://localhost:3000/api/v1/maintenance/schedules/add
const addSchedule = async (req, res) => {
  try {
      const ProjectID = req.body.ProjectID;
      const MaintenanceID = req.body.MaintenanceID;
      const TeamID = req.body.TeamID;
      const Task = req.body.Task;
      const Location = req.body.Location;
      const Date = req.body.Date;
      const Status = req.body.Status;
      
      const existingSchedule = await Schedule.findOne({ MaintenanceID });

      if (existingSchedule) {
        return res.status(400).json({ message: "Maintenance ID must be unique" });
      }
      

      const newSchedule = new Schedule({
        ProjectID,
        MaintenanceID,
        TeamID,
        Task,
        Location,
        Date,
        Status
      });

      newSchedule.save().then(() => {
          res.json("Schedule Added!")
      }).catch((err) => {
          console.log(err);
      });

  } catch (error) {
      res.status(500).json({message: error.message});
  }
};

// update Schedule
// http://localhost:3000/api/v1/maintenance/schedules/update/:id
const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { ProjectID, MaintenanceID, TeamID, Task, Location, Date, Status } = req.body;
      
    const updatedSchedule = {
      ProjectID,
      MaintenanceID,
      TeamID,
      Task,
      Location,
      Date,
      Status
    };

    const updatedScheduleDocument = await Schedule.findByIdAndUpdate(id, updatedSchedule, { new: true });
    // The { new: true } option ensures that the updated document is returned

    if (!updatedScheduleDocument) {
      return res.status(404).json({ status: "Schedule not found" });
    }

    res.status(200).json({ status: "Schedule updated", updatedSchedule: updatedScheduleDocument });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// delete project
// http://localhost:3000/api/v1/maintenance/schedules/delete/:id
const deleteSchedule = async (req, res) => {
  try {
      const {id} = req.params;

      await Schedule.findByIdAndDelete(id).then(() => {
          res.status(200).send({status: "Schedule Deleted!"});
      }).catch((err) => {
          res.status(500).send({status: "Error with deleting schedule!"});
      })

  } catch (error) {
      res.status(500).json({message: error.message});
  }};
 

{/*const calculateMaintenanceCost = async (req, res) => {
  try {
    const { ProjectID, MaintenanceID, HoursRequired, CostPerHour } = req.query;

    // Check if all required parameters are provided
    if (!ProjectID || !MaintenanceID || !HoursRequired || !CostPerHour) {
      return res.status(400).json({ message: "Missing required parameters" });
    }

    // Fetch project and maintenance details based on IDs
    const projectDetails = await Schedule.findOne({ ProjectID: ProjectID });
    const maintenanceDetails = await Schedule.findOne({ MaintenanceID: MaintenanceID });

    if (!projectDetails || !maintenanceDetails) {
      // Handle error: Unable to find project or maintenance details
      return res.status(404).json({ message: "Project or maintenance details not found" });
    }

    const costPerHour = projectDetails.CostPerHour;
    const hoursRequired = maintenanceDetails.HoursRequired;

    if (!costPerHour || !hoursRequired) {
      // Handle error: Missing cost per hour or hours required data
      return res.status(400).json({ message: "Cost per hour or hours required data missing" });
    }

    // Calculate the estimated cost
    const cost = costPerHour * hoursRequired;

    // Send the calculated cost as a response
    res.status(200).json({ cost });
  } catch (error) {
    // Handle unexpected errors
    res.status(500).json({ message: error.message });
  }
};

*/}

  
  
  module.exports={
    testController, 
    getSchedules,
    getSchedule,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    //calculateMaintenanceCost
  };