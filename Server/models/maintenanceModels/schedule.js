const mongoose = require("mongoose");

const ScheduleSchema = mongoose.Schema({
  ProjectID: {
    type: String,
    required: [true, "Please enter ProjectID"],
  },

  MaintenanceID: {
    type: String,
    required: [true, "Please enter MaintenanceID"],
  },

  TeamID: {
    type: String,
    required: [true, "Please enter TeamID"],
  },

  Task: {
    type: String,
    required: [true, "Please enter Task"],
  },

  Location: {
    type: String,
    required: [true, "Please enter Location"],
  },

  Date: {
    type: String,
    required: [true, "Please enter Date"],
  },

  Status: {
    type: String,
    required: [true, "Please enter Status"],
  },
});

const Schedule=mongoose.model("Schedule",ScheduleSchema);

module.exports=Schedule;