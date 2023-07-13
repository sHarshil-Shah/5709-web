import React, { useState } from 'react';
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import AssignmentModal from '../Assignment/AssignmentModal';
import AssignmentList from '../Assignment/AssignmentList';
import AssignmentText from '../Assignment/AssignmentText';


interface Assignment {
    id: number;
    title: string;
    description: string;
    visibleDate: string;
  }

const AssignmentBase: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
  
    const handleAssignmentSubmit = (assignment: Assignment) => {
      setAssignments([...assignments, assignment]);
    };
    
    return (
      <ChakraProvider>
        <Box>
          <Flex as="nav" justify="space-between" wrap="wrap" padding={4} bg="gray.800" color="white">
            <AssignmentText></AssignmentText>
            <AssignmentModal onSubmit={handleAssignmentSubmit} />
          </Flex>
        </Box>
        {/* <AssignmentList assignments={assignments} onDelete={handleAssignmentDelete} /> */}
        <AssignmentList/>
      </ChakraProvider>
    );
  };

export default AssignmentBase;