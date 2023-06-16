import { Grid, Flex, Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import ContactCard from './indContactCard';

const Contact = () => {

  return (<>
    <Box p={4}>
      <Flex justifyContent="center">

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          justifyContent="center"
          mb={4}
        >
          <Box p={4}>
            <ContactCard
              imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              title='Living Room Sofa'
              description='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
              price='$450'
            />
          </Box>
          <Box p={4}>
            <ContactCard
              imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              title='Living Room Sofa'
              description='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
              price='$450'
            />          </Box>
          <Box p={4}>
            <ContactCard
              imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              title='Living Room Sofa'
              description='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
              price='$450'
            />          </Box>
        </Grid>
      </Flex>
      <Flex justifyContent="center">
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Box p={4}>
            <ContactCard
              imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              title='Living Room Sofa'
              description='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
              price='$450'
            />          </Box>
          <Box p={4}>
            <ContactCard
              imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              title='Living Room Sofa'
              description='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
              price='$450'
            />          </Box>
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
      <Button colorScheme="blue" size="lg">
        Send Message
      </Button>
    </Box>

  </>
  );
};

export default Contact;
