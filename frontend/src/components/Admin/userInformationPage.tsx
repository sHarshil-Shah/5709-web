import React from 'react';
import { Box, Flex, ChakraProvider, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const UserInformationPage = () => {
  return (
    <ChakraProvider>
        <Box p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome to User Information Page!
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default UserInformationPage;
