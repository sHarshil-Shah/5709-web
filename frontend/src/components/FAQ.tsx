import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from '@chakra-ui/react';

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
        // Add more FAQ items as needed
    ];

    return (
        <Box p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>Frequently Asked Questions</Text>
            <Accordion allowMultiple>
                {faqData.map((item, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {item.question}
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
