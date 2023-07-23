import React from 'react';
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Stack,
} from '@chakra-ui/react';
import { Quiz, QuizQuestion } from '../model/quiz.model';

interface QuizDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    quiz: Quiz | null;
}

const QuizDetailsModal: React.FC<QuizDetailsModalProps> = ({ isOpen, onClose, quiz }) => {
    if (!quiz) return null;

    const questions: QuizQuestion[] = quiz.questions ?? [];

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{quiz.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{quiz.description}</Text>
                    <Text>
                        Start Date: {quiz.startDate} - End Date: {quiz.dueDate}
                    </Text>
                    <Text>Questions:</Text>
                    <Stack spacing={2}>
                        {questions.map((question, index) => (
                            <Box key={index} borderWidth="1px" p={4} borderRadius="md">
                                <Text fontWeight="bold">Question {index + 1}: {question.question}</Text>
                                <Text>Options:</Text>
                                <Stack spacing={1}>
                                    {question.options.map((option, optionIndex) => (
                                        <Text key={optionIndex}>{optionIndex + 1}. {option}</Text>
                                    ))}
                                </Stack>
                                <Text fontWeight="bold">Correct Answer: {question.options[question.correctAnswer]}</Text>
                            </Box>
                        ))}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default QuizDetailsModal;
