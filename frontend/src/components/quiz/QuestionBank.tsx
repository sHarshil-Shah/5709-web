import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionBankProps {
  isQuestionBankModel: boolean;
  onCloseQuestionBankModel: () => void;
}

const QuestionBankPage: React.FC<QuestionBankProps> = ({ isQuestionBankModel, onCloseQuestionBankModel }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [newOptions, setNewOptions] = useState<string[]>(['', '', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState<string>('');
  const [selectedQuiz, setSelectedQuiz] = useState<string>('');

  const handleAddQuestion = () => {
    const updatedQuestions: QuizQuestion[] = [
      ...questions,
      {
        question: newQuestion,
        options: newOptions,
        correctAnswer: newCorrectAnswer,
      },
    ];
    setQuestions(updatedQuestions);
    setNewQuestion('');
    setNewOptions(['', '', '', '']);
    setNewCorrectAnswer('');
  };

  const handleAddOption = () => {
    const updatedOptions = [...newOptions, ''];
    setNewOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = newOptions.filter((_, i) => i !== index);
    setNewOptions(updatedOptions);
  };

  const handleSaveQuestions = () => {
    // Logic to save the questions
    console.log(questions);
  };

  const handleDeleteQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Modal isOpen={isQuestionBankModel} onClose={onCloseQuestionBankModel} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Question Bank</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Quiz</FormLabel>
              <Select
                placeholder="Select a quiz"
                value={selectedQuiz}
                onChange={(e) => setSelectedQuiz(e.target.value)}
              >
                <option value="quiz1">Quiz 1</option>
                <option value="quiz2">Quiz 2</option>
                <option value="quiz3">Quiz 3</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Question</FormLabel>
              <Input
                placeholder="Enter a question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </FormControl>

            {newOptions.map((option, index) => (
              <Box key={index}>
                <FormControl>
                  <FormLabel>Option {index + 1}</FormLabel>
                  <Stack direction={isMobile ? 'column' : 'row'}>
                    <Input
                      placeholder="Enter an option"
                      value={option}
                      onChange={(e) => {
                        const updatedOptions = [...newOptions];
                        updatedOptions[index] = e.target.value;
                        setNewOptions(updatedOptions);
                      }}
                    />
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleRemoveOption(index)}
                    >
                      Remove
                    </Button>
                  </Stack>
                </FormControl>
              </Box>
            ))}

            <Button size="sm" onClick={handleAddOption}>
              Add Option
            </Button>

            <FormControl>
              <FormLabel>Correct Answer</FormLabel>
              <Select
                placeholder="Select a correct answer"
                value={newCorrectAnswer}
                onChange={(e) => setNewCorrectAnswer(e.target.value)}
              >
                {newOptions.map((option, index) => (
                  <option key={index} value={index}>
                    Option {index + 1}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Button colorScheme="teal" onClick={handleAddQuestion}>
              Add Question
            </Button>

            {questions.map((question, index) => (
              <Box key={index} borderWidth="1px" p={4} borderRadius="md">
                <Text>{question.question}</Text>
                {question.options.map((option, optionIndex) => (
                  <Text key={optionIndex} ml={4}>
                    {optionIndex + 1}. {option}
                  </Text>
                ))}
                <Text ml={4} fontWeight="bold">
                  Correct Answer: {question.options[Number(question.correctAnswer)]}
                </Text>
                <Button
                  mt={2}
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDeleteQuestion(index)}
                >
                  Delete Question
                </Button>
              </Box>
            ))}

            <Button colorScheme="blue" onClick={handleSaveQuestions}>
              <Link to={`/quiz-list`}>Save Questions</Link>
            </Button>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" onClick={onCloseQuestionBankModel}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default QuestionBankPage;
