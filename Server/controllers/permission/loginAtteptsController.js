const loginAttempts = require("../../models/permissionModels/loginAttempts.model");
const uuid = require("uuid");

const test = async (req, res) => {
  res.send("loginAttempts controller is working!");
};

const saveLoginAttempts = async (req, res) => {
  const { email, password, ipAddress } = req.body;
  console.log(req.body);
  try {
    const newLoginAttempt = new loginAttempts({
      attemptID: uuid.v4(),
      email,
      password,
      ipAddress,
      time: new Date().toLocaleString(),
    });
    await newLoginAttempt.save();
    res.status(201).json(newLoginAttempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLoginAttempts = async (req, res) => {
  try {
    const loginAttemptsdetails = await loginAttempts.find();
    res.status(200).json(loginAttemptsdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLoginAttemptsByIP = async (req, res) => {
  try {
    const loginAttemptsdetails = await loginAttempts.find({
      ipAddress: req.params.ipAddress,
    });
    res.status(200).json(loginAttemptsdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const seachLoginAttemptsByUsername = async (req, res) => {
  try {
    const loginAttemptsdetails = await loginAttempts.find({
      username: req.params.username,
    });
    res.status(200).json(loginAttemptsdetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const puppeteer = require("puppeteer");

const generateReport = async (req, res) => {
  try {
    const attempts = await loginAttempts.find();

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 800 });

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Login Attempts Report</title>
          <style>
            /* Add custom CSS styles for formatting the report (optional) */
            body {
              font-family: Arial, sans-serif;
            }
            h1 {
              text-align: center;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin-bottom: 20px;
            }
            th, td {
              padding: 8px;
              border: 1px solid #ddd;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>Login Attempts Report</h1>
          <table>
            <thead>
              <tr>
                <th>Attempt ID</th>
                <th>Email</th>
                <th>Password</th>
                <th>IP Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              ${renderTableRows(attempts)}
            </tbody>
          </table>
        </body>
        </html>
      `;

    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: { top: "2cm", right: "2cm", bottom: "2cm", left: "2cm" },
      printBackground: true,
    });

    await browser.close();
    res.setHeader("Content-Type", "application/pdf");
    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error generating report" });
  }
};

const renderTableRows = (attempts) => {
  return attempts
    .map((attempt) => {
      return `
        <tr>
          <td>${attempt.attemptID}</td>
          <td>${attempt.email}</td>
          <td>${attempt.password}</td>
          <td>${attempt.ipAddress}</td>
          <td>${attempt.time}</td>
        </tr>
      `;
    })
    .join("");
};

module.exports = {
  test,
  saveLoginAttempts,
  getAllLoginAttempts,
  getAllLoginAttemptsByIP,
  seachLoginAttemptsByUsername,
  generateReport,
};
