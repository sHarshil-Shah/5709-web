const express = require('express');
const multer = require('multer');
const path = require('path');
const Assignment = require('./models/Assignment');

const apis = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage });

// Upload file and create assignment endpoint
apis.post('/assignments', upload.single('file'), async (req, res) => {
  try {
    const { title, description, visibleDate } = req.body;
    const file = req.file;

    const assignment = new Assignment({
      title,
      description,
      visibleDate,
      file: file.path,
    });

    const newAssignment = await assignment.save();

    res.status(201).json(newAssignment);
  } catch (error) {
    console.error('Error creating assignment:', error);
    res.status(500).json({ error: 'An error occurred while creating the assignment.' });
  }
});

module.exports = apis;