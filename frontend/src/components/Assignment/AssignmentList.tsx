import React, { useState, useRef } from 'react';
import {
  Text,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Card,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Center,
} from '@chakra-ui/react';

interface Assignment {
  id: number;
  title: string;
  description: string;
  visibleDate: string;
}

const initialAssignments: Assignment[] = [
  {
    id: 1,
    title: 'Assignment 1',
    description: 'Description 1',
    visibleDate: '2023-06-16',
  },
  {
    id: 2,
    title: 'Assignment 2',
    description: 'Description 2',
    visibleDate: '2023-06-17',
  },
  {
    id: 3,
    title: 'Assignment 3',
    description: 'Description 3',
    visibleDate: '2023-06-18',
  },
];

const AssignmentList: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const leastDestructiveRef = useRef<HTMLButtonElement | null>(null);

  const handleDelete = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setSelectedAssignment(null);
    setIsConfirmationOpen(false);
  };

  const handleConfirmationConfirm = () => {
    if (selectedAssignment) {
      // Perform the delete operation here
      const updatedAssignments = assignments.filter(
        (assignment) => assignment.id !== selectedAssignment.id
      );
      setAssignments(updatedAssignments);
      console.log('Deleting assignment:', selectedAssignment);
    }
    handleConfirmationClose();
  };

  const handleEdit = (assignment: Assignment) => {
    // Logic for handling the edit operation
    console.log('Editing assignment:', assignment);
    // You can open the assignment modal and populate it with the assignment data here
    // For simplicity, let's just log the assignment for now
    setSelectedAssignment(assignment);
  };

  return (
    <VStack spacing={4} align="stretch">
      {/* <Text fontSize={25} fontWeight="bold" margin={5}>
        Assignment List:
      </Text> */}
      <Card borderRadius="5px" mx={5}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">Title</Th>
              <Th textAlign="center">Description</Th>
              <Th textAlign="center">Visible Date</Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assignments.map((assignment) => (
              <Tr key={assignment.id}>
                <Td textAlign="center">{assignment.title}</Td>
                <Td textAlign="center">{assignment.description}</Td>
                <Td textAlign="center">{assignment.visibleDate}</Td>
                <Td textAlign="left">
                  <HStack spacing={2} justifyContent={'center'}>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => handleEdit(assignment)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => handleDelete(assignment)}
                      >
                        Delete
                      </Button>
                    </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
      <AlertDialog
        isOpen={isConfirmationOpen}
        leastDestructiveRef={leastDestructiveRef}
        onClose={handleConfirmationClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Assignment
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to delete this assignment?</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleConfirmationConfirm}>
                Yes
              </Button>
              <Button colorScheme="gray" onClick={handleConfirmationClose} ml={3}>
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
};

export default AssignmentList;