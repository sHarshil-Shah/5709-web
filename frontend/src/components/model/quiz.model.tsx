export interface QuizQuestion {
    quizID?: string; // TO-DO
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface Quiz {
    id: string;
    title?: string;
    description?: string;
    startDate?: string;
    dueDate?: string;
    visibleDate?: string;
    timeLimit?: string;
    numOfQuestions?: string;
    randomQuestions?: boolean;
    questions?: QuizQuestion[];
    courseID?: string;  // TO-DO
    userID?: string;  // TO-DO
}