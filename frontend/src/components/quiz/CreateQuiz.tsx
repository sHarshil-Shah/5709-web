import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Switch, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Text, Stack, useBreakpointValue, Select, } from '@chakra-ui/react';
import { QuizQuestion } from '../model/quiz.model';

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

  const [filledQuestions, setFilledQuestions] = useState({
    id: Date.now().toString(),
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
  } as QuizQuestion);

  interface ValidationErrors {
    quizTitle: boolean;
    startDate: boolean;
    dueDate: boolean;
    visibleDate: boolean;
    timeLimit: boolean;
    numOfQuestions: boolean;
  }

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    quizTitle: false,
    startDate: false,
    dueDate: false,
    visibleDate: false,
    timeLimit: false,
    numOfQuestions: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === 'randomQuestions') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: !formData.randomQuestions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleAddQuestion = () => {
    setFormData((prevData) => ({
      ...prevData,
      questions: [...prevData.questions, filledQuestions],
    }));
    const newQuestion: QuizQuestion = {
      id: Date.now().toString(),
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setFilledQuestions(newQuestion);
  };

  const handleAddOption = () => {
    setFilledQuestions((prevData) => ({
      ...prevData,
      options: [...filledQuestions.options, '']
    }));
  };
  const handleRemoveOption = (optionIndex: number) => {
    filledQuestions.options.splice(optionIndex, 1);
    setFilledQuestions((prevData) => {
      return { ...prevData, options: filledQuestions.options };
    });
  };


  const handleDeleteQuestion = (questionId: string) => {
    setFormData((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter((question) => question.id !== questionId),
    }));
  };

  const handleCancel = () => {
    onCloseQuizModel();
  };

  const handleSave = () => {
    const missingFields: (keyof ValidationErrors)[] = [];
    if (!formData.quizTitle) {
      missingFields.push('quizTitle');
    }
    if (!formData.startDate) {
      missingFields.push('startDate');
    }
    if (!formData.dueDate) {
      missingFields.push('dueDate');
    }
    if (!formData.visibleDate) {
      missingFields.push('visibleDate');
    }
    if (!formData.timeLimit) {
      missingFields.push('timeLimit');
    }
    if (!formData.numOfQuestions) {
      missingFields.push('numOfQuestions');
    }

    if (missingFields.length > 0) {
      const updatedValidationErrors: ValidationErrors = { ...validationErrors };
      missingFields.forEach((field) => {
        updatedValidationErrors[field] = true;
      });
      setValidationErrors(updatedValidationErrors as ValidationErrors); // Add type assertion here
      return;
    }
    onCloseQuizModel();
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Modal isOpen={isOpenQuizModel} onClose={onCloseQuizModel} size="xl" scrollBehavior="inside">
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
                  isInvalid={!formData.quizTitle && validationErrors.quizTitle}
                />
                {validationErrors.quizTitle && !formData.quizTitle && (
                  <Text color="red" fontSize="sm">Quiz Title is required.</Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Stack spacing={isMobile ? 4 : 0} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    isInvalid={!formData.startDate && validationErrors.startDate}
                  />
                  {validationErrors.startDate && !formData.startDate && (
                    <Text color="red" fontSize="sm">Start Date is required.</Text>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Due Date</FormLabel>
                  <Input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    isInvalid={!formData.dueDate && validationErrors.dueDate}
                  />
                  {validationErrors.dueDate && !formData.dueDate && (
                    <Text color="red" fontSize="sm">Due Date is required.</Text>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Visible Date</FormLabel>
                  <Input
                    type="date"
                    name="visibleDate"
                    value={formData.visibleDate}
                    onChange={handleInputChange}
                    isInvalid={!formData.visibleDate && validationErrors.visibleDate}
                  />
                  {validationErrors.visibleDate && !formData.visibleDate && (
                    <Text color="red" fontSize="sm">Visible Date is required.</Text>
                  )}
                </FormControl>
              </Stack>

              <Stack spacing={isMobile ? 4 : 0} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Time Limit (minutes)</FormLabel>
                  <Input
                    type="number"
                    name="timeLimit"
                    value={formData.timeLimit}
                    onChange={handleInputChange}
                    isInvalid={!formData.timeLimit && validationErrors.timeLimit}
                  />
                  {validationErrors.timeLimit && !formData.timeLimit && (
                    <Text color="red" fontSize="sm">Time Limit is required.</Text>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Number of Questions</FormLabel>
                  <Input
                    type="number"
                    name="numOfQuestions"
                    value={formData.numOfQuestions}
                    onChange={handleInputChange}
                    isInvalid={!formData.numOfQuestions && validationErrors.numOfQuestions}
                  />
                  {validationErrors.numOfQuestions && !formData.numOfQuestions && (
                    <Text color="red" fontSize="sm">Number of Questions is required.</Text>
                  )}
                </FormControl>
              </Stack>

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
                  value={filledQuestions.question}
                  onChange={(e) => {
                    setFilledQuestions((prevData) => {
                      return { ...prevData, question: e.target.value };
                    });
                  }}
                  mb={4}
                />
              </FormControl>

              {filledQuestions.options.map((option, index) => (
                <Box key={index}>
                  <FormControl>
                    <FormLabel>Option {index + 1}</FormLabel>
                    <Stack direction={isMobile ? 'column' : 'row'}>
                      <Input
                        placeholder="Enter an option"
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = filledQuestions.options;
                          updatedOptions[index] = e.target.value;
                          setFilledQuestions((prevData) => {
                            return { ...prevData, options: updatedOptions };
                          });
                        }}
                      />
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleRemoveOption(index)}
                      >Remove</Button>
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
                  value={filledQuestions.correctAnswer || ''}
                  onChange={(e) => {
                    const correctAnswer = Number(e.target.value);
                    setFilledQuestions((prevData) => {
                      return { ...prevData, correctAnswer: correctAnswer };
                    });
                  }}
                >
                  {filledQuestions.options.map((option, index) => (
                    <option key={index} value={index}>
                      Option {index + 1}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <Button colorScheme="teal" onClick={handleAddQuestion} mt={4} mb={4}>
                Add Question
              </Button>

              {formData.questions.length > 0 &&
                formData.questions.map((question, index) => (
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
