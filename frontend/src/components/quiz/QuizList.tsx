import React, { useState } from 'react';
import { Box, Flex, Heading, Button, Text, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import CreateQuiz from './CreateQuiz';
import QuestionBankPage from './QuestionBank';
import QuizDetailsModal from './QuizDetailsModal';
import QuizTableRow from './QuizTableRow';
import { Quiz } from '../model/quiz.model'

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: "1",
      title: 'Quiz 1',
      description: 'This is the description of Quiz 1',
      startDate: '2023-07-20',
      dueDate: '2023-07-25',
    },
    {
      id: "2",
      title: 'Quiz 2',
      description: 'This is the description of Quiz 1',
      startDate: '2023-07-20',
      dueDate: '2023-07-25',
    },
    {
      id: "3",
      title: 'Quiz 3',
      description: 'This is the description of Quiz 1',
      startDate: '2023-07-20',
      dueDate: '2023-07-25',
    },
    {
      id: "4",
      title: 'Quiz 4',
      description: 'This is the description of Quiz 1',
      startDate: '2023-07-20',
      dueDate: '2023-07-25',
    },
  ]);

  const handleEdit = (quizId: string) => {
    console.log(`Edit quiz with ID: ${quizId}`);
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
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== selectedQuizId);
    console.log(`Delete quiz with ID: ${selectedQuizId}`);
    console.log('Updated quizzes:', updatedQuizzes);
    setQuizzes(updatedQuizzes);
    onDeleteClose();
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
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <QuizTableRow key={quiz.id} quiz={quiz} onEditQuiz={handleEdit} onDeleteQuiz={handleDelete} isProfessor={true} />
          ))
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
