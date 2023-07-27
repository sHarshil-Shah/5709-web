import { useState, useEffect } from 'react';
import { useToast, Box, Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Textarea, Input } from '@chakra-ui/react';
import envVariables from '../../importenv';
import Loader from '../../loading';

interface Assignment {
  _id: string;
  assignmentTitle: string;
  visibleDate: string;
  submissionDate: string;
  description: string;
  file: any;
  grade: string;
  courseId: string;
}

const StudentAssignmentList = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState('');
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  useEffect(() => {
    fetchAssignmentList()
        .then((response) => {
            // Filter the assignments based on the visibleDate being passed
            const visibleAssignments = response.assignments.filter(
                (assignment) => new Date(assignment.visibleDate) <= new Date()
            );
            setAssignments(visibleAssignments);
        })
        .catch((error) => {
            console.error(error);
            setAssignments([]); // Set assignments to an empty array in case of an error
        })
  }, []);

  const handleUploadButtonClick = (assignment: Assignment)=> {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAssignment(null);
    setComments('');
    setFileToUpload(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        // const base64String = await getBase64(file);
        setFileToUpload(file);
      } else {
        toast({
          title: 'Only .jpeg and .png files are allowed',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  // const getBase64 = (file: File): Promise<string> => {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const handleSave = async () => {
    if (!comments.trim()) {
      toast({
        title: 'Comments cannot be empty',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!fileToUpload) {
      toast({
        title: 'Please select a file to upload',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (selectedAssignment) {
      const formData = new FormData();
      formData.append('comments', comments);
      if (fileToUpload) {
        formData.append('image', fileToUpload);
        console.log("File data : ",fileToUpload);
      }else{
        console.log("No data exists");
      }

      console.log(formData.get('comments'));
      console.log(formData.get('image'));

      const backendURL = 'http://localhost:3000'

      try {
        const response = await fetch(backendURL + '/uploadAssignment', {
          method: 'POST',
          body: formData,
        });

        console.log(response);

        if (response.ok) {
          // Update assignment status and comments locally
          const updatedAssignments = assignments.map((assignment) =>
            assignment._id === selectedAssignment._id
              ? {
                  ...assignment,
                  comments,
                  status: 'Completed',
                }
              : assignment
          );

          setAssignments(updatedAssignments);
          toast({
            title: 'Assignment data saved successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          handleModalClose();
        } else {
          console.error('Failed to update assignment');
          toast({
            title: 'Failed to update assignment',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error while saving assignment data',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }else{
      console.log("Not selected assignment");
    }
  };

  return (
    <>
      {isLoading && <Loader/>}
        <Box p={4}>

        {assignments.length > 0 ? (
          <Table variant="simple" colorScheme="teal">
            <Thead>
              <Tr>
                <Th fontWeight="bold" color="black">Assignment Title</Th>
                <Th fontWeight="bold" color="black">Submission Status</Th>
                <Th fontWeight="bold" color="black">Submission Deadline</Th>
                <Th fontWeight="bold" color="black">Total Marks</Th>
                <Th fontWeight="bold" color="black">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assignments.map((assignment) => (
                <Tr key={assignment._id} cursor="pointer">
                  <Td fontWeight="bold" color="black">{assignment.assignmentTitle}</Td>
                  <Td>In Completed</Td>
                  <Td>{assignment.submissionDate}</Td>
                  <Td>{assignment.grade}</Td>
                  <Td>
                    <Button colorScheme="blue" onClick={() => handleUploadButtonClick(assignment)}>
                      Upload Assignment
                    </Button>
                </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
            <Box textAlign="center" fontSize="18px" fontWeight="bold" mt={4}>
                No Assignment Data
            </Box>
        )}
        
          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Add Comments and Upload File</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Textarea
                  placeholder="Add comments..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  />
                  <Input name='file' type="file" accept=".jpeg, .png" onChange={handleFileChange} />
              </ModalBody>
              <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSave}>
                      Save
                  </Button>
                  <Button onClick={handleModalClose}>Cancel</Button>
              </ModalFooter>
              </ModalContent>
          </Modal>
      </Box>
    </>
    
  );
};

export default StudentAssignmentList;

function fetchAssignmentList(): Promise<{ assignments: Assignment[] }> {

    const backendURL = envVariables.backendURL;

    return fetch(backendURL + '/getAssignments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        // Handle the response data
        console.log(data);
        return data;
    })
    .catch((error) => {
        // Handle any errors
        console.error(error);
        return { assignments: [] };
    });
}