import React, { useState } from 'react';
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import AssignmentModal from './AssignmentModal';
import AssignmentList from './AssignmentList';
import AssignmentText from './AssignmentText';


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
          <Flex 
              as="nav" 
              justify="space-between" 
              wrap="wrap" 
              margin={4} 
              padding={4} 
              bg="transparent" 
              color="black"
              borderRadius="5px 5px 5px 5px" // Make the Flex component circular
              border="2px solid black" // Add a black border
            >
            <AssignmentText></AssignmentText>
            {/* <AssignmentModal onSubmit={handleAssignmentSubmit} /> */}
          </Flex>
        </Box>
        {/* <AssignmentList assignments={assignments} onDelete={handleAssignmentDelete} /> */}
        <AssignmentList/>
      </ChakraProvider>
    );
  };

export default AssignmentBase;