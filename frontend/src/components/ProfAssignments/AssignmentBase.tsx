import React from 'react';
import { ChakraProvider, Flex, Text, Box } from '@chakra-ui/react';

import CreateAssignmentModal from './CreateAssignmentModal';

const AssignmentBase: React.FC = () => {
  return (
    <ChakraProvider>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding={4}
          margin={4}
          bg="white.500"
          color="white"
          boxShadow="md"
          position="sticky"
          top={0}
          zIndex={1}
          border="1px light black"
        >
          {/* Left section */}
          <Flex align="center">
            <Text color="black" fontSize="lg" fontWeight="bold">
              Assignment List
            </Text>
          </Flex>

          {/* Right section */}
          <CreateAssignmentModal/>
        </Flex>
      </Box>

    </ChakraProvider>
    
  );
};

export default AssignmentBase;