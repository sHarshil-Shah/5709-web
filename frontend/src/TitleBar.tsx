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

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: 'linear-gradient(to right, #DBE6F6, #C5796D)'
        }}
      >
        <Text
          fontSize={30}
          fontWeight="bold"
          margin={10}
          flex={{ base: '100%', md: 'auto' }}
          mb={{ base: 4, md: 0 }}
        >
          Class Mate
        </Text>
        <Flex alignItems="center">
          <ChakraLink
            as={Link}
            to="/contact"
            onClick={handleContactClick}
            mr={4}
            fontSize={20}
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
            fontSize={20}
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            FAQ
          </ChakraLink>
          <Tooltip
            label="Login"
            background="grey"
            color="white"
            borderRadius={2}
            p={5}
            placement="top"
          >
            <Avatar
              mr={10}
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
