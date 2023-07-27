// Author: Raj Soni
import React from 'react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from '@chakra-ui/react';

interface StartQuizAlertProps {
    isOpen: boolean;
    onClose: () => void;
    onStartQuiz: () => void;
}


const StartQuizAlert: React.FC<StartQuizAlertProps> = ({ isOpen, onClose, onStartQuiz }) => {
    const cancelRef = React.useRef<HTMLButtonElement | null>(null);
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Start Quiz
                </AlertDialogHeader>
                <AlertDialogBody>Are you sure you want to start the quiz?</AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme="teal" onClick={onStartQuiz} m={3}>
                        Start
                    </Button>
                    <Button ref={() => null} onClick={onClose}>
                        Cancel
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default StartQuizAlert;
