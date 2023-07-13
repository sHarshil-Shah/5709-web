import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
// import {  Tooltip, Avatar } from '@chakra-ui/react';

import { Link, useNavigate, useLocation } from 'react-router-dom';

const TitleBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname.startsWith('/admin')){
      navigate('/admin/contact');
    } else {
      navigate('/contact');
    }
  };

  const handleFAQClick = () => {
    if (location.pathname.startsWith('/admin')){
      navigate('/admin/faq');
    } else {
      navigate('/faq');
    }
  };

  const handleClassMateClick = () => {
    if (location.pathname.startsWith('/admin')){
      navigate('/admin');
    } else {
      navigate('/');
    }
  }

  const isAdminDashboard = location.pathname.startsWith('/admin'); // Check if the current path is '/admin'
  const contactLink = isAdminDashboard ? '/admin/contact' : '/contact';
  const faqLink = isAdminDashboard ? '/admin/faq' : '/faq';

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
            {isAdminDashboard ? 'Admin Dashboard' : 'Class Mate'}
          </Text>
        </Box>
        <Flex alignItems="center">
          <ChakraLink
            as={Link}
            to={contactLink}
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
            to={faqLink}
            onClick={handleFAQClick}
            mr={4}
            fontSize={{ base: 16, md: 20 }} // Adjusted font size for different breakpoints
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            FAQ
          </ChakraLink>
          {/* <Tooltip
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
          </Tooltip> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TitleBar;