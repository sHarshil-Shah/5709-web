import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Quiz } from '../model/quiz.model';
import StartQuizAlert from './StartQuizAlert';
import QuizDetailsModal from './QuizDetailsModal';

interface QuizTableRowProps {
    quiz: Quiz;
    onEditQuiz: (quizId: string) => void;
    onDeleteQuiz: (quizId: string) => void;
    isProfessor: boolean;
}

const QuizTableRow: React.FC<QuizTableRowProps> = ({ quiz, onEditQuiz, onDeleteQuiz, isProfessor }) => {
    const [isStartQuizAlertOpen, setIsStartQuizAlertOpen] = React.useState(false);
    const [isQuizDetailsModalOpen, setIsQuizDetailsModalOpen] = React.useState(false);

    const handleStartQuiz = () => {
        setIsStartQuizAlertOpen(false);
        // Logic to handle quiz start here...
    };

    const handleQuizDetails = () => {
        if (isProfessor) {
            setIsQuizDetailsModalOpen(true);
        } else {
            setIsStartQuizAlertOpen(true);
        }
    };

    const editQuiz = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quiz._id) {
            onEditQuiz(quiz._id);
        }
    };

    const deleteQuiz = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quiz._id) {
            onDeleteQuiz(quiz._id);
        }
    };


    return (
        <Box p={4} borderRadius="md" borderWidth="1px" mb={4} cursor="pointer" onClick={handleQuizDetails}>
            <Flex justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                    {quiz.title}
                </Text>
                <Text>{quiz.description}</Text>
                <Text>
                    Start Date: {quiz.startDate}</Text>
                <Text>End Date: {quiz.dueDate}
                </Text>
                {isProfessor && (
                    <Flex justify="space-between" align="center">
                        <Button colorScheme="teal" variant="outline" mr={2} onClick={editQuiz}>
                            Edit
                        </Button>
                        <Button colorScheme="red" variant="outline" onClick={deleteQuiz}>
                            Delete
                        </Button>
                    </Flex>
                )}
            </Flex>

            {isStartQuizAlertOpen && (
                <StartQuizAlert isOpen={isStartQuizAlertOpen} onClose={() => setIsStartQuizAlertOpen(false)} onStartQuiz={handleStartQuiz} />
            )}

            {isQuizDetailsModalOpen && <QuizDetailsModal isOpen={isQuizDetailsModalOpen} onClose={() => setIsQuizDetailsModalOpen(false)} quiz={quiz} />}
        </Box>
    );
};

export default QuizTableRow;
