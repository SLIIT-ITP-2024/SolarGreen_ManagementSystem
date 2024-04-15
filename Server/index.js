require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { mainRouter } = require('./routes/_index');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const UserModel = require('./models/EmployeePage');
const { default: employeePage } = require('../Client/src/pages/UserManagement/Employer/EmployeePage');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cross origin resource sharing
app.use(cors());

mongoose.connect("mongodb://")

app.get('/', (req, res) => {
  UserModel.find({})
  .then(employeePage => res.json(employeePage))
  .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(employeePage => res.json(employeePage))
  .catch(err => res.json(err)) 
})

app.put("/updateEmployee/:id", (req, res) => {
  const id = req.params.id; 
  UserModel.findByIdAndUpdate({_id: id}, {
    employeeName: req.body.employeeName, 
    employeeId: req.body.employeeId, 
    phoneNumber: req.body.phoneNumber, 
    email: req.body.email, 
    role: req.body.role, 
    startingDate: req.body.startingDate, 
    endingDate: req.body.endingDate, 
    personalDetails: req.body.personalDetails })
  .then(employeePage => res.json(employeePage))
  .catch(err => res.json(err))
})

app.delete('/deteleUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err)) 
})

app.post("/addEmployee", (req, res) => {
  UserModel.create(req.body)
  .then(employeePage => res.json(employeePage))
  .catch(err => res.json(err))
})

// base route
app.use('/api/v1', mainRouter);

// testing router ----------------------
app.get('/test', (req, res) => {
  res.send('Hello from the backend!');
});

// local server----------------------
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});