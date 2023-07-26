import React from 'react';
import { Box, Flex, ChakraProvider, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AdminNavBar from './adminNavigationBar';

const PendingApproval = () => {
    return (
        <ChakraProvider>
            <Box>
        <AdminNavBar />
      </Box>
            <Box p={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Welcome to Pending Approval!
            </Text>
          </Box>
        </ChakraProvider>
      );
};

export default PendingApproval;
