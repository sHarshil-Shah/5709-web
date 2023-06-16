import React, {useState, useRef } from 'react';
import { Text, Table, Thead, Tbody, Tr, Th, Td, VStack, Card,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

interface Assignment {
  id: number;
  title: string;
  description: string;
  visibleDate: string;
}

interface AssignmentListProps {
  assignments: Assignment[];
  onDelete: (id: number) => void;
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignments, onDelete }) => {

  const leastDestructiveRef = useRef<HTMLButtonElement | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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
      console.log('Deleting assignment:', selectedAssignment);
    }
    handleConfirmationClose();
  };

  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize={25} fontWeight="bold" margin={5}>Assignment List:</Text>
      <Card borderRadius="5px" marginLeft={5} marginRight={5}>
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
            {assignments.map((assignment, index) => (
              <Tr key={index}>
                <Td textAlign="center">{assignment.title}</Td>
                <Td textAlign="center">{assignment.description}</Td>
                <Td textAlign="center">{assignment.visibleDate}</Td>
                <Td textAlign="center">
                    <Button colorScheme="red" size="sm" onClick={() => handleDelete(assignment)}>
                      Delete
                    </Button>
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

            <AlertDialogBody>
              Are you sure you want to delete this assignment?
            </AlertDialogBody>

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