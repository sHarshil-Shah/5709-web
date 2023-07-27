import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import StudentAssignmentList from './studentAssignment';

const StudentAssignmentPage: React.FC = () => {
    return (
      <ChakraProvider>
  
        <StudentAssignmentList/>
  
      </ChakraProvider>
      
    );
  };
  
  export default StudentAssignmentPage;