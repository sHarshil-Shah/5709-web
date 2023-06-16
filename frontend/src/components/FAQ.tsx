import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Heading } from '@chakra-ui/react';

const FAQ = () => {
    const faqData = [
        {
            question: 'How do I create an account?',
            answer: 'To create an account, click on the "Sign Up" button and follow the instructions to provide your details and create a new account.'
        },
        {
            question: 'Can I reset my password?',
            answer: 'Yes, you can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions to reset your password.'
        },
        {
            question: 'Is the login page for students and instructors different?',
            answer: 'No, it\'s the same. One page redirects to the appropriate dashboard.'
        },
        {
            question: 'How can I enroll in a course?',
            answer: 'To enroll in a course, go to the "Courses" page and browse through the available courses. Click on the "Enroll" button for the desired course and follow the instructions.'
        },
        {
            question: 'How can I submit an assignment?',
            answer: 'To submit an assignment, go to the "Assignments" page and select the assignment you want to submit. Click on the "Submit" button and follow the instructions to upload your assignment.'
        },
        {
            question: 'How can I view my grades?',
            answer: 'You can view your grades by going to the "Grades" page. It will display your grades for each course and assignment.'
        },
        {
            question: 'Can I communicate with my professors?',
            answer: 'Yes, you can communicate with your professors through the "Messages" feature. Go to the "Messages" page and select the professor you want to communicate with.'
        },
    ];

    return (
        <Box p={8}>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Frequently Asked Questions
            </Heading>
            <Accordion allowMultiple>
                {faqData.map((item, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'gray.200' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold">
                                    {`${index + 1}. ${item.question}`}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {item.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default FAQ;
