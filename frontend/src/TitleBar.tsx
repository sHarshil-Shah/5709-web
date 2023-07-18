import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const TitleBar = () => {
  const navigate = useNavigate();

  const [menuOptions, setMenuOptions] = useState([
    { title: 'Login', route: '/login' }
  ]);

  const handleClassMateClick = () => {
    navigate('/');
  }
  const location = useLocation();

  useEffect(() => {
    // Perform any logic to update menu options based on the current state
    // Example: Update menu options based on the user's role or authentication status
    console.log(location);
    if (location.pathname === '/login') {
      setMenuOptions([
        { title: 'Login', route: '/login' }

        // Add more menu options as needed
      ]);
    } else {
      setMenuOptions([
        { title: 'Courses', route: '/' },
        { title: 'Logout', route: '/Logout' },
        // Add more menu options as needed
      ]);
    }
  }, [location]);

  return (
    <Box
      as="header"
      pos="sticky"
      top={0}
      zIndex={100}
      shadow="md"
      mb={2}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="#E27087"
        shadow="lg"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        px={4}
        py={2}
        flexWrap="wrap"
      >
        <Box
          onClick={handleClassMateClick}
          cursor="pointer"
        >
          <Text
            fontSize={{ base: 24, md: 30 }}
            fontWeight="bold"
            margin={5}
            flex={{ base: '100%', md: 'auto' }}
          >
            Class Mate
          </Text>
        </Box>
        <Flex alignItems="center">
          {menuOptions.map((option) => (

            <ChakraLink
              as={Link}
              to={option.route}
              mr={4}
              fontSize={{ base: 16, md: 20 }} 
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
            >
              {option.title}
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TitleBar;