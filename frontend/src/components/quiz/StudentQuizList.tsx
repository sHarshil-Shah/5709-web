// Author: Raj Soni
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

interface Quiz {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}

const StudentQuizList: React.FC = () => {
  const [quizzes] = useState<Quiz[]>([
    { id: 1, title: 'Quiz 1', status: 'Completed', dueDate: '30-05-2023' },
    { id: 2, title: 'Quiz 2', status: 'Not yet Started', dueDate: '-' },
    { id: 3, title: 'Quiz 3', status: 'Incomplete', dueDate: '06-06-2023' },
    { id: 4, title: 'Quiz 4', status: 'Incomplete', dueDate: '30-06-2023' },
  ]);

  return (
    <ChakraProvider>
      <Box bg="teal" p={4} color="white">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size={{ base: 'md', md: 'lg' }}>
            CSCI5709 - Advanced Web Services
          </Heading>
        </Flex>
      </Box>

      <TableContainer>
        <Table variant="striped" size="lg">
          <Thead>
            <Tr>
              <Th>Quiz Title</Th>
              <Th>Status</Th>
              <Th>Due Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <Tr key={quiz.id}>
                  <Td>
                    <Link
                      to={`/quiz/${quiz.id}`}
                      style={{ pointerEvents: quiz.id === 2 ? 'none' : 'auto' }}
                    >
                      {quiz.title}
                    </Link>
                  </Td>
                  <Td>{quiz.status}</Td>
                  <Td>{quiz.dueDate}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={3}>
                  <Text>No quizzes found.</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
};

export default StudentQuizList;
