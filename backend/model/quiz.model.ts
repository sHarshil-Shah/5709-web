export interface QuizQuestion {
  quizID?: string;
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
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