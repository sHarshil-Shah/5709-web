import React, { useState }from 'react';
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import AssignmentModal from './components/AssignmentModal';
import AssignmentList from './components/AssignmentList';
import AssignmentText from './components/AssignmentText';

interface Assignment {
  id: number;
  title: string;
  description: string;
  visibleDate: string;
}

const App: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [nextAssignmentId, setNextAssignmentId] = useState(1);

  const handleAssignmentSubmit = (assignment: Assignment) => {
    const newAssignment: Assignment = {
      ...assignment,
      id: nextAssignmentId,
    };

    setAssignments([...assignments, newAssignment]);
    setNextAssignmentId(nextAssignmentId + 1);
  };

  const handleAssignmentDelete = (id: number) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  };
  
  return (
    <ChakraProvider>
      <Box>
        <Flex as="nav" justify="space-between" wrap="wrap" padding={4} bg="gray.800" color="white">
          <AssignmentText></AssignmentText>
          <AssignmentModal onSubmit={handleAssignmentSubmit} />
        </Flex>
      </Box>
      <AssignmentList assignments={assignments} onDelete={handleAssignmentDelete} />
    </ChakraProvider>
  );
};

export default App;
