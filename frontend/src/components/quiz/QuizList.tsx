import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Heading, Button, Text, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Table, Tbody } from '@chakra-ui/react';
import { Quiz } from '../model/quiz.model';
import envVariables from '../../importenv';
import Loader from '../../loading';

const CreateQuiz = React.lazy(() => import('./CreateQuiz'));
const QuestionBankPage = React.lazy(() => import('./QuestionBank'));
const QuizDetailsModal = React.lazy(() => import('./QuizDetailsModal'));
const QuizTableRow = React.lazy(() => import('./QuizTableRow'));

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>();
  const [isLoading, setLoading] = useState(false);
  const [userType, setUserType] = useState<string | null>();

  const fetchQuizzes = useCallback(() => {
    setUserType(null);
    const userDataString = localStorage.getItem('userData');
    const user_type = JSON.parse(userDataString ? userDataString : '').user_type ?? null;
    if (user_type) {
      setUserType(user_type);
      setLoading(true);
      getAllQuizzes()
        .then((response) => {
          setQuizzes(response.quizzes);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const handleEdit = (quizId: string) => {
    console.log(`Edit quiz with ID: ${quizId}`);
    onCreateQuizOpen();
  };

  const handleUserType = () => {
    if (userType === 'prof') {
      return true;
    } else {
      return false;
    }
  };

  const handleDelete = (quizId: string) => {
    setSelectedQuizId(quizId);
    onDeleteOpen();
    console.log(`Delete quiz with ID: ${quizId}`);
  };

  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

  const { isOpen: isCreateQuizOpen, onOpen: onCreateQuizOpen, onClose: onCreateQuizClose } =
    useDisclosure();

  const { isOpen: isQuestionBankOpen, onOpen: onQuestionBankOpen, onClose: onQuestionBankClose } =
    useDisclosure();

  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const confirmDelete = () => {
    deleteQuiz(selectedQuizId);
    onDeleteClose();
    fetchQuizzes();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Box bg="teal" p={4} color="white">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Heading as="h1" size="lg" textAlign="center" mb={2}>
            CSCI5709 - Advanced Web Services
          </Heading>
          <Flex>
            <Button
              onClick={onCreateQuizOpen}
              colorScheme="green"
              variant="solid"
              mr={2}
              mb={{ base: 2, md: 0 }}
              width={{ base: '100%', md: 'auto' }}
            >
              Create Quiz
            </Button>
            <Button
              onClick={onQuestionBankOpen}
              colorScheme="green"
              variant="solid"
              mr={2}
              mb={{ base: 2, md: 0 }}
              width={{ base: '100%', md: 'auto' }}
            >
              Question Bank
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>
        {quizzes && quizzes.length > 0 ? (
          <Table variant='striped'>
            <Tbody>
              {quizzes.map((quiz) => (
                <QuizTableRow key={quiz._id} quiz={quiz} onEditQuiz={handleEdit} onDeleteQuiz={handleDelete} isProfessor={handleUserType()} />
              ))}
            </Tbody>
          </Table>
        ) : (
          <Text>No quizzes found.</Text>
        )}
      </Box>
      <CreateQuiz isOpenQuizModel={isCreateQuizOpen} onCloseQuizModel={onCreateQuizClose} />
      <QuestionBankPage isQuestionBankModel={isQuestionBankOpen} onCloseQuestionBankModel={onQuestionBankClose} />

      <AlertDialog isOpen={isDeleteOpen} leastDestructiveRef={cancelRef} onClose={onDeleteClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Quiz
          </AlertDialogHeader>
          <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onDeleteClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={confirmDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <QuizDetailsModal isOpen={!!selectedQuiz} onClose={() => setSelectedQuiz(null)} quiz={selectedQuiz} />
    </>
  );
};

export default QuizList;

function getAllQuizzes(): Promise<{ quizzes: Quiz[] }> {
  const backendURL = envVariables.backendURL;
  return fetch(backendURL + '/listQuiz', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return { users: [] };
    });
}

function deleteQuiz(quiz_id: string | null): Promise<{ quiz: Quiz }> {
  const backendURL = envVariables.backendURL;
  console.log(quiz_id);
  return fetch(backendURL + '/deleteQuiz', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "id": quiz_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}
