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
        bg={"#E27087"}
        shadow={'lg'}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        px={4} // Added padding on the x-axis
        py={2} // Added padding on the y-axis
      >
        <Text
          onClick={handleClassMateClick}
          fontSize={{ base: 24, md: 30 }} // Adjusted font size for different breakpoints
          fontWeight="bold"
          margin={5}
          flex={{ base: '100%', md: 'auto' }}
          _hover={{ cursor: 'pointer' }}
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
            Contact us
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