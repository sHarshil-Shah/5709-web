import React, {useState} from 'react';
import { ChakraProvider, Flex, Text, Box, Button } from '@chakra-ui/react';

import CreateAssignmentModal from './CreateAssignmentModal';

const AssignmentBase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAssignmentCreated = () => {
    setIsModalOpen(false);
  };

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
          <CreateAssignmentModal onAssignmentCreated={handleAssignmentCreated}/>
        </Flex>
      </Box>
    </ChakraProvider>
    
  );
};

export default AssignmentBase;