import React, { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import CreateQuiz from './CreateQuiz';
import { Link } from 'react-router-dom';

interface Quiz {
  id: number;
  title: string;
}

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    { id: 1, title: 'Quiz 1' },
    { id: 2, title: 'Quiz 2' },
    { id: 3, title: 'Quiz 3' },
    { id: 4, title: 'Quiz 4' },
  ]);

  const handleEdit = (quizId: number) => {
    console.log(`Edit quiz with ID: ${quizId}`);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);

  const handleDelete = (quizId: number) => {
    setSelectedQuizId(quizId);
    onOpen();
  };

  const confirmDelete = () => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== selectedQuizId);
    console.log(`Delete quiz with ID: ${selectedQuizId}`);
    console.log('Updated quizzes:', updatedQuizzes);
    setQuizzes(updatedQuizzes);
    onClose();
  };

  const [isOpenQuizModel, setIsOpenQuizModel] = useState<boolean>(false);

  const handleOpenModel = () => {
    setIsOpenQuizModel(true);
  };

  const onCloseQuizModel = () => {
    setIsOpenQuizModel(false);
  };

  return (
    <>
      <Box bg="teal" p={4} color="white">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Heading as="h1" size="lg" textAlign="center" mb={2}>
            CSCI5709 - Advanced Web Services
          </Heading>
          <Flex>
            <Button
              onClick={handleOpenModel}
              colorScheme="green"
              variant="solid"
              mr={2}
              mb={{ base: 2, md: 0 }}
              width={{ base: '100%', md: 'auto' }}
            >
              Create Quiz
            </Button>
            <Button
              as={Link}
              to="/question-bank"
              colorScheme="green"
              variant="solid"
              mr={2}
              mb={{ base: 2, md: 0 }}
              width={{ base: '100%', md: 'auto' }}
            >
              <Link to={`/questionBank`}>Question Bank</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box p={4}>
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <Flex
              key={quiz.id}
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="center"
              mb={4}
            >
              <Text mb={{ base: 2, md: 0 }}>{quiz.title}</Text>
              <Flex>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  mr={2}
                  onClick={() => handleEdit(quiz.id)}
                  width={{ base: '100%', md: 'auto' }}
                  mb={{ base: 2, md: 0 }}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleDelete(quiz.id)}
                  width={{ base: '100%', md: 'auto' }}
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))
        ) : (
          <Text>No quizzes found.</Text>
        )}
      </Box>
      <CreateQuiz isOpenQuizModel={isOpenQuizModel} onCloseQuizModel={onCloseQuizModel} />
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Quiz
          </AlertDialogHeader>
          <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={confirmDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default QuizList;
