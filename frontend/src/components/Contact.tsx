import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box maxW="500px" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Contact Us
      </Heading>
      <Text mb={4}>
        We would love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </Text>
      <FormControl id="name" mb={4}>
        <FormLabel>Your Name</FormLabel>
        <Input type="text" placeholder="Enter your name" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" placeholder="Enter your email address" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter your message" />
      </FormControl>
      <Button colorScheme="blue" size="lg">
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;
