import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Switch,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  Stack,
  useBreakpointValue,
  Select,
} from '@chakra-ui/react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface CreateQuizProps {
  isOpenQuizModel: boolean;
  onCloseQuizModel: () => void;
}

const CreateQuiz: React.FC<CreateQuizProps> = ({ isOpenQuizModel, onCloseQuizModel }) => {
  const [quizTitle, setQuizTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [visibleDate, setVisibleDate] = useState<string>('');
  const [timeLimit, setTimeLimit] = useState<string>('');
  const [numOfQuestions, setNumOfQuestions] = useState<string>('');
  const [randomQuestions, setRandomQuestions] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [newOptions, setNewOptions] = useState<string[]>(['', '']);
  const [newQuestion, setNewQuestion] = useState<string>('');
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [newCorrectAnswer, setNewCorrectAnswer] = useState<string>('');

  const handleAddQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Date.now(),
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleAddOption = () => {
    const updatedOptions = [...newOptions, ''];
    setNewOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = newOptions.filter((_, i) => i !== index);
    setNewOptions(updatedOptions);
  };

  const handleDeleteQuestion = (questionId: number) => {
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(updatedQuestions);
  };

  const handleCancel = () => {
    onCloseQuizModel();
  };

  const handleSave = () => {
    onCloseQuizModel();
  };

  return (
    <Modal isOpen={isOpenQuizModel} onClose={onCloseQuizModel} size='full'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Quiz</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <FormControl isRequired>
              <FormLabel>Quiz Title</FormLabel>
              <Input
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <HStack spacing={4} mt={4}>
              <FormControl isRequired>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Due Date</FormLabel>
                <Input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Visible Date</FormLabel>
                <Input
                  type="date"
                  value={visibleDate}
                  onChange={(e) => setVisibleDate(e.target.value)}
                />
              </FormControl>
            </HStack>

            <HStack spacing={4} mt={4}>
              <FormControl isRequired>
                <FormLabel>Time Limit (minutes)</FormLabel>
                <Input
                  type="number"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Number of Questions</FormLabel>
                <Input
                  type="number"
                  value={numOfQuestions}
                  onChange={(e) => setNumOfQuestions(e.target.value)}
                />
              </FormControl>
            </HStack>

            <FormControl display="flex" alignItems="center" mt={4}>
              <FormLabel htmlFor="randomQuestions" mb={0}>
                Random Questions
              </FormLabel>
              <Switch
                id="randomQuestions"
                isChecked={randomQuestions}
                onChange={() => setRandomQuestions(!randomQuestions)}
                ml={2}
              />
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
                      Remove Option
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
                  Correct Answer: {question.options[question.correctAnswer]}
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
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" onClick={handleCancel}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleSave} ml={2}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateQuiz;
