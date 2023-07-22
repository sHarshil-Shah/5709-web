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
  const [formData, setFormData] = useState({
    quizTitle: '',
    description: '',
    startDate: '',
    dueDate: '',
    visibleDate: '',
    timeLimit: '',
    numOfQuestions: '',
    randomQuestions: false,
    questions: [] as QuizQuestion[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Date.now(),
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setFormData((prevData) => ({
      ...prevData,
      questions: [...prevData.questions, newQuestion],
    }));
  };

  const handleAddOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question, index) =>
        index === prevData.questions.length - 1
          ? { ...question, options: [...question.options, ''] }
          : question
      ),
    }));
  };

  const handleRemoveOption = (questionIndex: number, optionIndex: number) => {
    setFormData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question, index) =>
        index === questionIndex
          ? { ...question, options: question.options.filter((_, i) => i !== optionIndex) }
          : question
      ),
    }));
  };

  const handleDeleteQuestion = (questionId: number) => {
    setFormData((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter((question) => question.id !== questionId),
    }));
  };

  const handleCancel = () => {
    onCloseQuizModel();
  };

  const handleSave = () => {
    onCloseQuizModel();
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Modal isOpen={isOpenQuizModel} onClose={onCloseQuizModel} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Quiz</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <form>
              <FormControl isRequired>
                <FormLabel>Quiz Title</FormLabel>
                <Input
                  name="quizTitle"
                  value={formData.quizTitle}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FormControl>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Due Date</FormLabel>
                  <Input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Visible Date</FormLabel>
                  <Input
                    type="date"
                    name="visibleDate"
                    value={formData.visibleDate}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Time Limit (minutes)</FormLabel>
                  <Input
                    type="number"
                    name="timeLimit"
                    value={formData.timeLimit}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Number of Questions</FormLabel>
                  <Input
                    type="number"
                    name="numOfQuestions"
                    value={formData.numOfQuestions}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </HStack>

              <FormControl display="flex" alignItems="center" mt={4}>
                <FormLabel htmlFor="randomQuestions" mb={0}>
                  Random Questions
                </FormLabel>
                <Switch
                  id="randomQuestions"
                  name="randomQuestions"
                  isChecked={formData.randomQuestions}
                  onChange={handleInputChange}
                  ml={2}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Question</FormLabel>
                <Input
                  placeholder="Enter a question"
                  value={formData.questions[formData.questions.length - 1]?.question || ''}
                  onChange={(e) => {
                    const updatedQuestions = [...formData.questions];
                    updatedQuestions[formData.questions.length - 1].question = e.target.value;
                    setFormData((prevData) => ({ ...prevData, questions: updatedQuestions }));
                  }}
                />
              </FormControl>

              {formData.questions[formData.questions.length - 1]?.options.map((option, index) => (
                <Box key={index}>
                  <FormControl>
                    <FormLabel>Option {index + 1}</FormLabel>
                    <Stack direction={isMobile ? 'column' : 'row'}>
                      <Input
                        placeholder="Enter an option"
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...formData.questions[formData.questions.length - 1]?.options];
                          updatedOptions[index] = e.target.value;
                          setFormData((prevData) => {
                            const updatedQuestions = [...prevData.questions];
                            updatedQuestions[formData.questions.length - 1].options = updatedOptions;
                            return { ...prevData, questions: updatedQuestions };
                          });
                        }}
                      />
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleRemoveOption(formData.questions.length - 1, index)}
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
                  name="newCorrectAnswer"
                  value={formData.questions[formData.questions.length - 1]?.correctAnswer || ''}
                  onChange={(e) => {
                    const correctAnswer = Number(e.target.value);
                    setFormData((prevData) => {
                      const updatedQuestions = [...prevData.questions];
                      updatedQuestions[formData.questions.length - 1].correctAnswer = correctAnswer;
                      return { ...prevData, questions: updatedQuestions };
                    });
                  }}
                >
                  {formData.questions[formData.questions.length - 1]?.options.map((option, index) => (
                    <option key={index} value={index}>
                      Option {index + 1}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <Button colorScheme="teal" onClick={handleAddQuestion}>
                Add Question
              </Button>

              {formData.questions.map((question, index) => (
                <Box key={question.id} borderWidth="1px" p={4} borderRadius="md">
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
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    Delete Question
                  </Button>
                </Box>
              ))}
            </form>
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
