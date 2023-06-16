import React from 'react';
import { Grid, Flex, Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, useBreakpointValue } from '@chakra-ui/react';
import ContactCard from './indContactCard';
import ModalComponent from './sucessMailSentModal';
import { useState } from 'react';
import harsilImg from '../../assests/images/harshil.png';
import viralImg from '../../assests/images/viral.png';
import rajImg from '../../assests/images/raj.png';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpointValue = useBreakpointValue({ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Box p={4}>
        <Flex justifyContent="center">
          <Grid
            templateColumns={breakpointValue}
            gap={30}
            justifyContent="center"
            mb={2}
          >
            <ContactCard
              imgLocation={harsilImg}
              name='Harshil Shah'
              profileUrl='https://harshilshah.tech/#/'
            />
            <ContactCard
              imgLocation={rajImg}
              name='Raj Soni'
              profileUrl='https://www.linkedin.com/in/soni-raj/'
            />
            <ContactCard
              imgLocation={viralImg}
              name='Viral Siddhapura'
              profileUrl='https://www.linkedin.com/in/viral-siddhapura-a5042714a'
            />
            <ContactCard
              imgLocation={viralImg}
              name='Viral Siddhapura'
              profileUrl='https://www.linkedin.com/in/viral-siddhapura-a5042714a'
            />
            <ContactCard
              imgLocation={viralImg}
              name='Viral Siddhapura'
              profileUrl='https://www.linkedin.com/in/viral-siddhapura-a5042714a'
            />
          </Grid>
        </Flex>
      </Box>

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
        <Button colorScheme="blue" size="lg" onClick={handleOpen}>
          Send Message
        </Button>
      </Box>
      <ModalComponent isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Contact;
