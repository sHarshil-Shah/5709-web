import React from 'react';
import { Box, Flex, ChakraProvider, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <ChakraProvider>
      <Box>
        <Flex as="nav" justify="space-between" wrap="wrap" padding={4} bg="gray.800" color="white">
          <Link as={RouterLink} to="/admin/mapping" style={{ textDecoration: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold" ml={4}>
              Assign Professors
            </Text>
          </Link>
          <Link as={RouterLink} to="/admin/course-management" style={{ textDecoration: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold" ml={4}>
              Course Management
            </Text>
          </Link>
          <Link as={RouterLink} to="/admin/pending-requests" style={{ textDecoration: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold" ml={4}>
              Pending Requests
            </Text>
          </Link>
          <Link as={RouterLink} to="/admin/users" style={{ textDecoration: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold" ml={4}>
              User List
            </Text>
          </Link>
        </Flex>
      </Box>
      <Box p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Welcome to the Admin Dashboard!
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default AdminDashboard;
