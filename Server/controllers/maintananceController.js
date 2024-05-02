const Schedule = require('../models/maintenanceModels/schedule');

//http://localhost:3000/api/v1/maintenance/test
const testController = (req, res) => {
  res.send('Maintenance controller is working!');
};


// get all schedules
// http://localhost:3000/api/v1/maintenance/schedules/get
const getSchedules= async (req, res) => {
  try {
      const schedules = await Schedule.find();
      res.status(200).json(schedules);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};


// get single schedule
// http://localhost:3000/api/v1/maintenance/schedules/get/:id
const getScheduleById = async (req, res) => {
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
      const _id = req.params.id;
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
  
      const schedule = await Schedule.findById(_id);
      if (!schedule) {
        return res.status(404).json({ message: "Schedule not found" });
      }
  
      await Schedule.findByIdAndUpdate(_id, updatedSchedule);
      res.status(200).json({ status: "Schedule updated" });
    } catch (error) {
      console.error("Error updating schedule:", error);
      res.status(500).json({ message: "Error updating schedule" });
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
  
  module.exports={
    testController, 
    getSchedules,
    getScheduleById,
    addSchedule,
    updateSchedule,
    deleteSchedule




};
