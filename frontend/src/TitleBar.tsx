import { Box, Flex, Text, Tooltip, Avatar, Link as ChakraLink } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const TitleBar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleFAQClick = () => {
    navigate('/faq');
  };

  const handleClassMateClick = () => {
    navigate('/');
  }

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bgGradient="linear(to-r, #DBE6F6, #C5796D)"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        px={4} 
        py={2} 
      >
        <Text
          onClick={handleClassMateClick}
          fontSize={{ base: 24, md: 30 }} 
          fontWeight="bold"
          margin={5}
          flex={{ base: '100%', md: 'auto' }}
<<<<<<< HEAD
          mb={{ base: 2, md: 0 }} 
=======
          _hover={{ textDecoration: 'pointer' }}
>>>>>>> b8f6285353b2476c977020b6a8318dee1efb9b1c
        >
          Class Mate
        </Text>
        <Flex alignItems="center">
          <ChakraLink
            as={Link}
            to="/contact"
            onClick={handleContactClick}
            mr={4}
            fontSize={{ base: 16, md: 20 }} // Adjusted font size for different breakpoints
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            Contact
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/faq"
            onClick={handleFAQClick}
            mr={4}
            fontSize={{ base: 16, md: 20 }} // Adjusted font size for different breakpoints
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            FAQ
          </ChakraLink>
          <Tooltip
            label="Login"
            bg="gray"
            color="white"
            borderRadius={2}
            p={2} // Adjusted padding
            placement="top"
          >
            <Avatar
              size="sm" // Adjusted avatar size for responsiveness
              mr={2} // Adjusted margin right
              src="https://img.icons8.com/cotton/32/gender-neutral-user--v1.png"
              _hover={{ cursor: 'pointer' }}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TitleBar;