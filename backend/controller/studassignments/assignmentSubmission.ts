import express, { Request, Response } from 'express';
import assignmentStudents from '../../model/studAssignment.model';
import StudentSubmissionService from '../../service/studentSubmissions.service';

import multer from 'multer';
import fs from 'fs';
const upload = multer({ dest: 'uploads/' });

export const submitAssignmentRouter = express.Router();

const studentSubmissionService = new StudentSubmissionService();

submitAssignmentRouter.post('/', upload.single('image'), async (req: Request, res: Response) => {
    
    console.log(req.body);
    
    console.log("File name is here", req.body.file.filename);
    console.log("mimetype is here", req.body.file.mimetype);
    console.log("path is here", req.body.file.path);

    const path = req.body.file?.path;

    const fileData = fs.readFileSync(path);

    console.log("File data in back end is here ", fileData);
    
    // Convert the image data to a base64 string
    const base64String = fileData.toString('base64');

    const current_assignment: assignmentStudents = req.body;

    const comments = current_assignment.comments;

    console.log("Comments : ", comments);
    console.log("File is : ", fileData);

    if (!fileData){
        return res.status(400).json(({ message: "No File uploaded"}))
    }else{
        console.log("At least file is presenet", req.body.fileData);
    }

    const assignmentData: assignmentStudents = {
        comments,
        file: base64String, // Store the binary data of the file
      };

    try{
      const uploadedAssignment = await studentSubmissionService.uploadSubmissons(assignmentData);
      console.log(uploadedAssignment);
      if (uploadedAssignment)
          res.json({ message: 'Assignment Upload successfully', assignment: uploadedAssignment });
      else
          res.json({ message: 'Something went wrong!!' });
    }catch (error){
      console.error(error);
      res.status(500).json({ message: 'Error while uploading assignment data' });
    }
  });