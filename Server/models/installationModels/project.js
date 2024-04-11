const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema(
    {
        customerID: {
            type: String,
            required: true
        },
        
        customerName: {
            type: String,
            required: true
        },
    
        projectID: {
            type: String,
            required: true
        },
        
        
        date: {
            type: String,
            required: true
        },
        
        projectType: {
            type: String,
            required: true
        },
        
        projectSize: {
            type: String,
            required: true
        },
        
        status: {
            type: String,
            required: true
        },
        
        estimatedCost: {
            type: Number,
            required: true
        },
        
        estimatedDuration: {
            type: Number,
            required: true
        },
        
        comments: {
            type: String,
            required: true
        }
    }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;