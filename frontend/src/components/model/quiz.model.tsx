export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface Quiz {
    _id?: string;
    title?: string;
    description?: string;
    startDate?: string;
    dueDate?: string;
    visibleDate?: string;
    timeLimit?: string;
    numOfQuestions?: string;
    randomQuestions?: boolean;
    questions?: QuizQuestion[];
    courseID?: string;
}