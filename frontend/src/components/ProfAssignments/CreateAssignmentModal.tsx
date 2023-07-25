import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  useToast, 
} from '@chakra-ui/react';
import envVariables from '../../importenv';
import {Assignment} from '../model/profassignment.model';

const CreateAssignmentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [visibleDate, setVisibleDate] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const toast = useToast(); // Initialize the useToast hook

    // Function to reset the state values
    const resetState = () => {
      setAssignmentTitle('');
      setVisibleDate('');
      setSubmissionDate('');
      setDescription('');
      setFile(null);
    };

  const handleOpen = () => {
    resetState()
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    
  const allowedFileTypes = ['.doc', '.pdf'];

    // Perform validations
    if (assignmentTitle.length < 6) {
      toast({
        title: 'Error',
        description: 'Assignment Title should be at least 6 characters long.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else if (!visibleDate) {
      toast({
        title: 'Error',
        description: 'Visible Date should not be empty.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else if (!submissionDate) {
      toast({
        title: 'Error',
        description: 'Submission Date should not be empty.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else if (description.length < 5) {
      toast({
        title: 'Error',
        description: 'Description should be at least 5 characters long.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else if (!file || !allowedFileTypes.includes(file.name.substring(file.name.lastIndexOf('.')).toLowerCase())) {

      toast({
        title: 'Error',
        description: 'Please select a valid file to upload - either .pdf or .doc file.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else {
      // Perform save logic here (e.g., API call to save assignment data)
      toast({
        title: 'Success',
        description: 'Assignment saved successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      const assignmentData: Assignment = {
        assignmentTitle,
        visibleDate,
        submissionDate,
        description,
        file,
      };

      const data = callCreateAssignmentAPI(assignmentData);

      if (data!=null){
          console.log("Assignment created successfully", data);

          toast({
            title: 'Success',
            description: 'Assignment saved successfully!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });

          resetState();
          setIsOpen(false);
      }
    }
  };

  return (
    <>
      <Button colorScheme="teal" onClick={handleOpen}>
        Create Assignment
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assignment Creation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Assignment Title</FormLabel>
              <Input 
                type="text"
                placeholder="Enter assignment title"
                value={assignmentTitle}
                onChange={(e) => setAssignmentTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Visible Date</FormLabel>
              <Input 
                type="date"
                value={visibleDate}
                onChange={(e) => setVisibleDate(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Submission Date</FormLabel>
              <Input 
                type="date"
                value={submissionDate}
                onChange={(e) => setSubmissionDate(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea 
                placeholder="Enter assignment description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Upload File (.doc or .pdf)</FormLabel>
              <Input type="file" accept=".doc,.pdf" onChange={(e) => setFile(e.target.files && e.target.files[0])} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Box flex="1" padding={5}>
              <Button variant="ghost" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
            <Button colorScheme="teal" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAssignmentModal;

function callCreateAssignmentAPI(assignment : Assignment): Promise<{ assignment: Assignment }> {
  const backendURL = envVariables.backendURL;

  return fetch(backendURL + '/createAssignment', {
      method: 'POST',
      headers: {
          'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(assignment),
  })
      .then((response) => response.json())
      .then((data) => {
          // Handle the response data
          console.log(data);
          return data;
      })
      .catch((error) => {
          // Handle any errors
          console.error(error);
          return {};
      });
}