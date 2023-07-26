// Author: Raj Soni
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Radio,
  Stack,
  Button,
  FormControl,
  VStack,
  Grid,
  Flex,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmitQuiz = () => {
    onOpen();
  };

  const confirmSubmit = () => {
    console.log('Selected Options:', selectedOptions);
    setSubmitted(true);
    onClose();
  };

  // Mock data for questions and options
  const questions: Question[] = [
    {
      id: 1,
      text: 'How are you?',
      options: ['Good', 'Fine', 'Bad'],
    },
    {
      id: 2,
      text: 'Question 2',
      options: ['Option A', 'Option B', 'Option C'],
    },
    {
      id: 3,
      text: 'Question 3',
      options: ['Option A', 'Option B', 'Option C'],
    },
    {
      id: 4,
      text: 'Question 4',
      options: ['Option A', 'Option B', 'Option C'],
    },
    {
      id: 5,
      text: 'Question 5',
      options: ['Option A', 'Option B', 'Option C'],
    },
  ];

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleGoToQuestion = (questionIndex: number) => {
    setCurrentQuestionIndex(questionIndex);
  };

  if (submitted) {
    return <div>Quiz Submitted! Thank you.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box p={4} mx="auto">
      <Heading as="h1" mb={4} textAlign="center">
        Quiz {quizId}
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <Box w={{ base: '100%', md: '250px' }} p={4} borderWidth="1px" borderRadius="md">
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">
              Quiz Navigation
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={currentQuestionIndex === index ? 'solid' : 'outline'}
                  onClick={() => handleGoToQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </Grid>
          </VStack>
        </Box>

        <Box mt={{ base: 8, md: 0 }} flex="1">
          <Heading as="h2" size="lg" mb={4}>
            Question {currentQuestionIndex + 1}
          </Heading>
          <Text mb={8}>{currentQuestion.text}</Text>
          <Stack spacing={4}>
            {currentQuestion.options.map((option, index) => (
              <FormControl key={index}>
                <Radio
                  id={`${currentQuestion.id}-${index}`}
                  name={`${currentQuestion.id}`}
                  isChecked={selectedOptions[currentQuestion.id] === index}
                  onChange={() => handleOptionSelect(currentQuestion.id, index)}
                >
                  {option}
                </Radio>
              </FormControl>
            ))}
          </Stack>
        </Box>
      </Flex>
      <Stack direction="row" spacing={4} mt={8} justifyContent="flex-end">
        <Button
          onClick={handlePreviousQuestion}
          isDisabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        {currentQuestionIndex < questions.length - 1 && (
          <Button onClick={handleNextQuestion}>Next</Button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <Button onClick={handleSubmitQuiz}>Submit</Button>
        )}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submit Quiz
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to Submit the Quiz?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={confirmSubmit} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Stack>
    </Box>
  );
};

export default QuizPage;
