import { useState, useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Textarea, Input } from '@chakra-ui/react';
import envVariables from '../../importenv';

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

  const handleRowClick = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAssignment(null);
    setComments('');
    setFileToUpload(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileToUpload(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (selectedAssignment) {
        const formData = new FormData();
        formData.append('comments', comments);
      if (fileToUpload) {
        formData.append('file', fileToUpload);
      }

      formData.append('assignment_id', selectedAssignment._id);
        
      const backendURL = envVariables.backendURL;

      try {
        const response = await fetch(backendURL + '/updateAssignment/:' + selectedAssignment._id, {
          method: 'POST',
          body: formData,
        });

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
          handleModalClose();
        } else {
          console.error('Failed to update assignment');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Box p={4}>
      <Table variant="simple" colorScheme="teal">
        <Thead>
          <Tr>
            <Th fontWeight="bold" color="black">Assignment Title</Th>
            <Th fontWeight="bold" color="black">Submission Status</Th>
            <Th fontWeight="bold" color="black">Submission Deadline</Th>
            <Th fontWeight="bold" color="black">Total Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {assignments.map((assignment) => (
            <Tr key={assignment._id} cursor="pointer" onClick={() => handleRowClick(assignment)}>
              <Td fontWeight="bold" color="black">{assignment.assignmentTitle}</Td>
              <Td>In Completed</Td>
              <Td>{assignment.submissionDate}</Td>
              <Td>{assignment.grade}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

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
                <Input type="file" onChange={handleFileChange} />
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