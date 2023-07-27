// Author: Raj Soni
import React from 'react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, ButtonGroup } from '@chakra-ui/react';

interface StartQuizAlertProps {
    isOpen: boolean;
    onClose: () => void;
    onStartQuiz: () => void;
    dueDate: string;
}

const StartQuizAlert: React.FC<StartQuizAlertProps> = ({ isOpen, onClose, onStartQuiz, dueDate }) => {
    const cancelRef = React.useRef<HTMLButtonElement | null>(null);

    const dueDateObject = new Date(dueDate);

    const hasQuizStarted = React.useMemo(() => {
        const currentTime = new Date();
        return currentTime >= dueDateObject;
    }, [dueDateObject]);

    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Start Quiz
                </AlertDialogHeader>
                <AlertDialogBody>
                    {hasQuizStarted
                        ? "The quiz has already started or the due date has passed. You can no longer start the quiz."
                        : "Are you sure you want to start the quiz?"}
                </AlertDialogBody>
                <AlertDialogFooter>
                    {hasQuizStarted ?
                        (<Button ref={cancelRef} onClick={onClose}>
                            Ok
                        </Button>)
                        :
                        (<ButtonGroup>
                            <Button
                                colorScheme="teal"
                                onClick={onStartQuiz}
                            >
                                Start
                            </Button>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                        </ButtonGroup>)}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default StartQuizAlert;
