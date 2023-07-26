import React from 'react';
import { Box, Flex, ChakraProvider, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AdminNavBar from './adminNavigationBar';
import TableWithFilters from '../UserManagement/listUsers';

const UserInformationPage = () => {
  return (
    <ChakraProvider>
      <Box>
        <AdminNavBar />
      </Box>
        <Box p={8}>
        <TableWithFilters />
      </Box>
    </ChakraProvider>
  );
};

export default UserInformationPage;
